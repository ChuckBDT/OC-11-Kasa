import React from "react";
import { Link } from "react-router-dom";

function LocationThumb(props) {
  // Todo : Gradient ON pictures, space between elements
  return (
    <Link className="rounded-3xl relative w-full " to={`/rentals/${props.id}`}>
      <img
        className="w-full h-56 object-cover rounded-3xl bg-gradient-to-b from-black/0 to-black/50"
        src={props.img}
        alt={props.alt}
      />
      <p className="absolute  text-lg font-medium text-white bottom-4 left-4">
        {props.text}
      </p>
    </Link>
  );
}

export default LocationThumb;
