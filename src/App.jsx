
import { Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Shop from "./pages/shop";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;




