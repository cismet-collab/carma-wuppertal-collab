 
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { MeinStandortText } from "../../commons";
const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="standort"
      sectionTitle="Mein Standort"
      sectionBsStyle="success"
      sectionContent={<MeinStandortText />}
    />
  );
};
export default Component;
