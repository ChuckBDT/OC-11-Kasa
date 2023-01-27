import React, { useState } from "react";
import Chevron from "../assets/Chevron";

function Gallery(props) {
  //Todo: Check the size of chevron
  const pictures = props.pictures;

  let [currentDisplayed, setDisplayed] = useState(0);

  return (
    <div className="h-96 w-full relative flex items-center justify-center mb-7">
      <svg
        className="chevron -rotate-90 absolute  h-20 w-12 right-4 z-10"
        viewBox="0 0 25 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          currentDisplayed === pictures.length - 1
            ? setDisplayed((currentDisplayed = 0))
            : setDisplayed(currentDisplayed + 1);
        }}
      >
        <path
          d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
          fill="white"
        />
      </svg>
      <svg
        className="chevron rotate-90 absolute h-20 w-12 left-4 z-10"
        viewBox="0 0 25 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          currentDisplayed === 0
            ? setDisplayed((currentDisplayed = pictures.length - 1))
            : setDisplayed(currentDisplayed - 1);
        }}
      >
        <path
          d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
          fill="white"
        />
      </svg>
      <p className="text-white text-lg font-medium z-10 absolute bottom-4">
        {currentDisplayed + 1}/{pictures.length}
      </p>
      <img
        className="object-cover h-full w-full absolute rounded-3xl "
        src={pictures[currentDisplayed]}
        alt=""
      />
    </div>
  );
}

export default Gallery;

// return (
//   <div className="h-96 w-full">
//     {
//       <img
//         className="object-cover h-full w-full "
//         src={activePicture}
//         alt=""
//       />
//     }
//     {rest.map((picture, index) => (
//       <img
//         className="object-cover h-full w-full hidden"
//         src={picture}
//         alt=""
//         key={index}
//       />
//     ))}
//   </div>
// );
