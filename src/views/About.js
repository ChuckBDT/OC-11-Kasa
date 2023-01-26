import React, { useState } from "react";

import Banner from "../components/Banner";
import AboutBanner from "../assets/pictures/about/banner.webp";
import DropdownText from "../components/DropdownText";

export default function APropos() {
  // ToDo: IMG -> PICTURE
  // IMG BG BLEND ?
  // Padding inside texts
  // Content stretch

  const [items, setItems] = useState([
    {
      id: 0,
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      id: 1,
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 2,
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 3,
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]);

  return (
    <div className="flex flex-col justify-center items-center gap-y-8 text-2xl mb-8">
      <Banner picture={AboutBanner} />
      {items.map((item) => {
        return (
          <DropdownText key={item.id} title={item.title} text={item.text} />
        );
      })}
    </div>
  );
}
