import { Routes, Route } from "react-router-dom";

import Social from "./pages/Social"; // your social page
import Cursor from "./Components/Cursor";
// CSS
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </>
  );
}

export default App;
