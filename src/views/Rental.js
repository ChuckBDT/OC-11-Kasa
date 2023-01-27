import React from "react";
import { useParams } from "react-router-dom";

import datas from "../datas/logements.json";

import { colors } from "../assets/Colors";
import DropdownList from "../components/DropdownList";
import DropdownText from "../components/DropdownText";
import RentalTag from "../components/RentalTag";
import Star from "../assets/Star";
import Gallery from "../components/Gallery";

function Rental() {
  //Todo: Verify lineheight dropdowns
  const urlId = useParams().id;
  const data = datas.filter((data) => data.id === urlId);
  const displayedData = data[0];

  return (
    <main className="w-full ">
      {displayedData.pictures.length > 1 ? (
        <Gallery pictures={displayedData.pictures} />
      ) : (
        <img
          className="w-full object-cover rounded-3xl h-96 mb-9"
          src={displayedData.pictures[0]}
          alt={displayedData.title}
        />
      )}

      <div className="w-full flex txt-color-primary">
        <div className="w-4/5">
          <h1 className="text-4xl font-medium">{displayedData.title}</h1>
          <p className="text-lg font-medium mt-2">{displayedData.location}</p>
          <div className="flex gap-x-2.5 my-6">
            {displayedData.tags.map((tag, index) => (
              <RentalTag tag={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="w-1/5">
          <div className="flex justify-end items-center h-1/2">
            <p className="text-lg">{displayedData.host.name}</p>
            <img
              className="rounded-full object-cover w-16 h-16 ml-3"
              src={displayedData.host.picture}
              alt={displayedData.host.name}
            />
          </div>
          <div className="flex justify-end items-center h-1/2 gap-x-2">
            {[
              <Star color={colors.grey} />,
              <Star color={colors.grey} />,
              <Star color={colors.grey} />,
              <Star color={colors.grey} />,
              <Star color={colors.grey} />,
            ].fill(<Star color={colors.primary} />, 0, displayedData.rating)}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full mb-4">
        <DropdownText title="Description" text={displayedData.description} />
        <DropdownList title="Équipements" list={displayedData.equipments} />
      </div>
    </main>
  );
}

export default Rental;
