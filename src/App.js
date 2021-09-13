import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
//import Textfield from "./Component/Textfield";
import about from "./Component/about";

function App() {
  return (
    <>
      {<Navbar title="TextUtills" aboutText="About" />}
      {/*<Navbar/>*/}
      <div className="container my-3">
        {/*<Textfield heading="Enter your text here" />*/}
        {/*<Textfield />*/}
        <about />
      </div>
    </>
  );
}

export default App;
