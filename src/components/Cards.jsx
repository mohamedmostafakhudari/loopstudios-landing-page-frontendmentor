import React from "react";
import Card from "../components/Card";
export default function Cards({ items }) {
  return (
    <>
      {items.map(({ name, imgSrc }) => (
        <Card name={name} imgSrc={imgSrc} />
      ))}
    </>
  );
}
