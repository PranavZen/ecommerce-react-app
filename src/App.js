import "../src/assets/sass/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import ProductDetails from "./pages/ProductDetails";
import 'react-loading-skeleton/dist/skeleton.css'
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
