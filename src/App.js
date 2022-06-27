import Footer from "./Components/Layouts/Footer/Footer";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Destinations from "./Components/Destinations/Home";
import SinglePages from "./SinglePage/SinglePage";
import Blog from "./Components/Blog/Blog";
import BlogSingle from "./Components/Blog/Blog-single-page/BlogSingle";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/singlepage/:id" element={<SinglePages />} />
        <Route path="/blogsingle/:id" element={<BlogSingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
