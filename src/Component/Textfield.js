import React, { useState } from "react";

export default function Textfield(props) {
  const handleUpClick = () => {
    //console.log("Upper case was clikced" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper case", "success");
  };

  const handleLoClick = () => {
    //console.log("Upper case was clikced" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower case", "success");
  };

  const Cleartext = () => {
    //console.log("Upper case was clikced" + text);
    //let newtext = text.toLowerCase();
    setText("");
    props.showAlert("Text area erased", "success");
  };

  const handleExtraSpce = () => {
    let newtext = text.split(/\s+/);
    setText(newtext.join(" "));
    props.showAlert("Extra space has been cleared", "success");
  };

  const handlOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here...");
  //setText("newtext");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handlOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          conert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={Cleartext}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpce}>
          Remove extra space
        </button>
        <div
          className="container"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2>Your text summary</h2>
          <p>
            {
              text.split(/\s+/).filter((Element) => {
                return Element.length !== 0;
              }).length
            }{" "}
            words and {text.length} Characters
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((Element) => {
                return Element.length !== 0;
              }).length}{" "}
            Minutes to read
          </p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in above box to preview here..."}
          </p>
        </div>
      </div>
    </>
  );
}
