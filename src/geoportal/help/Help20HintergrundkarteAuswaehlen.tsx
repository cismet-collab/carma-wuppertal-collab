import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { Link } from "../../helper-overlay/components/Link";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="hintergrundkarte"
      sectionTitle="Hintergrundkarte auswählen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Mit dem Wechselschalter Karte / Luftbild rechts oben können Sie jederzeit zwischen einer klassischen 
            Karte und einer Luftbildkarte als Hintergrundkarte wechseln. Durch Anklicken des Hintergrund-Steuerelements 
            rechts neben dem Wechselschalter öffnen Sie einen Dialog mit einer größeren Auswahl an Karten bzw. 
            Luftbildkarten. Im aufgeklappten Zustand dieses Dialogs werden zusätzlich Informationen zur Eignung 
            und zum Inhalt der jeweils selektierten Karte angezeigt. Die von Ihnen hier ausgewählte Hintergrundkarte 
            wird sofort geladen und zusätzlich als Belegung für den Wechselschalter gespeichert. Wenn Sie den Mauszeiger 
            über die beiden Schaltflächen des Wechselschalters bewegen, werden die aktuell eingestellten Hintergrundkarten 
            als Tooltip angezeigt.
          </p>          
          <p>
            Das identische Hintergrund-Steuerelement finden Sie auch als erstes (linkes) Kartensteuerelement oben im 
            Kartenfenster. Es dient nämlich auch als zentrales Steuerelement für alle geladenen Kartenebenen, was vor 
            allem für kleine Bildschirme vorteilhaft ist. 
          </p>
          <p>
            Im 3D-Modus bieten wir Ihnen über den Wechselschalter Karte / Luftbild zwei fest eingestellte 3D-Modelle an.
          </p> 
          <p>
            <Link
              onClick={() => {
                showOverlayFromOutside("GAZETTEER_SUCHE");
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
