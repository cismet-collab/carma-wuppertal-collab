import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const Component = ({ showOverlayFromOutside }) => {
  return (
    <GenericModalMenuSection
      sectionKey="hintergrundkarte"
      sectionTitle="Hintergrundkarte auswählen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Mit dem Wechselschalter "Karte / Luftbild" oben rechts können Sie
            jederzeit zwischen einer klassischen Karte und einer Luftbildkarte
            wechseln. Wenn Sie auf das Hintergrund-Steuerelement{" "}
            <FontAwesomeIcon icon={faLayerGroup} /> neben dem Wechselschalter
            klicken, öffnet sich ein Dialog, in dem Sie aus weiteren Karten und
            Luftbildkarten auswählen können. Wenn dieser Dialog aufgeklappt ist,
            sehen Sie auch Informationen darüber, wofür diese Karten geeignet
            sind und was sie enthalten. Die Hintergrundkarte, die Sie auswählen,
            wird sofort geladen und als Einstellung für den Wechselschalter
            gespeichert. Wenn Sie mit dem Mauszeiger über die Schaltflächen des
            Wechselschalters fahren, wird Ihnen die aktuell eingestellte Karte
            als Hinweis angezeigt.
          </p>
          <p>
            Das gleiche Hintergrund-Steuerelement finden Sie auch oben im
            Kartenfenster als erstes (linkes) Kartensteuerelement. Es dient
            nämlich auch als zentrales Steuerelement für alle geladenen
            Kartenebenen, was vor allem auf kleinen Bildschirmen nützlich ist.
          </p>
          <p>
            Im 3D-Modus können Sie mit dem Schalter "Karte / Luftbild" zwei
            verschiedene 3D-Modelle auswählen. Mit der Schaltfläche "Karte"
            laden Sie ein einfaches 3D-Modell von Wuppertal, das aus einem
            größeren Modell für ganz NRW erstellt wurde. Es stellt einen
            Ausschnitt des für ganz Nordrhein-Westfalen vorliegenden
            3D-Gebäudemodells der Landesvermessung NRW (Geobasis NRW) in der
            inhaltlichen Ausbaustufe "Level of Detail 2 (LoD2)" dar. Dieses
            Modell umfasst einfache Gebäudeformen mit standardisierten
            Dachformen. Mit der Schaltfläche "Luftbild" laden Sie ein 3D-Mesh,
            das aus Bilddaten erstellt wurde, die durch eine Befliegung im
            Auftrag der Stadt Wuppertal im März 2024 gewonnen wurden. Dabei wird
            aus den Bilddaten ein digitales Oberflächenmodell in Form eines
            Dreiecksnetzes berechnet, auf das die Bilder projiziert werden.
            Solche Modelle können Fehler und Lücken enthalten, vor allem dort,
            wo verschiedene Ebenen übereinander liegen, wie zum Beispiel bei den
            Schwebebahnhöfen.
          </p>
          <p className="hide-on-small-screens">
            <HelpOverlayLink
              onClick={() => {
                showOverlayFromOutside("HINTERGRUND");
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
