import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="haftungsausschluss"
      sectionTitle="Haftungsausschluss"
      sectionBsStyle="danger"
      sectionContent={
        <div>
          Alle hier veröffentlichten Informationen wurden mit der bestmöglichen Sorgfalt 
          zusammengestellt und kontrolliert. Dennoch sind Fehler nie ausgeschlossen, sodass 
          für die Richtigkeit und damit auch Nutzbarkeit der Informationen keine Gewähr 
          übernommen werden kann. In keinem Fall stellen die Daten eine rechtsverbindliche 
          Auskunft, insbesondere in Planungs- oder Bauangelegenheiten, dar. Die Anwendung 
          "DigiTal Zwilling / Geoportal" ermöglicht zudem das Hinzuladen standardisierter 
          Kartendienste anderer Herausgeber, für deren Inhalt die Stadt Wuppertal naturgemäß 
          keine Verantwortung übernehmen kann. Eine Haftung für Schäden, die sich aus der 
          Nutzung der hier bereitgestellten oder zugänglich gemachten Informationen ergeben, 
          wird daher ausgeschlossen. Dem stimmen Sie mit der Nutzung der Daten zu.
        </div>
      }
    />
  );
};
export default Component;
