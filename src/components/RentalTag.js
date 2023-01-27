import React from "react";

function RentalTag(props) {
  return (
    <span className="flex justify-center items-center h-5 w-fit px-3 bg-color-primary text-white rounded-md text-xs font-medium">
      {props.tag}
    </span>
  );
}

export default RentalTag;
