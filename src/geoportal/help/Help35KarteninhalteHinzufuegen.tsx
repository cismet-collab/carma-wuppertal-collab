import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import addLayers from "../secondary/assets/add-layers.png";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="karteninhalte"
      sectionTitle="Karteninhalte hinzufügen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          Das Herzstück des Geoportals ist der Dialog "Karteninhalte hinzufügen" 
          (Symbol {" "}<img src={addLayers} style={{ height: "18px" }} />{" "} in der Menüleiste), 
          mit dem Sie das gesamte Datenangebot des DigiTal Zwillings durchsuchen 
          und für Sie interessante Inhalte als Kartenebene hinzufügen können. Um 
          Ihnen die Orientierung in dem umfangreichen Angebot zu erleichtern, sind 
          die Karteninhalte in vertikaler Richtung nach ihrer Art und in horizontaler 
          Richtung nach ihrem Thema geordnet. Wenn Sie also im Navigationsbereich 
          auf der linken Seite z. B. auf Icon "Kartenebenen" klicken, werden 
          Vorschaubilder zu allen Kartenebenen in den Hauptbereich des Dialogs 
          geladen. Wenn Sie dann in der horizontalen Navigationsleiste 
          im Kopfbereich z. B. auf "Planung" klicken, wird im Hauptbereich auf den 
          Beginn des Blocks der Kartenebenen zum Thema "Planung" positioniert.
        </div>
      }
    />
  );
};
export default Component;
