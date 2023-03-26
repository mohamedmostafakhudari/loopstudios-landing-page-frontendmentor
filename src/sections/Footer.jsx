import React from "react";
import FooterItems from "../components/FooterItems";
import Socials from "../components/Socials";
export default function Footer() {
  return (
    <footer className="bg-black py-20 md:py-14 relative">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between md:p-0">
        <div>
          <div>
            <img src="./assets/images/logo.svg" alt="logo" />
          </div>
          <ul className="mt-12 space-y-8 flex flex-col md:space-y-0 md:flex-row md:gap-8 md:mt-6">
            <FooterItems />
          </ul>
        </div>
        <div>
          <ul className="flex gap-6 mt-14 justify-center md:justify-end md:m-0">
            <Socials />
          </ul>
          <p className="text-veryDarkGray mt-6">
            &copy; 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute bg-white bottom-0 inset-x-0 text-center">
        <p>
          &copy; <span>Mohamed Mostafa</span>
        </p>
      </div>
    </footer>
  );
}
