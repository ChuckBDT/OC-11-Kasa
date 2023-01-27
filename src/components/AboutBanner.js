import React from "react";

function AboutBanner(props) {
  return (
    <div className="w-full h-56 bg-black rounded-xl">
      <img
        className=" w-full h-full object-cover rounded-xl opacity-90"
        src={props.picture}
        alt=""
      />
    </div>
  );
}

export default AboutBanner;
