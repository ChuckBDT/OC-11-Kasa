import React, { useState } from "react";
import Chevron from "../assets/Chevron";

function DropdownList(props) {
  const [opened, setOpened] = useState(false);

  const toggle = () => {
    if (opened) {
      setOpened(false);
    } else {
      setOpened(true);
    }
  };

  return (
    <div className="accordion">
      <div className="item ">
        <div
          className="title bg-color-primary text-white flex justify-between items-center rounded font-medium h-12 px-4 cursor-pointer"
          onClick={toggle}
        >
          <h2>{props.title}</h2>
          <Chevron
            color="white"
            opened={
              opened
                ? "chevron rotate-180 transition-transform"
                : "chevron rotate-0 transition-transform"
            }
          />
        </div>
        <p
          className={
            opened
              ? "content bg-color-secondary txt-color-primary rounded-b leading-8 font-normal px-7 about-text show"
              : "content bg-color-secondary txt-color-primary rounded-b leading-8 font-normal px-7 about-text"
          }
        >
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default DropdownList;
