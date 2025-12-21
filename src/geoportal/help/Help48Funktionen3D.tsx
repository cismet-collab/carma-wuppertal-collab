import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";

const Component = ({ showOverlayFromOutside }) => {
  return (
    <GenericModalMenuSection
      sectionKey="3D-Funktionen"
      sectionTitle="3D-Funktionen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Im 3D-Modus bieten wir Ihnen eine einfache und intuitiv bedienbare Funktion 
            zum Einblenden und Herunterladen von <strong>Schrägluftbildern</strong> an. 
            Das Angebot ist derzeit noch beschränkt auf unsere aktuellsten Luftbilder, 
            die im März 2024 aufgenommen worden sind. Diese Bilder stehen in einer 
            reduzierten Auflösung von 5 cm pro Pixel unter der Open-Data-Lizenz CC-BY-4.0. 
            Diese Lizenz verpflichtet Sie, bei einer Veröffentlichung den Namen des 
            Herausgebers zu nennen. Dazu haben wir in den Bilddateien links oben den 
            Hinweis "CC-BY-4.0 - DigiTal Zwilling / Geoportal Wuppertal" eingeblendet, 
            den Sie bei einer Publikaton nicht entfernen dürfen.
          </p>
          <p>
            Aktivieren Sie zuerst mit dem Wechselschalter den Modus "Schrägluftbilder". 
            Der Rand  desjenigen Schrägluftbildes, das die Mitte des aktuellen Modellausschnitts 
            in Ihrer Blickrichtung am besten abbildet, wird jetzt stets mit einem weißen Band auf 
            der Geländeoberfläche markiert. Zusätzlich werden einige spezielle Steuerelemente 
            angezeigt. Mit der Schaltfläche "Flug zum Bild" wechseln Sie in die Aufnahmeperspektive 
            dieses Schrägluftbilds, das dann direkt und unverzerrt als Rechteck eingeblendet wird. 
            Mit den Schaltflächen <strong>Bild öffnen</strong> und <strong>Herunterladen</strong> 
            können Sie das Bild direkt zur Betrachtung in einem neuen Reiter (Tab) Ihres Browsers 
            öffnen oder zur Betrachtung ein einem Bildverarbeitungsprogramm auf Ihrem Rechner speichern 
            (Dateigröße etwa 4,7 MByte). Mit den Pfeiltasten können Sie zum jeweils benachbarten 
            Schrägluftbild wechseln oder die Ansicht um 90 Grad drehen. Die 4 angebotenen Blickrichtungen 
            orientieren sich dabei an der nordwestlichenAusrichtung der Flugstreifen des Bildflugs, 
            nicht an den Himmelsrichtungen. 
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
