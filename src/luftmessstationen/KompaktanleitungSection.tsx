import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import { Link } from "react-scroll";
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
                          Die Karte{" "}
                          <strong>Luftmessstationskarte Wuppertal </strong>{" "}
                          bietet ihnen die folgenden Hintergrundkarten an, die
                          auf verschiedenen Geodatendiensten und Geodaten
                          basieren:
                        </p>
                        <ul>
                          <LuftbildkarteText bodenaufloesung={3} />
                          <StadtplanTagNachtText />
                        </ul>
                        <p>
                          Neben dem Datensatz der{" "}
                          <a
                            href="https://offenedaten-wuppertal.de/dataset/umweltzonen-wuppertal"
                            target="_opendata"
                          >
                            Umweltzonen Wuppertal
                          </a>{" "}
                          stellt die Luftmessstationskarte auch die Daten der
                          Luftmessstationen aus dem Open-Data-Angebot der Stadt
                          Wuppertal dar:
                        </p>
                        <ul>
                          <li>
                            <a
                              target="_opendata"
                              href="https://offenedaten-wuppertal.de/dataset/luftmessstationen-wuppertal-passivsammler"
                            >
                              Stammdaten der Luftmessstationen
                            </a>
                          </li>
                          <li>
                            <a
                              target="_opendata"
                              href="https://offenedaten-wuppertal.de/dataset/no2-messdaten-wuppertal-passivsammler-ab-2008"
                            >
                              Messdaten (Monatsmittelwerte) seit dem Jahr 2008
                            </a>
                          </li>
                          <li>
                            <a
                              target="_opendata"
                              href="https://offenedaten-wuppertal.de/dataset/no2-jahresmittelwerte-wuppertal-passivsammler-ab-2008"
                            >
                              Jahresmittelwerte seit dem Jahr 2008
                            </a>
                          </li>
                          <li>
                            <a
                              target="_opendata"
                              href="https://offenedaten-wuppertal.de/dataset/no2-messdaten-wuppertal-passivsammler-2006-und-2007"
                            >
                              Messdaten der Jahre 2006 und 2007
                            </a>
                          </li>
                        </ul>
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
                          Die Stadt Wuppertal führt seit vielen Jahren Messungen
                          und Kartierungen durch, um Aufschlüsse über die
                          Luftbelastungssituation zu erhalten. Diese
                          Erkenntnisse werden für Maßnahmen zur Luftreinhaltung
                          und die Stadtentwicklung genutzt. Einer der derzeit am
                          meisten diskutierte Luftschadstoff ist
                          Stickstoffdioxid (NO₂). Dieser wird als Reizgas mit
                          stechend-stickigem Geruch bereits in geringen
                          Konzentrationen wahrgenommen. Die Inhalation ist für
                          den Menschen der einzig relevante Aufnahmeweg.{" "}
                        </p>
                        <p>
                          Die europäische Union hat für ihre Mitgliedsstaaten
                          mit mehreren Luftqualitätsrichtlinien verbindliche
                          Luftqualitätsziele zur Vermeidung oder Verringerung
                          schädlicher Auswirkungen auf die menschliche
                          Gesundheit und die Umwelt festgelegt. Danach wird die
                          Luftqualität in den Staaten der EU nach einheitlichen
                          Methoden und Kriterien beurteilt. In der
                          Bundesrepublik Deutschland wurden diese Richtlinien
                          durch Novellierung des
                          Bundes-Immissions­schutzgesetzes (BImSchG) sowie durch
                          die Einführung der 39. Verordnung zum BImSchG (39.
                          BImSchV) in deutsches Recht umgesetzt. Für
                          Stickstoffdioxid (NO₂) gilt seit dem Jahr 2010 ein
                          Jahresmittelwert für NO₂ von 40 µg pro Kubikmeter
                          Luft. Die Messungen von Stickstoffdioxid (NO₂) werden
                          in Wuppertal mit sogenannten Passivsammlern
                          durchgeführt und nahezu monatlich abgelesen.
                        </p>
                        <p>
                          Die Luftmessstationskarte zeigt die Positionen dieser
                          Passivsammler im Wuppertaler Stadtgebiet, welche in
                          den vergangenen zehn Jahren Messwerte lieferten. Die
                          farbigen Signaturen in der Karte beziehen sich dabei
                          auf den zuletzt verfügbaren monatlichen NO₂-Messwert:
                          unauffällig grün (≦ 35 mg/m³), auffällig gelb (&gt; 35
                          µg/m³) und warnend rot ({">"} 40 µg/m³). Die
                          Signaturen für Passivsammler, welche bei der letzten
                          monatlichen Ablesung keinen Messwert geliefert haben,
                          sind türkis eingefärbt (temporärer Ausfall). Wenn eine
                          Messstation in den letzten zehn Jahren abgebaut wurde
                          und damit keine weiteren NO₂-Messwerte liefert, liegt
                          eine blaugraue Signatur vor.
                        </p>
                        <p>
                          Ein Passivsammler ist ein kleines mit Adsorbermaterial
                          gefülltes Röhrchen, welches ohne Pumpe (ohne aktive
                          Probenahme) Schadstoffe aus der Luft über die
                          natürliche Ausbreitung und Verteilung (Diffusion)
                          aufnehmen und anreichern kann. Zur Verringerung von
                          wind- und turbulenzbedingten Einflüssen befindet sich
                          an der offenen Seite des Probeentnahmeröhrchens eine
                          Glasfritte. Zum Schutz vor Witterungseinflüssen werden
                          die Sammler in einem nach unten geöffneten Gehäuse
                          eingehängt und exponiert.
                        </p>
                        <div style={{ textAlign: "center" }}>
                          <img
                            width="50%"
                            src="https://topicmaps-wuppertal.github.io/luftmessstationen/img/passivsammler.jpg"
                          />
                        </div>
                        <p>
                          {" "}
                          <em>
                            Beispiel für einen{" "}
                            <a href="https://www.lanuv.nrw.de/fileadmin/lanuv/luft/gifs/no2_gr.jpg">
                              Passivsammler
                            </a>
                            ; Bildquelle: Landesamt für Natur- Umwelt und
                            Verbraucherschutz NRW (
                            <a href="https://www.lanuv.nrw.de/impressum">
                              LANUV
                            </a>
                            ).
                          </em>
                        </p>
                        <p>
                          Die Funktionsweise eines Passivsammlers basiert auf
                          der Anreicherung von Stickstoffdioxid (NO₂) an einem
                          geeigneten Adsorbens ohne aktive Probennahme. Das
                          Probeentnahmesystem besteht aus einem
                          Kunststoffröhrchen, an dessen einem Ende sich ein mit
                          Triethanolamin imprägniertes Edelstahl-Drahtsieb als
                          Adsorbens befindet. Das in der Außenluft enthaltene
                          NO₂ wird durch Diffusion zu diesem Adsorbens
                          transportiert und dort adsorbiert. Die Röhrchen bzw.
                          die Stickstoffdioxidmenge werden anschließend im Labor
                          als Nitrit, z.B. mittels Fotometrie, analysiert. Aus
                          der Analytmenge, dem Expositionszeitraum und der
                          Sammelrate wird die mittlere Konzentration im
                          Expositionszeitraum berechnet. Typische
                          Expositionszeiträume liegen im Bereich von zwei bis
                          sechs Wochen.
                        </p>
                        <p>
                          Für die in Wuppertal durchgeführten Messungen wurden
                          Expositions- bzw. Messzeiträume von etwa vier Wochen
                          realisiert, um eine Auswertung auf
                          Monatsmittelwertbasis zu ermöglichen. Der vorliegende
                          Messwert beschreibt die mittlere Konzentration im
                          Expositionsraum. Nach etwa vier Wochen erfolgt an den
                          Wuppertaler Messstationen der Probeentnahmewechsel
                          durch ein beauftragtes Unternehmen. Nach dem Wechsel
                          werden die Proben im Labor analysiert. Die
                          Messergebnisse liegen ca. 2-3 Wochen nach dem Wechsel
                          vor; mögliche Verzögerungen bei der Datenlieferung
                          treten selten auf. Nach Vorliegen der Daten werden
                          diese seitens der Stadt Wuppertal auf Plausibilität
                          geprüft. Die Daten werden spätestens eine Woche nach
                          Erhalt in das Fachsystem übernommen. Es ergibt sich
                          daraus eine maximale Verzögerung hinsichtlich des
                          Zeitpunkts der Veröffentlichung der NO₂-Messwerte von
                          ca. vier Wochen.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Fachobjekte auswählen und abfragen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf eines
                          der farbigen Symbole, mit denen die Fachobjekte des
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
                              <Icon name="road" /> Straße ohne Hausnummern,
                              einen <Icon name="tag" /> POI, die{" "}
                              <Icon name="tags" /> alternative Bezeichnung eines
                              POI, eine <Icon name="child" />{" "}
                              Kindertageseinrichtung, eine{" "}
                              <Icon name="graduation-cap" /> Schule oder eine{" "}
                              <Icon name="cloudscale" /> Luftmessstation
                              handelt.
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
                          Im Bereich &quot;
                          <strong>Messstationen der Luftqualität</strong>&quot;
                          können Sie im Anwendungsmenü <Icon name="bars" /> die
                          in der Karte angezeigten Luftmessstationen so
                          ausdünnen, dass nur die für Sie interessanten
                          Stationen übrig bleiben. Standardmäßig sind die
                          Einstellungen hier so gesetzt, dass alle verfügbaren
                          Luftmessstationen angezeigt werden.
                        </p>
                        <p>
                          Mit den Optionsgruppen &quot;
                          <strong>aktive Messstationen</strong>&quot; und &quot;
                          <strong>inaktive Messstationen</strong>&quot; können
                          Sie die Kartenanzeige auf Luftmessstationen
                          beschränken, die im letzten verfügbaren Messzeitraum
                          NO₂-Messwerte lieferten (ggf. kann ein temporärer
                          Messausfall vorliegen) oder bei denen es sich um
                          abmontierte Stationen handelt (ggf. werden in der
                          Vergangenheit erfasste Messwerte im Datenblatt
                          präsentiert). Die Unterteilung (Klassifizierung) der
                          Stationen in der Optionsgruppe &quot;
                          <strong>aktive Messstationen</strong>
                          &quot; wird anhand des NO₂-Messwertes vorgenommen:
                          unauffällig grün (≦ 35 µg/m³), auffällig gelb (&gt; 35
                          µg/m³), warnend rot (&gt; 40 µg/m³); temporärer
                          Ausfall türkis (siehe auch Abschnitt{" "}
                          <Link
                            to={"Hintergrund"}
                            containerId={"myMenu"}
                            style={{ cursor: "pointer", color: "#4688F7" }}
                          >
                            Hintergrund
                          </Link>
                          ) .
                        </p>
                        <p>
                          Ihre Einstellungen werden direkt in der blauen
                          Titelzeile des Bereichs &quot;
                          <strong>Messstationen der Luftqualität</strong>&quot;
                          und in dem Donut-Diagramm, das Sie rechts neben oder
                          unter den Filteroptionen finden, ausgewertet. Die
                          Titelzeile zeigt die Gesamtanzahl der
                          Luftmessstationen, die den von Ihnen gesetzten
                          Filterbedingungen entsprechen. Das Donut-Diagramm
                          zeigt zusätzlich die Verteilung der klassifizierten
                          Luftmessstationen (unauffällige, auffällige, warnende
                          Stationen; Stationen mit Messausfall; abmontierte
                          Stationen). Bewegen Sie dazu den Mauszeiger auf eines
                          der farbigen Segmente des Diagramms.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Einstellungen",
                  bsStyle: "info",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <div>
                          <p>
                            Unter &quot;<strong>Einstellungen</strong>&quot;
                            können Sie im Anwendungsmenü festlegen, wie die
                            Hintergrundkarte und die Fachobjekte des
                            Kartenthemas angezeigt werden sollen.
                          </p>
                          <p>
                            Unter &quot;
                            <strong>
                              <em>Hintergrundkarte</em>
                            </strong>
                            &quot; können Sie auswählen, ob Sie die
                            standardmäßig aktivierte farbige Hintergrundkarte
                            verwenden möchten (&quot;Stadtplan (Tag)&quot;) oder
                            lieber eine invertierte Graustufenkarte
                            (&quot;Stadtplan (Nacht)&quot;), zu der uns die von
                            vielen PKW-Navis bei Dunkelheit eingesetzte
                            Darstellungsweise inspiriert hat.{" "}
                            <strong>Hinweis</strong>: Der Stadtplan (Nacht) wird
                            Ihnen nur angeboten, wenn Ihr Browser
                            CSS3-Filtereffekte unterstützt, also z. B. nicht
                            beim Microsoft Internet Explorer. Die Nacht-Karte
                            erzeugt einen deutlicheren Kontrast mit den farbigen
                            Symbolen für die Fachobjekte des Kartenthemas, die
                            unterschiedlichen Flächennutzungen in der
                            Hintergrundkarte lassen sich aber nicht mehr so gut
                            unterscheiden wie in der Tag-Karte. Als dritte
                            Möglichkeit steht eine Luftbildkarte zur Verfügung,
                            die die Anschaulichkeit des Luftbildes mit der
                            Eindeutigkeit des Stadtplans (Kartenschrift,
                            durchscheinende Linien) verbindet.
                          </p>
                          <p>
                            Unter &quot;
                            <strong>
                              <em>Symbolgröße</em>
                            </strong>
                            &quot; können Sie in Abhängigkeit von Ihrer
                            Bildschirmauflösung und Ihrem Sehvermögen auswählen,
                            ob die Fachobjekte mit kleinen (25 Pixel), mittleren
                            (35 Pixel) oder großen (45 Pixel) Symbolen angezeigt
                            werden.
                          </p>
                          <p>
                            In der{" "}
                            <strong>
                              <em>Vorschau</em>
                            </strong>{" "}
                            sehen Sie direkt die prinzipielle Wirkung ihrer
                            Einstellungen.
                          </p>
                        </div>
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
