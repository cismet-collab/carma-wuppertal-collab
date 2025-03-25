import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import bergischeMusikschule from "./assets/bergische_musikschule.png";
import kontakthof from "./assets/kontakthof.png";
import veranstaltungsorteZusammen from "./assets/veranstaltungsorte_zusammen.png";
// import AdressMarker from "./assets/AdressMarker.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { KompaktAnleitungStyle, KompaktAnleitungTitle } from "./SectionTitles";
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
      sectionBsStyle={KompaktAnleitungStyle}
      sectionTitle={KompaktAnleitungTitle}
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
                          Der <strong>Kulturstadtplan Wuppertal</strong> bietet
                          ihnen die folgenden Hintergrundkarten an, die auf
                          verschiedenen Geodatendiensten und Geodaten basieren:
                        </p>
                        <ul>
                          <StadtplanTagNachtText />
                          <LuftbildkarteText bodenaufloesung={10} />
                        </ul>

                        <p>
                          Zusätzlich nutzt der Kulturstadtplan für die
                          Themendarstellung den Datensatz{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/veranstaltungsorte-wuppertal"
                          >
                            Veranstaltungsorte Wuppertal
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
                          Die POI der kulturellen Einrichtungen werden in der
                          Karte durch Punktsymbole in Form von Piktogrammen mit
                          farbigem Hintergrund dargestellt. Für einige klar
                          definier- und unterscheidbare Kategorien (Clubs,
                          Filmtheater, Museen und Galerien, Theater) verwenden
                          wir feste Kombinationen von Piktogramm und
                          Hintergrundfarbe. In der Kategorie "Sonstige
                          Veranstaltungsorte" werden dagegen verschiedene
                          Piktogramme mit der gleichen Hintergrundfarbe (Ocker)
                          verwendet. Hierunter fallen zum einen Einrichtungen
                          mit einem individuellen Profil, die unterschiedlichen
                          Veranstaltungsarten Raum geben{" "}
                          <img alt="Cluster" width="20" src={kontakthof} />. Zum
                          anderen umfasst diese Kategorie alle POI, die nur in
                          zweiter Linie Veranstaltungsorte sind. So ist z. B.
                          die Bergische Musikschule{" "}
                          <img
                            alt="Cluster"
                            width="20"
                            src={bergischeMusikschule}
                          />{" "}
                          in erster Linie als Bildungseinrichtung eingestuft, in
                          der aber auch Konzerte, Lesungen und
                          Theateraufführungen stattfinden.
                        </p>
                        <p>
                          Räumlich nah beieinander liegende Veranstaltungsorte
                          werden standardmäßig maßstabsabhängig zu größeren
                          Punkten zusammengefasst, mit der Anzahl der
                          repräsentierten POI im Zentrum{" "}
                          <img
                            alt="Cluster"
                            width="30"
                            src={veranstaltungsorteZusammen}
                          />
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
                          auch Online-Tickets erwerben können. Mit dem
                          Lupensymbol{" "}
                          <FontAwesomeIcon icon={faSearchLocation} /> wird die
                          Karte auf den POI, der gerade den Fokus hat, zentriert
                          und gleichzeitig ein großer Betrachtungsmaßstab
                          (Zoomstufe 15) eingestellt.{" "}
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
                          so verkleinern, dass nur noch die Kategorisierung und
                          die Bezeichnung des POI sowie die Link-Symbole
                          angezeigt werden - nützlich für Endgeräte mit kleinem
                          Display. Mit der Schaltfläche{" "}
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
                      <InKartePositionierenText
                        pretext={
                          <>
                            <p>
                              Um eine bestimmte Stelle des Stadtgebietes zu
                              erkunden, geben Sie den Namen eines Stadtteils
                              (Stadtbezirk oder Quartier), eine Adresse, einen
                              Straßennamen oder den Namen eines POI im
                              Eingabefeld links unten ein. In der inkrementellen
                              Auswahlliste werden Ihnen schon nach der Eingabe
                              des ersten Buchstabens passende Treffer angeboten.
                              (Wenn Sie weitere Zeichen eingeben, wird der
                              Inhalt der Auswahlliste angepasst.) Durch das
                              vorangestellte Symbol erkennen Sie, ob es sich
                              dabei um einen <Icon name="circle" /> Stadtbezirk,
                              ein <Icon name="pie-chart" /> Quartier, eine{" "}
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
                      />
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
                  title: "Mein Kulturstadtplan",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        {" "}
                        <p>
                          Unter "<strong>Mein Kulturstadtplan</strong>" finden
                          sie im Anwendungsmenü zwei alternative Möglichkeiten,
                          die Menge der angezeigten POI gemäß Ihren Vorlieben
                          einzuschränken. Auf zwei angedeuteten Karteikarten
                          wird zum einen das Filtern nach Kategorien von
                          Einrichtungen angeboten, zum anderen das Filtern nach
                          Kategorien von Veranstaltungen, die an den zugehörigen
                          POI typischerweise angeboten werden. Der Titel der
                          gerade nicht sichtbaren Karteikarte wird als{" "}
                          <a>Hyperlink</a> dargestellt. Zum Wechsel zwischen den
                          beiden Karteikarten klicken Sie auf den jeweils
                          verfügbaren Link.
                        </p>
                        <p>
                          Auf den beiden Karteikarten wird Ihnen eine Liste von
                          Einrichtungs- bzw. Veranstaltungskategorien angeboten.
                          Die Auswahl erfolgt durch Anklicken des (leeren)
                          Kontrollkästchens vor dem jeweiligen Listenelement,
                          die Abwahl durch erneutes Anklicken dieses Kästchens.
                          Die beiden Filterbereiche werden nicht logisch
                          miteinander verknüpft. Für die Filterung wird immer
                          nur die Auswahl auf der im Anwendungsmenü sichtbaren
                          Karteikarte ausgewertet.
                        </p>
                        <p>
                          Als Vorschau für die Wirkung ihrer Filtereinstellungen
                          wird Ihnen auf beiden Karteikarten ein Donut-Diagramm
                          angezeigt, das die Anzahl der herausgefilterten POI
                          und ihre Verteilung auf die Einrichtungskategorien
                          anzeigt. Bewegen Sie dazu den Mauszeiger auf eines der
                          farbigen Segmente des Diagramms. (Bei einem Gerät mit
                          Touchscreen tippen Sie auf eines der farbigen
                          Segmente.)
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
                          Unter "<strong>Einstellungen</strong>
                          " können Sie im Anwendungsmenü <Icon name="bars" />{" "}
                          festlegen, wie die POI und die Hintergrundkarte
                          angezeigt werden sollen. Zu den POI können Sie
                          auswählen, ob Ihre unter "
                          <strong>Mein Kulturstadtplan</strong>" festgelegte
                          Filterung in einer Titelzeile ausgeprägt wird oder
                          nicht. Weiter können Sie festlegen, ob räumlich nah
                          beieinander liegende POI maßstabsabhängig zu einem
                          Punktsymbol zusammengefasst werden oder nicht. Unter "
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
                          <em>Stadtplan (Nacht)</em>"), zu der uns die von
                          vielen PKW-Navis bei Dunkelheit eingesetzte
                          Darstellungsweise inspiriert hat.{" "}
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
                        Ihre Filterauswahl und Einstellungen bleiben auch nach
                        einem Neustart der Anwendung erhalten. (Es sei denn, Sie
                        löschen den Browser-Verlauf einschließlich der
                        gehosteten App-Daten.) Damit können Sie unseren
                        Kulturstadtplan mit wenigen Klicks dauerhaft für sich
                        optimieren.
                      </p>
                    ),
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
