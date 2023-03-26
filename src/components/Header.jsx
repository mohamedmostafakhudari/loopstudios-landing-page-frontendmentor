import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import Nav from "./Nav";
export default function Header() {
  const { width } = useWindowSize();
  const heroBg = {
    backgroundImage: `url(${
      width > 375
        ? "./assets/images/desktop/image-hero.jpg"
        : "./assets/images/mobile/image-hero.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50%",
  };
  return (
    <header className="min-h-screen flex flex-col" style={heroBg}>
      <div className="container mx-auto px-4 flex-1 flex flex-col md:px-0">
        <Nav />
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-white border font-header uppercase text-[40px] leading-10 p-5 w-fit md:text-7xl">
            <p className="max-w-[11ch] md:max-w-[15ch]">
              immersive experiences that deliver
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
