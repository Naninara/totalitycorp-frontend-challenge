import "./App.css";
import NavBar from "./Components/Navbar/NavBar";

import CorousalComponent from "./Components/Corousal/CorousalComponent";
import { Stack } from "@mui/material";

import ProductDashBoard from "./Components/ShoppingDashboard/ProductDashBoard";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import { cart } from "./Helper/Constants/Cofig";
function App() {
  const [ShoppingCart, setShoppingCart] = useState(cart);
  return (
    <Stack>
      <NavBar ShoppingCart={ShoppingCart} setShoppingCart={setShoppingCart} />
      <CorousalComponent />
      <ProductDashBoard
        ShoppingCart={ShoppingCart}
        setShoppingCart={setShoppingCart}
      />
      <Footer />
    </Stack>
  );
}

export default App;
