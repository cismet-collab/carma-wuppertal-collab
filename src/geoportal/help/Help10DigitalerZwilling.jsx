import React from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import GenericDigitalTwinReferenceTextComponent from "../../commons/GenericDigitalTwinReferenceTextComponent";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="zwilling"
      sectionTitle="Urbaner Digitaler Zwilling"
      sectionBsStyle="warning"
      sectionContent={<GenericDigitalTwinReferenceTextComponent />}
    />
  );
};
export default Component;
