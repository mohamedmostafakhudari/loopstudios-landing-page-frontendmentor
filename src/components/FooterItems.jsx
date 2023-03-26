import React from "react";
import FooterItem from "./FooterItem";
const footerItems = ["about", "careers", "events", "products", "support"];
export default function FooterItems() {
  return (
    <>
      {footerItems.map((footerItem) => (
        <FooterItem item={footerItem} />
      ))}
    </>
  );
}
