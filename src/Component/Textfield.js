import React, { useState } from "react";

export default function Textfield(props) {
  const handleUpClick = () => {
    //console.log("Upper case was clikced" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    //console.log("Upper case was clikced" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handlOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text here...");
  //setText("newtext");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handlOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btb btn primary" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn secondary" onClick={handleLoClick}>
        conert to Lowercase
      </button>
    </div>
  );
}
