import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="layer-filter"
      sectionTitle="Layer-Filter"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Über den Layer-Filter steuern Sie, welche Fachobjekt-Layer auf der
            Karte sichtbar sind. Schalten Sie die Layer{" "}
            <strong>Standorte</strong>, <strong>Leuchten</strong>,{" "}
            <strong>Leitungen</strong>, <strong>Schaltstellen</strong>,{" "}
            <strong>Abzweigdosen</strong> und <strong>Mauerlaschen</strong>{" "}
            einzeln um, um die Anzeige auf die Objekte zu beschränken, die Sie
            gerade benötigen.
          </p>
          <p>
            Bei aktivierten <strong>Leitungen</strong> lässt sich die Anzeige
            zusätzlich nach <strong>Leitungstyp</strong> eingrenzen.
          </p>
        </div>
      }
    />
  );
};
export default Component;
