import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar";
import Home from "./components/Home";
import About from "./components/Aboutus";
import Services from "./components/Services";
import Login from "./common/Login";
import Register from "./common/Registration";
import Products from "./components/Products";
import BestProducts from "./components/BestProducts";
import Bookings from "./components/Booking";
import WantService from "./components/WantService";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bestproducts" element={<BestProducts />} />
        <Route path="/mybookings" element={<Bookings />} />
        <Route path="/bookservice" element={<WantService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
