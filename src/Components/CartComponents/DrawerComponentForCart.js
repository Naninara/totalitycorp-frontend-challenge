import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { cart } from "../../Helper/Constants/Cofig";
import CartItem from "./CartItem";
import CartEmpty from "../ErrorComponents/CartEmpty";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
function DrawerComponentForCart({
  opencart,
  setopencart,
  shoppingcart,
  setShoppingCart,
}) {
  const [ex, setEx] = useState(true);
  const decr = (id) => {
    const s = cart?.findIndex((ele) => {
      return ele.id === id;
    });
    if (cart[s].data.count > 1) cart[s].data.count--;

    setShoppingCart(cart);
    setEx(!ex);
  };
  const incr = (id) => {
    const s = cart?.findIndex((ele) => {
      return ele.id === id;
    });
    cart[s].data.count++;
    setShoppingCart(cart);
    setEx(!ex);
  };
  return (
    <Drawer
      open={opencart}
      onClose={() => {
        setopencart(!opencart);
      }}
      anchor="right"
    >
      <Box sx={{ padding: "10px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography
            variant="h5"
            textAlign="center"
            mb={2}
            mt={2}
            fontFamily="montserrat"
            fontWeight={700}
          >
            Cart
          </Typography>
          <IconButton
            onClick={() => {
              setopencart(!opencart);
            }}
          >
            <Close />
          </IconButton>
        </Box>
        {shoppingcart.length === 0 ? (
          <CartEmpty />
        ) : (
          shoppingcart.map((ele) => {
            return (
              <CartItem
                {...ele.data}
                id={ele.id}
                shoppingcart={shoppingcart}
                setShoppingCart={setShoppingCart}
                increment={incr}
                decrement={decr}
                key={ele.id}
              />
            );
          })
        )}
      </Box>
      <Link to={cart.length === 0 ? "/" : "/checkout"}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            position: "sticky",
          }}
        >
          <Button
            variant="outlined"
            sx={{ position: "fixed", bottom: 0 }}
            disabled={cart.length === 0 ? true : false}
          >
            {cart.length === 0 ? (
              <Typography variant="span">Cart Is Empty</Typography>
            ) : (
              <Typography variant="span">Proceed to checkout</Typography>
            )}
          </Button>
        </Box>
      </Link>
    </Drawer>
  );
}

export default DrawerComponentForCart;
