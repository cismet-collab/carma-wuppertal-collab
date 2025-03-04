import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
// import AdressMarker from "./assets/AdressMarker.jpg";
import PoiZusammen from "./assets/poi_zusammen.png";
import Keinethemenausw from "./assets/sf_keinethemenausw.png";
import {
  MeinStandortText,
  StadtplanTagNachtText,
  LuftbildkarteText,
  InKartePositionierenText,
} from "../commons";
import FuzzySearchParagraph from "../commons/FuzzySearchParagraph";

export const KompaktanleitungSection = () => {
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
                  title: "Datengrundlage",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Der <strong>Online-Stadtplan Wuppertal</strong> bietet
                          ihnen die folgenden Hintergrundkarten an, die auf
                          verschiedenen Geodatendiensten und Geodaten basieren:
                        </p>

                        <ul>
                          <StadtplanTagNachtText />
                          <LuftbildkarteText />
                        </ul>

                        <p>
                          Zusätzlich nutzt der Online-Stadtplan für die
                          Themendarstellung den Datensatz{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/interessante-orte-poi-wuppertal"
                          >
                            Interessante Orte Wuppertal (POI)
                          </a>
                          ,{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/kindertageseinrichtungen-wuppertal"
                          >
                            Kindertageseinrichtungen Wuppertal
                          </a>{" "}
                          und{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/schulen-wuppertal"
                          >
                            Schulen Wuppertal
                          </a>{" "}
                          aus dem Open-Data-Angebot der Stadt Wuppertal.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der POI",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        {" "}
                        <p>
                          Jeder POI (Point of Interest, 'Interessanter Ort') ist
                          einem oder mehreren übergeordneten Themenfeldern wie
                          z. B. "<em>Freizeit</em>" oder "<em>Erholung</em>"
                          zugeordnet. Die Hintergrundfarben der POI-Symbole
                          stehen jeweils für eine eindeutige Kombination dieser
                          Themenfelder, z. B. Hellgrün für "
                          <em>Freizeit, Erholung</em>
                          ".
                        </p>
                        <p>
                          Räumlich nah beieinander liegende POI werden
                          standardmäßig maßstabsabhängig zu größeren Punkten
                          zusammengefasst, mit der Anzahl der repräsentierten
                          POI im Zentrum <img alt="Cluster" src={PoiZusammen} />
                          . Vergrößern Sie ein paar Mal durch direktes Anklicken
                          eines solchen Punktes oder mit <Icon name="plus" />{" "}
                          die Darstellung, so werden die zusammengefassten POI
                          Schritt für Schritt in die kleineren Symbole für die
                          konkreten Einzel-POI zerlegt. Ab einer bestimmten
                          Maßstabsstufe (Zoomstufe 12) führt ein weiterer Klick
                          dazu, dass eine Explosionsgraphik der
                          zusammengefassten POI angezeigt wird.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "POI auswählen und abfragen",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        {" "}
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf einen
                          konkreten Einzel-POI, um sich seine Bezeichnung
                          anzeigen zu lassen. Ein Klick auf das zugehörige
                          POI-Symbol setzt den Fokus auf diesen POI. Er wird
                          dann blau hinterlegt und die zugehörigen Informationen
                          (Bezeichnung, Info-Text und ggf. Adresse) werden in
                          der Info-Box (unten rechts) angezeigt. (Auf einem
                          Tablet-PC wird der Fokus durch das erste Antippen des
                          Angebots gesetzt, das zweite Antippen blendet die
                          Bezeichnung ein.) Außerdem werden Ihnen in der
                          Info-Box weiterführende (Kommunikations-) Links zum
                          POI angezeigt: <Icon name="external-link-square" />{" "}
                          Internet, <Icon name="envelope-square" /> E-Mail und{" "}
                          <Icon name="phone" /> Telefon. Bei POI, zu denen im
                          Terminkalender von{" "}
                          <a href="https://wuppertal-live.de">
                            www.wuppertal-live.de
                          </a>{" "}
                          Veranstaltungen geführt werden, finden sie zusätzlich
                          noch eine <Icon name="calendar" /> Verknüpfung zu
                          wuppertal-live.de, wo sie für viele Veranstaltungen
                          auch Online-Tickets erwerben können.
                        </p>
                        <p>
                          Wenn Sie noch nicht aktiv einen bestimmten POI im
                          aktuellen Kartenausschnitt selektiert haben, wird der
                          Fokus automatisch auf den nördlichsten POI gesetzt.
                          Mit den Funktionen <a>&lt;&lt;</a> vorheriger Treffer
                          und <a>&gt;&gt;</a> nächster Treffer können Sie in
                          nördlicher bzw. südlicher Richtung alle aktuell im
                          Kartenfenster angezeigten POI durchmustern.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch die thematische
                          Zuordnung und die Bezeichnung des POI sowie die
                          Link-Symbole angezeigt werden - nützlich für Endgeräte
                          mit kleinem Display. Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-up" /> an derselben Stelle
                          können Sie die Info-Box dann wieder vollständig
                          einblenden.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "In Karte positionieren",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <InKartePositionierenText
                          pretext={
                            <>
                              <p>
                                Um eine bestimmte Stelle des Stadtgebietes zu
                                erkunden, geben Sie den Anfang eines Stadtteils
                                (Stadtbezirk oder Quartier), einer Adresse,
                                eines Straßennamens oder eines POI im
                                Eingabefeld links unten ein (mindestens 2
                                Zeichen). In der inkrementellen Auswahlliste
                                werden Ihnen passende Treffer angeboten. (Wenn
                                Sie weitere Zeichen eingeben, wird der Inhalt
                                der Auswahlliste angepasst.) Durch das
                                vorangestellte Symbol erkennen Sie, ob es sich
                                dabei um einen <Icon name="circle" />{" "}
                                Stadtbezirk, ein <Icon name="pie-chart" />{" "}
                                Quartier, eine <Icon name="home" /> Adresse,
                                eine <Icon name="road" /> Straße ohne
                                zugeordnete Hausnummern, einen{" "}
                                <Icon name="tag" /> POI, die{" "}
                                <Icon name="tags" /> alternative Bezeichnung
                                eines POI, eine <Icon name="child" />{" "}
                                Kindertageseinrichtung oder eine{" "}
                                <Icon name="graduation-cap" /> Schule handelt.
                              </p>
                              <FuzzySearchParagraph />
                            </>
                          }
                        />
                      </div>
                    ),
                  },
                },
                {
                  title: "Mein Standort",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <MeinStandortText />,
                  },
                },
                {
                  title: "Mein Themenstadtplan",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        {" "}
                        <p>
                          Unter "<strong>Mein Themenstadtplan</strong>" können
                          Sie im Anwendungsmenü <Icon name="bars" /> auswählen,
                          welche POI-Kategorien in der Karte dargestellt werden.
                          Über die Schaltfläche{" "}
                          <img alt="Cluster" src={Keinethemenausw} /> können Sie
                          die POI vollständig ausblenden - auch die Info-Box
                          wird dann nicht mehr angezeigt.
                        </p>
                        <p>
                          Zur Filterung der POI-Kategorien bieten wir Ihnen die
                          oben beschriebenen Themenfelder an. Wählen Sie z. B.
                          mit <Icon name="thumbs-up" /> ausschließlich das Thema
                          "<em>Kultur</em>" aus. Als Vorschau wird Ihnen ein
                          Donut-Diagramm angezeigt, das die Anzahl der
                          zugehörigen POI und deren Verteilung auf die
                          Themen-Kombinationen (hier "
                          <em>Kultur, Gesellschaft</em>" und "
                          <em>Kultur, Freizeit</em>
                          ") anzeigt. Bewegen Sie dazu den Mauszeiger auf eines
                          der farbigen Segmente des Donut-Diagramms. (Bei einem
                          Gerät mit Touchscreen tippen Sie auf eines der
                          farbigen Segmente.)
                        </p>
                        <p>
                          Mit <Icon name="thumbs-down" /> können Sie die POI,
                          die dem entsprechenden Thema zugeordnet sind,
                          ausblenden und dadurch die Treffermenge reduzieren.
                          Schließen Sie jetzt z. B. das Thema "
                          <em>Gesellschaft</em>" aus. Im Donut-Diagramm werden
                          Ihnen dann nur noch die POI mit der Themen-Kombination
                          "<em>Kultur, Freizeit</em>" angezeigt (Theater, Museen
                          etc.). Die POI mit der Kombination "
                          <em>Kultur, Gesellschaft</em>" (Standorte von Verlagen
                          und anderen Medienunternehmungen) wurden dagegen
                          entfernt.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Einstellungen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Unter "<strong>Einstellungen</strong>" können Sie im
                          Anwendungsmenü <Icon name="bars" /> festlegen, wie die
                          POI und die Hintergrundkarte angezeigt werden sollen.
                          Zu den POI können Sie auswählen, ob Ihre unter "
                          <strong>Mein Themenstadtplan</strong>" festgelegte
                          Lebenslagen-Filterung in einer Titelzeile ausgeprägt
                          wird oder nicht. Weiter können Sie festlegen, ob
                          räumlich nah beieinander liegende POI maßstabsabhängig
                          zu einem Punktsymbol zusammengefasst werden oder
                          nicht. Unter "
                          <em>
                            <strong>Symbolgröße</strong>
                          </em>
                          " können Sie in Abhängigkeit von Ihrer
                          Bildschirmauflösung und Ihrem Sehvermögen auswählen,
                          ob die POI mit kleinen (25 Pixel), mittleren (35
                          Pixel) oder großen (45 Pixel) Symbolen angezeigt
                          werden.
                        </p>
                        <p>
                          Unter "
                          <em>
                            <strong>Hintergrundkarte</strong>
                          </em>
                          " können Sie auswählen, ob Sie die standardmäßig
                          aktivierte farbige Hintergrundkarte verwenden möchten
                          ("<em>Stadtplan (Tag)</em>") oder lieber eine
                          invertierte Graustufenkarte ("
                          <em>Stadtplan (Nacht)</em>
                          "), zu der uns die von vielen PKW-Navis bei Dunkelheit
                          eingesetzte Darstellungsweise inspiriert hat.{" "}
                          <strong>Hinweis:</strong> Der Stadtplan (Nacht) wird
                          Ihnen nur angeboten, wenn Ihr Browser
                          CSS3-Filtereffekte unterstützt, also z. B. nicht beim
                          Microsoft Internet Explorer. Die Nacht-Karte erzeugt
                          einen deutlicheren Kontrast mit den farbigen
                          POI-Symbolen, die unterschiedlichen Flächennutzungen
                          in der Hintergrundkarte lassen sich aber nicht mehr so
                          gut unterscheiden wie in der Tag-Karte. Als dritte
                          Möglichkeit steht eine Luftbildkarte zur Verfügung,
                          die die Anschaulichkeit des Luftbildes mit der
                          Eindeutigkeit des Stadtplans (Kartenschrift,
                          durchscheinende Linien) verbindet.{" "}
                        </p>
                        <p>
                          Im Vorschaubild sehen Sie direkt die prinzipielle
                          Wirkung ihrer Einstellungen.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Personalisierung",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <p>
                        Ihre Themenauswahl und Einstellungen bleiben auch nach
                        einem Neustart der Anwendung erhalten. (Es sei denn, Sie
                        löschen den Browser-Verlauf einschließlich der
                        gehosteten App-Daten.) Damit können Sie mit wenigen
                        Klicks aus unserem Online-Stadtplan einen dauerhaft für
                        Sie optimierten Themenstadtplan machen.
                      </p>
                    ),
                  },
                },
                // {
                //   title: 'DigiTal Zwilling',
                //   bsStyle: 'success',
                //   contentBlockConf: {
                //     type: 'REACTCOMP',
                //     content: <GenericDigitalTwinReferenceTextComponent />,
                //   },
                // },
              ],
            },
          ]}
        />
      }
    />
  );
};
