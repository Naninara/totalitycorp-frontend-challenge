import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { items } from "../../Helper/Constants/Cofig";

function HeadingAndFilter({ category, setCategory }) {
  const handleClick = (e) => {
    const arr = items.filter((ele) => {
      return ele.Category.includes(e.target.value);
    });
    setCategory(arr);
  };
  return (
    <>
      <Typography
        variant="h5"
        fontFamily="montserrat"
        textAlign="center"
        fontWeight="1000"
        mt={2}
      >
        Heyy There Glad To See You
        <br /> Look Is Any Something You Might Find
      </Typography>
      <Box sx={{ display: "flex", marginTop: "30px" }}>
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              fontFamily: "montserrat",
            }}
          >
            <FormControlLabel
              value=""
              control={<Radio />}
              label={
                <Typography
                  variant="span"
                  fontFamily="montserrat"
                  fontWeight="600"
                >
                  All
                </Typography>
              }
              onClick={handleClick}
            />

            <FormControlLabel
              value="men"
              control={<Radio />}
              label={
                <Typography
                  variant="span"
                  fontFamily="montserrat"
                  fontWeight="600"
                >
                  Male
                </Typography>
              }
              onClick={handleClick}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label={
                <Typography
                  variant="span"
                  fontFamily="montserrat"
                  fontWeight="600"
                >
                  Female
                </Typography>
              }
              onClick={handleClick}
            />

            <FormControlLabel
              value="kids"
              control={<Radio />}
              label={
                <Typography
                  variant="span"
                  fontFamily="montserrat"
                  fontWeight="600"
                >
                  Children
                </Typography>
              }
              onClick={handleClick}
            />
            <FormControlLabel
              value="aged"
              control={<Radio />}
              label={
                <Typography
                  variant="span"
                  fontFamily="montserrat"
                  fontWeight="600"
                >
                  Aged
                </Typography>
              }
              onClick={handleClick}
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label={
                <Typography
                  variant="span"
                  fontFamily="montserrat"
                  fontWeight="600"
                >
                  Others
                </Typography>
              }
              onClick={handleClick}
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
}

export default HeadingAndFilter;
