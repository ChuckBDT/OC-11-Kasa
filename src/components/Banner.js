import React from "react";

function Banner(props) {
  return (
    <img
      className="h-56 w-full object-cover rounded-3xl"
      src={props.picture}
      alt=""
    />
  );
}

export default Banner;
