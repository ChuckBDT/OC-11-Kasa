import React from "react";

import datas from "../datas/logements.json";

import HommeBanner from "../components/HomeBanner";
import HomeBanner from "../assets/pictures/home/home_banner.webp";
import RentalThumb from "../components/RentalThumb";

const Home = () => {
  return (
    <main className="px-5 mb-3 h-full">
      <HommeBanner picture={HomeBanner} text={true} />
      <section className="w-full grid grid-cols-1 my-5 gap-y-5">
        {datas.map((data) => (
          <RentalThumb
            key={data.id}
            id={data.id}
            img={data.cover}
            alt={data.title}
            text={data.title}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
