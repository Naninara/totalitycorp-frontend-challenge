import { Typography } from "@mui/material";
import React from "react";

function CartEmpty() {
  return (
    <Typography
      variant="h4"
      fontFamily="montserrat"
      textAlign="center"
      mt="20px"
      fontSize={15}
    >
      OOPS!! Cart is Empty...😢 <br></br>Find Your Styles in our home page
    </Typography>
  );
}

export default CartEmpty;
