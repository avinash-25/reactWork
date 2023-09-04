import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Content() {
  return (
    <>
      <h1>Creative designer & developer</h1>
      <p class="text-secondary-emphasis">
        hi i am julieus caesar a extraordinary ui/ux designer and frontend
        developer based in the philipines
      </p>
      <h3>
        see my works <FontAwesomeIcon icon={faArrowRight} />
      </h3>
    </>
  );
}

export default Content;
