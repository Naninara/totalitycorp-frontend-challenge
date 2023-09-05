import { Box } from "@mui/material";
import React from "react";

function SliderComponent({ imgSrc }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "auto",
      }}
    >
      <img
        src={require(`../../Img/${imgSrc ? imgSrc : "Corousal1"}.jpg`)}
        alt="oops"
        className="corousalImage"
      ></img>
    </Box>
  );
}

export default SliderComponent;
