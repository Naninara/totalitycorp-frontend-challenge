import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        backgroundColor: "#18232e",
        mt: "20px",
      }}
    >
      <Typography
        variant="h5"
        fontFamily="montserrat"
        color="#ffff"
        textAlign="center"
        mt="20px"
      >
        Made With ❤️ By Mavin
      </Typography>
      <Typography
        variant="h5"
        fontFamily="montserrat"
        color="#ffff"
        textAlign="center"
      >
        @Copyright Reserved - 2023.
      </Typography>
    </Box>
  );
}

export default Footer;
