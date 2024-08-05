import React from "react";

type AttributionProps = {
  applicationName: string;
  applicationVersion: string;
};

export const Attribution: React.FC<AttributionProps> = ({
  applicationName = document.title,
  applicationVersion,
}) => {
  return (
    <div>
      <b>
        {applicationName} #{applicationVersion}
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
      | <a href="https://www.wsw-online.de/impressum/">Impressum</a>
    </div>
  );
};

export default Attribution;