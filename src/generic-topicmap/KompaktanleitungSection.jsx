import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import FachobjekteAuswaehlenUndAbfragen from "./docBlocks/FachobjekteAuswaehlenUndAbfragen";
import KartendarstellungDerFachobjekte from "./docBlocks/KartendarstellungDerFachobjekte";
import InKartePositionieren from "./docBlocks/InKartePositionieren";
import GenericHelpTextForMyLocation from "./docBlocks/GenericHelpTextForMyLocation";
import Einstellungen from "./docBlocks/Einstellungen";
import Datengrundlage from "./docBlocks/Datengrundlage";

export const KompaktanleitungSection = () => {
  return (
    <Section
      key="help"
      sectionKey="help"
      sectionTitle="Kompaktanleitung"
      sectionBsStyle="info"
      sectionContent={
        <ConfigurableDocBlocks
          configs={[
            {
              type: "FAQS",
              configs: [
                {
                  title: "Datengrundlage",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Datengrundlage />,
                  },
                },
                {
                  title: "Fachobjekte auswählen und abfragen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <FachobjekteAuswaehlenUndAbfragen />,
                  },
                },
                {
                  title: "Kartendarstellung der Fachobjekte",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <KartendarstellungDerFachobjekte />,
                  },
                },
                {
                  title: "In Karte positionieren",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <InKartePositionieren />,
                  },
                },
                {
                  title: "Mein Standort",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <GenericHelpTextForMyLocation />,
                  },
                },
                {
                  title: "Einstellungen",
                  bsStyle: "info",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Einstellungen />,
                  },
                },
              ],
            },
          ]}
        />
      }
    />
  );
};
