
import { Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;




