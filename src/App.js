import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Upload from "./Upload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <h1>Test React Form</h1>
      </header> */}
    </div>
  );
}

export default App;
