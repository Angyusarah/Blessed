import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Index"
import Wishes from "./pages/wishes/Wishes"
import Gallery from "./pages/gallery/Gallery"
import About from "./pages/about/About"
import "./App.css"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

