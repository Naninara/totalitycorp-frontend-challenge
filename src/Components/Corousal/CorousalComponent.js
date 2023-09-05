import React from "react";
import { imgArray } from "../../Helper/Constants/Cofig";
import SliderComponent from "./SliderComponent";
import Carousel from "react-material-ui-carousel";

function CorousalComponent() {
  return (
    <Carousel animation="slide" swipe={true} sx={{ mt: 8 }}>
      {imgArray.map((ImgElement, index) => {
        return (
          <SliderComponent imgSrc={ImgElement} key={index}></SliderComponent>
        );
      })}
    </Carousel>
  );
}

export default CorousalComponent;
