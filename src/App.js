import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:livro" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
