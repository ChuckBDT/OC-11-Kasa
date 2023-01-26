import React from "react";

import datas from "../datas/logements.json";

import Banner from "../components/Banner";
import HomeBanner from "../assets/pictures/home/home_banner.webp";
import LocationThumb from "../components/RentalThumb";

const Home = () => {
  // Todo: Add text on picture ?

  return (
    <main>
      <Banner picture={HomeBanner} />
      <section className="w-full rounded-3xl bg-color-secondary p-8 grid grid-cols-3 gap-y-3 gap-x-4">
        {datas.map((data) => (
          <LocationThumb
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
