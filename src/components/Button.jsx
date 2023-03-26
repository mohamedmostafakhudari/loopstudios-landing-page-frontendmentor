import React from "react";

export default function Button({ text }) {
  return (
    <button className="uppercase tracking-[4px] text-sm text-black bg-white border border-black p-2 px-8 cursor-pointer rounded-sm duration-200 ease-in-out hover:bg-black hover:text-white">
      {text}
    </button>
  );
}
