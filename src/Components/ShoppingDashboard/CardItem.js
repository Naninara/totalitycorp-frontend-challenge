import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { cart } from "../../Helper/Constants/Cofig";
function CardItem({ id, company, name, price, img, setShoppingCart }) {
  const [ex, setEx] = useState(true);
  const find = (id) => {
    const ff = cart.some((ele) => {
      return ele.id === id;
    });
    return ff;
  };
  const addtocart = (prid, prcompany, prname, prprice, primg) => {
    const a = find(prid);
    console.log(a);
    const obj = {
      id: prid,
      data: {
        name: prname,
        company: prcompany,
        image: primg,
        price: prprice,
        count: 1,
      },
    };
    if (!a) {
      cart.push(obj);
      setShoppingCart(cart);
    }
    setEx(!ex);
  };
  return (
    <Box>
      <Card
        sx={{ width: { md: "250px", xs: "280px" }, height: "auto", mt: "2" }}
      >
        <CardMedia
          sx={{ height: "250px", width: "inherit", backgroundSize: "contain" }}
          image={img}
        ></CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            fontFamily="montserrat"
            fontSize="15px"
            fontWeight="600"
          >
            {company}
          </Typography>
          <Typography
            variant="h5"
            fontFamily="montserrat"
            fontSize="10px"
            fontWeight="300"
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "montserrat",
              fontSize: "15px",
            }}
          >
            Rs.{price}
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <IconButton
              onClick={() => {
                addtocart(id, company, name, price, img);
              }}
              disabled={find(id)}
            >
              {<ShoppingCartOutlined />}
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardItem;
