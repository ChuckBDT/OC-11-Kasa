import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import datas from "../datas/logements.json";

import Dropdown from "../components/Dropdown";
import RentalTag from "../components/RentalTag";
import Gallery from "../components/Gallery";
import RatingStar from "../components/RatingStar";

function Rental() {
  const urlId = useParams().id;
  const data = datas.filter((data) => data.id === urlId);
  const displayedData = data[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full grow px-5 xl:px-24 mb-8 xl:mb-16">
      {displayedData.pictures.length > 1 ? (
        <Gallery pictures={displayedData.pictures} alt={displayedData.title} />
      ) : (
        <img
          className="w-full object-cover rounded-xl xl:rounded-3xl h-64 h-104 mb-3 xl:mb-9"
          src={displayedData.pictures[0]}
          alt={displayedData.title}
        />
      )}

      <div className="w-full flex flex-col xl:flex-row xl:justify-between txt-color-primary xl:mb-6">
        <div className="font-medium mb-3 xl:mb-0">
          <h1 className="text-lg xl:text-4xl mb-2">{displayedData.title}</h1>
          <p className="text-sm xl:text-lg mb-3 xl:mb-5">
            {displayedData.location}
          </p>
          <div className="flex flex-wrap gap-2.5 ">
            {displayedData.tags.map((tag, index) => (
              <RentalTag tag={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-row-reverse xl:flex-col justify-between items-center mb-3 xl:mb-0 ">
          <div className="flex justify-end items-center h-1/2">
            <p className="text-sm xl:text-lg font-medium">
              {displayedData.host.name}
            </p>
            <img
              className="rounded-full object-cover w-9 xl:w-16 h-9 xl:h-16 ml-2"
              src={displayedData.host.picture}
              alt={displayedData.host.name}
            />
          </div>
          <div className="flex justify-end items-center xl:items-end h-1/2 gap-x-2 ">
            <RatingStar rate={displayedData.rating} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 xl:gap-x-20 w-full h-fit ">
        <Dropdown
          title="Description"
          text={displayedData.description}
          widthClass=""
          xlFontSize="text-lg"
        />
        <Dropdown
          title="Équipements"
          list={displayedData.equipments}
          widthClass=""
          xlFontSize="text-lg"
        />
      </div>
    </main>
  );
}

export default Rental;
