import express from "express";
import fetch from "node-fetch";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(`client/build`));
// refer to a scheme and define.
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: { rate: Number, count: Number },
});
// add functionality to the schema
productSchema.methods.whatIsIt = function whatIsIt() {
  const msg = this.title
    ? "This is a " + this.title
    : "This item does not have a title.";
  console.log(msg);
};
// compile schema into a Model.
const Product = mongoose.model("Product", productSchema);

// a "catchall" handler for any request that doesn't match the C.R.U.D. - will send back React's Index.html file.
app.get(!`/products${"*"}` && "*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

////////////// C.R.U.D - CREATE, READ, UPDATE, DELETE //////////////

// READ //
app.get("/products", async (req, res) => {
  const term = req.body.term;
  let products = await Product.find();
  if (req.query.term) {
    const { term } = req.query;
    products = products.filter(
      (product) =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
    );
  }
  res.send(products);
});

// READ product //
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await Product.findById(id));
});

// CREATE //
app.post("/products", async (req, res) => {
  const { title, price, description, category, image, rating } = req.body;
  const newProduct = {
    title,
    price,
    description,
    category,
    image,
    rating,
  };
  const newProductDocument = new Product(newProduct).save();
  res.send(newProduct);
});

// UPDATE //
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const updated = await Product.findByIdAndUpdate(id, body);
  res.send(updated);
});

// DELETE //
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await Product.findByIdAndDelete(id);
  res.send(deleted);
});

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// mongoose.connect("mongodb://localhost:27017/test", async (err) => {
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  async (err) => {
    err ? console.log(err) : app.listen(process.env.PORT || 8000);
    const dbProducts = await Product.find();
    if (!dbProducts.length) {
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      const newIds = products.map((product) => ({ ...product, id: undefined }));
      Product.insertMany(newIds);
    }
  }
);
