import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import datas from "../datas/logements.json";

import DropdownList from "../components/DropdownList";
import DropdownText from "../components/DropdownText";
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
    <main className="w-full h-full px-5 xl:px-24 mb-8 xl:mb-16">
      {displayedData.pictures.length > 1 ? (
        <Gallery pictures={displayedData.pictures} />
      ) : (
        <img
          className="w-full object-cover rounded-xl xl:rounded-3xl h-64 h-104 mb-3"
          src={displayedData.pictures[0]}
          alt={displayedData.title}
        />
      )}

      <div className="w-full flex flex-col txt-color-primary">
        <div className="font-medium mb-3">
          <h1 className="text-lg mb-2">{displayedData.title}</h1>
          <p className="text-sm mb-3">{displayedData.location}</p>
          <div className="flex flex-wrap gap-2.5 ">
            {displayedData.tags.map((tag, index) => (
              <RentalTag tag={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between items-center mb-3">
          <div className="flex justify-end items-center h-1/2">
            <p className="text-sm font-medium">{displayedData.host.name}</p>
            <img
              className="rounded-full object-cover w-9 h-9 ml-2"
              src={displayedData.host.picture}
              alt={displayedData.host.name}
            />
          </div>
          <div className="flex justify-end items-center h-1/2 gap-x-2">
            <RatingStar rate={displayedData.rating} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 xl:gap-x-20 w-full h-fit ">
        <DropdownText
          title="Description"
          text={displayedData.description}
          widthClass=""
        />
        <DropdownList
          title="Équipements"
          list={displayedData.equipments}
          widthClass=""
        />
      </div>
    </main>
  );
}

export default Rental;
