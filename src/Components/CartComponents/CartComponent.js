import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import React from "react";

function CartComponent({ opencart, setopencart, shoppingcart }) {
  return (
    <IconButton
      color="primary"
      aria-label="add to shopping cart"
      onClick={() => {
        setopencart(!opencart);
      }}
    >
      <Badge>
        <ShoppingCartOutlined color="#fffff" />
      </Badge>
    </IconButton>
  );
}

export default CartComponent;
