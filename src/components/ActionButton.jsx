import React from "react";

export default function ActionButton({link, icon, text}) {
  return (
    <button
      onClick={() => window.open(link, "_blank", "noreferrer")}
      target="_blank"
      rel="noreferrer"
      className="bg-yellow-400 hover:bg-black hover:text-yellow-400 border border-yellow-400 p-3 text-black font-bold rounded-sm mr-4"
    >
      {icon}
      {text}
    </button>
  );
}
