import { Carousel } from "flowbite-react";
import React from "react";
import heroImg1 from "../assets/hero.jpg";
import heroImg2 from "../assets/hero1.jpg";
import heroImg3 from "../assets/hero2.jpg";

const Hero = () => {
  return (
    <div className="carousle_image_style ">
      <Carousel slideInterval={5000}>
        <img src={heroImg1} alt="banner img" />
        <img src={heroImg2} alt="banner img" />
        <img src={heroImg3} alt="banner img" />
      </Carousel>
    </div>
  );
};

export default Hero;

// h-64 sm:h-64 xl:h-80 2xl:h-1/2 md:pt-5
