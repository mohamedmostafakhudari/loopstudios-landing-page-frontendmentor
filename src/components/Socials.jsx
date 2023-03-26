import React from "react";

export default function Socials() {
  return (
    <>
      <li className="relative group">
        <a href="#">
          <img src="./assets/images/icon-facebook.svg" alt="facebook" />
        </a>
        <div className="absolute h-[2px] bg-white inset-x-0 top-full translate-y-2 opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>
      </li>
      <li className="relative group">
        <a href="#">
          <img src="./assets/images/icon-twitter.svg" alt="twitter" />
        </a>
        <div className="absolute h-[2px] bg-white inset-x-0 top-full translate-y-2 opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>
      </li>
      <li className="relative group">
        <a href="#">
          <img src="./assets/images/icon-pinterest.svg" alt="pinterest" />
        </a>
        <div className="absolute h-[2px] bg-white inset-x-0 top-full translate-y-2 opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>
      </li>
      <li className="relative group">
        <a href="#">
          <img src="./assets/images/icon-instagram.svg" alt="instagram" />
        </a>
        <div className="absolute h-[2px] bg-white inset-x-0 top-full translate-y-2 opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>
      </li>
    </>
  );
}
