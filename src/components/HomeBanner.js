import React from "react";

function HomeBanner(props) {
  return (
    <div
      className={`relative flex items-center xl:justify-center bg-black rounded-xl xl:rounded-3xl ${props.className}`}
    >
      <img
        className="h-28 xl:h-56 w-full object-cover rounded-xl xl:rounded-3xl opacity-70"
        src={props.picture}
        alt=""
      />
      {props.text ? (
        <p className="absolute max-xl:px-5 xl:left-none leading-6 text-white font-medium text-2xl xl:text-5xl">
          Chez vous, partout et ailleurs
        </p>
      ) : null}
    </div>
  );
}

export default HomeBanner;
