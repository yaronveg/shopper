import { useState } from "react";
import "./Blink.css";

function Blink() {
  const [doggoShow, doggoShowSet] = useState(true);
  return (
    <div className="blink-container">
      <button
        onClick={(e) => {
          doggoShowSet(!doggoShow);
        }}
      >
        Show / Hide Doggo
      </button>
      {doggoShow ? <h1>Doggo</h1> : <h1> </h1>}
    </div>
  );
}

export default Blink;
