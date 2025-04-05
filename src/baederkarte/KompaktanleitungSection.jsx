import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import { getSymbolSVGGetter } from "react-cismap/tools/uiHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import AdressMarker from "./assets/AdressMarker.jpg";
import {
  MeinStandortText,
  StadtplanTagNachtText,
  LuftbildkarteText,
  InKartePositionierenText,
} from "../commons";
import FuzzySearchParagraph from "../commons/FuzzySearchParagraph";

const hallenbadSVGsrc = `
<svg xmlns="http://www.w3.org/2000/svg" width="20.0" height="20.0">
<path class="fg-fill" fill="#FFF"  d="M0 0h20.008v20.945H0z"/>
<path class="bg-fill" fill="#C32D6A" stroke-width="0" d="M-0 0l20 0 0 10.003c-0.65936,-0.00682 -1.11345,-0.34947 -1.56821,-0.69271 -0.86518,-0.65302 -1.73181,-1.30713 -3.41084,-1.30713 -1.67813,0 -2.54021,0.65234 -3.40228,1.30467 -0.45944,0.34766 -0.9189,0.69533 -1.59773,0.69533 -0.6788,0 -1.13824,-0.34766 -1.59766,-0.69531 -0.86205,-0.65234 -1.72412,-1.30469 -3.40233,-1.30469 -1.67894,0 -2.54581,0.6541 -3.41125,1.30711 -0.4595,0.34672 -0.91827,0.69289 -1.58875,0.69289l0 2.5c1.66756,0 2.5298,-0.65061 3.39343,-1.30227 0.46197,-0.34858 0.92471,-0.69773 1.60657,-0.69773 0.67882,0 1.13824,0.34766 1.59765,0.69531 0.86206,0.65234 1.72414,1.30469 3.40234,1.30469 1.67819,0 2.54032,-0.65236 3.40241,-1.30471 0.45941,-0.34763 0.91884,-0.69529 1.5976,-0.69529 0.68171,0 1.14432,0.34917 1.60616,0.69775 0.85988,0.64903 1.7185,1.29692 3.37289,1.30213l0 3.07371c-0.65936,-0.00682 -1.11345,-0.34947 -1.56821,-0.69271 -0.86518,-0.65302 -1.73181,-1.30713 -3.41084,-1.30713 -1.67813,0 -2.54021,0.65234 -3.40228,1.30467 -0.45944,0.34766 -0.9189,0.69533 -1.59773,0.69533 -0.6788,0 -1.13824,-0.34766 -1.59766,-0.69531 -0.86205,-0.65234 -1.72412,-1.30469 -3.40233,-1.30469 -1.67894,0 -2.54581,0.6541 -3.41125,1.30711 -0.4595,0.34672 -0.91827,0.69289 -1.58875,0.69289l0 2.5c1.66756,0 2.5298,-0.65061 3.39343,-1.30227 0.46197,-0.34858 0.92471,-0.69773 1.60657,-0.69773 0.67882,0 1.13824,0.34766 1.59765,0.69531 0.86206,0.65234 1.72414,1.30469 3.40234,1.30469 1.67819,0 2.54032,-0.65236 3.40241,-1.30471 0.45941,-0.34763 0.91884,-0.69529 1.5976,-0.69529 0.68171,0 1.14432,0.34917 1.60616,0.69775 0.85988,0.64903 1.7185,1.29692 3.37289,1.30213l0 1.92317 -20 0 0 -20z"/>
<polygon class="fg-fill" fill="#FFF" fill-rule="nonzero" points="0.00095,5.53666 9.47805,0.2716 9.96243,0.00251 10.4468,0.2716 20.001,5.57945 20.001,7.85983 9.96243,2.28288 0.00095,7.81704 "/>
</svg>
`;
const freiBadSVGsrc = `
<svg xmlns="http://www.w3.org/2000/svg" width="20.0" height="20.0">
    <path class="fg-fill" fill="#FFF"  d="M0 0h20.008v16.945H0z"/>
    <path class="bg-fill" fill="#C32D6A"  stroke="#C32D6A" stroke-width=".011" 
	d="M0.000900073 0.000610049l20.0016 0 0 5.81939c-0.659583,-0.00680055 -1.11354,-0.349628 -1.56825,-0.692836 -0.8652,-0.653153 -1.73191,-1.30706 -3.41128,-1.30706 -1.67824,0 -2.54042,0.652393 -3.40259,1.30479 -0.459627,0.347748 -0.918874,0.695486 -1.59773,0.695486 -0.678855,0 -1.13847,-0.347738 -1.59772,-0.695486 -0.86218,-0.652393 -1.72435,-1.30479 -3.40259,-1.30479 -1.679,0 -2.54609,0.654283 -3.41166,1.30706 -0.459627,0.346608 -0.918494,0.692836 -1.58904,0.692836l0 2.50034c1.66766,0 2.52982,-0.650503 3.39351,-1.30252 0.461897,-0.348498 0.924925,-0.697757 1.6068,-0.697757 0.678855,0 1.13848,0.347738 1.59772,0.695486 0.86218,0.652393 1.72435,1.30479 3.40259,1.30479 1.67824,0 2.54042,-0.652393 3.40259,-1.30479 0.459627,-0.347748 0.918874,-0.695486 1.59773,-0.695486 0.681875,0 1.14452,0.349258 1.60642,0.697757 0.85991,0.648993 1.71868,1.29685 3.3731,1.30215l0 5.42554c-0.659583,-0.00681055 -1.11353,-0.349638 -1.56825,-0.692846 -0.8652,-0.653153 -1.73191,-1.30706 -3.41128,-1.30706 -1.67824,0 -2.54042,0.652393 -3.40259,1.30479 -0.459627,0.347748 -0.918874,0.695486 -1.59773,0.695486 -0.678845,0 -1.13847,-0.347738 -1.59772,-0.695486 -0.86218,-0.652393 -1.72435,-1.30479 -3.40259,-1.30479 -1.679,0 -2.54609,0.654283 -3.41166,1.30706 -0.459627,0.346608 -0.918494,0.692846 -1.58903,0.692846l0 2.50034c1.66765,0 2.52982,-0.650513 3.3935,-1.30253 0.461897,-0.348498 0.924925,-0.697757 1.6068,-0.697757 0.678855,0 1.13848,0.347748 1.59773,0.695486 0.86217,0.652393 1.72435,1.3048 3.40259,1.3048 1.67824,0 2.54041,-0.652403 3.40259,-1.3048 0.459617,-0.347738 0.918864,-0.695486 1.59772,-0.695486 0.681875,0 1.14453,0.349258 1.60642,0.697757 0.85991,0.648993 1.71868,1.29686 3.3731,1.30215l0 3.75637 -20.0016 0 0 -20.0016 0.000760062 0.000380031z"/>
</svg>
`;

