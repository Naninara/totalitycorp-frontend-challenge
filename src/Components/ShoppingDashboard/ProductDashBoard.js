import { Box } from "@mui/material";
import React, { useState } from "react";
import HeadingAndFilter from "./HeadingAndFilter";
import CardItem from "./CardItem";
import { items } from "../../Helper/Constants/Cofig";

import FilesNotFound from "../ErrorComponents/FilesNotFound";
function ProductDashBoard({ ShoppingCart, setShoppingCart }) {
  const [Category, setCategory] = useState(items);

  return Category.length === 0 ? (
    <>
      <HeadingAndFilter category={Category} setCategory={setCategory} />
      <FilesNotFound />
    </>
  ) : (
    <>
      <HeadingAndFilter category={Category} setCategory={setCategory} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        {Category.map((ele, index) => {
          return (
            <CardItem
              {...ele}
              ShoppingCart={ShoppingCart}
              setShoppingCart={setShoppingCart}
              key={index * 50}
            />
          );
        })}
      </Box>
    </>
  );
}

export default ProductDashBoard;
