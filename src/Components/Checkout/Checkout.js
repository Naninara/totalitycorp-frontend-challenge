import React from "react";
import { cart } from "../../Helper/Constants/Cofig";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

import NavBar from './../Navbar/NavBar';

import Footer from './../Footer/Footer';
function Checkout() {
  const Customh5 = styled(Typography)({
    fontFamily: "montserrat",
  });

  return (
    <>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100vh",
        padding: "30px",
      }}
    >

      <Box
        sx={{
          boxShadow: "0px 0px 30px black",
          padding: "20px",
          borderRadius: "20px",
          overflow: "scroll",
          height: "350px",
        }}
      >
        {cart.map((ele) => {
          return (
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <img
                  src={ele.data.image}
                  height={100}
                  width={100}
                  alt="none is found"
                />
              </Box>
              <Box>
                <Customh5 variant="h6">Name : {ele.data.name}</Customh5>
                <Customh5 variant="h6">Quantity : {ele.data.count}</Customh5>
                <Customh5 variant="h6">
                  Total Price : {ele.data.price * ele.data.count}
                </Customh5>
              </Box>
            </Box>
          );
        })}
        <Button variant="outlined" sx={{ marginTop: "20px" }}>
          Proceed to Payment
        </Button>
      </Box>
    </Box>
    
    </>
  );
}

export default Checkout;
