import React from "react";
import NavItem from "./NavItem";
const navItems = ["about", "careers", "events", "products", "support"];
export default function NavItems() {
  return (
    <>
      <ul className="font-header uppercase space-y-5 md:space-y-0 md:hidden">
        {navItems.map((navItem) => (
          <NavItem title={navItem} />
        ))}
      </ul>
      <ul className="hidden gap-6 md:flex">
        {navItems.map((navItem) => (
          <NavItem title={navItem} />
        ))}
      </ul>
    </>
  );
}
