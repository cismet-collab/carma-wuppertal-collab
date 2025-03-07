import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import KitaZusammen from "./assets/kita_zusammen.png";
import VorherTreffer from "./assets/vorher_treffer.png";
// import AdressMarker from "./assets/AdressMarker.jpg";
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
                          Der <strong>Kita-Finder Wuppertal</strong> bietet
                          ihnen die folgenden Hintergrundkarten an, die auf
                          verschiedenen Geodatendiensten und Geodaten basieren:
                        </p>
                        <ul>
                          <StadtplanTagNachtText />
                          <LuftbildkarteText />
                        </ul>
                        <p>
                          Zusätzlich nutzt der Kita-Finder den Datensatz{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/kindertageseinrichtungen-wuppertal"
                          >
                            Kindertageseinrichtungen Wuppertal
                          </a>{" "}
                          des Stadtbetriebs "Tageseinrichtungen für Kinder -
                          Jugendamt" aus dem Open-Data-Angebot der Stadt
                          Wuppertal.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der Kitas",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Für die Darstellung der Kitas in der Karte stehen
                          Ihnen 2 Zeichenvorschriften zur Verfügung, zwischen
                          denen Sie unter "<strong>Einstellungen</strong>"
                          umschalten können. Standardmäßig wird die Vorschrift "
                          <em>nach Trägertyp</em>" verwendet, bei der die Kitas
                          in 6 unterschiedlichen Farben für die 6
                          unterschiedenen Trägertypen (städtisch, evangelisch,
                          katholisch, Elterninitiative, Betrieb, freier Träger)
                          ausgeprägt werden. Die Zeichenvorschrift "
                          <em>nach Profil (Inklusionsschwerpunkt j/n)</em>"
                          benutzt nur 2 Farben für die Unterscheidung zwischen
                          Einrichtungen mit Schwerpunkt Inklusion und solchen
                          ohne Inklusionsschwerpunkt.
                        </p>
                        <p>
                          Räumlich nah beieinander liegende Einrichtungen werden
                          standardmäßig maßstabsabhängig zu größeren
                          Kreis-Symbolen zusammengefasst, jeweils mit der Anzahl
                          der repräsentierten Kitas im Zentrum{" "}
                          <img alt="Cluster" src={KitaZusammen} />. Vergrößern
                          Sie ein paar Mal durch direktes Anklicken eines
                          solchen Punktes oder mit <Icon name="plus" /> die
                          Darstellung, so werden die zusammengefassten Kitas
                          Schritt für Schritt in die kleineren
                          Piktogramm-Symbole für die Einzel-Kitas zerlegt.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kitas auswählen und abfragen",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf eine
                          konkrete Einzel-Kita, um sich ihre strukturierte,
                          eindeutige Kurzbezeichnung anzeigen zu lassen. Diese
                          Bezeichnung besteht - sofern vorhanden - aus dem
                          individuellen Namen der Kita, der Straße und dem
                          Trägertyp. Ein Klick auf das zugehörige Kita-Symbol
                          setzt den Fokus auf diese Einrichtung. Sie wird dann
                          blau hinterlegt und die zugehörigen Informationen
                          (Name, Straße und Hausnummer, Info-Text mit Angabe der
                          Kapazität und des Trägertyps, Mindestaufnahmealter und
                          angebotener Betreuungsumfang) werden unten rechts in
                          der Info-Box angezeigt. (Auf einem Tablet-PC wird der
                          Fokus durch das erste Antippen des Angebots gesetzt,
                          das zweite Antippen blendet die Bezeichnung ein.)
                          Außerdem werden Ihnen in der Info-Box weiterführende
                          (Kommunikations-) Links zur Kita angezeigt:{" "}
                          <Icon name="external-link-square" /> Internet und{" "}
                          <Icon name="phone" /> Telefon.
                        </p>
                        <p>
                          Wenn Sie noch nicht aktiv eine bestimmte Kita im
                          aktuellen Kartenausschnitt selektiert haben, wird der
                          Fokus automatisch auf die nördlichste Einrichtung
                          gesetzt. Mit den Funktionen{" "}
                          <img alt="Cluster" src={VorherTreffer} /> vorheriger
                          Treffer und <a>&gt;&gt;</a> nächster Treffer können
                          Sie ausgehend von der Kita, auf der gerade der Fokus
                          liegt, in nördlicher bzw. südlicher Richtung alle
                          aktuell im Kartenfenster angezeigten Kitas
                          durchmustern.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch der Name der Kita und
                          die Link-Symbole angezeigt werden - nützlich für
                          Endgeräte mit kleinem Display. Mit der Schaltfläche{" "}
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
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <InKartePositionierenText
                        pretext={
                          <>
                            <p>
                              Um die Kitas in einem bestimmten Bereich des
                              Stadtgebietes zu erkunden, geben Sie den Anfang
                              eines Stadtteils (Stadtbezirk oder Quartier), einer
                              Adresse, eines Straßennamens oder eines Kita-Namens
                              im Eingabefeld links unten ein (mindestens 2
                              Zeichen). In der inkrementellen Auswahlliste werden
                              Ihnen passende Treffer angeboten. (Wenn Sie weitere
                              Zeichen eingeben, wird der Inhalt der Auswahlliste
                              angepasst.) Durch das vorangestellte Symbol
                              erkennen Sie, ob es sich dabei um einen{" "}
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
                        punktgeometrie="(Adresse, Straße, Kita)"
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
                          Im Bereich "<strong>Filtern</strong>" können Sie im
                          Anwendungsmenü <Icon name="bars" /> die in der Karte
                          angezeigten Kitas so ausdünnen, dass nur die für Sie
                          interessanten Einrichtungen übrig bleiben.
                          Standardmäßig sind die Einstellungen hier so gesetzt,
                          dass alle Kitas angezeigt werden. Zunächst können Sie
                          hier unter "
                          <em>
                            <strong>Trägertyp</strong>
                          </em>
                          " die für Sie in Frage kommenden Kita-Träger auswählen
                          und unter "
                          <em>
                            <strong>Profil</strong>
                          </em>
                          " einstellen, ob Einrichtungen mit oder ohne
                          Schwerpunkt Inklusion (oder beide Typen) angezeigt
                          werden sollen. Die beiden Zeichenvorschriften "
                          <em>nach Träger</em>" und "<em>nach Profil</em>
                          ", die Ihnen unter "<strong>Einstellungen</strong>"
                          zur Auswahl angeboten werden, beziehen sich auf diese
                          beiden Merkmale. Welche Zeichenvorschrift gerade aktiv
                          ist, erkennen Sie an den farbigen Punkten, die als
                          Legende entweder hinter den Auswahlmöglichkeiten für "
                          <em>
                            <strong>Trägertyp</strong>
                          </em>
                          " oder denen für "
                          <em>
                            <strong>Profil</strong>
                          </em>
                          " erscheinen.
                        </p>
                        <p>
                          Unter "
                          <em>
                            <strong>Kindesalter</strong>
                          </em>
                          " sollten Sie das Alter des Kindes, für das Sie eine
                          Unterbringung suchen, angeben. Dann werden alle Kitas,
                          die ein höheres Mindestalter der Kinder fordern,
                          ausgeblendet.
                        </p>
                        <p>
                          Beim gewünschten "
                          <em>
                            <strong>Betreuungsumfang</strong>
                          </em>
                          " gilt es zu berücksichtigen, dass viele Kitas sowohl
                          35 wie auch 45 Stunden als Betreuungsdauer anbieten.
                          Diese werden angezeigt, sobald Sie eine der beiden
                          Möglichkeiten (35 oder 45 Stunden pro Woche)
                          ausgewählt haben. Bei einigen Einrichtungen hängt die
                          angebotene Betreuungsdauer auch vom Alter des Kindes
                          ab. Das geht aus den Daten, auf die der Kita-Finder
                          Wuppertal zugreift, nicht hervor. Bitte erfragen Sie
                          diesen Zusammenhang daher ggf. direkt bei der
                          jeweiligen Einrichtung.
                        </p>
                        <p>
                          Ihre Einstellungen werden direkt in der blauen
                          Titelzeile des Bereichs "<strong>Filtern</strong>" und
                          in dem Donut-Diagramm, das Sie rechts neben oder unter
                          den Filteroptionen finden, ausgewertet. Die Titelzeile
                          zeigt die Gesamtanzahl der Kitas, die den von Ihnen
                          gesetzten Filterbedingungen entsprechen. Das
                          Donut-Diagramm zeigt zusätzlich die Verteilung auf die
                          Kategorien der aktuell gewählten Zeichenvorschrift.
                          Bewegen Sie dazu den Mauszeiger auf eines der farbigen
                          Segmente des Diagramms.
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
                          festlegen, wie die Kitas und die Hintergrundkarte
                          angezeigt werden sollen. Zu den Kitas können Sie
                          auswählen, ob Ihre unter "<strong>Filtern</strong>"
                          festgelegten Filterbedingungen in einer Titelzeile
                          ausgeprägt werden oder nicht. Weiter können Sie
                          festlegen, ob räumlich nah beieinander liegende Kitas
                          maßstabsabhängig zu einem Punktsymbol zusammengefasst
                          werden oder nicht. "
                          <em>
                            <strong>Zeichenvorschrift</strong>
                          </em>
                          " erlaubt es Ihnen, zwischen der standardmäßig
                          aktivierten Zeichenvorschrift "<em>nach Trägertyp</em>
                          " und der Alternative "
                          <em>nach Profil (Inklusionsschwerpunkt j/n)</em>" zu
                          wechseln. Unter "
                          <em>
                            <strong>Symbolgröße</strong>
                          </em>
                          " können Sie in Abhängigkeit von Ihrer
                          Bildschirmauflösung und Ihrem Sehvermögen auswählen,
                          ob die Kitas mit kleinen (25 Pixel), mittleren (35
                          Pixel) oder großen (45 Pixel) Symbolen angezeigt
                          werden.
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
                          <strong>Hinweis:</strong> Der Stadtplan (Nacht) wird
                          Ihnen nur angeboten, wenn Ihr Browser
                          CSS3-Filtereffekte unterstützt, also z. B. nicht beim
                          Microsoft Internet Explorer. Die Nacht-Karte erzeugt
                          einen deutlicheren Kontrast mit den farbigen
                          Kita-Symbolen, die unterschiedlichen Flächennutzungen
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
                      <div>
                        {" "}
                        <p>
                          Ihre Filterbedingungen und Einstellungen bleiben auch
                          nach einem Neustart der Anwendung erhalten. (Es sei
                          denn, Sie löschen den Browser-Verlauf einschließlich
                          der gehosteten App-Daten.) Damit können Sie mit
                          wenigen Klicks aus dem Kita-Finder Wuppertal einen
                          dauerhaft für Sie optimierten Kita-Finder machen.
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
