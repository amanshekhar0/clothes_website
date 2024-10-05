
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import './App.css';

import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Product/Products";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 800,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <Banner />
    </>
  );
}

export default App;
