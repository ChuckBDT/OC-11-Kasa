import React from "react";

function RentalTag(props) {
  return (
    <span className="flex justify-center items-center h-5 xl:h-6 w-fit px-3 bg-color-primary text-white rounded-md xl:rounded-lg text-xs xl:text-sm font-medium">
      {props.tag}
    </span>
  );
}

export default RentalTag;
