import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faImages, faPlane } from "@fortawesome/free-solid-svg-icons";
import ObliqueIcon from "../ObliqueIcon";

const Component = ({ showOverlayFromOutside }) => {
  return (
    <GenericModalMenuSection
      sectionKey="3D-Funktionen"
      sectionTitle="3D-Funktionen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Im 3D-Modus bieten wir Ihnen eine einfache und intuitiv bedienbare
            Funktion zum Einblenden und Herunterladen von{" "}
            <strong>Schrägluftbildern</strong> an. Das Angebot ist derzeit noch
            beschränkt auf unsere aktuellsten Luftbilder, die im März 2024
            aufgenommen worden sind. Diese Bilder stehen in einer reduzierten
            Auflösung von 5 cm pro Pixel unter der Open-Data-Lizenz CC-BY-4.0.
            Diese Lizenz verpflichtet Sie, bei einer Veröffentlichung den Namen
            des Herausgebers zu nennen. Dazu haben wir in den Bilddateien links
            oben den Hinweis "CC-BY-4.0 - DigiTal Zwilling / Geoportal
            Wuppertal" eingeblendet, den Sie bei einer Publikation nicht
            entfernen dürfen.
          </p>
          <p>
            Aktivieren Sie zuerst mit dem Wechselschalter{" "}
            <ObliqueIcon size="small" />{" "}in der Kopfzeile den Modus 
            "Schrägluftbilder". Der Rand desjenigen Schrägluftbildes, das die 
            Mitte des aktuellen Modellausschnitts in Ihrer Blickrichtung am 
            besten abbildet, wird jetzt stets mit einem weißen Band auf der 
            Geländeoberfläche markiert ("Fußabdruck des Schrägluftbilds"). 
            Zusätzlich werden einige spezielle Steuerelemente angezeigt. Mit 
            der Schaltfläche{" "}<strong>Flug zum Bild</strong> wechseln Sie in 
            die Aufnahmeperspektive dieses Schrägluftbilds, das dann direkt und
            unverzerrt als Rechteck eingeblendet wird ("Bildvorschau"). Mit den
            Schaltflächen <strong>Bild öffnen</strong> und{" "}
            <strong>Herunterladen</strong> können Sie das Bild direkt zur
            Betrachtung in einem neuen Reiter (Tab) Ihres Browsers öffnen oder
            zur Betrachtung in einem Bildbearbeitungsprogramm auf Ihrem Rechner
            speichern (Dateigröße etwa 4,7 MByte). Mit den Pfeiltasten können
            Sie zum jeweils benachbarten Schrägluftbild wechseln oder die
            Ansicht um 90 Grad in Pfeilrichtung drehen. Die 4 angebotenen
            Blickrichtungen orientieren sich dabei an der nordwestlichen
            Ausrichtung der Flugstreifen des Bildflugs, nicht an den
            Himmelsrichtungen. Die Bildwechsel mit den Pfeiltasten funktionieren
            sowohl bei der Anzeige der Fußabdrücke wie auch bei laufender
            Bildvorschau.
          </p>
          <p className="hide-on-small-screens">
            <HelpOverlayLink
              onClick={() => {
                showOverlayFromOutside("OBLIQUE");
              }}
            >
              zur Hilfefolie
            </HelpOverlayLink>
          </p>
        </div>
      }
    />
  );
};
export default Component;
