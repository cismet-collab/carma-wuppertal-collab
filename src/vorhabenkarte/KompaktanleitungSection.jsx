import Icon from "react-cismap/commons/Icon";

import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import { getSymbolSVGGetter } from "react-cismap/tools/uiHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import {
  MeinStandortText,
  StadtplanTagNachtText,
  OpenStreetMapText, 
  LuftbildkarteText,
  InKartePositionierenText,
} from "../commons";
import FuzzySearchParagraph from "../commons/FuzzySearchParagraph";

const urlPrefix = window.location.origin + window.location.pathname;

export const ladestationSVG = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Creator: CorelDRAW -->
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 524.197 523.652"
 xmlns:xlink="http://www.w3.org/1999/xlink">
 <g id="Ebene_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path class="bg-fill" fill="#003B80" d="M52.3641 0l418.923 0c28.8003,0 52.3641,23.5638 52.3641,52.3641l0 418.923c0,28.8003 -23.5638,52.3641 -52.3641,52.3641l-418.923 0c-28.8003,0 -52.3641,-23.5638 -52.3641,-52.3641l0 -418.923c0,-28.8003 23.5638,-52.3641 52.3641,-52.3641z"/>
  <path class="fg-fill" fill="white" fill-rule="nonzero" d="M126.923 496.835c-15.5305,0 -29.5952,-6.29848 -39.7761,-16.4793 -10.1808,-10.1808 -16.4793,-24.2461 -16.4793,-39.7766 0,-15.5305 6.29848,-29.5957 16.4793,-39.7761 10.1808,-10.1808 24.2456,-16.4793 39.7761,-16.4793 15.5315,0 29.5957,6.29848 39.7766,16.4793 10.1808,10.1803 16.4793,24.2456 16.4793,39.7761 0,15.5315 -6.29848,29.5957 -16.4793,39.7766 -10.1808,10.1808 -24.2451,16.4793 -39.7766,16.4793zm-21.2639 -34.9914c5.44179,5.44179 12.9609,8.80887 21.2639,8.80887 8.30354,0 15.8227,-3.36708 21.2644,-8.80887 5.44179,-5.44179 8.80887,-12.9609 8.80887,-21.2644 0,-8.30354 -3.36708,-15.8221 -8.80887,-21.2639 -5.44179,-5.44179 -12.9609,-8.80887 -21.2644,-8.80887 -8.30302,0 -15.8221,3.36708 -21.2639,8.80887 -5.44179,5.44179 -8.80887,12.9604 -8.80887,21.2639 0,8.30302 3.36708,15.8227 8.80887,21.2644z"/>
  <path class="fg-fill" fill="white" fill-rule="nonzero" d="M381.68 496.835c-15.5305,0 -29.5952,-6.29848 -39.7761,-16.4793 -10.1808,-10.1808 -16.4793,-24.2461 -16.4793,-39.7766 0,-15.5305 6.29848,-29.5957 16.4793,-39.7761 10.1808,-10.1808 24.2456,-16.4793 39.7761,-16.4793 15.5315,0 29.5957,6.29848 39.7766,16.4793 10.1808,10.1803 16.4793,24.2456 16.4793,39.7761 0,15.5315 -6.29848,29.5957 -16.4793,39.7766 -10.1808,10.1808 -24.2451,16.4793 -39.7766,16.4793zm-21.2639 -34.9914c5.44179,5.44179 12.9609,8.80887 21.2639,8.80887 8.30354,0 15.8227,-3.36708 21.2644,-8.80887 5.44179,-5.44179 8.80887,-12.9609 8.80887,-21.2644 0,-8.30354 -3.36708,-15.8221 -8.80887,-21.2639 -5.44179,-5.44179 -12.9609,-8.80887 -21.2644,-8.80887 -8.30302,0 -15.8221,3.36708 -21.2639,8.80887 -5.44179,5.44179 -8.80887,12.9604 -8.80887,21.2639 0,8.30302 3.36708,15.8227 8.80887,21.2644z"/>
  <path class="fg-fill" fill="white" d="M162.067 335.351l259.09 0c-1.42957,-4.27771 -2.75493,-8.68686 -4.09653,-13.151 -7.69087,-21.8096 -15.4702,-46.2374 -37.1175,-50.2239 -20.4475,-3.76558 -39.9253,-5.37057 -58.738,-5.76802 -28.6008,-0.604818 -51.8059,1.55682 -59.8576,3.14505 -20.1213,3.97033 -33.9222,17.1627 -48.4032,31.0054 -4.36778,4.1756 -8.7942,8.40723 -13.7951,12.7771 -0.320998,0.280677 -0.654564,0.537267 -0.99808,0.771339 -9.39326,7.08972 -19.2185,13.3201 -29.4413,18.3592 -2.1941,1.08134 -4.40862,2.11084 -6.64304,3.08483zm-115.49 97.9187c-18.5724,-10.8354 -25.4259,-27.3419 -24.1681,-46.7553 2.84605,-43.9281 44.7429,-49.1206 106.943,-62.3418 0.579682,-0.239832 1.18974,-0.430442 1.82597,-0.56502 9.81375,-2.08152 19.2683,-5.5062 28.3364,-9.97609 9.13772,-4.50445 17.845,-10.0133 26.1067,-16.2442 4.30913,-3.77343 8.68424,-7.95584 13.0012,-12.0827 16.7296,-15.9918 32.6727,-31.2332 58.738,-36.376 8.8162,-1.73905 33.8635,-4.11381 64.251,-3.47076 19.8307,0.418921 42.0372,2.11398 63.6457,6.09373 45.7284,8.42032 41.1396,54.6326 73.7678,77.8612 9.47233,6.74359 13.9935,10.7998 22.7317,18.1718 40.007,33.7499 19.5359,100.733 -21.6389,99.5278l-0.328853 -0.00261826c0.179089,-2.15326 0.271775,-4.33112 0.271775,-6.53046 0,-21.4655 -8.70466,-40.9045 -22.7762,-54.975 -14.0716,-14.0716 -33.51,-22.7762 -54.9761,-22.7762 -21.4655,0 -40.9045,8.70466 -54.975,22.7762 -14.0716,14.0705 -22.7762,33.5095 -22.7762,54.975 0,1.45994 0.0413685,2.91046 0.120964,4.3505l-100.264 0.0801187c0.0822133,-1.46622 0.125676,-2.94345 0.125676,-4.43062 0,-21.4655 -8.70466,-40.9045 -22.7762,-54.975 -14.0716,-14.0716 -33.51,-22.7762 -54.9761,-22.7762 -21.4655,0 -40.9045,8.70466 -54.975,22.7762 -12.5147,12.5137 -20.7837,29.2742 -22.4605,47.9293l-2.77535 -0.26392z"/>
  <path class="fg-fill" fill="white" d="M379.639 47.3371c0.99808,-0.0356083 0.148193,-0.0534125 0.773433,-0.0534125l38.7596 0c23.9277,0 39.0503,15.9017 45.4959,36.2503 1.21958,3.85093 2.10822,7.89876 2.66643,12.0461l56.8628 -0.103159 0 18.7792 -56.5664 0.102636c-0.510037,5.01449 -1.4966,9.9143 -2.95916,14.5308 -6.44091,20.3297 -21.5545,36.2084 -45.4996,36.2084l-38.7596 0c-0.651946,0 0.35713,-0.0198988 -1.04416,-0.0612672l-1.03107 -0.0298481c-6.96142,-0.381742 -12.3488,-6.15081 -12.3435,-13.04l-0.0319427 0 0 -9.28434 -53.0087 0c-5.20562,0 -9.42573,-4.22011 -9.42573,-9.42573 0,-5.20562 4.22011,-9.42573 9.42573,-9.42573l53.0087 0 0 -33.1477 -54.2571 0c-5.20562,0 -9.42573,-4.22011 -9.42573,-9.42573 0,-5.20562 4.22011,-9.42573 9.42573,-9.42573l54.2571 0 0 -11.4172c0,-7.23006 5.86123,-13.0913 13.0913,-13.0913 0.196369,0 0.391691,0.00471286 0.585966,0.0136149z"/>
 </g>
