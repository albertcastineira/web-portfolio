import React from "react";

export default function TechnologyChip({ image, name }) {
  return (
    <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">
      <img
        className="w-3.5 h-auto"
        src={image}
      />
      {name}
    </span>
  );
}
