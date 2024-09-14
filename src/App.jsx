
import { Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Shop from "./pages/shop";
import Shop2 from "./pages/shop2";
import Details from "./pages/details";
import Blog from "./pages/blog";
import Blog2 from "./pages/blog2";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Profile } from "./pages/profile";
import { Signup } from "./pages/signup";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/shop2" element={<Shop2/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog2" element={<Blog2/>} />
      <Route path="/details/:id" element={<Details/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;




