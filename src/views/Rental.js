import React from "react";
import { useParams } from "react-router-dom";

import datas from "../datas/logements.json";

import DropdownList from "../components/DropdownList";
import DropdownText from "../components/DropdownText";

function Rental() {
  const urlId = useParams().id;
  const data = datas.filter((data) => data.id === urlId);
  const displayedData = data[0];

  return (
    <div className="w-full grid grid-cols-2 gap-x-8">
      <div>
        <div>
          {displayedData.title}
          {displayedData.location}
          {displayedData.tags}
        </div>
        <div>
          <div>
            {displayedData.host.name}
            {displayedData.host.picture}
          </div>
          <div>{displayedData.rating}</div>
        </div>
      </div>
      <DropdownText title="Description" text={displayedData.description} />
      <DropdownList title="Équipements" text={displayedData.equipments} />
    </div>
  );
}

export default Rental;
