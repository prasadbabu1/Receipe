import "./App.css";
import Receipe from "./components/receipe";
import { Route, Routes } from "react-router-dom";
import Favourite from "./components/Favourite";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Receipe />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
