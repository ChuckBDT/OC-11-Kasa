import React, { useState } from "react";
import Chevron from "../assets/Chevron";

function Dropdown(props) {
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
        className={`title text-sm xl:${props.xlFontSize} bg-color-primary text-white flex justify-between items-center rounded font-medium h-8 xl:h-12 px-3 xl:px-5 cursor-pointer`}
        onClick={toggle}
      >
        <h2>{props.title}</h2>
        <Chevron
          color="white"
          opened={
            opened
              ? "chevron rotate-180 transition-transform h-4 xl:h-6 w-4 xl:w-6"
              : "chevron rotate-0 transition-transform h-4 xl:h-6 w-4 xl:w-6"
          }
        />
      </div>
      <p
        className={
          opened
            ? `content bg-color-secondary txt-color-primary rounded-b leading-4 font-normal text-xs xl:${props.xlFontSize} px-3 xl:px-5 about-text show`
            : `content bg-color-secondary txt-color-primary rounded-b leading-4 font-normal text-xs xl:${props.xlFontSize} px-3 xl:px-5 about-text`
        }
      >
        <br />
        {props.text
          ? props.text
          : props.list.map((li, index) => {
              return <li key={index}>{li}</li>;
            })}
        {props.text ? <br /> : null}
        <br />
      </p>
    </div>
  );
}

export default Dropdown;
