import { useContext } from "react";
import Icon from "react-cismap/commons/Icon";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="karteninhalt"
      sectionTitle="Karteninhalt auswählen"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            Die Hochwassergefahrenkarte stellt, wie es in der stets sichtbaren 
            Titelzeile angezeigt wird, die maximalen Wassertiefen dar, die im 
            gesamten Verlauf eines simulierten Hochwasserereignisses auftreten.
          </p>
          <p>
            In der rechten unteren Ecke der Anwendung (bei kleinen Displays unten 
            direkt über dem Eingabefeld) finden Sie das <b>Kontrollfeld</b>, mit dem 
            Sie den Karteninhalt nach Ihren Wünschen festlegen können. Klicken Sie 
            unter <b>Hochwasser</b> auf eine der drei Schaltflächen, um die 
            Hochwassersimulation auszuwählen, die angezeigt werden soll (häufig, 
            100-jährlich oder extrem). Details zu den Simulationsberechnungen finden 
            Sie hier in der Kompaktanleitung unter {" "}
            <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("datengrundlage")}>
              Datengrundlagen
            </a>{" "}
            und{" "}
            <a className="renderAsLink" 
            onClick={() => setAppMenuActiveMenuSection("szenarien")}>
              Simulierte Szenarien
            </a>.
          </p>
          <p>
            Unter <b>HW-Schutz</b> finden Sie einen Wechselschalter, mit dem Sie 
            für das häufige und das 100-jährliche Hochwasser zwischen 2 
            Simulationsvarianten auswählen können. In der ersten Variante (Schalter 
            auf "an", blaue Einfärbung) wird angenommen, dass die technischen 
            Hochwasserschutzeinrichtungen bestimmungsgemäß funktionieren. Für 
            Wuppertal hat das Land NRW als einzige solche Schutzeinrichtung die 
            Verwallung zwischen der Wupper und dem Klärwerk Buchenhofen 
            berücksichtigt. Sie wird in dieser Variante als gelbgrüne Fläche 
            angezeigt. (
            <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("positionieren")}>
              Positionieren
            </a>{" "}
            Sie sich in der Karte über den Suchbegriff 
            "Buchenhofen", um das nachzuvollziehen.) Klicken bzw. tippen Sie auf 
            diese Fläche, um sich die Detailinformationen zur Verwallung anzeigen 
            zu lassen. In der zweiten Variante (Schalter auf "aus", graue 
            Einfärbung) wird das Versagen der technischen 
            Hochwasserschutzeinrichtungen angenommen, hier also ein Bruch der 
            Verwallung. In dieser Variante werden weite Teile des Klärwerks 
            überflutet. Die gelbgrüne Flächendarstellung der Verwallung wird 
            ausgeblendet. Für das extreme Hochwasser wurde vom Land NRW nur die 
            zweite Variante berechnet, da bei diesem Szenario generell von einem 
            Versagen aller technischen Hochwasserschutzeinrichtungen ausgegangen 
            wird. (Die Hochwasserschutzeinrichtungen sind nicht für das sehr 
            unwahrscheinliche Extremereignis ausgelegt.) Bei Auswahl des extremen 
            Hochwassers ist der Wechselschalter daher deaktiviert.
          </p>
          <p>
            Unter <b>Karte</b> können Sie aus drei verschiedenen Hintergrundkarten 
            auswählen: einer topographischen Karte in Graustufen, einer 
            Luftbildkarte und einem Stadtplan. Die topographische Karte verschafft 
            Ihnen den besten Überblick über die Situation, da sie einen plastischen 
            Geländeeindruck vermittelt. Der Stadtplan eignet sich gut für die sichere 
            Identifizierung Ihres Hauses, da hier die Hausnummern aller Gebäude 
            dargestellt werden. Die Luftbildkarte ist die anschaulichste 
            Kartengrundlage, sie eignet sich daher vor allem für Detailbetrachtungen. 
            Da die Hintergrundkartendienste immer wieder aktualisiert werden, kann es 
            in Einzelfällen zu geringen Abweichungen zu der Datengrundlage des 
            Simulationsmodells kommen, bis dieses ebenfalls mit den neuen 
            Gebäuden/Objekten fortgeschrieben wird. Näheres zu den Geodaten, die 
            diesen Karten zu Grunde liegen, finden Sie ebenfalls unter {" "}
            <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("datengrundlage")}>
              Datengrundlagen
            </a>.
          </p>
          <p>
            Am oberen Rand des Kontrollfeldes befindet sich eine platzsparende 
            Legende, mit der die zur Klassifizierung der maximalen simulierten 
            Wassertiefen verwendeten Farben erläutert werden. Direkt darunter 
            finden Sie die Bezeichnung und (in kleiner Schrift) eine 
            Kurzbeschreibung des aktuell ausgewählten Simulationsszenarios. Über 
            den Link{" "}
            <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("szenarien")}>
              (mehr)
            </a>{" "}
            am Ende jeder Kurzbeschreibung gelangen Sie zu einer 
            ausführlicheren Darstellung aller Szenarien in der Kompaktanleitung. 
            Mit der Schaltfläche <Icon name="chevron-circle-down" /> rechts neben 
            der Simulationsbezeichnung lässt sich das Kontrollfeld so verkleinern, 
            dass nur noch die Legende und die Simulationsbezeichnung angezeigt 
            werden - nützlich für mobile Endgeräte mit kleinem Display. Mit der 
            Schaltfläche <Icon name="chevron-circle-up" /> können Sie das 
            Kontrollfeld dann wieder vollständig einblenden.
          </p>
        </div>
      }
    />
  );
};
export default Component;
Component.defaultProps = {
  showModalMenu: () => {},
};