const defaultHallenBadSVG = getSymbolSVGGetter(hallenbadSVGsrc, {
  width: 20,
  height: 20,
})(18, "#565B5E", "helpTextSVG0");

const defaultFreibadBadSVG = getSymbolSVGGetter(freiBadSVGsrc, {
  width: 20,
  height: 20,
})(18, "#565B5E", "helpTextSVG1");

const defaultStaedtischesFreibadSVG = getSymbolSVGGetter(freiBadSVGsrc, {
  width: 20,
  height: 20,
})(18, "#1A4860", "helpTextSVG2");

const defaultOeffentlichesVereinsbadSVG = getSymbolSVGGetter(freiBadSVGsrc, {
  width: 20,
  height: 20,
})(18, "#107FC9", "helpTextSVG3");
const defaultNichtOeffentlichesVereinsbadSVG = getSymbolSVGGetter(
  freiBadSVGsrc,
  {
    width: 20,
    height: 20,
  }
)(18, "#4AC1D1", "helpTextSVG4");

export const KompaktanleitungSection = ({
  hallenBadSVG = defaultHallenBadSVG,
  freibadBadSVG = defaultFreibadBadSVG,
  staedtischesFreibadSVG = defaultStaedtischesFreibadSVG,
  oeffentlichesVereinsbadSVG = defaultOeffentlichesVereinsbadSVG,
  nichtOeffentlichesVereinsbadSVG = defaultNichtOeffentlichesVereinsbadSVG,
}) => {
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
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die <strong>Bäderkarte Wuppertal</strong> bietet Ihnen
                          die folgenden Hintergrundkarten an, die auf
                          verschiedenen Geodatendiensten und Geodaten basieren:
                        </p>

                        <ul>
                          <StadtplanTagNachtText />
                          <LuftbildkarteText />
                        </ul>

                        <p>
                          Zusätzlich nutzt die Bäderkarte den Datensatz{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/interessante-orte-poi-wuppertal"
                          >
                            POI Wuppertal
                          </a>{" "}
                          des{" "}
                          <a
                            target="_legal"
                            href="https://www.wuppertal.de/rathaus-buergerservice/karten_vermessung/index.php"
                          >
                            Ressorts Vermessung, Katasteramt und Geodaten
                          </a>{" "}
                          aus dem Open-Data-Angebot der Stadt Wuppertal, der
                          auch die Wuppertaler Schwimmbäder umfasst.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Bäder auswählen und abfragen",
                  bsStyle: "danger",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        {" "}
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf eines
                          der Schwimmbad-Symbole, um sich den Namen des Bades
                          anzeigen zu lassen. Ein Klick auf das Symbol setzt den
                          Fokus auf dieses Schwimmbad. Es wird dann blau
                          hinterlegt und die zugehörigen Informationen (Name,
                          Kurzinformation, Straße und Hausnummer) werden unten
                          rechts in der Info-Box angezeigt. (Auf einem Tablet-PC
                          wird der Fokus durch das erste Antippen des
                          Schwimmbad-Symbols gesetzt, das zweite Antippen
                          blendet den Namen ein.) Außerdem werden Ihnen in der
                          Info-Box weiterführende (Kommunikations-) Links zu
                          diesem Schwimmbad angezeigt:{" "}
                          <Icon name="external-link-square" /> Internet,{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            <Icon name="envelope-square" /> E-Mail
                          </span>{" "}
                          und <Icon name="phone" /> Telefon. Durch Anklicken des
                          Kalender-Symbols <Icon name="calendar" /> gelangen Sie
                          bei einigen städtischen Bädern zum
                          Aqua-Aktiv-Kursprogramm des Sport- und Bäderamtes.
                          Dort können Sie online Fitnesskurse in diesen Bädern
                          buchen.
                          Mit dem
                          Lupensymbol{" "}
                          <FontAwesomeIcon icon={faSearchLocation} /> wird die
                          Karte auf das Bad, das gerade den Fokus hat,
                          zentriert und gleichzeitig ein großer
                          Betrachtungsmaßstab (Zoomstufe 15) eingestellt.{" "}
                        </p>
                        <p>
                          Wenn Sie noch kein Schwimmbad im aktuellen
                          Kartenausschnitt selektiert haben, wird der Fokus
                          automatisch auf das nördlichste Bad gesetzt. Mit den
                          Funktionen <a>&lt;&lt;</a> vorheriger Treffer und{" "}
                          <a>&gt;&gt;</a> nächster Treffer können Sie ausgehend
                          von dem Schwimmbad, auf dem gerade der Fokus liegt, in
                          nördlicher bzw. südlicher Richtung alle aktuell im
                          Kartenfenster angezeigten Bäder durchmustern.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch die thematische
                          Zuordnung und der Name des Schwimmbades sowie die
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
                  title: "Kartendarstellung der Bäder",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Zur Darstellung der Schwimmbäder in der Karte werden
                          unterschiedliche Symbole für Hallenbäder{" "}
                          {hallenBadSVG} und Freibäder {freibadBadSVG}{" "}
                          verwendet. Dabei werden 3 unterschiedliche
                          Hintergrundfarben verwendet: {staedtischesFreibadSVG}{" "}
                          steht für städtische Bäder, die alle öffentlich
                          zugänglich sind. {oeffentlichesVereinsbadSVG}{" "}
                          kennzeichnet öffentlich zugängliche Bäder in
                          Vereinsregie und {nichtOeffentlichesVereinsbadSVG}{" "}
                          wird für nicht öffentlich zugängliche Vereinsbäder
                          eingesetzt. Diese Farben werden in der Titelzeile der
                          Info-Box aufgegriffen. Zusätzlich werden dort die
                          Informationen zusammengefasst, die für die
                          Kartendarstellung relevant sind, z. B. "Hallenbad
                          (Verein), nicht öffentlich".
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
                              Um die Schwimmbäder in einem bestimmten Bereich des
                              Stadtgebietes zu erkunden, geben Sie den Namen
                              eines Stadtteils (Stadtbezirk oder Quartier), eine
                              Adresse oder den Namen eines interessanten Ortes 
                              (Point of Interest, kurz POI) im Eingabefeld links unten 
                              ein. In der inkrementellen Auswahlliste werden 
                              Ihnen schon nach der Eingabe des ersten Buchstabens 
                              passende Treffer angeboten. (Wenn Sie weitere Zeichen 
                              eingeben, wird der Inhalt der Auswahlliste angepasst.
                              Durch das vorangestellte Symbol erkennen
                              Sie, ob es sich dabei um einen{" "}
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
                        posttext={
                          <p>
                            Da die Wuppertaler Schwimmbäder vollständig im
                            POI-Datensatz enthalten sind, können Sie sich über
                            alle gängigen Bezeichnungen dieser Schwimmbäder in
                            der Karte positionieren. Dabei sind auch die Namen
                            der Vereine, die ein Schwimmbad betreiben, als
                            alternative Bezeichnungen des jeweiligen Bades
                            hinterlegt. (Geben Sie z. B. einmal "Wasserfreunde"
                            ein.)
                          </p>
                        }
                      />
                    ),
                  },
                },
                {
                  title: "Mein Standort",
                  bsStyle: "info",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <MeinStandortText />,
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
                          Bäder und die Hintergrundkarte angezeigt werden sollen.
                          Weiter können Sie festlegen, ob
                          räumlich nah beieinander liegende Bäder maßstabsabhängig
                          zu einem Punktsymbol zusammengefasst werden oder
                          nicht. Unter "
                          <em>
                            <strong>Symbolgröße</strong>
                          </em>
                          " können Sie in Abhängigkeit von Ihrer
                          Bildschirmauflösung und Ihrem Sehvermögen auswählen,
                          ob die Bäder mit kleinen (25 Pixel), mittleren (35
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
                          Symbolen, die unterschiedlichen Flächennutzungen
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
                        Ihre Einstellungen bleiben auch nach
                        einem Neustart der Anwendung erhalten. (Es sei denn, Sie
                        löschen den Browser-Verlauf einschließlich der
                        gehosteten App-Daten.)
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
