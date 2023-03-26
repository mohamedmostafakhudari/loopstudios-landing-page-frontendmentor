import React from "react";
import Button from "../components/Button";
import Cards from "../components/Cards";
const creations = [
  {
    name: "Deep Earth",
    imgSrc: "image-deep-earth.jpg",
  },
  {
    name: "Night Arcade",
    imgSrc: "image-night-arcade.jpg",
  },
  {
    name: "Soccer Team vr",
    imgSrc: "image-soccer-team.jpg",
  },
  {
    name: "The Grid",
    imgSrc: "image-grid.jpg",
  },
  {
    name: "From up Above vr",
    imgSrc: "image-from-above.jpg",
  },
  {
    name: "Pocket Borealis",
    imgSrc: "image-pocket-borealis.jpg",
  },
  {
    name: "The Curiosity",
    imgSrc: "image-curiosity.jpg",
  },
  {
    name: "Make it Fisheye",
    imgSrc: "image-fisheye.jpg",
  },
];
export default function Creations() {
  return (
    <section className="min-h-screen py-24">
      <div className="container mx-auto px-4 md:p-0">
        <div className="md:flex md:justify-between">
          <h1 className="uppercase text-4xl font-header text-black text-center">
            our creations
          </h1>
          <div className="hidden md:block">
            <Button text="see all" />
          </div>
        </div>
        <div className="flex flex-col mt-14 gap-8 flex-wrap md:gap-7 md:flex-row">
          <Cards items={creations} />
        </div>
        <div className="text-center mt-10 md:hidden">
          <Button text="see all" />
        </div>
      </div>
    </section>
  );
}
