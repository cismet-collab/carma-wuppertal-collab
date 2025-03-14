import React from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";
import KFW_Logo from "./assets/KFW_Logo.jpg";
import BMWSB_Logo from "./assets/BMWSB_Logo.png";

const Component = ({ email }) => {
  return (
    <GenericModalMenuSection
      sectionKey="zwilling"
      sectionTitle="Urbaner Digitaler Zwilling"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            <img
              style={{ marginBottom: 0, marginLeft: 20 }}
              target="_zwilling"
              alt="Logo DigiTal Zwilling"
              height="120"
              align="right"
              src={Logo_DigiTalZwilling}
            />
            <div>
              Die Hochwassergefahrenkarte basiert auf dem <b>DigiTal Zwilling</b>, 
              dem{" "}  
              <a href="https://smart.wuppertal.de/projekte/digital-zwilling.php" title={""}>
                Urbanen Digitalen Zwilling der Stadt Wuppertal
              </a>. Sie stellt einen themenspezifischen Ausschnitt aus den Daten und 
              Methoden des DigiTal Zwillings für den ebenfalls spezifischen Anwendungsfall 
              "Hochwasser-Gefährdungsbeurteilung" bereit. Im Konzept des DigiTal Zwillings implementiert die 
              Hochwassergefahrenkarte einen {" "}<b>Teilzwilling</b>, der dem <b>Fachzwilling Klimawandel</b>{" "}  
              zuzuordnen ist. 
            </div>           
          </p>
          <p>
            Der Aufbau des DigiTal Zwillings ist eines der drei großen Umsetzungsprojekte 
            aus der bis Ende 2026 laufenden Phase B des Wuppertaler Smart-City-Projekts 
            {" "}  
            <a href="https://smart.wuppertal.de/strategie/strategieprozess.php" title={""}>
              smart.wuppertal
            </a>. Das Projekt wird im Rahmen der dritten Session des Förderprogramms 
            {" "}  
            <a href="https://www.bmwsb.bund.de/Webs/BMWSB/DE/themen/stadt-wohnen/staedtebau/smart-cities/smart-cities-node.html" title={""}>
              Smart Cities made in Germany
            </a>{" "}vom Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen gefördert. Als Projektträger fungiert die 
            Kreditanstalt für Wiederaufbau KfW. 
          </p>

          <table width="100%" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td style={{ textAlign: "left", paddingBottom: 10 }}>
                  <a href="https://www.bmwsb.bund.de/Webs/BMWSB/DE/startseite/startseite-node.html" title={""}>
                    <img
                      target="_zwilling"
                      alt="Logo BMWSB"
                      height="120"
                      src={BMWSB_Logo}
                    />
                  </a>
                </td>
                <td style={{ textAlign: "left", paddingBottom: 10 }}>
                  <a href="https://www.kfw.de/kfw.de.html" title={""}>
                    <img
                      target="_zwilling"
                      alt="Logo KFW"
                      height="120"
                      src={KFW_Logo}
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Fachspezifische Fragen, Hinweise und Anregungen zur Hochwassergefahrenkarte 
            richten Sie bitte an die E-Mail-Adresse {" "} 
            <a href="mailto:starkregen@stadt.wuppertal.de">starkregen@stadt.wuppertal.de</a> {" "} 
            mit dem Betreff <b>Hochwassergefahrenkarte Wuppertal</b>. 
          </p>
        </div>
      }
    />
  );
};
export default Component;
