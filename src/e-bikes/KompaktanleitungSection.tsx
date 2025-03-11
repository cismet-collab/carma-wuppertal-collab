import Section from "react-cismap/topicmaps/menu/Section";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import {
  getSymbolSVG,
  ladestationSVG,
  verleihstationSVG,
} from "./helper/styler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "react-cismap/commons/Icon";
import { Link } from "react-scroll";
import EbikeCluster from "./assets/ebikes_cluster.png";
import {
  MeinStandortText,
  StadtplanTagNachtText,
  LuftbildkarteText,
  InKartePositionierenText,
} from "../commons";
import FuzzySearchParagraph from "../commons/FuzzySearchParagraph";

export const KompaktanleitungSection = () => {
  const chargingOnlineSVG = getSymbolSVG(
    30,
    "#1EA342",
    "pr",
    "onlineSVGinHELP",
    ladestationSVG
  );
  const chargingOfflineSVG = getSymbolSVG(
    30,
    "#999999",
    "pr",
    "offlineSVGinHELP",
    ladestationSVG
  );
  const rentingSVG = getSymbolSVG(
    30,
    "#EC7529",
    "pr",
    "verleihSVGinHELP",
    verleihstationSVG
  );
  return (
    <Section
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
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die <strong>E-Fahrrad-Karte Wuppertal</strong> bietet
                          ihnen die folgenden Hintergrundkarten an, die auf
                          verschiedenen Geodatendiensten und Geodaten basieren:
                        </p>

                        <ul>
                          <StadtplanTagNachtText />
                          <LuftbildkarteText />
                        </ul>

                        <p>
                          Zusätzlich nutzt die E-Fahrrad-Karte die Datensätze{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/verleih-e-fahrr%C3%A4der-wuppertal"
                          >
                            Verleih E-Fahrräder Wuppertal{" "}
                          </a>
                          und{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/ladestationen-e-fahrr%C3%A4der-wuppertal"
                          >
                            Ladestationen E-Fahrräder Wuppertal
                          </a>{" "}
                          aus dem Open-Data-Angebot der Stadt Wuppertal.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der Stationen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <p>
                        Zur Darstellung der Ladestationen in der Karte verwenden
                        wir zwei unterschiedliche Symbole für die Ladestationen,
                        die derzeit in Betrieb ("online") {chargingOnlineSVG}{" "}
                        sind, und diejenigen, die wegen länger dauernder
                        Maßnahmen nicht in Betrieb ("offline"){" "}
                        {chargingOfflineSVG} sind. Zur Darstellung der
                        Verleihstationen verwenden wir das Symbol {rentingSVG}.
                        Die Farben der Symbole werden in der Titelzeile der
                        Info-Box unten rechts aufgegriffen. Zusätzlich wird dort
                        der Typ (Ladestation für E-Fahrräder bzw. Verleihstation
                        von E-Fahrrädern) und bei den Ladestationen auch der
                        Betriebszustand (online oder offline) wiederholt.
                        Räumlich nah beieinander liegende Anlagen werden
                        standardmäßig maßstabsabhängig zu größeren
                        Kreis-Symbolen zusammengefasst, jeweils mit der Anzahl
                        der repräsentierten Anlagen im Zentrum{" "}
                        <img alt="Cluster" width="32" src={EbikeCluster} />.
                        Vergrößern Sie ein paar Mal durch direktes Anklicken
                        eines solchen Punktes oder mit{" "}
                        <FontAwesomeIcon icon={faPlus} /> die Darstellung, so
                        werden die zusammengefassten Stationen Schritt für
                        Schritt in die kleineren Symbole für die
                        Einzel-Stationen zerlegt.
                      </p>
                    ),
                  },
                },
                {
                  title: "Ladestationen / Verleihstationen abfragen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf eines
                          der Symbole für die Stationen, um sich den Namen der
                          Station anzeigen zu lassen. Ein Klick auf das Symbol
                          setzt den Fokus auf diese Station. Sie wird dann blau
                          hinterlegt und die zugehörigen Informationen (Name,
                          ggf. Lagebeschreibung, Adresse) werden in der Info-Box
                          angezeigt. (Auf einem Tablet-PC wird der Fokus durch
                          das erste Antippen des Symbols gesetzt, das zweite
                          Antippen blendet den Namen ein.) Durch Anklicken des
                          Symbols <Icon name="info" /> rechts neben dem Namen
                          der Station öffnen Sie das Datenblatt mit den
                          vollständigen Informationen zu dieser Station
                          einschließlich einer Verknüpfung zu eventuellen
                          weiteren Informationen des Betreibers oder
                          Eigentümers. Mit dem Lupensymbol{" "}
                          <Icon name="search" /> links daneben wird die Karte
                          auf die Station, die gerade den Fokus hat, zentriert
                          und gleichzeitig ein großer Betrachtungsmaßstab
                          (Zoomstufe 15) eingestellt. Mit den Symbolen{" "}
                          <Icon name="phone" /> und{" "}
                          <Icon name="external-link-square" /> rechts daneben
                          können Sie den Betreiber oder Inhaber via Smartphone
                          direkt anrufen oder zu seiner Website wechseln.
                        </p>
                        <p>
                          Wenn Sie noch keine Station im aktuellen
                          Kartenausschnitt selektiert haben, wird der Fokus
                          automatisch auf die nördlichste Station gesetzt. Mit
                          den Funktionen <a>&lt;&lt;</a> vorheriger Treffer und{" "}
                          <a>&gt;&gt;</a> nächster Treffer können Sie ausgehend
                          von der Station, auf der gerade der Fokus liegt, in
                          nördlicher bzw. südlicher Richtung alle aktuell im
                          Kartenfenster angezeigten Stationen durchmustern.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch der Typ der Station und
                          ggf. ihr Betriebszustand (Verleihstation oder
                          Ladestation online / offline), ihr Name und die
                          Symbole <Icon name="search-location" />,{" "}
                          <Icon name="info" />, <Icon name="phone" /> und{" "}
                          <Icon name="external-link-square" /> angezeigt werden
                          - nützlich für Endgeräte mit kleinem Display. Mit der
                          Schaltfläche <Icon name="chevron-circle-up" /> an
                          derselben Stelle können Sie die Info-Box wieder
                          vollständig einblenden.
                        </p>
                        <p>
                          Ein kleines Foto über der Info-Box vermittelt Ihnen
                          bei den meisten Stationen einen Eindruck vom Aussehen
                          der Station vor Ort. Klicken Sie auf dieses
                          Vorschaubild, um einen Bildbetrachter ("Leuchtkasten")
                          mit dem Foto zu öffnen.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "In Karte positionieren",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <InKartePositionierenText
                        pretext={
                          <>
                            <p>
                              Um direkt zu einer Lade- oder Verleihstation zu gelangen, 
                              geben Sie den Namen dieser Station im Eingabefeld links 
                              unten ein. In der inkrementellen Auswahlliste werden 
                              Ihnen schon nach der Eingabe des ersten Buchstabens 
                              passende Treffer angeboten. (Wenn Sie weitere Zeichen 
                              eingeben, wird der Inhalt der Auswahlliste angepasst.) 
                              Sie können auch andere Suchbegriffe eingeben, nämlich 
                              Stadtteil (Stadtbezirk oder Quartier), Adresse, Straßenname 
                              oder den Namen eines interessanten Ortes (Point of Interest, 
                              kurz POI). Durch das in der Auswahlliste vorangestellte Symbol 
                              erkennen Sie, ob es sich bei einem Treffer um eine{" "}
                              <Icon name="charging-station" /> Ladestation, eine{" "}
                              <Icon name="bicycle" /> Verleihstation, eine{" "}
                              <Icon name="home" /> Adresse, eine{" "}
                              <Icon name="road" /> Straße ohne zugeordnete
                              Hausnummer, einen{" "}
                              <Icon name="circle" /> Stadtbezirk, ein{" "}
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
                        punktgeometrie="(Ladestation, Verleihstationen, Adresse, Straße, POI)"
                        posttext={
                          <p>
                            Wenn Sie die Karte wie oben beschrieben auf eine
                            Station positionieren, erhält diese sofort den
                            Fokus, sodass die zugehörigen Informationen direkt
                            in der Info-Box angezeigt werden. Voraussetzung
                            dafür ist, dass die aktuellen{" "}
                            <Link to="MeinThemenstadtplan" containerId="myMenu">
                              Filtereinstellungen
                            </Link>{" "}
                            die Darstellung der Station in der Karte
                            erlauben.
                          </p>
                        }
                      />
                    ),
                  },
                },
                {
                  title: "Mein Standort",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <MeinStandortText />,
                  },
                },
                {
                  title: "Filtern",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Im Bereich "<b>Filter</b>" können Sie im
                          Anwendungsmenü <Icon name="bars" /> die in der Karte
                          angezeigten Lade- und Verleihstationen so ausdünnen,
                          dass nur die für Sie interessanten Stationen übrig
                          bleiben. Standardmäßig sind die Einstellungen hier so
                          gesetzt, dass alle Stationen angezeigt werden.
                        </p>

                        <p>
                          Mit der Optionsgruppe "
                          <b>
                            <i>Typ</i>
                          </b>
                          " können Sie die Kartenanzeige auf Ladestationen oder
                          Verleihstationen beschränken. Mit den Optionsgruppen "
                          <b>
                            <i>Verfügbarkeit</i>
                          </b>
                          ", "
                          <b>
                            <i>Öffnungszeiten</i>
                          </b>
                          ", "
                          <b>
                            <i>Ökostrom</i>
                          </b>
                          " und "
                          <b>
                            <i>Ladebox vorhanden</i>
                          </b>
                          " können Sie die Kartenanzeige auf Ladestationen
                          beschränken, die aktuell verfügbar (online) sind, die
                          durchgehend (jeweils 24 Stunden an 7 Tagen die Woche)
                          benutzbar sind, die ökologisch erzeugten Strom
                          bereitstellen oder bei denen eine abschließbare
                          Ladebox vorhanden ist. Diese Optionsgruppen werden
                          deaktiviert, wenn die Kartenanzeige unter "
                          <i>
                            <b>Typ</b>
                          </i>
                          " auf "<i>nur Verleihstationen</i>" beschränkt wird.
                          Mit der in jeder dieser Gruppen verfügbaren Option "
                          <i>alle Ladestationen</i>" wird das jeweilige
                          Filterkriterium nicht ausgewertet. Alle
                          Filterkriterien werden mit einem logischen "und"
                          kombiniert: Wenn Sie z. B. unter "
                          <b>
                            <i>Öffnungszeiten</i>
                          </b>
                          " den Wert "<i>24/7</i>" wählen und unter "
                          <b>
                            <i>Ökostrom</i>
                          </b>
                          " den Wert "<i>nur Ökostrom-Ladestationen</i>", werden
                          alle Stationen angezeigt, die durchgehend erreichbar
                          sind <b>und</b> ökologisch erzeugten Strom
                          bereitstellen.
                        </p>
                        <p>
                          Ihre Einstellungen werden direkt in der blauen
                          Titelzeile des Bereichs "<b>Filter</b>" und in dem
                          Donut-Diagramm, das Sie rechts neben oder unter den
                          Filteroptionen finden, ausgewertet. Die Titelzeile
                          zeigt die Gesamtanzahl der Stationen, die den von
                          Ihnen gesetzten Filterbedingungen entsprechen. Das
                          Donut-Diagramm zeigt zusätzlich die Verteilung auf die
                          drei Kategorien Verleihstationen, Ladestationen
                          (online) und Ladestationen (offline). Bewegen Sie dazu
                          den Mauszeiger auf eines der farbigen Segmente des
                          Diagramms.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Einstellungen",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Unter "<strong>Einstellungen</strong>" können Sie im
                          Anwendungsmenü <Icon name="bars" /> festlegen, wie die
                          Stationen und die Hintergrundkarte angezeigt werden
                          sollen.
                        </p>
                        <p>
                          Zu den Stationen können Sie unter "
                          <b>
                            <i>Einstellungen Lade- und Verleihstationen</i>
                          </b>
                          " auswählen, ob Ihre unter "<b>Filter</b>"
                          festgelegten Filterbedingungen in einer Titelzeile
                          ausgeprägt werden oder nicht. Weiter können Sie dort
                          festlegen, ob räumlich nah beieinander liegende
                          Stationen maßstabsabhängig zu einem Punktsymbol
                          zusammengefasst werden oder nicht. Unter "
                          <b>
                            <i>Symbolgröße</i>
                          </b>
                          " können Sie in Abhängigkeit von Ihrer
                          Bildschirmauflösung und Ihrem Sehvermögen auswählen,
                          ob die Stationen mit kleinen (35 Pixel), mittleren (45
                          Pixel) oder großen (55 Pixel) Symbolen angezeigt
                          werden.
                        </p>

                        <p>
                          Unter "
                          <strong>
                            <em>Hintergrundkarte</em>
                          </strong>
                          " können Sie auswählen, ob Sie die standardmäßig
                          aktivierte farbige Hintergrundkarte verwenden möchten
                          ("
                          <em>Stadtplan (Tag)</em>") oder lieber eine
                          invertierte Graustufenkarte ("
                          <em>Stadtplan (Nacht)</em>"), zu der uns die von
                          vielen PKW-Navis bei Dunkelheit eingesetzte
                          Darstellungsweise inspiriert hat.{" "}
                          <strong>Hinweis</strong>: Der Stadtplan (Nacht) wird
                          Ihnen nur angeboten, wenn Ihr Browser
                          CSS3-Filtereffekte unterstützt, also z. B. nicht beim
                          Microsoft Internet Explorer. Die Nacht-Karte erzeugt
                          einen deutlicheren Kontrast mit den farbigen Symbolen
                          der Lade- und Verleihstationen, die unterschiedlichen
                          Flächennutzungen in der Hintergrundkarte lassen sich
                          aber nicht mehr so gut unterscheiden wie in der
                          Tag-Karte. Als dritte Möglichkeit steht eine{" "}
                          <i>Luftbildkarte</i> zur Verfügung, die die
                          Anschaulichkeit des Luftbildes mit der Eindeutigkeit
                          des Stadtplans (Kartenschrift, durchscheinende Linien)
                          verbindet.
                        </p>

                        <p>
                          In der{" "}
                          <b>
                            <i>Vorschau</i>
                          </b>{" "}
                          sehen Sie direkt die Wirkung ihrer Einstellungen in
                          einem fest eingestellten Kartenausschnitt.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Personalisierung",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <p>
                        Ihre Einstellungen bleiben auch nach einem Neustart der
                        Anwendung erhalten. (Es sei denn, Sie löschen den
                        Browser-Verlauf einschließlich der gehosteten
                        App-Daten.)
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
