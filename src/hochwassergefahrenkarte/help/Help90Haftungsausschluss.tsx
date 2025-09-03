import { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="haftungsausschluss"
      sectionTitle="Haftungsausschluss"
      sectionBsStyle="danger"
      sectionContent={
        <div>
          <p>
            Alle hier veröffentlichten Informationen wurden mit der bestmöglichen 
            Sorgfalt aus den vom Land NRW gemäß dem Wasserhaushaltsgesetz (WHG) 
            aktuell bereitgestellten Berechnungsergebnissen zusammengestellt und 
            kontrolliert. Dennoch sind Fehler nie ausgeschlossen, sodass für die 
            Richtigkeit und damit auch Nutzbarkeit der Informationen keine Gewähr 
            übernommen werden kann (vgl. auch Abschnitt {" "} 
            <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("aussagekraft")}>
              Aussagekraft der Simulationen
            </a>{" "}
            zu den beim heutigen Stand der Technik unvermeidbaren 
            Unschärfen und Fehlern von modellbasierten Hochwassersimulationen). 
            Eine Haftung für Schäden, die sich aus der Nutzung der Informationen 
            ergeben, wird daher ausgeschlossen. Dem stimmen Sie mit der Nutzung 
            der Daten zu.
          </p>
          <p>
            Es fällt also in Ihre Verantwortung, aus den dargestellten 
            Informationen eine spezifische Gefährdungslage einzuschätzen und Schlüsse 
            für die Durchführbarkeit oder Wirtschaftlichkeit von Maßnahmen zu ziehen.
          </p>
        </div>
      }
    />
  );
};
export default Component;
