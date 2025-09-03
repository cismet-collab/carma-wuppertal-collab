import { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="aussagekraft"
      sectionTitle="Aussagekraft der Simulationen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Unsere Hochwassergefahrenkarte zeigt die Ergebnisse von Simulationen, 
            die das{" "} 
            <a
                target="_legal"
                href="https://www.lanuv.nrw.de/umwelt/wasser/service/ansprechpersonen"
              >
                Landesamt für Natur, Umwelt und Verbraucherschutz NRW
            </a>{" "}
            (LANUV)  
            unter Beteiligung von Fachfirmen nach dem heutigen Stand der Technik 
            durchgeführt hat. Die Berechnungen basieren jedoch auf vereinfachten 
            Modellen der tatsächlichen Verhältnisse. Für eine noch differenziertere 
            Modellierung fehlen dem Land NRW zum einen die Daten, zum anderen wären 
            die resultierenden Berechnungsdauern problematisch.
          </p>
          <p>
            Eine wesentliche qualitative Einschränkung liegt in dem langen 
            Aktualisierungsturnus der vom Land durchgeführten Simulationsberechnungen. 
            Er beträgt nach den Vorgaben der EU-Hochwasserrisikomanagement-Richtlinie 
            (EU-HWRM-RL) sechs Jahre. Nach der erstmaligen Veröffentlichung der 
            Hochwassergefahrenkarten im Jahr 2013 sind derzeit die im Dezember 2019 
            vorgelegten Ergebnisse des zweiten Umsetzungszyklus der EU-HWRM-RL 
            verfügbar. Sie basieren also auf dem zu diesem Zeitpunkt beim Land NRW 
            für Wuppertal verfügbaren Digitalen Geländemodell (DGM) aus dem Jahr 
            2015. Geländeveränderungen in den Überflutungsbereichen, die nach 2015 
            erfolgt sind, konnten daher in den Simulationsberechnungen nicht 
            berücksichtigt werden. Hierdurch sind im Detail umplausible 
            Überflutungsdarstellungen möglich.              
          </p>
          <p>
            Ein wichtiger Unterschied zwischen der Starkregengefahrenkarte und der 
            Hochwassergefahrenkarte betrifft die Berücksichtigung der Gebäude. Für den 
            Starkregenabfluss sind die künstlichen vertikalen Strukturen wie Gebäude 
            etc. entscheidend, sie werden daher bei den Simulationsberechnungen für 
            die Starkregengefahrenkarte detailliert berücksichtigt. Bei den 
            Hochwassersimulationen des Landes NRW wird die Wasserausbreitung 
            dagegen auf dem DGM, also der Geländeoberfläche ohne Gebäude, 
            berechnet. Wenn in unserer Hochwassergefahrenkarte auf einem Gebäude 
            eine Wassertiefe dargestellt wird, bedeutet dies also nicht, dass das 
            Gebäude vollständig mit der angegebenen Wassertiefe überflutet wird. 
            Es handelt sich vielmehr um die Wassertiefe, die sich einstellen würde, 
            wenn an diesem Ort kein Gebäude stehen würde. Um zu einer relevanten 
            Aussage für die Hochwassergefährdung eines Gebäudes zu kommen, muss man 
            an den einzelnen Außenseiten des Gebäudes die{" "}
            <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("wasserstand")}>
              Wassertiefen abfragen
            </a>.   
          </p>
        </div>
      }
    />
  );
};
export default Component;
