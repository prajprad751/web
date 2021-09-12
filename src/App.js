import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Textfield from "./Component/Textfield";

function App() {
  return (
    <>
      {<Navbar title="TextUtills" aboutText="about Textutils" />}
      {/*<Navbar/>*/}
      <div className="container my-3">
        <Textfield heading="Enter your text here" />
        {/*<Textfield />*/}
      </div>
    </>
  );
}

export default App;
