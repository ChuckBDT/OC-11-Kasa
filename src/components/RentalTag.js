import React from "react";

function RentalTag(props) {
  // Todo: Tag's length should be equal ?
  return (
    <span className="flex justify-center items-center h-7 w-fit px-3 bg-color-primary text-white rounded-3xl text-sm font-medium">
      {props.tag}
    </span>
  );
}

export default RentalTag;
