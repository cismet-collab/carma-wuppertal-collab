import React, { useContext } from "react";
import Icon from "react-cismap/commons/Icon";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="wechsel2D3D"
      sectionTitle="3D-Betrachtung"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            Mit dem Wechselschalter <b>3D</b> bzw. <b>2D</b> in der Werkzeugleiste links 
            oben im Kartenfenster können Sie zwischen der 2D-Kartenansicht und einer 
            3D-Visualisierung der überfluteten Bereiche umschalten. In der 3D-Ansicht wird
            die Wasseroberfläche in den überfluteten Bereichen wie eine zweite digitale 
            Geländeoberfläche in einem transparenten Blauton dargestellt. Dadurch 
            entsteht ein anschauliches Bild von der Überflutungssituation. Als Grundlage
            dieser Darstellung dient ein sog.{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("datengrundlage")}
            >
              3D-Mesh
            </a>, das aus Luftbildern berechnet worden ist.
            Beim Zurückwechseln von 3D nach 2D wird die Ansicht zunächst nach Norden ausgerichtet und 
            die Senkrechtperspektive eingestellt, sodass sich eine kartenartige Darstellung ergibt.                  
          </p>
          <p>
            Im 3D-Modus können wie in der 2D-Kartenbetrachtung die Werkzeuge "<b>+</b>" und "<b>-</b>"
            zum <b>Vergrößern bzw. Verkleinern</b> des Ansichtsmaßstabes in festen Zoomstufen verwendet werden. 
            Alternativ können sie dazu das Mausrad verwenden oder auf einem Touchscreen mit 2 Fingern
            einen Bereich aufziehen oder zusammenschieben ("Pinch-Geste"). <b>Verschieben</b> können Sie den 
            betrachteten Ausschnitt ebenfalls wie im 2D-Modus mit gedrückter linker Maustaste oder auf einem 
            Touchscreen durch Ziehen mit einem Finger. Ein kombiniertes <b>Drehen und Kippen der 3D-Ansicht</b> 
            ist mit gedrückter linker Maustaste bei gleichzeitigem Drücken von [Strg]/[ctrl] auf der Tastatur 
            möglich. Auf einem Touchscreen kann die 3D-Ansicht durch vertikales Ziehen mit 2 parallelen Fingern 
            gekippt und durch Rotieren von zwei Fingern um einen gemeinsamen Mittelpunkt gedreht werden.  
          </p>
        </div>
      }
    />
  );
};
export default Component;
Component.defaultProps = {
  showModalMenu: () => {},
};

