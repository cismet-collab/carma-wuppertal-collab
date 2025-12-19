import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";

const Component = ({ showOverlayFromOutside }) => {
  return (
    <GenericModalMenuSection
      sectionKey="3D-Funktionen"
      sectionTitle="3D-Funktionen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          2bdone
          <p className="hide-on-small-screens">
            <HelpOverlayLink
              onClick={() => {
                showOverlayFromOutside("OBLIQUE");
              }}
            >
              zur Hilfefolie
            </HelpOverlayLink>
          </p>   
        </div>
      }
    />
  );
};
export default Component;
