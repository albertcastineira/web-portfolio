import React from "react";
import AlbertPhoto from "../assets/images/Photo.webp";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Profile({ translations }) {
  return (
    <div className="text-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="photo text-right">
          <img
            src={AlbertPhoto}
            className="h-[15em] w-auto mx-auto md:mx-6 md:float-end rounded-md border-2 border-white"
            alt="Albert"
          />
        </div>
        <div className="content text-center md:text-left mt-4 md:mt-0 px-4 md:px-0">
          <h1 className="text-yellow-400 font-extrabold text-5xl">
            <span className="text-white">Albert</span> <br /> Castiñeira
          </h1>

          <p className="text-[#7e7474] text-md mt-6">
            <span className="text-white font-semibold">
              {translations.FullStackDeveloper}{" "}
            </span>
            {translations.Desc1}
            {translations.Desc2}
          </p>

          <div className="mt-8">
            <button
              className="bg-yellow-400 text-black rounded-md px-8 py-2 mr-4 hover:bg-yellow-500"
              onClick={() => window.open("mailto:albertcastiaran@gmail.com", "_blank", "noreferrer")}
            >
              <Icon
                icon={"grommet-icons:contact"}
                style={{ display: "inline-flex", marginRight: "0.5em" }}
                width="18"
                height="18"
              />
              {translations.Contact}
            </button>
            <button
              className="text-white mx-1 hover:scale-110"
              onClick={() => window.open("https://www.linkedin.com/in/albert-casti%C3%B1eira-aranda/", "_blank", "noreferrer")}
            >
              <Icon
                icon={"mdi:linkedin"}
                style={{ display: "inline-flex", marginRight: "0.5em" }}
                width="30"
                height="30"
              />
            </button>
            <button
              className="text-white mx-1 hover:scale-110"
              onClick={() => window.open("https://github.com/albertcastineira", "_blank", "noreferrer")}
            >
              <Icon
                icon={"mdi:github"}
                style={{ display: "inline-flex", marginRight: "0.5em" }}
                width="30"
                height="30"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
