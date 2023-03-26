import React from "react";

export default function NavItem({ title }) {
  return (
    <>
      <li className="text-darkGray text-2xl tracking-wider duration-200 ease-in-out cursor-pointer hover:text-white md:hidden">
        <a href="#">{title}</a>
      </li>
      <li className="hidden text-white capitalize relative w-16 text-center group py-2 md:block">
        <a href="#">{title}</a>
        <div className="bg-white h-[3px] absolute top-full left-5 right-5 opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>
      </li>
    </>
  );
}
