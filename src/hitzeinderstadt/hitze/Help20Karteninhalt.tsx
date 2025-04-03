import Section from "react-cismap/topicmaps/menu/Section";
import Icon from "react-cismap/commons/Icon";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { useContext } from "react";

export const Help20Karteninhalt = () => {
  const { setAppMenuActiveMenuSection } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);
  return (
    <Section
      key="karteninhalt"
      sectionKey="karteninhalt"
      sectionTitle="Karteninhalt auswählen"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            In der rechten unteren Ecke der Anwendung (bei kleinen Displays
            unten direkt über dem Eingabefeld) finden Sie das{" "}
            <strong>Kontrollfeld</strong>, mit dem Sie den Karteninhalt nach
            Ihren Wünschen festlegen können. Klicken Sie unter{" "}
            <strong>Modellberechnung</strong> auf die drei Schaltflächen, um die
            Datenebenen (&quot;Hitzebelastung&quot;, &quot;starke
            Hitzebelastung&quot; oder &quot;Zukunftsszenario 2050-2060&quot;)
            auszuwählen, die angezeigt werden sollen. Die Schaltflächen für die
            zur Anzeige ausgewählten Datenebenen werden mit einem blauen
            Hintergrund angezeigt. Durch erneutes Anklicken einer blau
            dargestellten Schaltfläche wird die zugehörige Datenebene wieder
            ausgeblendet. Weil sich die hitzebelasteten und die stark
            hitzebelasteten Rasterzellen nicht überlappen und die Hitzebelastung
            im Zukunftsszenario 2050-2060 als transparenter Decker ausgeprägt
            wird, können die drei Datenebenen beliebig kombiniert werden.
            Details zu den Modellberechnungen finden Sie hier in der
            Kompaktanleitung unter{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("datengrundlage")}
            >
              Datengrundlagen
            </a>
            ,{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("modellberechnungen")}
            >
              Modellberechnungen
            </a>{" "}
            und{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("aussagekraft")}
            >
              Aussagekraft der Modellberechnungen
            </a>
            .
          </p>

          <p>
            Unter <b>Karte</b> können Sie aus drei verschiedenen
            Hintergrundkarten auswählen: einem Stadtplan, einer 
            Luftbildkarte und einer topographischen Karte in Graustufen. Der
            Stadtplan eignet sich gut für die sichere Identifizierung Ihres
            Hauses, da hier die Hausnummern aller Gebäude dargestellt werden.
            Die Luftbildkarte ist die anschaulichste Kartengrundlage, sie eignet
            sich daher vor allem für Detailbetrachtungen. Die topographische Karte 
            verschafft Ihnen den besten Überblick über die Situation, da sie einen 
            plastischen Geländeeindruck vermittelt. Näheres zu den
            Geodaten, die diesen Karten zu Grunde liegen, finden Sie ebenfalls
            unter{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("datengrundlage")}
            >
              Datengrundlagen
            </a>
            .
          </p>
          <p>
            Am oberen Rand des Kontrollfeldes befindet sich eine platzsparende
            Legende, welche die für die drei Datenebenen verwendeten Farben
            erläutert. Direkt darunter finden Sie das Kartenthema
            &quot;Hitzebelastungen in Wuppertal&quot; sowie (in kleinerer
            Schrift) eine kurze Beschreibung der in der Kartenanwendung
            verfügbaren Modellberechnungen. Über den Link (
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("modellberechnungen")}
            >
              mehr
            </a>
            ) am Ende dieser Kurzbeschreibung gelangen Sie zu einer
            ausführlicheren Erläuterung der Modellberechnungen in der
            Kompaktanleitung. Mit der Schaltfläche{" "}
            <Icon name="chevron-circle-down" /> rechts neben dem Kartenthema
            lässt sich das Kontrollfeld so verkleinern, dass nur noch die
            Legende und das Kartenthema angezeigt werden - nützlich für
            Endgeräte mit kleinem Display. Mit der Schaltfläche{" "}
            <Icon name="chevron-circle-up" /> können Sie das Kontrollfeld dann
            wieder vollständig einblenden.{" "}
          </p>
        </div>
      }
    />
  );
};

export default Help20Karteninhalt;
