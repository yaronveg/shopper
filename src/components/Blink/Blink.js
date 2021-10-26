import { useState } from "react";
import "./Blink.css";

function Blink() {
  const [doggoShow, doggoShowSet] = useState(true);
  return (
    <div className="blink-container">
      <button
        onClick={() => {
          doggoShowSet(!doggoShow);
        }}
      >
        Show / Hide Doggo
      </button>
      <h1 style={{ visibility: doggoShow ? "visible" : "hidden" }}>Doggo</h1>
    </div>
  );
}

export default Blink;
