import React from "react";
import Star from "../assets/Star";
import { colors } from "../assets/Colors";

function RatingStar(props) {
  const colorsRate = [
    colors.grey,
    colors.grey,
    colors.grey,
    colors.grey,
    colors.grey,
  ].fill(colors.primary, 0, props.rate);

  return (
    <React.Fragment>
      {colorsRate.map((star, index) => (
        <Star color={star} key={index} />
      ))}
    </React.Fragment>
  );
}

export default RatingStar;
