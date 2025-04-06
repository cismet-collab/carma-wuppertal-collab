import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faMagnifyingGlassMinus,
  faRandom,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { getSymbolSVGGetter } from "react-cismap/tools/uiHelper";
import { featureSamples4Icons } from "./helper/iconFactory";
import {
  MeinStandortText,
  LuftbildkarteText,
  StadtplanTagNachtText,
  InKartePositionierenText,
} from "../commons";
import FuzzySearchParagraph from "../commons/FuzzySearchParagraph";

export const KompaktanleitungSection = () => {
  return (
    <Section
      key="help"
      sectionKey="help"
      sectionBsStyle="default"
      sectionTitle="Kompaktanleitung"
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
                          Die <b>Klimaortkarte</b> bietet ihnen die
                          folgenden Hintergrundkarten an, die auf verschiedenen
                          Geodatendiensten und Geodaten basieren:
                        </p>
                        <ul>
                          <LuftbildkarteText />
                          <StadtplanTagNachtText />
                        </ul>
                        <ul>
                          <li>
                            <strong>Fernwärme</strong>: Kartendienst (WMS) der
                            Stadt Wuppertal in Zusammenarbeit mit der{" "}
                            <a
                              target="_wsw"
                              href="https://www.wsw-online.de/wsw-energie-wasser/privatkunden/produkte/fernwaerme/talwaerme-wuppertal/"
                            >
                              WSW GmbH
                            </a>
                            . Datengrundlage: Fernwärmeleitungen der Wuppertaler
                            Stadtwerke GmbH (Stand 02.2021) mit einer
                            Puffergröße von 10 m. ©{" "}
                            <a
                              target="_wsw"
                              href="https://www.wsw-online.de/impressum/"
                            >
                              Wuppertaler Stadtwerke GmbH
                            </a>
                            .
                          </li>
                        </ul>

                        <div>
                          Im Bereich der{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="styleaslink">
                              <FontAwesomeIcon icon={faRandom} /> Klimaorte
                            </a>
                          </span>{" "}
                          stellt die Klimaortkarte Wuppertal zusätzlich die
                          Daten der{" "}
                          <a
                            href="https://offenedaten-wuppertal.de/dataset/klimaorte-wuppertal"
                            target="_opendata"
                          >
                            Klimaorte
                          </a>{" "}
                          und eine Auswahl der{" "}
                          <a
                            href="https://offenedaten-wuppertal.de/dataset/radrouten-wuppertal"
                            target="_opendata"
                          >
                            Radrouten
                          </a>{" "}
                          (mit{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            1,5 Meter
                          </span>{" "}
                          Puffer) aus dem Open-Data-Angebot der Stadt Wuppertal
                          dar. Im Bereich der{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="styleaslink">
                              <FontAwesomeIcon icon={faRandom} /> Klimarouten
                            </a>
                          </span>{" "}
                          stellt die Klimaortkarte Wuppertal zusätzlich die
                          Daten der Klimarouten, aus dem Open-Data-Angebot
                          (dieses befindet sich in Vorbereitung) der Stadt
                          Wuppertal dar, welche ausgewählte Fahrrad- und
                          Fußwegrouten symbolisieren (
                          <span style={{ whiteSpace: "nowrap" }}>2 Meter</span>{" "}
                          Puffer um Linienstruktur). Die Routen sind in
                          Kooperation mit{" "}
                          <a href="https://www.komoot.de/" target="_komoot">
                            komoot{" "}
                          </a>{" "}
                          hergestellt worden, wobei sich im jeweiligen
                          Datenblatt <FontAwesomeIcon icon={faInfoCircle} /> der
                          Link zur externen Datenquelle befindet. Weitere
                          Objekte, welche sich in einem Abstand von{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            60 Metern
                          </span>{" "}
                          zur Klimaroute befinden, werden ebenfalls präsentiert
                          bzw. der Route zugeordnet:
                          <ul>
                            <li>Klimaorte</li>
                            <li>
                              Aussichtspunkte und die von dort sichtbaren
                              Klimaorte (Open-Data-Angebot befindet sich in
                              Vorbereitung)
                            </li>
                            <li>
                              Zwischenstopps, als Symbol für weitere Highlights
                              im Routenverlauf (Open-Data-Angebot befindet sich
                              in Vorbereitung)
                            </li>
                            <li>
                              ausgewählte Point of Interests (
                              <a
                                href="https://offenedaten-wuppertal.de/dataset/interessante-orte-poi-wuppertal"
                                target="_opendata"
                              >
                                Interessante Orte Wuppertal
                              </a>
                              , Anpassung des Open-Data-Angebots befindet sich
                              in Vorbereitung).
                            </li>
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                },
                {
                  title: "Hintergrund",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die Möglichkeiten zum Klima- und Umweltschutz werden
                          aktuell global diskutiert, wobei bereits auf
                          kommunaler Ebene viele Akteure und Einrichtungen an
                          deren Umsetzung beteiligt sind. An den im Kartenbild
                          gezeigten "Klimaorten" wird das Thema Klimaschutz
                          praktiziert und vermittelt; hier wird der Klimaschutz
                          für die Bürger:innen erlebbar. Viele dieser Klimaorte
                          sind im Rahmen von innovativen Projekten durch den
                          Wissenstransfer und das Engagement von Unternehmen,
                          Vereinen, Verbänden sowie Quartiersbewohner:innen
                          entstanden, die sich aktiv für Lösungen zum Klima- und
                          Umweltschutz in ihrem Quartier und für die Stadt
                          Wuppertal einsetzen. Zu den zielführenden Projekten
                          gehören z.B. Wuppertals Klimasiedlungen, Anlagen zur
                          effizienten und/oder regenerativen Energieerzeugung,
                          Projekte der Verkehrswende sowie der Klima- und
                          Umweltbildung, an denen zahlreiche Akteure mitwirken
                          und mitgestalten.
                        </p>
                        <p>
                          Mit den Klimarouten steht den Bürger:innen eine
                          weitere Möglichkeit zur Erkundung der Klimaorte im
                          Wuppertaler Stadtgebiet zur Verfügung. Verschiedene
                          Routen (zu Fuß oder mit dem Fahrrad) führen Sie an
                          ausgewählten Klimaorten vorbei: Aussichtspunkte{" "}
                          {getSymbolSVGGetter(
                            featureSamples4Icons.aussichtspunkt?.properties
                              ?.svgBadge,
                            featureSamples4Icons.aussichtspunkt?.properties
                              ?.svgBadgeDimension
                          )(
                            20,
                            featureSamples4Icons.aussichtspunkt?.properties
                              .color,
                            "aussichtspunktsample_"
                          )}{" "}
                          ermöglichen Ihnen den Blick auf weitere Klimaorte aus
                          größerer Entfernung zu werfen und Zwischenstopps{" "}
                          {getSymbolSVGGetter(
                            featureSamples4Icons.zwischenstopp?.properties
                              ?.svgBadge,
                            featureSamples4Icons.zwischenstopp?.properties
                              ?.svgBadgeDimension
                          )(
                            20,
                            featureSamples4Icons.zwischenstopp?.properties
                              .color,
                            "zwischenstoppsample_"
                          )}{" "}
                          bieten Ihnen ausgewählte Highlights im Routenverlauf
                          an.
                        </p>
                        <p>
                          Ergänzt wird dieses Angebot durch weitere interessante
                          Orte (Point of Interest, POI) entlang des
                          Routenverlaufs. Begeben Sie sich auf Erkundungstour:
                          die Welt des Klimaschutzes und nachhaltiger Ideen
                          erwarten Sie.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der Fachobjekte",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf eines
                          der farbigen Symbole (Signaturen oder dunkelblaue
                          Fahrradtrassen), mit denen die Fachobjekte des
                          Kartenthemas in der Karte dargestellt werden, um sich
                          den Namen des jeweiligen Fachobjektes anzeigen zu
                          lassen. Ein Klick auf das Symbol setzt den Fokus auf
                          dieses Fachobjekt. Es wird dann blau hinterlegt und
                          die zugehörigen Informationen (i. d. R. Name, Straße
                          und Hausnummer, Kurzinformation) werden unten rechts
                          in der Info-Box angezeigt. (Auf einem Tablet-PC wird
                          der Fokus durch das erste Antippen des
                          Fachobjekt-Symbols gesetzt, das zweite Antippen
                          blendet den Namen ein.) Außerdem werden Ihnen in der
                          Info-Box weiterführende Funktionen und
                          Kommunikationslinks zu diesem Fachobjekt angeboten.
                          Mit der Lupenfunktion <Icon name="search" /> wird die
                          Karte auf das aktuelle Fachobjekt zentriert und
                          gleichzeitig ein großer Betrachtungsmaßstab (Zoomstufe
                          15) eingestellt. Falls es mehr Informationen zu den
                          Fachobjekten gibt, als in der Info-Box dargestellt
                          werden können, können Sie sich diese über die
                          Datenblattfunktion <Icon name="info" /> anzeigen
                          lassen. Die Kommunikationslinks umfassen i. d. R.{" "}
                          <Icon name="phone" /> Telefon,{" "}
                          <Icon name="envelope-square" /> E-Mail und{" "}
                          <Icon name="external-link-square" />{" "}
                          Internet-Homepage.
                        </p>
                        <p>
                          Wenn Sie noch kein Fachobjekt im aktuellen
                          Kartenausschnitt selektiert haben, wird der Fokus
                          automatisch auf das nördlichste Objekt gesetzt. Mit
                          den Funktionen{" "}
                          <a className="renderAsLink">&lt;&lt;</a> vorheriger
                          Treffer und <a className="renderAsLink">&gt;&gt;</a>{" "}
                          nächster Treffer können Sie ausgehend von dem Objekt,
                          auf dem gerade der Fokus liegt, in nördlicher bzw.
                          südlicher Richtung alle aktuell im Kartenfenster
                          angezeigten Objekte durchmustern. Sofern die
                          Kartenanwendung nur ein einziges Fachobjekt umfasst,
                          bleibt der Fokus auf diesem Objekt, auch wenn sich
                          dieses nicht im aktuell eingestellten Kartenausschnitt
                          befindet. Die Funktionen{" "}
                          <a className="renderAsLink">&lt;&lt;</a> vorheriger
                          Treffer und <a className="renderAsLink">&gt;&gt;</a>{" "}
                          nächster Treffer werden Ihnen in diesem Fall nicht
                          angeboten. Mit der Funktion <Icon name="search" /> in
                          der Info-Box können Sie jederzeit wieder zu diesem
                          Fachobjekt zurückkehren.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch die thematische
                          Zuordnung und der Name des Fachobjektes sowie die
                          Link-Symbole angezeigt werden - nützlich für Endgeräte
                          mit kleinem Display. Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-up" /> an derselben Stelle
                          können Sie die Info-Box dann wieder vollständig
                          einblenden.
                        </p>
                        <p>
                          In vielen unserer Kartenanwendungen bieten wir Ihnen
                          zumindest zu einigen Fachobjekten Fotos oder
                          Fotoserien an. Sie finden dann ein Vorschaubild direkt
                          über der Info-Box. Klicken Sie auf das Vorschaubild,
                          um einen Bildbetrachter (&quot;Leuchtkasten&quot;) mit
                          dem Foto / der Fotoserie zu öffnen. Wenn wir hier auf
                          Bildmaterial zugreifen, das der Urheber auch selbst im
                          Internet publiziert, finden Sie im Fußbereich des
                          Bildbetrachters einen Link auf dieses Angebot.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der Fachobjekte",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Zur Darstellung der Fachobjekte des Kartenthemas in
                          der Karte werden weiße Symbole mit farbigem
                          Hintergrund verwendet. Die dabei verwendeten Farben
                          werden in der Titelzeile der Info-Box aufgegriffen.
                          Zusätzlich werden dort die Informationen textlich
                          zusammengefasst, die für die Kartendarstellung (Symbol
                          und Hintergrundfarbe) relevant sind. Dort finden Sie
                          also die Bedeutung des Symbols. Die verwendete
                          Symbolik erklärt sich auf diese Weise selbst, sodass
                          die Kartenanwendung keine klassische Legendengrafik
                          benötigt.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Datenblatt",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Wenn Sie ein Objekt in der Karte markiert haben,
                          werden Ihnen Objektangaben in der Infobox präsentiert.
                          Bei manchen TopicMaps übersteigt die Menge an
                          Informationen zu diesem Objekt (oder auch der
                          Gestaltungsspielraum) die Möglichkeiten der Infobox,
                          z. B. bei der Präsentation von Messwerten über einen
                          längeren Zeitraum in Form von Diagrammen. Daher wird
                          bei manchen TopicMaps ein ergänzendes Datenblatt
                          angeboten, welches Sie über die Schaltfläche{" "}
                          <FontAwesomeIcon icon={faInfoCircle} /> in der Infobox
                          erreichen. Für das Datenblatt einer Klimaroute folgen
                          die Erläuterungen zu den einzelnen Abschnitten und
                          möglichen Funktionen.
                        </p>
                        <h5>
                          <b>Höhenprofil</b>
                        </h5>
                        <p>
                          In der Graphik wird Ihnen das Höhenprofil der
                          jeweiligen Klimaroute auf der komoot-Datengrundlage
                          als blaue Linie präsentiert (Höhen- und
                          Entfernungswerte auf{" "}
                          <span style={{ whiteSpace: "nowrap" }}>1 Meter</span>{" "}
                          gerundet). Dadurch sind Bereiche mit flachem Terrain
                          oder großem Gefälle/ großer Steigung schnell
                          ersichtlich. Besonders für Wuppertal mit der markanten
                          Topographie kann dies beim Erkunden der Klimaroute
                          hilfreich sein. Per Mouseover oder Fingertipp auf die
                          blaue Linie können Sie die entsprechenden Höhenwerte
                          und einen Abstand zum Startpunkt der Klimaroute
                          ermitteln. Am oberen Ende der Graphik befinden sich{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            Markierungen{" "}
                            <FontAwesomeIcon
                              style={{ color: "#dddddd" }}
                              icon={faStop}
                            />
                            ,
                          </span>{" "}
                          welche auf die an der Klimaroute befindlichen
                          Stationen hinweisen. Ähnlich wie zuvor, lassen sich
                          für die Stationen die Höhenwerte oder Entfernungen zum
                          Klimaroutenstartpunkt ermitteln. Für die genauere
                          Betrachtung eines Routenabschnitts bzgl. des
                          Höhenprofils markieren Sie mit der Maus den
                          gewünschten Bereich oder verwenden Sie die
                          Zoom-In-Geste (oder Zoom-Out) auf Ihrem mobilen
                          Endgerät. Ein Zurücksetzen des Zooms ist mit einem
                          Klick auf das Lupen-Symbol{" "}
                          <FontAwesomeIcon icon={faMagnifyingGlassMinus} />{" "}
                          möglich.
                        </p>
                        <h5>
                          <b>Routenverlauf</b>
                        </h5>

                        <p>
                          In der Graphik wird Ihnen in einer Verlaufsansicht die
                          Stationsabfolge an einer Klimaroute präsentiert:
                          Station folgt auf Station entlang der Klimaroute. Die
                          Entfernung zum Klimaroutenstartpunkt (auf{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            {" "}
                            100 Meter
                          </span>{" "}
                          gerundet) wird Ihnen im linken Bereich der
                          Verlaufsansicht geboten.
                        </p>

                        <h5>
                          <b>Route in umgekehrter Reihenfolge</b>
                        </h5>
                        <p>
                          Sie möchten das Höhenprofil bzw. den Routenverlauf in
                          umgekehrter Reihenfolge anzeigen lassen? Im
                          Kopfbereich des Datenblattes befindet sich hierzu die
                          Schaltfläche "umgekehrte Reihenfolge anzeigen". Ein
                          Klick darauf wechselt anschließend die
                          Verlaufsrichtung der Graphiken. Ein weiterer Klick auf
                          die jetzt "ursprüngliche Reihenfolge anzeigen"
                          benannte Schaltfläche, setzt die Sortierung wieder in
                          die Ausgangslage zurück.
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
                              Um in der Karte direkt zu einer bestimmten Adresse
                              zu gelangen, geben Sie diese im Eingabefeld links 
                              unten ein. In der inkrementellen Auswahlliste werden 
                              Ihnen schon nach der Eingabe des ersten Buchstabens 
                              passende Treffer angeboten. (Wenn Sie weitere Zeichen 
                              eingeben, wird der Inhalt der Auswahlliste angepasst.)
                              Sie können auch andere Suchbegriffe eingeben, nämlich
                              Stadtteil (Stadtbezirk oder Quartier), Straßenname
                              (bei Straßen ohne zugeordnete Hausnummern) oder
                              "Point of Interest" (interessanter Ort, kurz als
                              POI bezeichnet).
                            </p>
                            <p>
                              Durch das in der Auswahlliste vorangestellte
                              Symbol erkennen Sie, ob es sich bei einem Treffer
                              um einen <Icon name="circle" /> Stadtbezirk, ein{" "}
                              <Icon name="pie-chart" /> Quartier, eine{" "}
                              <Icon name="home" /> Adresse, eine{" "}
                              <Icon name="road" /> Straße ohne Hausnummern, eine{" "}
                              <Icon name="child" /> Kindertageseinrichtung, eine{" "}
                              <Icon name="graduation-cap" /> Schule oder einen{" "}
                              <Icon name="sun" /> Klimaort handelt.
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
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <MeinStandortText />,
                  },
                },
                {
                  title: "Filtern",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Im Bereich &quot;<strong>Meine Klimaorte</strong>
                          &quot; können Sie im Anwendungsmenü{" "}
                          <Icon name="bars" /> die in der Karte angezeigten
                          Klimaorte so ausdünnen, dass nur die für Sie
                          interessanten Orte übrig bleiben. Dabei umfasst die
                          Filterung die Angebote an den Klimastandorten, wobei
                          sich ein Angebot aus einem Thema und einer Kategorie
                          ergibt. Standardmäßig sind die Einstellungen hier so
                          gesetzt, dass alle verfügbaren Klimaorte angezeigt
                          werden.
                        </p>
                        <p>
                          Ihnen stehen somit zwei Filterkriterien zur Verfügung:
                          "Themen" und "Kategorien". Innerhalb dieser Kriterien
                          können sie in einer alphabetisch sortieren Menge an
                          Schlagworten (Tags) bestimmte Begriffe per Mausklick
                          selektieren bzw. deselektieren; die Auswahl aller bzw.
                          keines der Schlagworte erfolgt über die Schaltfläche{" "}
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="renderAsLink">alle</a> bzw.{" "}
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="renderAsLink">keine</a>.
                        </p>
                        <p>
                          Ihre Einstellungen werden direkt in der blauen
                          Titelzeile des Bereichs "
                          <strong>Meine Klimaorte</strong>" und in dem
                          Donut-Diagramm, das Sie rechts neben oder unter den
                          Filteroptionen finden, ausgewertet. Die Titelzeile
                          zeigt die Gesamtanzahl der Klimaorte, die den von
                          Ihnen gesetzten Filterbedingungen entsprechen. Das
                          Donut-Diagramm zeigt zusätzlich die Verteilung der
                          Klimaorte entsprechend der Filterkriterien "Themen"
                          oder "Kategorien". Bewegen Sie dazu den Mauszeiger auf
                          eines der farbigen Segmente des Diagramms. Die Farben
                          des Donut-Diagramms entsprechen den farbigen
                          Hintergründen der Schlagworte aus dem Filterkriterium
                          "Themen".
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Einstellungen",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Unter "<strong>Einstellungen</strong>" können Sie im
                          Anwendungsmenü festlegen, wie die Hintergrundkarte und
                          die Fachobjekte des Kartenthemas angezeigt werden
                          sollen.
                        </p>
                        <p>
                          Unter "
                          <strong>
                            <em>Hintergrundkarte</em>
                          </strong>
                          "können Sie auswählen, ob Sie die standardmäßig
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
              ],
            },
          ]}
        />
      }
    />
  );
};
