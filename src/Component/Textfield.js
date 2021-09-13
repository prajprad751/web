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

  const Cleartext = () => {
    //console.log("Upper case was clikced" + text);
    //let newtext = text.toLowerCase();
    setText("");
  };
  const handlOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text here...");
  //setText("newtext");
  return (
    <>
      <div className="container">
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
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          conert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={Cleartext}>
          Clear
        </button>
        <div className="container">
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} Characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
