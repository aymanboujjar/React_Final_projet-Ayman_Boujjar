
import { Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Shop from "./pages/shop";
import Shop2 from "./pages/shop2";
import Details from "./pages/details";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/shop2" element={<Shop2/>} />
      <Route path="/details/:id" element={<Details/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;




