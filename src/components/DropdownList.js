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
    <div className={`accordion ${props.widthClass}`}>
      <div
        className="title text-sm bg-color-primary text-white flex justify-between items-center rounded font-medium h-8 px-3 cursor-pointer"
        onClick={toggle}
      >
        <h2>{props.title}</h2>
        <Chevron
          color="white"
          opened={
            opened
              ? "chevron rotate-180 transition-transform h-4 w-4"
              : "chevron rotate-0 transition-transform h-4 w-4"
          }
        />
      </div>
      <ul
        className={
          opened
            ? "content bg-color-secondary txt-color-primary rounded-b leading-4 font-normal text-xs px-3 about-text show"
            : "content bg-color-secondary txt-color-primary rounded-b leading-4 font-normal text-xs px-3 about-text"
        }
      >
        <br />
        {props.list.map((li, index) => {
          return <li key={index}>{li}</li>;
        })}
        <br />
      </ul>
    </div>
  );
}

export default DropdownList;
