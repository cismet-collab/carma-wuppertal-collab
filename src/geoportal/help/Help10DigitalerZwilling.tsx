import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import GenericDigitalTwinReferenceTextComponent from "../../commons/GenericDigitalTwinReferenceTextComponent";
import { Link } from "react-scroll";

interface DigitalTwinProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
}

const Component = ({ setAppMenuActiveMenuSection }: DigitalTwinProps) => {
  return (
    <GenericModalMenuSection
      sectionKey="zwilling"
      sectionTitle="Urbaner Digitaler Zwilling"
      sectionBsStyle="warning"
      sectionContent={
        <GenericDigitalTwinReferenceTextComponent
          pretext={
            <>
              Willkommen in der Portalkomponente zum{" "}
              <strong>DigiTal Zwilling</strong>, dem{" "}
              <a
                target="_legal"
                href="https://smart.wuppertal.de/projekte/digital-zwilling.php"
              >
                Urbanen Digitalen Zwilling der Stadt Wuppertal
              </a>
              . Hier haben Sie Zugang zu allen Datenquellen des DigiTal
              Zwillings und allen allgemeinen Visualisierungsmethoden und
              Funktionen, die für eine größere Anzahl von Datenquellen und
              Anwendungssituationen von Nutzen sind. Zum DigiTal Zwilling
              gehören auch die sogenannten <strong>Teilzwillinge</strong>. Das
              sind Anwendungen, die einen themenspezifischen Ausschnitt aus den
              Daten und Methoden des DigiTal Zwillings für einen spezifischen
              Anwendungsfall darstellen, z. B. die{" "}
              <a
                target="_legal"
                href="https://digital-twin-wuppertal-live.github.io/rainhazardmap/"
              >
                Starkregengefahrenkarte
              </a>
              . In den Teilzwillingen finden Sie weitergehende, spezielle
              Visualisierungsmethoden und Funktionen, die wir im Geoportal nicht
              anbieten. Zu den verfügbaren Teilzwillingen gelangen Sie über den
              Dialog{" "}
              <Link
                className="renderAsLink"
                containerId="myMenu"
                smooth={true}
                delay={100}
                onClick={() => setAppMenuActiveMenuSection("karteninhalte")}
              >
                Karteninhalte hinzufügen
              </Link>
              . In Vorbereitung befinden sich außerdem{" "}
              <strong>Fachzwillinge</strong>, die als themenspezifische
              Konfigurationen des Geoportals realisiert werden, z. B. zur
              zukunftsfähigen Mobilität, zu den Parks und Grünanlagen oder zum
              Klimawandel. Auch in den Fachzwillingen werden Sie
              Visualisierungen und Funktionen finden, die wir im Geoportal nicht
              oder zumindest nicht an prominenter Stelle anbieten können.
            </>
          }
        />
      }
    />
  );
};
export default Component;
