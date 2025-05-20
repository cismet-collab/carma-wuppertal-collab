import React from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import GenericDigitalTwinReferenceTextComponent from "../../commons/GenericDigitalTwinReferenceTextComponent";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="zwilling"
      sectionTitle="Urbaner Digitaler Zwilling"
      sectionBsStyle="warning"
      sectionContent=<GenericDigitalTwinReferenceTextComponent pretext={
        <>
          Willkommen in der Portalkomponente zum <strong>DigiTal Zwilling</strong>, 
          dem{" "} <a target="_legal" href="https://smart.wuppertal.de/projekte/digital-zwilling.php">
          Urbanen Digitalen Zwilling der Stadt Wuppertal</a>! Hier haben Sie Zugang 
          zu allen Datenquellen des DigiTal Zwillings und allen allgemeinen 
          Visualisierungsmethoden und Funktionen, die für eine größere Anzahl von 
          Datenquellen und Anwendungssituationen von Nutzen sind. Zum DigiTal Zwilling 
          gehören auch die sogenannten Teilzwillinge. Dies sind Anwendungen, die einen 
          themenspezifischen Ausschnitt aus den Daten und Methoden des DigiTal Zwillings 
          für einen spezifischen Anwendungsfall darstellen, z. B. die{" "} 
          <a target="_legal" href="https://digital-twin-wuppertal-live.github.io/rainhazardmap/">
          Starkregengefahrenkarte</a>. In den Teilzwillingen finden Sie weitergehende, spezielle 
          Visualisierungsmethoden und Funktionen, die wir im Geoportal nicht anbieten. Zu den 
          verfügbaren Teilzwillingen gelangen Sie über den{" "} 
          <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("karteninhalte")}>
                Dialog Karteninhalte hinzufügen
          </a>. 
        </>
        } 
      />
    />
  );
};
export default Component;
