import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography } from "@mui/material";
import SearchComponentForNav from "./SearchComponentForNav";
import CartComponent from "../CartComponents/CartComponent";
import DrawerComponentForCart from "../CartComponents/DrawerComponentForCart";

function NavBar({ ShoppingCart, setShoppingCart }) {
  const [cartDrawer, setcartDrawer] = useState(false);

  return (
    <>
      <AppBar sx={{ backgroundColor: "#18232e" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontFamily="montserrat">
            The Shirt Store
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <SearchComponentForNav />
            <CartComponent
              opencart={cartDrawer}
              setopencart={setcartDrawer}
              shoppingcart={ShoppingCart}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerComponentForCart
        opencart={cartDrawer}
        setopencart={setcartDrawer}
        shoppingcart={ShoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </>
  );
}

export default NavBar;
