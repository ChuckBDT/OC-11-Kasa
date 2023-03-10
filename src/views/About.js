import React, { useState } from "react";

import AboutBanner from "../components/AboutBanner";
import AboutBannerImg from "../assets/pictures/about/banner.webp";
import Dropdown from "../components/Dropdown";

export default function About() {
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
    <main className="flex flex-col justify-start items-center px-5 xl:px-24 gap-y-5 xl:gap-y-8 mb-8 xl:mb-16 grow">
      <AboutBanner picture={AboutBannerImg} />
      {items.map((item) => {
        return (
          <Dropdown
            key={item.id}
            title={item.title}
            text={item.text}
            widthClass="w-full xl:w-10/12"
            xlFontSize="text-2xl"
          />
        );
      })}
    </main>
  );
}
