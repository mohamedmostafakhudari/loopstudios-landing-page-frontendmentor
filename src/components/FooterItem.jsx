import React from "react";

export default function FooterItem({ item }) {
  return (
    <li className="capitalize text-white text-center text-xl group relative w-18 py-2 md:text-base md:text-left">
      <a href="#">{item}</a>
      <div className="absolute bg-white h-[3px] w-8 left-1/2 -translate-x-1/2 top-full opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>
    </li>
  );
}
