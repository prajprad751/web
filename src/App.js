import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
//import Textfield from "./Component/Textfield";
import About from "./Component/About";

function App() {
  return (
    <>
      {<Navbar title="TextUtills" aboutText="About" />}
      {/*<Navbar/>*/}
      <div className="container my-3">
        {/*<Textfield heading="Enter your text here" />*/}
        {/*<Textfield />*/}
        <About />
      </div>
    </>
  );
}

export default App;
