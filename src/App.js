import "./App.css";
import Navbar from "./Component/Navbar";
import Textfield from "./Component/Textfield";
//import About from "./Component/About";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#051b31";
    } else {
      setmode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <>
      {<Navbar mode={mode} toggleMode={toggleMode} />}
      {/*<Navbar/>*/}
      <div className="container my-3">
        {<Textfield heading="Enter your text here" mode={mode} />}
        {/*<Textfield mode={mode} />*/}
        {/*<About />*/}
      </div>
    </>
  );
}

export default App;
