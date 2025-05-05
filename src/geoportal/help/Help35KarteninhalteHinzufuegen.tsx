import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import addLayers from "../secondary/assets/add-layers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="karteninhalte"
      sectionTitle="Karteninhalte hinzufügen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          Das Herzstück des Geoportals ist der Dialog "Karteninhalte hinzufügen" 
          (Symbol {" "}<img src={addLayers} style={{ height: "18px" }} />{" "} 
          in der Menüleiste), mit dem Sie das gesamte Datenangebot des DigiTal 
          Zwillings durchsuchen und für Sie interessante Inhalte als Kartenebene 
          hinzufügen können. Um Ihnen die Orientierung in dem umfangreichen Angebot 
          zu erleichtern, sind die Karteninhalte in vertikaler Richtung nach Art 
          und in horizontaler Richtung nach Thema geordnet. Wenn Sie also im 
          Navigationsbereich auf der linken Seite z. B. auf 
          {" "}<FontAwesomeIcon icon={faMap} />{" "} <strong>Kartenebenen</strong>{" "} 
          klicken, werden Vorschaubilder zu allen Kartenebenen in den Hauptbereich 
          des Dialogs geladen. Wenn Sie dann in der horizontalen Navigationsleiste 
          im Kopfbereich z. B. auf "Planung" klicken, wird im Hauptbereich auf den 
          Beginn des Blocks der Kartenebenen zum Thema "Planung" positioniert.
          Ausgehend von einem Vorschaubild können Sie entweder durch Anklicken des 
          Wechselschalters {" "}<FontAwesomeIcon icon={faChevronDown} />{" "} bzw. 
          {" "}<FontAwesomeIcon icon={faChevronUp} />{" "} einen Bereich mit 
          Informationen zu der Kartenebene aufklappen, der auch Schaltflächen zum 
          Hinzufügen und Favorisieren dieser Kartenebene enthält. Oder Sie benutzen 
          hierfür direkt die Symbole {" "}<FontAwesomeIcon icon={faPlus} />{" "} 
          und {" "}<FontAwesomeIcon icon={faStar} />{" "} im Vorschaubild. 
          "Hinzufügen" bewirkt, dass diese Kartenebene im Geoportal direkt geladen 
          und angezeigt wird. Außerdem wird für diese Kartenebene ein weiteres 
          Ebenen-Steuerelement rechts neben dem Hintergrund-Steuerelement ergänzt. 
        </div>
      }
    />
  );
};
export default Component;
