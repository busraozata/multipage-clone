import Footer from "./Components/Layouts/Footer/Footer";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
