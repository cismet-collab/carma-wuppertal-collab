import React, { useContext } from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";


const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="modellfehlermelden"
      sectionTitle="Fehler im Geländemodell melden"
      sectionBsStyle="danger"
      sectionContent={
        <div>
          <p>
            Wenn die Simulationsergebnisse eine Überflutungsgefährdung darstellen, 
            die im Widerspruch zu Ihren vor Ort gewonnen Erfahrungen steht, liegt 
            das wahrscheinlich an einem Fehler im Digitalen Geländemodell (DGM), 
            das bei der Simulationsberechnung verwendet wird. Woher kommen solche 
            Fehler? Das DGM wird aus Höhenmessungen abgeleitet, die mit einem 
            Laserscanner aus einem Flugzeug heraus durchgeführt werden. Bei diesem 
            Messverfahren werden Brücken, Tunnel und Gewässerdurchlässe, die für 
            die Ausbreitung des Oberflächenwassers wichtig sind, nicht erkannt. 
            Sie werden daher nachträglich manuell in das DGM eingearbeitet. Wenn 
            dabei ein für die Ausbreitung des Wassers wichtiges Element übersehen 
            wurde, wird u. U. in der Simulationsberechnung aus einer Brücke ein 
            Damm. Im Ergebnis wird dann eine Aufstauung des Wassers angezeigt, 
            die sich im Gelände so nicht einstellen würde!
          </p>
          <p>
            In unserer Hochwassergefahrenkarte benutzen wir Simulationsberechnungen, 
            die das {" "} 
            <a
                target="_legal"
                href="https://www.lanuv.nrw.de/umwelt/wasser/service/ansprechpersonen"
              >
                Landesamt für Natur, Umwelt und Verbraucherschutz NRW
            </a>{" "}
            (LANUV) unter Beteiligung von Fachfirmen für die Risikogebiete im gesamten 
            Land NRW durchgeführt und als Open Data publiziert hat. Wenn Sie Modellfehler 
            vermuten (z. B. wie oben beschrieben im Geländemodell) oder in anderer 
            Hinsicht durch die Simulationsergebnisse irritiert sind, sprechen Sie 
            bitte das LANUV direkt an, bevorzugt per E-Mail an die Adresse 
            {" "} <a href="mailto:poststelle@lanuv.nrw.de">poststelle@lanuv.nrw.de</a> {" "}
            mit dem Betreff <b>Überschwemmungsgebiete / Hochwassergefahrenkarten</b>. 
            Die Aktualisierung der landesweiten Hochwassergefahrenkarten erfolgt allerdings 
            in einem Turnus von sechs Jahren. Es kann also recht lange dauern, bis 
            ihre Rückmeldung für die Aktualisierung der Hochwassergefahrenkarten herangezogen wird.
          </p>
        </div>
      }
    />
  );
};
export default Component;
