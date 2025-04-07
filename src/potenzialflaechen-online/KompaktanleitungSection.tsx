import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import slugify from "slugify";
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faFilePdf,
  faInfoCircle,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import IconComp from "react-cismap/commons/Icon";
import {
  MeinStandortText,
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
                  title: "Überblick",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Nach § 200 Baugesetzbuch können Gemeinden bebaubare
                          Flächen in Karten und Listen erfassen
                          (Baulandkataster). In Wuppertal wurde hierzu im Jahr
                          2021 in Zusammenarbeit der Ressorts 101
                          (Stadtentwicklung und Städtebau) und 102 (Vermessung,
                          Katasteramt und Geodaten) das Fachverfahren{" "}
                          <strong>WuNDa/Potenzialflächen</strong> innerhalb des
                          Wuppertaler Navigations- und Datenmanagementsystems
                          WuNDa realisiert. In diesem Verfahren werden nunmehr
                          die zuvor getrennt verwalteten Flächen aller
                          Kategorien von städtebaulichen Potenzialflächen
                          georeferenziert digitalisiert und in einem
                          übergeordneten, gemeinsamen Datenmodell beschrieben.
                          Unterschieden werden dabei die Kategorien
                          Gewerbepotenzialflächen, Wohnbaupotenzialflächen,
                          Wiedernutzungspotenziale, Baulücken und Brachflächen.
                          In WuNDa/Potenzialflächen erfolgt auch die laufende
                          Aktualisierung der Daten durch die Abteilung 101.1
                          Stadtentwicklung.
                        </p>
                        <p>
                          Um die Informationen aus WuNDa/Potenzialflächen für
                          alle beteiligten Akteurinnen und Akteure in den
                          politischen Gremien und der Verwaltung verfügbar zu
                          machen, wurde die hier vorliegende, nicht öffentlich
                          zugängliche Web-Anwendung{" "}
                          <strong>Potenzialflächen-Online</strong> entwickelt.
                          Sie erlaubt es, mit verschiedenen (insbesondere auch
                          mobilen) Endgeräten ortsunabhängig auf die
                          freigegebenen Daten des Fachverfahrens zuzugreifen.
                          Zum Zeitpunkt der Inbetriebnahme von
                          Potenzialflächen-Online im Juni 2022 war die
                          Überarbeitung der Brachflächen-Daten im neuen
                          Datenmodell noch nicht abgeschlossen, sodass die
                          Flächendaten aus dieser Kategorie anfänglich noch
                          nicht angeboten werden. Das Baulückenkataster als
                          Teilkategorie von WuNDa/Potenzialflächen befand sich
                          im Juni 2022 im erstmaligen systematischen Aufbau für
                          das gesamte Wuppertaler Stadtgebiet. Hierbei wird
                          stadtbezirksweise vorgegangen. In
                          Potenzialflächen-Online sind nur die Daten der
                          vollständig bearbeiteten Stadtbezirke verfügbar,
                          beginnend mit den Stadtbezirken Ronsdorf und
                          Uellendahl-Katernberg.
                        </p>
                        <p>
                          Neben der <strong>Kartendarstellung</strong> einer
                          jeden Potenzialfläche können alle weiteren
                          Informationen zur jeweiligen Fläche in einer
                          interaktiven <strong>Datenblattansicht</strong> oder
                          einem <strong>PDF-Steckbrief</strong> abgerufen
                          werden. Die Daten umfassen u. a. die Flächennummer
                          (beginnend mit der Stadtbezirksnummer), die
                          Bezeichnung der Fläche, ihre Größe (in m² und gerundet
                          in ha), die betroffenen Stadtbezirke und Quartiere,
                          die Eigentümerkategorie (anonymisiert),
                          Lagebeschreibungen (bezogen auf Verkehr, den
                          Siedlungsraum und die Topografie), das geltende
                          Planungsrecht (Ausweisung im Regionalplan und
                          Flächennutzungsplan, Angabe der betroffenen
                          Bebauungspläne), die Umgebungsnutzungen, die bisherige
                          Nutzung mit der bestehenden Bebauung und Versiegelung,
                          die Wohnlagenklasse gemäß der{" "}
                          <a
                            target="_more"
                            href="https://offenedaten-wuppertal.de/dataset/wohnlagen-wuppertal"
                          >
                            Wohnlagenkarte des Gutachterausschusses
                          </a>
                          , eine langtextliche Beschreibung der Fläche (u. a.
                          mit Historie, Informationen und Planungen) sowie
                          (soweit einschätzbar) verschiedene Bewertungen des
                          Entwicklungspotenzials der Fläche (Innen- oder
                          Außenentwicklung, Potenzialarten, Restriktionen,
                          empfohlene Nutzung, Entwicklungsaussichten,
                          Verfügbarkeit, Verwertbarkeit, Revitalisierung,
                          Handlungsdruck, Handlungspriorität).
                        </p>
                        <p>
                          Die Potenzialflächen können über das Eingabefeld nach
                          Bezugsflächen (Stadtbezirk und Quartier) oder durch
                          Eingabe von entsprechenden Kürzeln nach ihrer
                          Kategorie gefiltert werden. Über die Eingabe ihrer
                          Bezeichnung im Eingabefeld kann eine Fläche auch
                          direkt gesucht und in der Karte angesprungen werden.
                          Die Fachdaten zu den Potenzialflächen und eine
                          Vektor-Hintergrundkarte werden in den Cache-Speicher
                          der Kartenanwendung geladen, sodass diese mit geringen
                          Einschränkungen auch im Offline-Modus genutzt werden
                          kann. Das Arbeiten im Offline-Modus ist sinnvoll, wenn
                          sich der Einsatzort in einem Bereich mit schwacher
                          oder unzuverlässiger Mobilfunknetzabdeckung befindet
                          (&quot;Funklöcher&quot;).
                        </p>
                        <p>
                          Anmerkungen und Hinweise können an{" "}
                          <a href="mailto:potenzialfl%C3%A4chen@stadt.wuppertal.de">
                            potenzialflaechen@stadt.wuppertal.de
                          </a>{" "}
                          (R 101.11 Integrierte Stadtentwicklung und regionale
                          Kooperation) gesendet werden.{" "}
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Fachdatenquellen",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          In Potenzialflächen-Online werden die folgenden
                          Kategorien von städtebaulichen Potenzialflächen
                          angeboten:{" "}
                        </p>
                        <ul>
                          <li>
                            <strong>Gewerbepotenzialflächen</strong>:
                            Regionalplanerisch gesicherte Flächen mit einer
                            Größe von mehr als 2.000 m², auf denen mit oder ohne
                            Flächennutzungsplan- und / oder
                            Bebauungsplanänderungen gewerbliche Nutzungen
                            erfolgen können und vorgesehen sind. Etliche
                            Gewerbepotenzialflächen sind Brachflächen oder
                            Wiedernutzungspotenziale und werden auch in diesen
                            Kategorien geführt. Seit Ende der 1990er Jahre
                            werden Gewerbeflächenpotenziale in
                            Handlungsprogrammen systematisch erhoben, zuletzt im{" "}
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/vo0050.asp?__kvonr=12384"
                            >
                              Handlungsprogramm Gewerbeflächen von 2011
                            </a>{" "}
                            (
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/to0050.asp?__ktonr=50039"
                            >
                              Ratsbeschluss vom 23.05.2011
                            </a>
                            ) mit{" "}
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/vo0050.asp?__kvonr=18635"
                            >
                              Fortschreibung im Jahr 2017
                            </a>{" "}
                            (
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/to0050.asp?__ktonr=83736"
                            >
                              Ratsbeschluss vom 07.05.2018
                            </a>
                            ) und{" "}
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/vo0050.asp?__kvonr=24105"
                            >
                              Aktualisierung im Jahr 2020
                            </a>{" "}
                            (Ratsvorlage vom 22.06.2020). Durchgreifende
                            Überarbeitung für die laufende Pflege mit
                            WuNDa/Potenzialflächen im Jahr 2021.
                          </li>
                          <li>
                            <strong>Wohnbaupotenzialflächen</strong>:
                            Regionalplanerisch gesicherte Flächen mit einer
                            Größe von mehr als 2.000 m², auf denen mit oder ohne
                            Flächennutzungsplan- und / oder
                            Bebauungsplanänderungen wohnbauliche Nutzungen
                            erfolgen können und seitens der Stadtentwicklung
                            vorgesehen sind. Etliche Wohnbaupotenzialflächen
                            sind Brachflächen oder Wiedernutzungspotenziale und
                            werden auch in diesen Kategorien geführt. Erstmalige
                            systematische Erhebung im Rahmen des
                            Aufstellungsverfahrens für den Flächennutzungsplan
                            2005, Aktualisierung und Ergänzungen für das
                            Handlungsprogramm Wohnen (Ratsbeschluss vom
                            29.06.2009), das Konzept &quot;
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/vo0050.asp?__kvonr=23214"
                            >
                              Neue Wohnbauflächen für Wuppertal
                            </a>
                            &quot; (
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/to0050.asp?__ktonr=100704"
                            >
                              Ratsbeschluss vom 22.06.2020
                            </a>
                            ) und das{" "}
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/vo0050.asp?__kvonr=24476"
                            >
                              Innenentwicklungskonzept Wuppertal
                            </a>{" "}
                            (
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/to0050.asp?__ktonr=102431"
                            >
                              Ratsbeschluss vom 07.12.2020
                            </a>
                            ). Durchgreifende Überarbeitung für die laufende
                            Pflege mit WuNDa/Potenzialflächen im Jahr 2021.
                          </li>
                          <li>
                            <strong>Wiedernutzungspotenziale</strong>: Flächen
                            mit einer Größe von mehr als 2.000 m², die
                            perspektivisch als Potenzial für neue Nutzungen
                            dienen können. Entweder ist eine Nutzungsaufgabe
                            konkret geplant, obwohl sich die Fläche noch in
                            Nutzung befindet oder die Fläche ist bereits wie
                            eine Brachfläche nach Aufgabe einer
                            gewerblich-industriellen oder sonstigen baulichen
                            Nutzung ungenutzt bzw. deutlich mindergenutzt oder
                            funktionslos, jedoch erst für einen kurzen Zeitraum
                            und noch nicht mindestens zwei Jahre (sog.
                            &quot;junge&quot; Brache). Wiedernutzungspotenziale
                            werden je nach Nutzungsperspektive auch in anderen
                            Kategorien geführt. Systematischer Aufbau dieser
                            Kategorie für die zukünftige laufende Pflege mit
                            WuNDa/Potenzialflächen in der ersten Jahreshälfte
                            2022 durch Neuerfassungen und Übernahme von Flächen
                            aus den anderen Kategorien.{" "}
                          </li>
                          <li>
                            <strong>Baulücken</strong>: Flächen mit einer Größe
                            von 400 bis 2.000 m², auf denen bereits Baurecht in
                            einem geltenden Bebauungsplan oder nach § 34 BauGB
                            für eine Wohnbebauung besteht und deren Erschließung
                            entweder bereits gesichert ist oder über eine
                            Grundstücksteilung oder eine Baulast einfach
                            gesichert werden kann. Baulücken sind Baupotenziale
                            auf unbebauten oder auf bereits bebauten
                            Grundstücken (Ergänzungspotenziale). Der
                            Datenbestand wird stadtbezirksweise seit 2021 neu
                            aufgebaut. Stand Juni 2022 waren die Erhebungen für
                            die Stadtbezirke Ronsdorf und Uellendahl-Katernberg
                            abgeschlossen.
                          </li>
                          <li>
                            <strong>Brachflächen</strong>: Nach Aufgabe einer
                            gewerblich-industriellen oder sonstigen baulichen
                            Nutzung über einen Zeitraum von mindestens drei
                            Jahren ungenutzte, deutlich mindergenutzte oder
                            funktionslose Flächen mit Potenzial für neue
                            Nutzungen (Mindestgröße 2.000 m²). Erstmalige
                            systematische Erhebung für das Handlungsprogramm
                            Brachflächen im Jahr 2005, erneuert mit dem{" "}
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/vo0050.asp?__kvonr=17710&amp;voselect=13689"
                            >
                              Handlungsprogramm Brachflächen 2016
                            </a>{" "}
                            (Kenntnisnahme durch den Rat am 02.05.2016),{" "}
                            <a
                              target="_more"
                              href="https://ris.wuppertal.de/vo0050.asp?__kvonr=20083"
                            >
                              Fortschreibung im Jahr 2017
                            </a>{" "}
                            (Ratsvorlage vom 12.03.2018). Überarbeitung für die
                            laufende Pflege mit WuNDa/Potenzialflächen seit
                            Mitte 2021. Vollständige Bereitstellung in
                            Potenzialflächen-Online geplant nach Abschluss
                            dieser Überarbeitung.{" "}
                          </li>
                        </ul>
                      </div>
                    ),
                  },
                },
                {
                  title: "Hintergrundkarte",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Im Anwendungsmenü <FontAwesomeIcon icon="bars" />{" "}
                          können Sie im Abschnitt <strong>Einstellungen</strong>{" "}
                          unter <strong>Hintergrundkarte</strong> festlegen,
                          welche Basiskarte als Hintergrund verwendet werden
                          soll. Die folgenden Basiskarten stehen zur Verfügung:
                        </p>
                        <ul>
                          <li>
                            <p>
                              <strong>Stadtplan (grau)</strong>: Kartendienst
                              (WMS) des Regionalverbandes Ruhr (RVR).
                              Datengrundlage: Stadtkarte 2.0. Wöchentlich in
                              einem automatischen Prozess aktualisierte
                              Zusammenführung des Straßennetzes der
                              OpenStreetMap mit Amtlichen Geobasisdaten des
                              Landes NRW aus den Fachverfahren ALKIS (Gebäude,
                              Flächennutzungen) und ATKIS (Gewässer). © RVR und
                              Kooperationspartner (
                              <a
                                target="_more"
                                href="https://www.govdata.de/dl-de/by-2-0"
                              >
                                Datenlizenz Deutschland - Namensnennung -
                                Version 2.0
                              </a>
                              ). Lizenzen der Ausgangsprodukte:{" "}
                              <a
                                target="_more"
                                href="https://www.govdata.de/dl-de/zero-2-0"
                              >
                                Datenlizenz Deutschland - Zero - Version 2.0
                              </a>{" "}
                              (Amtliche Geobasisdaten) und{" "}
                              <a
                                target="_more"
                                href="https://www.opendatacommons.org/licenses/odbl/1.0/"
                              >
                                ODbL
                              </a>{" "}
                              (OpenStreetMap contributors).
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Stadtplan (Vektordaten light)</strong>:
                              Vektorkacheldienst (Vector tile service gemäß{" "}
                              <a
                                target="_more"
                                href="https://github.com/mapbox/vector-tile-spec"
                              >
                                Mapbox Vector Tile Specification
                              </a>
                              ) auf der Basis eines von der Firma cismet GmbH
                              gehosteten Sekundärdatenbestandes der
                              OpenStreetMap Deutschland mit wöchentlicher
                              Aktualisierung. Lizenz der Ausgangsdaten:{" "}
                              <a
                                target="_more"
                                href="https://www.opendatacommons.org/licenses/odbl/1.0/"
                              >
                                ODbL
                              </a>{" "}
                              (OpenStreetMap contributors).
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Amtliche Basiskarte</strong>: (1) In
                              Detailmaßstäben Kartendienst (WMS) der Stadt
                              Wuppertal. Datengrundlage: Amtliche Basiskarte ABK
                              Graustufen (wöchentlich in einem automatisierten
                              Prozess aus dem Fachverfahren ALKIS des
                              Liegenschaftskatasters abgeleitete großmaßstäbige
                              topographische Karte in Graustufen.) © Stadt
                              Wuppertal (
                              <a
                                target="_more"
                                href="https://www.govdata.de/dl-de/zero-2-0"
                              >
                                Datenlizenz Deutschland - Zero - Version 2.0
                              </a>
                              ). (2) In Übersichtsmaßstäben Kartendienst (WMS)
                              des Bundesamtes für Kartographie und Geodäsie
                              (BKG). Datengrundlage: WebAtlasDE © GeoBasis-DE /
                              BKG 2018.{" "}
                            </p>
                          </li>
                          <LuftbildkarteText details="Details s. Hintergrundkarte Stadtplan (grau)" />
                        </ul>
                        <p>
                          Die Vektordaten von &quot;Stadtplan (Vektordaten
                          light)&quot; werden beim Starten der Anwendung auf das
                          Endgerät übertragen, sofern das Kontrollkästchen
                          &quot;Vektorlayer offline verfügbar machen&quot;
                          aktiviert ist. Sie erkennen diesen Zustand auch an dem
                          Download-Symbol <FontAwesomeIcon icon="download" />{" "}
                          neben der Kartenbezeichnung. Diese Karte ist daher
                          auch offline (ohne Internetzugang) verfügbar (vgl.
                          Absatz{" "}
                          <Link
                            class="renderAsLink"
                            to={slugify("Anmeldung und Offline-Benutzung")}
                            containerId={"myMenu"}
                            activeClass="active"
                          >
                            Anmeldung und Offline-Benutzung
                          </Link>
                          ).
                        </p>
                        <p>
                          In der <strong>Vorschau</strong> wird Ihnen anhand
                          eines beispielhaften Kartenausschnitts stets die
                          Wirkung Ihrer Basiskartenauswahl angezeigt.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der Potenzialflächen",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die Darstellung der Potenzialflächen in der Karte
                          erfolgt über leicht transparente Farbflächen (mit
                          dünnen, etwas abgedunkelten Umrandungen), wobei die
                          verwendeten Farben die verschiedenen Kategorien von
                          Potenzialflächen repräsentieren. Diese Farben werden
                          in der Titelzeile der Info-Box aufgegriffen.
                          Zusätzlich wird dort die Bezeichnung der jeweiligen
                          Kategorie ausgeprägt, also z. B.
                          &quot;Wohnbaupotenzialflächen&quot; bei den roten
                          Flächen. Die Bedeutung der Flächenfarben erklärt sich
                          auf diese Weise von selbst, sodass die Kartenanwendung
                          keine klassische Legendengrafik benötigt.
                        </p>
                        <p>
                          Die Kategorien der Potenzialflächen werden aus dem
                          Fachverfahren WuNDa/Potenzialflächen in die Anwendung
                          Potenzialflächen-Online übernommen. Neben den auf
                          Dauer angelegten Kategorien wie Wohnbau- oder
                          Gewerbepotenzialflächen können im Fachverfahren
                          gelegentlich temporäre Kategorien entstehen, z. B. für
                          die Standortauswahl bei Infrastrukturprojekten.
                          Entsprechend kann sich auch die Liste der Kategorien
                          in Potenzialflächen-Online und damit die Anzahl der
                          hier verwendeten Flächenfarben von Zeit zu Zeit
                          verändern.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Flächen auswählen und abfragen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf eine
                          der farbigen Flächen, mit denen die Potenzialflächen
                          in der Karte dargestellt werden, um sich die
                          Bezeichnung der jeweiligen Fläche anzeigen zu lassen.
                          Durch Anklicken bzw. kurzes Antippen einer farbigen
                          Fläche setzen Sie den Fokus auf diese Potenzialfläche.
                          Sie wird dann blau umrandet und mit geringerer
                          Transparenz dargestellt, was sie deutlicher
                          hervortreten lässt. Außerdem werden direkt einige
                          Basisinformationen zu der ausgewählten Potenzialfläche
                          in der Info-Box angezeigt, nämlich die Bezeichnung der
                          Fläche, ihre eindeutige Nummer und ihre Größe in m².
                        </p>
                        <p>
                          Außerdem werden Ihnen in der Info-Box einige
                          weiterführende Funktionen zu der ausgewählten
                          Potenzialfläche angeboten. Mit der Lupenfunktion{" "}
                          <FontAwesomeIcon icon={faSearch} /> wird die Karte auf
                          diese Fläche zentriert und gleichzeitig der größte
                          Betrachtungsmaßstab eingestellt, in dem die Fläche
                          vollständig dargestellt werden kann. (Diesen Zoom
                          können Sie auch mit einem zweiten Anklicken oder
                          Antippen einer bereits ausgewählten Potenzialfläche
                          bewirken.) Mit der Funktion{" "}
                          <Link
                            class="renderAsLink"
                            to={slugify("Datenblattansicht")}
                            containerId={"myMenu"}
                            activeClass="active"
                          >
                            Datenblatt anzeigen
                          </Link>{" "}
                          <FontAwesomeIcon icon={faInfoCircle} /> öffnen Sie ein
                          Anwendungsfenster mit einer interaktiven
                          Datenblattansicht zur ausgewählten Potenzialfläche,
                          die alle hierzu im Fachverfahren
                          WuNDa/Potenzialflächen geführten Informationen
                          umfasst. Mit der Funktion{" "}
                          <Link
                            class="renderAsLink"
                            to={slugify("Steckbriefe")}
                            containerId={"myMenu"}
                            activeClass="active"
                          >
                            Steckbrief erzeugen
                          </Link>{" "}
                          <FontAwesomeIcon icon={faFilePdf} /> erzeugen Sie zu
                          dieser Fläche einen Steckbrief in Form eines
                          PDF-Dokuments mit denselben Informationen wie in der
                          Datenblattansicht.
                        </p>
                        <p>
                          Auf Endgeräten mit Touch-Display blinkt die
                          Bezeichnung der Potenzialfläche beim ersten und
                          zweiten Antippen (Fokus auf diese Fläche, Zoom) kurz
                          auf. Mit dem dritten Antippen wird die Bezeichnung
                          dauerhaft eingeblendet, bis zu Ihrer nächsten
                          Bildschirmaktion (z. B. Antippen der Karte außerhalb
                          der aktuellen Potenzialfläche).{" "}
                        </p>
                        <p>
                          Potenzialflächen unterschiedlicher Kategorien können
                          sich vollständig oder teilweise überdecken. In diesem
                          Fall werden entsprechend mehrere Info-Boxen
                          übereinander angezeigt. Sie werden dabei so versetzt,
                          dass die farbigen Titelzeilen aller Info-Boxen noch
                          vollständig sichtbar sind. Durch Anklicken der
                          jeweiligen Titelzeile setzen Sie den Fokus auf die
                          zugehörige Potenzialfläche. Die Info-Box zu dieser
                          Potenzialfläche wird dadurch in den Vordergrund
                          geholt, zu den anderen Flächen sind dann nur noch die
                          farbigen Titelzeilen mit der Angabe der
                          Flächenkategorie zu sehen.{" "}
                        </p>
                        <p>
                          Wenn Sie noch keine Potenzialfläche im aktuellen
                          Kartenausschnitt selektiert haben, wird der Fokus
                          automatisch auf die nördlichste Fläche gesetzt.
                          Ausgewertet wird dabei die Position des
                          Flächenschwerpunktes. Mit den Funktionen{" "}
                          <a className="renderAsLink">&lt;&lt;</a> vorheriger
                          Treffer und <a className="renderAsLink">&gt;&gt;</a>{" "}
                          nächster Treffer können Sie ausgehend von dem Objekt,
                          auf dem gerade der Fokus liegt, in nördlicher bzw.
                          südlicher Richtung alle aktuell im Kartenfenster
                          angezeigten Objekte durchmustern.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <FontAwesomeIcon icon={faChevronCircleDown} /> im
                          dunkelgrau abgesetzten rechten Rand der Info-Box lässt
                          sich diese so verkleinern, dass nur noch die
                          Bezeichnung der Potenzialfläche sowie die
                          Funktionssymbole angezeigt werden - nützlich für
                          Endgeräte mit kleinem Display. Mit der Schaltfläche{" "}
                          <FontAwesomeIcon icon={faChevronCircleUp} /> an
                          derselben Stelle können Sie die Info-Box dann wieder
                          vollständig einblenden.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Datenblattansicht",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Durch Anklicken bzw. Antippen des{" "}
                          <FontAwesomeIcon icon={faInfoCircle} /> -Symbols in
                          der Info-Box öffnen Sie ein Anwendungsfenster mit
                          einer interaktiven Datenblattansicht zu der aktuell in
                          der Info-Box beschriebenen Potenzialfläche, die alle
                          im Fachverfahren WuNDa/Potenzialflächen geführten
                          Informationen zu dieser Fläche umfasst. Unter einem
                          Kopfbereich mit immer sichtbaren Basisinformationen
                          zur Potenzialfläche ist das Datenblatt in bis zu sechs
                          thematische Blöcke von &quot;Lagebeschreibung&quot;
                          bis &quot;Bewertung&quot; gegliedert. Der
                          Informationsumfang des Datenblattes variiert von
                          Fläche zu Fläche. Er ist insbesondere von der
                          Flächenkategorie abhängig. So sind z. B. bei den
                          Baulücken regelmäßig nur die Blöcke
                          &quot;Planungsrecht / Bauordnungsrecht&quot; und
                          &quot;Erweiterte Informationen&quot; belegt. Die
                          einzelnen Blöcke lassen sich durch Anklicken bzw.
                          Antippen der Überschriften in den farbig unterlegten
                          Titelbereichen ein- und wieder ausklappen. Durch diese
                          Möglichkeit ist die Datenblattansicht für die
                          Informationsentnahme auf einem mobilen Endgerät (z. B.
                          einem Smartphone) besser geeignet als der{" "}
                          <Link
                            class="renderAsLink"
                            to={slugify("Steckbriefe")}
                            containerId={"myMenu"}
                            activeClass="active"
                          >
                            PDF-Steckbrief
                          </Link>{" "}
                          der Fläche.
                        </p>
                        <p>
                          Da die Fachdaten zu den Potenzialflächen im
                          Cache-Speicher von Potenzialflächen-Online gehalten
                          werden, steht die Datenblattansicht auch im{" "}
                          <Link
                            class="renderAsLink"
                            to={slugify("Anmeldung und Offline-Benutzung")}
                            containerId={"myMenu"}
                            activeClass="active"
                          >
                            Offline-Modus
                          </Link>{" "}
                          zur Verfügung. Um die Datenblattansicht zu schließen,
                          klicken Sie auf die Schaltflächen &quot;Ok&quot;
                          rechts im Fußbereich des Fensters.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Steckbriefe",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Durch Anklicken des{" "}
                          <FontAwesomeIcon icon={faFilePdf} /> PDF-Symbols in
                          der Info-Box erzeugen Sie zu der aktuell in der
                          Info-Box beschriebenen Potenzialfläche einen
                          Steckbrief mit allen Informationen, die im
                          Fachverfahren WuNDa/Potenzialflächen zu dieser Fläche
                          geführt werden. Hierzu wird ein aktueller Bericht aus
                          der WuNDa-Datenbank angefordert, dessen einzelne
                          Inhalte anschließend in eine PDF-Dokumentvorlage
                          eingefügt werden. Die Erzeugung der Steckbriefe ist
                          daher im{" "}
                          <Link
                            class="renderAsLink"
                            to={slugify("Anmeldung und Offline-Benutzung")}
                            containerId={"myMenu"}
                            activeClass="active"
                          >
                            Offline-Modus
                          </Link>{" "}
                          nicht möglich! Nach der Fertigstellung des Berichtes
                          wird dieser automatisch heruntergeladen und in einem
                          separaten Fenster geöffnet. Zur Anzeige des
                          Steckbriefes wird die auf Ihrem Endgerät für die
                          Betrachtung von PDF-Dokumenten konfigurierte Anwendung
                          gestartet, z. B. der Adobe Acrobat Reader.{" "}
                        </p>
                        <p>
                          Im Fußbereich des Steckbriefes wird der Zeitstempel
                          des angeforderten Datenbankberichtes ausgeprägt -
                          diese Angabe ist wichtig, um aktuelle Steckbriefe von
                          veralteten Dokumenten unterscheiden zu können. Im Feld
                          &quot;Beschreibung der Fläche / Sachstand&quot; finden
                          Sie rechts oben eine Aktualitätsangabe der Daten zu
                          dieser Fläche. Zu diesem Zeitpunkt hat die Verwaltung
                          die Informationen und/oder Bewertungen zu dieser
                          Fläche in WuNDa/Potenzialflächen zuletzt
                          fortgeschrieben. Der Steckbrief verwendet als
                          Hintergrundfarbe der Titelzeile und für die
                          Flächendarstellungen in den beiden eingebetteten
                          Kartendarstellungen dieselben Farben, die auch im
                          Kartenfenster von Potenzialflächen-Online verwendet
                          werden (s.{" "}
                          <Link
                            class="renderAsLink"
                            to={slugify(
                              "Kartendarstellung der Potenzialflächen"
                            )}
                            containerId={"myMenu"}
                            activeClass="active"
                          >
                            Kartendarstellung der Potenzialflächen
                          </Link>
                          ).
                        </p>
                        <p>
                          Das Layout der Steckbriefe ist für einen Ausdruck im
                          Format DIN A4 optimiert. Wenn Sie mit einem mobilen
                          Endgerät mit entsprechend kleinem Bildschirm arbeiten,
                          ist es für Sie komfortabler, sich mit Hilfe der
                          interaktiven{" "}
                          <Link
                            class="renderAsLink"
                            to={slugify("Datenblattansicht")}
                            containerId={"myMenu"}
                            activeClass="active"
                          >
                            Datenblattansicht
                          </Link>{" "}
                          über die aktuell geladene Potenzialfläche zu
                          informieren.{" "}
                        </p>
                      </div>
                    ),
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
                              <Icon name="road" /> Straße ohne Hausnummern,
                              einen <Icon name="tag" /> POI, die{" "}
                              <Icon name="tags" /> alternative Bezeichnung eines
                              POI, eine <Icon name="child" />{" "}
                              Kindertageseinrichtung oder eine{" "}
                              <Icon name="graduation-cap" /> Schule handelt.
                            </p>
                              <FuzzySearchParagraph />
                            <p>
                              Zusätzlich können Sie auch die Bezeichnung einer
                              Potenzialfläche als Suchbegriff eingeben. Die
                              Kategorien der Treffer werden in der Auswahlliste
                              durch die Symbole{" "}
                              <IconComp name="square" overlay="G" /> für{" "}
                              <strong>G</strong>ewerbepotenzialflächen,{" "}
                              <IconComp name="square" overlay="W" /> für{" "}
                              <strong>W</strong>ohnbaupotenzialflächen,{" "}
                              <IconComp name="square" overlay="N" /> für Wieder
                              <strong>N</strong>
                              utzungspotenziale,{" "}
                              <IconComp name="square" overlay="L" /> für Bau
                              <strong>L</strong>
                              ücken und perspektivisch auch{" "}
                              <IconComp name="square" overlay="B" /> für{" "}
                              <strong>B</strong>
                              rachflächen angezeigt. Beim turnusmäßigen Import
                              der Daten aus dem Fachverfahren
                              WuNDa/Potenzialflächen werden für alle
                              Potenzialflächen Aliasse generiert, die den
                              Kennbuchstaben aus den Kategorie-Symbolen und ein
                              Leerzeichen als Präfix erhalten. So entsteht z. B.
                              für die Wohnbaufläche &quot;Friedenshort&quot;
                              der Alias &quot;W Friedenshort&quot;. Damit
                              können Sie durch die Eingabe des jeweiligen
                              Kennbuchstabens und eines Leerzeichens im
                              Eingabefeld effizient nach allen
                              Potenzialflächen dieser Kategorie suchen.
                            </p>
                          </>
                        }
                        zoomstufe={18}
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
                  title: 'Filterung ("Meine Potenzialflächen")',
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        {" "}
                        <p>
                          Unter &quot;<strong>Meine Potenzialflächen</strong>
                          &quot; können Sie im Anwendungsmenü{" "}
                          <FontAwesomeIcon icon={faBars} /> auswählen, welche
                          Kategorien von Potenzialflächen in der Karte
                          dargestellt werden. Durch Anklicken bzw. Antippen der
                          Schaltfläche &quot;Filter zurücksetzen&quot; machen
                          Sie Ihre Auswahl dergestalt rückgängig, dass wieder
                          alle Kategorien zur Anzeige ausgewählt werden.
                        </p>
                        <p>
                          Ihre Einstellungen werden direkt in der blauen
                          Titelzeile des Bereichs &quot;Meine
                          Potenzialflächen&quot; und in dem Donut-Diagramm, das
                          Sie rechts neben oder unter den Filteroptionen finden,
                          ausgewertet. Die Titelzeile zeigt die Gesamtanzahl der
                          Potenzialflächen in den von Ihnen ausgewählten
                          Kategorien. Das Donut-Diagramm zeigt zusätzlich die
                          Verteilung auf die einzelnen Kategorien. Bewegen Sie
                          dazu den Mauszeiger auf eines der farbigen Segmente
                          des Diagramms.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Anmeldung und Offline-Benutzung",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die interaktive Kartenanwendung
                          &quot;Potenzialflächen-Online&quot; ist für die
                          spezifische Gruppe der Nutzer in Verwaltung und
                          politischen Gremien gedacht, die in die Prozesse zur
                          Entwicklung von städtebaulichen Potenzialflächen
                          involviert sind. Sie ist daher nicht uneingeschränkt
                          öffentlich zugänglich, sondern erfordert eine
                          Anmeldung mit Benutzername und Passwort. Die
                          Zugangssteuerung erfolgt dabei über die
                          Nutzerverwaltung des Wuppertaler Navigations- und
                          Datenmanagementsystems WuNDa. Zugangsdaten können bei
                          der WuNDa-Administration (
                          <a href="mailto:wunda@stadt.wuppertal.de">
                            wunda@stadt.wuppertal.de
                          </a>
                          ) beantragt werden, die hierzu auch ein{" "}
                          <a href="https://formulare.wuppertal.de/metaform/Form-Solutions/sid/assistant/61fbb0516de84f231ac18ee3">
                            Online-Formular
                          </a>{" "}
                          bereitstellt.{" "}
                        </p>
                        <p>
                          Nach der Anmeldung bei Potenzialflächen-Online wird
                          Ihr Nutzername im Titelbereich zusammen mit der
                          letzten Aktualisierung des Cache-Speichers der
                          Kartenanwendung in der Form &quot;
                          <strong>Potenzialflächen-Online</strong> (Nutzername,
                          Datum der letzten Cache-Aktualisierung, Uhrzeit der
                          letzten Cache-Aktualisierung)&quot; angezeigt. Hier
                          finden Sie auch den Hyperlink{" "}
                          <a className="styleAsLink">abmelden</a>, mit dem Sie
                          die Anwendung in den Offline-Modus versetzen können.
                          Es erscheint dann zunächst wieder der Login-Dialog.
                          Wenn Sie hier auf &quot;Offline arbeiten&quot;
                          klicken, greift die Anwendung nicht mehr via Internet
                          auf die servergespeicherten Fachdaten und
                          Kartendienste zu, sondern auf deren im Anwendungscache
                          gespeicherte Kopien. Das Arbeiten im Offline-Modus ist
                          sinnvoll, wenn sich Ihr Einsatzort in einem Bereich
                          mit schwacher oder unzuverlässiger
                          Mobilfunknetzabdeckung befindet
                          (&quot;Funklöcher&quot;). Wichtig: im Offline-Modus
                          müssen Sie im Abschnitt &quot;Einstellungen&quot; des
                          Anwendungsmenüs eine Vektor-
                          <a href="url">Hintergrundkarte</a> auswählen, deren
                          Daten auf Ihr Endgerät heruntergeladen werden können.
                          Sie erkennen diese Karten an dem Download-Symbol
                          [Download-Icon] neben der Kartenbezeichnung. Im
                          Offline-Modus wird im Titelbereich anstelle Ihres
                          Nutzernamens der Text &quot;Daten aus dem Cache&quot;
                          zusammen mit Datum und Uhrzeit der letzten
                          Aktualisierung des Cache angezeigt. Der in diesem
                          Zustand angebotene Hyperlink{" "}
                          <a href="url">anmelden und Daten aktualisieren</a>{" "}
                          öffnet wiederum den Login-Dialog. Hier können Sie sich
                          wieder mit Nutzername und Passwort anmelden, wenn Sie
                          das Funkloch verlassen haben.{" "}
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
