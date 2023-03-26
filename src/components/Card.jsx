import React from "react";
import useWindowSize from "../hooks/useWindowSize";
export default function Card({ name, imgSrc }) {
  const { width } = useWindowSize();
  const nameArr = name.split(/\s(?=[A-Z])/g);
  const bg = {
    backgroundImage: `${
      width > 375
        ? `url('./assets/images/desktop/${imgSrc}')`
        : `url('./assets/images/mobile/${imgSrc}')`
    }`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: `${width > 375 ? "50% 10%" : "50%"}`,
  };
  return (
    <div
      className="h-[calc(10rem+4vw)] relative group cursor-pointer md:basis-[calc(25%-1.75rem)] md:h-[28.575rem]"
      style={bg}
    >
      <div className="absolute inset-0 bg-black/30 duration-200 ease-in-out md:group-hover:bg-white/70"></div>
      <h3 className="uppercase text-white font-header text-3xl absolute bottom-6 left-6 duration-200 ease-in-out md:group-hover:text-black">
        {nameArr.map((word) => {
          return (
            <>
              {word}
              <br />
            </>
          );
        })}
      </h3>
    </div>
  );
}
