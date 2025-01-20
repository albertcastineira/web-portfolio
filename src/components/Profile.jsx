import React from "react";
import AlbertPhoto from "../assets/images/Photo.webp";
import ActionButton from "./ActionButton";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Profile({translations}) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-[35%_65%]">
      <div className="photo">
        <img
          src={AlbertPhoto}
          className="h-[14em] w-auto mx-auto md:float-end sm:px-4"
          alt="Albert"
        />
      </div>
      <div className="welcome px-4 text-center md:text-left mt-8 md:mt-0">
        <span className="bg-transparent border-2 border-yellow-400 relative top-1 text-yellow-400 font-semibold px-4 py-1 rounded">
          {translations.CurrentlyWorkingOn}
        </span>

        <h1 className="text-white text-2xl md:text-5xl font-inter font-semibold my-4">
          👋 {translations.Hey} <span className="text-yellow-400">Albert</span>
        </h1>

        <p className="text-[#888585] text-lg md:text-md font-semibold">
          <span className="text-yellow-400">
            {" "}
            {translations.FullStackDeveloper}
          </span>{" "}
          {translations.Desc1}
          <br />
          {translations.Desc2}
        </p>
        <div className="icons mt-3">
          <ActionButton
            link={"https://www.linkedin.com/in/albert-casti%C3%B1eira-aranda/"}
            icon={
              <Icon
                className="inline-block mr-1 relative -top-0.5"
                icon="mdi:linkedin"
                width="26"
                height="26"
              />
            }
            text={"LinkedIn"}
          />

          <ActionButton
            link={"https://github.com/albertcastineira"}
            icon={
              <Icon
                className="inline-block mr-1 relative -top-0.5"
                icon="mdi:github"
                width="26"
                height="26"
              />
            }
            text={"Github"}
          />

          <ActionButton
            link={"mailto:albertcastiaran@gmail.com"}
            icon={
              <Icon
                className="inline-block mr-1 relative -top-0.5"
                icon="mdi:email"
                width="26"
                height="26"
              />
            }
            text={translations.Contact}
          />
        </div>
      </div>
    </div>
  );
}
