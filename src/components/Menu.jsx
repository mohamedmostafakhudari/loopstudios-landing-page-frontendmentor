import React from "react";
import NavItems from "./NavItems";
import { useEffect } from "react";
export default function Menu({ openMenu, setOpenMenu }) {
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openMenu]);
  return (
    <div
      className={`absolute min-h-screen flex flex-col bg-black inset-0 -inset-x-4 duration-300 ease-in-out ${
        openMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="py-10">
        <div className="flex items-center justify-between px-4">
          <div className="flex-1">
            <img src="./assets/images/logo.svg" alt="logo" />
          </div>
          <div className="flex-1 flex justify-end md:hidden">
            <img
              src="./assets/images/icon-close.svg"
              alt="openMenu"
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </nav>
      <div className="flex-1 flex items-center px-2">
        <NavItems />
      </div>
    </div>
  );
}
