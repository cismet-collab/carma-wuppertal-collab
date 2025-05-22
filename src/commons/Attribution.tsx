import React from "react";

type AttributionProps = {
  applicationName: string;
  applicationVersion: string;
  skipTeilzwilling?: boolean;
};

export const Attribution: React.FC<AttributionProps> = ({
  applicationName = document.title,
  applicationVersion,
  skipTeilzwilling = false,
}) => {
  return (
    <div>
      <b>
        {!skipTeilzwilling && <span>Teilzwilling </span>}
        {applicationName} {applicationVersion}
      </b>{" "}
      powered by{" "}
      <a href="https://cismet.de/" target="_cismet">
        cismet GmbH
      </a>{" "}
      auf Basis von{" "}
      <a href="http://leafletjs.com/" target="_cismet">
        Leaflet
      </a>{" "}
      und{" "}
      <a href="https://github.com/cismet/carma" target="_cismet">
        carma
      </a>{" "}
      |{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://cismet.de/datenschutzerklaerung.html"
      >
        Datenschutzerklärung
      </a>{" "}
      |{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://cismet.de/impressum.html"
      >
        Impressum
      </a>{" "}
    </div>
  );
};

export default Attribution;