</svg>
`;
const defaultOnlineSVG = getSymbolSVGGetter(ladestationSVG, {
  width: 20,
  height: 20,
})(24, "#003B80", "onlineSVGinHELP");

const defaultOfflineSVG = getSymbolSVGGetter(ladestationSVG, {
  width: 20,
  height: 20,
})(24, "#888A87", "offlineSVGinHELP");

export const KompaktanleitungSection = ({
  onlineSVG = defaultOnlineSVG,
  offlineSVG = defaultOfflineSVG,
}) => {
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
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die <strong>Vorhabenkarte Wuppertal</strong> bietet
                          ihnen die folgenden Hintergrundkarten an, die auf
                          verschiedenen Geodatendiensten und Geodaten basieren:
                        </p>

                        <ul>
                          <StadtplanTagNachtText />
                          <OpenStreetMapText />
                          <LuftbildkarteText />
                        </ul>
                      </div>
                    ),
                  },
                },
                {
                  title: "Vorhaben auswählen und abfragen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die Vorhaben werden in der Karte mit einem punktförmigen 
                          Symbol und bei größerer räumlicher Ausdehnung zusätzlich 
                          mit einer transparenten, farbigen Fläche dargestellt. 
                          Ein Klick auf ein Symbol oder in eine Fläche setzt 
                          den Fokus auf dieses Vorhaben. Es wird dann blau 
                          hinterlegt und die zugehörigen Informationen werden 
                          unten rechts in der Info-Box angezeigt. Außerdem werden 
                          Ihnen in der Info-Box weiterführende Funktionen und
                          ggf. Kommunikationslinks (
                          <Icon name="envelope-square" />{" "}E-Mail,{" "} 
                          <Icon name="phone" />{" "}Telefon) zu diesem Vorhaben 
                          angeboten. Mit der Lupenfunktion <Icon name="search" />{" "} 
                          wird die Karte auf das aktuelle Vorhaben zentriert und
                          gleichzeitig ein großer Betrachtungsmaßstab eingestellt. 
                          Falls es mehr Informationen zu den
                          Vorhaben gibt, als in der Info-Box dargestellt
                          werden können, können Sie sich diese über die
                          Datenblattfunktion{" "}<Icon name="info" />{" "}anzeigen
                          lassen.
                        </p>
                        <p>
                          Ein von Ihnen ausgewähltes Vorhaben behält den Fokus,
                          auch wenn Sie die Karte so verschieben, dass es nicht
                          mehr im aktuellen Kartenausschnitt enthalten ist. 
                          Mit der Funktion{" "}<Icon name="search" />{" "}in
                          der Info-Box können Sie jederzeit wieder zu diesem
                          Vorhaben zurückkehren.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch die thematische
                          Zuordnung und der Name des Vorhabens sowie die
                          Funktions- und Kommunikationssymbole angezeigt 
                          werden - nützlich für Endgeräte
                          mit kleinem Display. Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-up" /> an derselben Stelle
                          können Sie die Info-Box dann wieder vollständig
                          einblenden.
                        </p>
                        <p>
                          Zu einigen Vorhaben bieten wir Ihnen Fotos oder 
                          Planungsdokumente an, die das jeweilige Projekt 
                          anschaulich machen. Bei diesen Vorhaben finden Sie 
                          ein Vorschaubild direkt über der Info-Box. Klicken Sie 
                          auf das Vorschaubild, um einen Bildbetrachter 
                          (&quot;Leuchtkasten&quot;) mit den zugehörigen 
                          Dokumenten zu öffnen.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der Vorhaben",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die Vorhaben sind nach übergeordneten Themen geordnet, denen jeweils 
                          eine Farbe zugeordnet ist, z. B. Grün für „Natur, Klima & Energie“. 
                          Diese Farbe wird sowohl für die Flächendarstellung als auch als 
                          Hintergrund der weißen Piktogramme in den Punktsymbolen verwendet.
                        </p>
                        <p>
                          Die Farbe erscheint auch in der Titelzeile der Info-Box, in der das 
                          jeweilige Thema zusätzlich namentlich genannt wird. Damit erklärt 
                          sich die Bedeutung der Kartensymbole unmittelbar aus der Info-Box. 
                          Eine gesonderte Kartenlegende ist nicht erforderlich.
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
                      <div>
                        <p>
                          Um in der Karte direkt zu einer bestimmten Adresse zu
                          gelangen, geben Sie den Anfang des betreffenden
                          Straßennamens im Eingabefeld links unten ein
                          (mindestens 2 Zeichen). In der inkrementellen
                          Auswahlliste werden Ihnen passende Treffer angeboten.
                          (Wenn Sie weitere Zeichen eingeben, wird der Inhalt
                          der Auswahlliste angepasst.) Sie können auch andere
                          Suchbegriffe eingeben, nämlich Vorhabenname,
                          Straßenname (bei Straßen ohne zugeordnete Hausnummern)
                          oder "Point of Interest" (interessanter Ort, kurz als
                          POI bezeichnet).
                        </p>
                        <p>
                          Durch das in der Auswahlliste vorangestellte Symbol
                          erkennen Sie, ob es sich bei einem Treffer um ein{" "}
                          <Icon name="bookmark" /> Vorhaben, eine{" "}
                          <Icon name="home" /> Adresse, eine{" "}
                          <Icon name="road" /> Straße ohne Hausnummern, einen{" "}
                          <Icon name="tag" /> POI oder die <Icon name="tags" />{" "}
                          alternative Bezeichnung eines POI.
                        </p>
                        <FuzzySearchParagraph />
                        <p>
                          Nach der Auswahl eines Treffers aus der Liste wird die
                          Karte auf die zugehörige Position zentriert. Bei
                          Suchbegriffen mit Punktgeometrie (Adresse, POI) wird
                          außerdem ein großer Maßstab (Zoomstufe 14) eingestellt
                          und ein Marker <Icon name="map-marker" /> auf der
                          Zielposition platziert. Bei Suchbegriffen mit
                          Flächengeometrie oder Liniengeometrie wird der Maßstab
                          so eingestellt, dass die Fläche bzw. Linie vollständig
                          dargestellt werden kann.
                        </p>
                        <p>
                          Durch Anklicken des Werkzeugs <Icon name="times" />{" "}
                          links neben dem Eingabefeld können Sie die Suche
                          zurücksetzen (Entfernung von Marker bzw. Abdunklung,
                          Löschen des Textes im Eingabefeld).
                        </p>
                      </div>
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
                  title: "Einstellungen",
                  bsStyle: "info",
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
                          " können Sie auswählen, ob Sie die standardmäßig
                          aktivierte farbige Hintergrundkarte verwenden möchten
                          ("<em>Stadtplan (Tag)</em>") oder lieber eine
                          invertierte Graustufenkarte ("
                          <em>Stadtplan (Nacht)</em>"), zu der uns die von
                          vielen PKW-Navis bei Dunkelheit eingesetzte
                          Darstellungsweise inspiriert hat.{" "}
                          <strong>Hinweis</strong>: Der Stadtplan (Nacht) wird
                          Ihnen nur angeboten, wenn Ihr Browser
                          CSS3-Filtereffekte unterstützt, also z. B. nicht beim
                          Microsoft Internet Explorer. Die Nacht-Karte erzeugt
                          einen deutlicheren Kontrast mit den farbigen Symbolen
                          für die Fachobjekte des Kartenthemas, die
                          unterschiedlichen Flächennutzungen in der
                          Hintergrundkarte lassen sich aber nicht mehr so gut
                          unterscheiden wie in der Tag-Karte. Als dritte
                          Möglichkeit steht eine Luftbildkarte zur Verfügung,
                          die die Anschaulichkeit des Luftbildes mit der
                          Eindeutigkeit des Stadtplans (Kartenschrift,
                          durchscheinende Linien) verbindet.
                        </p>
                        <p>
                          Unter <strong>"Symbolgröße"</strong> können Sie in
                          Abhängigkeit von Ihrer Bildschirmauflösung und Ihrem
                          Sehvermögen auswählen, ob die Fachobjekte mit kleinen
                          (25 Pixel), mittleren (35 Pixel) oder großen (45
                          Pixel) Symbolen angezeigt werden.
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
