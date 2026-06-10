import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="haftungsausschluss"
      sectionTitle="Haftungsausschluss"
      sectionBsStyle="danger"
      sectionContent={
        <div>
          Alle in BelIS Desktop bereitgestellten Informationen wurden mit der
          bestmöglichen Sorgfalt zusammengestellt und kontrolliert. Dennoch sind
          Fehler nie ausgeschlossen, sodass für die Richtigkeit und damit auch
          Nutzbarkeit der Informationen keine Gewähr übernommen werden kann. In
          keinem Fall stellen die Daten eine rechtsverbindliche Auskunft dar. Eine
          Haftung für Schäden, die sich aus der Nutzung der hier bereitgestellten
          oder zugänglich gemachten Informationen ergeben, wird ausgeschlossen. Dem
          stimmen Sie mit der Nutzung der Daten zu.
        </div>
      }
    />
  );
};
export default Component;
