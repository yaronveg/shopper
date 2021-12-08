# PURPOSES & NEEDS

## COMPONENTS and descriptive purpose:

- App -
- Cart - display products in cart, change amounts, display cart specific data like "total".
- CartProduct - unique styling for singular product type in cart.
- Counter - display and change product amounts in cart.
- Header - Navigate the store, show/hide cart.
- Home - general browse for products, fitler products to display,
- Product - singular styling for product in Products page.
- ProductDetails - single product page with details, change product's amount in cart.
- ProductsHeader - filter by category, sort, filter by price.
- Products - display filtered products

## STATES:

- products (full list) - Home,
- categories - Header,
- productsInCategory (prev. filtered) - Home,
- productsInRange (prev. productsRanged) - Home,
- productsFiltered (new. by price and category) - Products
- priceRange - Home, ProductsHeader,
- customerRange - Home, ProductsHeader,
- cart - Header, Counter, Cart
- cartShow - Header, Cart
- category - ProductsHeader

## FUNCTIONS:

- handleCatChange (filter products, change slider ranges) - Header,
- filterProducts (conditional setProductsInCategory) -
- handleRangeChange (setCustomerRange) -
- getting products from the DB
-

## COMPONENTS and access needs:

- App - -
- Cart - cart, cartShow
- CartProduct
- Counter - cart
- Header - cart, cartShow
- Home - **filterProducts**, **handleCatChange**, **handleRangeChange**, productsInCategory, productsInRange, **productsFiltered**,
- Product - -
- ProductDetails - -
- ProductsHeader - handleCatChange, handleRangeChange, categories
- Products - productsFiltered

## Composition

- App
  - Cart
    - CartProduct
      - Counter
  - Header
  - Home
    - ProductsHeader
      - Slider
    - Products
      - Product
        - Counter
  - ProductDetails
    - Counter
