import React from "react";

export default function Project({ title, description, chips,link }) {
  return (
    <article className="my-6">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="text-lg font-semibold text-yellow-400 hover:underline">
          {title}
        </h3>
      </a>
      <p className="mb-4 text-sm font-normal text-[#888585]">{description}</p>
      <ul className="grid grid-cols-2 md:flex gap-x-2 md:flex-row mb-2">
        {chips}
      </ul>
    </article>
  );
}
