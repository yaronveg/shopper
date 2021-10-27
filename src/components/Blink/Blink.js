import { faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Blink.css";

function Blink() {
  const [doggoShow, doggoShowSet] = useState(true);
  return (
    <div className="blink-container">
      <button onClick={() => doggoShowSet(!doggoShow)}>
        Show / Hide Doggo
      </button>
      <div
        className="doggo"
        style={{ visibility: doggoShow ? "visible" : "hidden" }}
      >
        <h1>Doggo</h1>
        <FontAwesomeIcon icon={faDog} size="2x"></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Blink;
