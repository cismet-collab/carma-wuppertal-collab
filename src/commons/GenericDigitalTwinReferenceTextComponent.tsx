import React, { type ReactNode } from "react";
import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";
import KFW_Logo from "./assets/KFW_Logo.jpg";
import BMWSB_Logo from "./assets/BMWSB_Logo.png";

interface GenericDigitalTwinReferenceTextComponentProps {
  preText?: string | ReactNode;
}

const imageStyle = { height: "120px" };

const GenericDigitalTwinReferenceTextComponent: React.FC = ({
  preText,
}: GenericDigitalTwinReferenceTextComponentProps) => {
  return (
    <div>
      <p>
        <img
          style={{
            marginBottom: 0,
            marginLeft: 20,
            float: "right",
            ...imageStyle,
          }}
          alt="Logo DigiTal Zwilling"
          height="120"
          src={Logo_DigiTalZwilling}
        />
        {preText ? (
          preText
        ) : (
          <div>
            Diese Anwendung basiert auf dem <b>DigiTal Zwilling</b>, dem{" "}
            <a
              href="https://smart.wuppertal.de/projekte/digital-zwilling.php"
              title="DigiTal Zwilling"
              target="_blank"
              rel="noopener noreferrer"
            >
              Urbanen Digitalen Zwilling der Stadt Wuppertal
            </a>
            . Im Konzept des DigiTal Zwillings implementiert die Anwendung einen{" "}
            <b>Teilzwilling</b>, also einen themenspezifischen Ausschnitt aus
            den Daten und Methoden des DigiTal Zwillings für einen spezifischen
            Anwendungsfall.
          </div>
        )}
      </p>
      <p>
        Der Aufbau des DigiTal Zwillings ist eines der drei großen
        Umsetzungsprojekte aus der bis Ende 2026 laufenden Phase B des
        Wuppertaler Smart-City-Projekts{" "}
        <a
          href="https://smart.wuppertal.de/strategie/strategieprozess.php"
          title="Eine Smart City Strategie für Wuppertal"
          target="_blank"
          rel="noopener noreferrer"
        >
          smart.wuppertal
        </a>
        . Das Projekt wird im Rahmen der dritten Session des Förderprogramms{" "}
        <a
          href="https://www.bmwsb.bund.de/Webs/BMWSB/DE/themen/stadt-wohnen/staedtebau/smart-cities/smart-cities-node.html"
          title="Smart Cities: Stadtentwicklung im digitalen Zeitalter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Smart Cities made in Germany
        </a>{" "}
        vom Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen
        gefördert. Als Projektträger fungiert die Kreditanstalt für Wiederaufbau
        KfW.
      </p>

      <table width="100%" style={{ marginTop: 10 }}>
        <tbody>
          <tr>
            <td style={{ textAlign: "left", paddingBottom: 10 }}>
              <a
                href="https://www.bmwsb.bund.de/Webs/BMWSB/DE/startseite/startseite-node.html"
                title={""}
                target="_zwilling"
              >
                <img
                  alt="Logo BMWSB"
                  height="120"
                  src={BMWSB_Logo}
                  style={imageStyle}
                />
              </a>
            </td>
            <td style={{ textAlign: "left", paddingBottom: 10 }}>
              <a
                target="_zwilling"
                href="https://www.kfw.de/kfw.de.html"
                title={""}
              >
                <img
                  alt="Logo KFW"
                  height="120"
                  src={KFW_Logo}
                  style={imageStyle}
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Fachspezifische Fragen, Hinweise und Anregungen zu dieser Anwendung
        richten Sie bitte an die E-Mail-Adresse{" "}
        <a href="mailto:smart@stadt.wuppertal.de">smart@stadt.wuppertal.de</a>.
      </p>
    </div>
  );
};

export default GenericDigitalTwinReferenceTextComponent;
