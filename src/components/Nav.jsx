import { useState } from "react";
import Menu from "./Menu";
import NavItems from "./NavItems";
export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="py-10 relative">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <img src="./assets/images/logo.svg" alt="logo" />
        </div>
        <div className="flex-1 flex justify-end md:hidden">
          <img
            src="./assets/images/icon-hamburger.svg"
            alt="openMenu"
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer"
          />
        </div>
        <div className="hidden md:block">
          <NavItems />
        </div>
      </div>
      <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
    </nav>
  );
}
