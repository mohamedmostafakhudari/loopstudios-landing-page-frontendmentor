import React from "react";

export default function History() {
  return (
    <section id="history" className="min-h-screen py-24">
      <div className="container mx-auto flex flex-col gap-14 px-4 md:flex-row md:p-0 md:gap-0">
        <div className="">
          <picture>
            <source
              srcsec="./assets/images/desktop/image-interactive.jpg"
              media="(min-width:768px)"
            />
            <img
              src="./assets/images/mobile/image-interactive.jpg"
              alt="interactive VR"
            />
          </picture>
        </div>
        <div className="text-center md:-ml-20 md:bg-white md:self-end md:max-w-xl md:pt-20 md:pl-20 md:text-left">
          <h1 className="font-header text-4xl uppercase text-black">
            the leader in interactive vr
          </h1>
          <p className="mt-4 text-darkGray max-w-[30ch] mx-auto md:max-w-none md:mt-6">
            Founded in 2011, loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
