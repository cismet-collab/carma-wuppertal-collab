import { useContext } from "react";
import Icon from "react-cismap/commons/Icon";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="wasserstand"
      sectionTitle="Max. Wassertiefe abfragen"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            Durch Anklicken der Schaltfläche <Icon name="crosshairs" /> oberhalb
            des Kontrollfeldes aktivieren Sie den Modus zur Abfrage der
            maximalen Wassertiefen, die für jede 1x1 m Rasterzelle berechnet
            worden sind. Anstelle der Schaltfläche erscheint in diesem Modus das
            Anzeigefeld "Maximale Wassertiefe" zunächst mit einem kurzen
            Bedienungshinweis.
          </p>
          <p>
            Ein Klick auf eine beliebige Position in der Karte bewirkt jetzt,
            dass die Zelle in der Karte markiert und der zugehörige Maximalwert
            der Wassertiefe in diesem Feld angezeigt wird. In der 2D-Ansicht wird 
            die abgefragte Zelle durch einen schwarzen Rahmen mit transparenter 
            grauer Füllung markiert. In der 3D-Ansicht wird dafür ein schwarz-gelber 
            Pegel-Balken dargestellt. Damit man diesen auch aus größerer Betrachtungshöhe 
            schnell entdeckt, wird ggf. zusätzlich ein senkrechter Lichtstrahl auf 
            den Pegel-Balken ausgeprägt. Die 3D-Hochwasseroberfläche bildet in den 
            überfluteten Bereichen eine durchgängige Fläche über der natürlichen 
            Geländeoberfläche, die aber bei höheren künstlichen Objekten wie Gebäuden 
            oder Autos nicht sichtbar ist. Trotzdem können Sie die Wassertiefe über dem 
            natürlichen Gelände auch in diesen Bereichen abfragen. Der Pegel-Balken 
            verschwindet dann ganz oder teilweise in den künstlichen Objekten.
          </p> 
          <p>  
            Die Anzeige der maximalen Wassertiefe wird auf volle 10 cm gerundet 
            (z. B. "ca. 50 cm"), um die beschränkte Aussagekraft der
            Simulationsergebnisse zu verdeutlichen. Aus demselben Grund werden
            berechnete Wassertiefen von mehr als 150 cm nur als "&lt; 150 cm"
            angezeigt.
          </p>
          <p>
            Wenn Sie nach der Abfrage einer maximalen Wassertiefe eine andere
            Simulation auswählen, wird der angezeigte Zellwert automatisch
            aktualisiert. So können Sie für eine bestimmte Position bequem alle
            angebotenen Simulations-Szenarien durchgehen. Auch im Abfragemodus
            können Sie die Karte mit gedrückter linker Maustaste verschieben.
            Wenn Sie auf diese Weise oder durch{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("positionieren")}
            >
              Positionierung über einen Suchbegriff
            </a>{" "}
            einen Kartenausschnitt auswählen, wird das Anzeigefeld auf seinen
            Startzustand zurückgesetzt. Mit einem Klick auf das{" "}
            <Icon name="close" /> Symbol rechts oben im Anzeigefeld beenden Sie
            den Abfragemodus.
          </p>
        </div>
      }
    />
  );
};
export default Component;
