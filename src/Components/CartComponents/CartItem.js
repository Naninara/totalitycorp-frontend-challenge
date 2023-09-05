import React from "react";

import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import NavBar from "../Navbar/NavBar";
function CartItem({
  id,
  name,
  company,
  price,
  count,
  image,
  shoppingcart,
  setShoppingCart,
  increment,
  decrement,
}) {
  return (

    <Box sx={{ display: "flex" }}>
      <Box>
        <img src={image} height="100px" width="100px" alt="Not Found" />
      </Box>
      <Box sx={{ marginLeft: "20px" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "montserrat",
            fontSize: "15px",
            fontWeight: "1000",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "montserrat",
            fontSize: "13px",
            fontWeight: "700",
          }}
        >
          Brand: {company}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "montserrat",
            fontSize: "13px",
            fontWeight: "700",
          }}
        >
          Price: {price * count}
        </Typography>
        <ButtonGroup sx={{ height: "25px", mt: "5px" }}>
          <Button
            sx={{ width: "10px", color: "#000000" }}
            onClick={() => {
              increment(id);
            }}
          >
            +
          </Button>
          <Button sx={{ width: "10px", color: "#000000" }}>{count}</Button>
          <Button
            sx={{ width: "10px", color: "#000000" }}
            onClick={() => {
              decrement(id);
            }}
          >
        
          </Button>
        </ButtonGroup>
      </Box>
    </Box>

  );
}

export default CartItem;
