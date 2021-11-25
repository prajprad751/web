import "./App.css";
import Navbar from "./Component/Navbar";
import Textfield from "./Component/Textfield";
import Alert from "./Component/Alert";
import About from "./Component/About";
import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#051b31";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.background = "white";
      showAlert(" Light mode has been enabled", "success");
    }
  };

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  //const [alert, setalert] = useState(null);

  return (
    <>
      <Router>
        {<Navbar mode={mode} toggleMode={toggleMode} />}
        {<Alert alert={alert} />}
        {/*<Navbar/>*/}

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textfield
                showAlert={showAlert}
                heading="Enter your text here"
                mode={mode}
              />
            </Route>
          </Switch>

          {/*<Textfield mode={mode} />*/}
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
