import React from "react";
import { Link } from "react-router-dom";

function RentalThumb(props) {
  return (
    <Link
      className="thumbGradient rounded-xl relative w-full h-64"
      to={`/rentals/${props.id}`}
    >
      <img
        className=" w-full h-full object-cover rounded-xl"
        src={props.img}
        alt={props.alt}
      />
      <p className="absolute text-lg font-medium text-white bottom-3 left-4">
        {props.text}
      </p>
    </Link>
  );
}

export default RentalThumb;
