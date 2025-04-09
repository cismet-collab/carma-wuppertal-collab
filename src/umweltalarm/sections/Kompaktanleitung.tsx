import Section from "react-cismap/topicmaps/menu/Section";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import { Ueberblick } from "./helper/Ueberblick";
import { Fachdatenquellen } from "./helper/Fachdatenquellen";
import { Hintergrundkarten } from "./helper/Hintergrundkarten";
import { ThematischerDurchstich } from "./helper/ThematischerDurchstich";
import { Infobox } from "./helper/Infobox";
import { Link } from "react-scroll";
import slugify from "slugify";
import { InKartePositionierenText, MeinStandortText } from "../../commons";
import Icon from "react-cismap/commons/Icon";
import { ObjekteSuchen } from "./helper/ObjekteSuchen";
import { AnmeldungUndOfflineBenutzung } from "./helper/AnmeldungUndOfflineBenutzung";
import FuzzySearchParagraph from "../../commons/FuzzySearchParagraph";

export const Kompaktanleitung = () => {
  return (
    <Section
      key="help"
      sectionKey="help"
      sectionTitle="Kompaktanleitung"
      sectionBsStyle="default"
      sectionContent={
        <ConfigurableDocBlocks
          configs={[
            {
              type: "FAQS",
              configs: [
                {
                  title: "Überblick",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Ueberblick />,
                  },
                },
                {
                  title: "Fachdatenquellen",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Fachdatenquellen />,
                  },
                },
                {
                  title: "Hintergrundkarte",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Hintergrundkarten />,
                  },
                },
                {
                  title: "Karteninhalt verschieben und thematischer Durchstich",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <ThematischerDurchstich />,
                  },
                },
                {
                  title: "Info-Box und Datenblattansicht",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Infobox />,
                  },
                },
                {
                  title: "In Karte positionieren",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <InKartePositionierenText
                        pretext={
                          <>
                            <p>
                              Um in der Karte direkt zu einer bestimmten Adresse
                              zu gelangen, geben Sie diese im Eingabefeld links
                              unten ein. In der inkrementellen Auswahlliste
                              werden Ihnen schon nach der Eingabe des ersten
                              Buchstabens passende Treffer angeboten. (Wenn Sie
                              weitere Zeichen eingeben, wird der Inhalt der
                              Auswahlliste angepasst.) Sie können auch andere
                              Suchbegriffe eingeben, nämlich Stadtteil
                              (Stadtbezirk oder Quartier), Straßenname (bei
                              Straßen ohne zugeordnete Hausnummern) oder "Point
                              of Interest" (interessanter Ort, kurz als POI
                              bezeichnet).
                            </p>
                            <p>
                              Durch das in der Auswahlliste vorangestellte
                              Symbol erkennen Sie, ob es sich bei einem Treffer
                              um einen <Icon name="circle" /> Stadtbezirk, ein{" "}
                              <Icon name="pie-chart" /> Quartier, eine{" "}
                              <Icon name="home" /> Adresse, eine{" "}
                              <Icon name="road" /> Straße ohne zugeordnete
                              Hausnummern, einen <Icon name="tag" /> POI, die{" "}
                              <Icon name="tags" /> alternative Bezeichnung eines
                              POI, eine <Icon name="child" />{" "}
                              Kindertageseinrichtung oder eine{" "}
                              <Icon name="graduation-cap" /> Schule handelt.
                            </p>
                            <FuzzySearchParagraph />
                          </>
                        }
                        posttext={
                          <p>
                            {" "}
                            Mit den hier beschriebenen Positionierungen werden
                            stets Verschiebungen des Karteninhaltes bewirkt,
                            nach denen jeweils automatisch ein{" "}
                            <Link
                              class="renderAsLink"
                              to={slugify(
                                "Karteninhalt verschieben und thematischer Durchstich"
                              )}
                              containerId={"myMenu"}
                              activeClass="active"
                            >
                              thematischer Durchstich
                            </Link>{" "}
                            an der Position des Fadenkreuzes ausgelöst wird.
                          </p>
                        }
                      />
                    ),
                  },
                },
                {
                  title: "Mein Standort",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <MeinStandortText />,
                  },
                },
                {
                  title: "Objekte im Kartenfenster suchen",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <ObjekteSuchen />,
                  },
                },
                {
                  title: "Anmeldung und Offline-Benutzung",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <AnmeldungUndOfflineBenutzung />,
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
