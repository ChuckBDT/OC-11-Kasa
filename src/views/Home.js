import React from "react";

import datas from "../datas/logements.json";

import HomeBanner from "../components/HomeBanner";
import HomeBannerPicture from "../assets/pictures/home/home_banner.webp";
import RentalThumb from "../components/RentalThumb";

const Home = () => {
  // Todo: Fix custom class bg section issue
  return (
    <main className="h-full mb-8 xl:mb-16 px-5 xl:px-24">
      <HomeBanner
        picture={HomeBannerPicture}
        text={true}
        className="mb-5 xl:mb-11"
      />
      <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-y-5 xl:gap-14 bg-color-primary xl:py-14 xl:px-12 xl:rounded-3xl">
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
