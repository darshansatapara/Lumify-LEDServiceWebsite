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
import Payment from "./common/Payment";
import {  UserProvider } from "./context/UserContext";
import AdminLogin from "./common/AdminLogin";
import AdminRegister from "./common/AdminRegistration";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login/admin/matchcategory" element={<AdminLogin />} />
          <Route path="/register/admin/withcategory" element={<AdminRegister />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bestproducts" element={<BestProducts />} />
          <Route path="/mybookings" element={<Bookings />} />
          <Route path="/bookservice" element={<WantService />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
