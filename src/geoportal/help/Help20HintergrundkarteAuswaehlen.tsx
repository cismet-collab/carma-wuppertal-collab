import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { Link } from "../../helper-overlay/components/Link";
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
            Mit dem Wechselschalter Karte / Luftbild rechts oben können Sie
            jederzeit zwischen einer klassischen Karte und einer Luftbildkarte
            als Hintergrundkarte wechseln. Durch Anklicken des
            Hintergrund-Steuerelements <FontAwesomeIcon icon={faLayerGroup} />{" "}
            rechts neben dem Wechselschalter öffnen Sie einen Dialog mit einer
            größeren Auswahl an Karten bzw. Luftbildkarten. Im aufgeklappten
            Zustand dieses Dialogs werden zusätzlich Informationen zur Eignung
            und zum Inhalt der jeweils selektierten Karte angezeigt. Die von
            Ihnen hier ausgewählte Hintergrundkarte wird sofort geladen und
            zusätzlich als Belegung für den Wechselschalter gespeichert. Wenn
            Sie den Mauszeiger über die beiden Schaltflächen des
            Wechselschalters bewegen, werden die aktuell eingestellten
            Hintergrundkarten als Tooltip angezeigt.
          </p>
          <p>
            Das identische Hintergrund-Steuerelement finden Sie auch als erstes
            (linkes) Kartensteuerelement oben im Kartenfenster. Es dient nämlich
            auch als zentrales Steuerelement für alle geladenen Kartenebenen,
            was vor allem für kleine Bildschirme vorteilhaft ist.
          </p>
          <p>
            Im 3D-Modus bieten wir Ihnen über den Wechselschalter Karte /
            Luftbild zwei fest eingestellte 3D-Modelle an. Mit der Schaltfläche
            "Karte" laden Sie den Wuppertaler Ausschnitt des für ganz NRW
            vorliegenden 3D-Gebäudemodells der Landesvermessung NRW (Geobasis
            NRW) in der inhaltlichen Ausbaustufe "Level of Detail 2 (LoD2)". Das
            sind einfache Klötzchen mit standardisierten Dachformen. Mit
            "Luftbild" laden Sie ein 3D-Mesh, das weitestgehend automatisiert
            aus den Bilddaten der im Auftrag der Stadt Wuppertal im März 2024
            durchgeführten Befliegung abgeleitet wurde. Für ein 3D-Mesh wird aus
            den Bilddaten ein Digitales Oberflächenmodell in Form eines
            Dreiecksnetzes berechnet, auf das dann die Bildinhalte projiziert
            werden. Solche Modelle enthalten beim gegenwärtigen Stadt der
            Technik regelmäßig Lücken und falsche Darstellungen, vor allem dort,
            wo mehrere Ebenen vertikal übereinander liegen (z. B. bei den
            Schwebebahnhöfen).
          </p>
          <p className="hide-on-small-screens">
            <Link
              onClick={() => {
                showOverlayFromOutside("HINTERGRUND");
              }}
            >
              zur Hilfefolie
            </Link>
          </p>
        </div>
      }
    />
  );
};
export default Component;
