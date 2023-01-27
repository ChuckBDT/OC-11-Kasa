import React from "react";

function HomeBanner(props) {
  return (
    <div className="relative flex items-center bg-black rounded-xl">
      <img
        className="h-28 w-full object-cover rounded-xl opacity-70"
        src={props.picture}
        alt=""
      />
      {props.text ? (
        <p className="absolute left-4 leading-6 text-white font-medium text-2xl">
          Chez vous,
          <br />
          partout et ailleurs
        </p>
      ) : null}
    </div>
  );
}

export default HomeBanner;
