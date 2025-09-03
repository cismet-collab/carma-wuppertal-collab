import React, { useContext } from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import Icon from "react-cismap/commons/Icon";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
/* eslint-disable jsx-a11y/anchor-is-valid */

export interface Help20KarteninhaltProps {
  simulationsklammer?: React.ReactNode;
}

const Component: React.FC<Help20KarteninhaltProps> = ({ simulationsklammer }) => {
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
            Die Starkregengefahrenkarte bietet Ihnen zwei verschiedene
            Darstellungsformen (Modi) für die simulierten Starkregenereignisse
            an. Im Modus <strong>Maximalwerte</strong> werden nur die maximalen
            Wassertiefen und Fließgeschwindigkeiten visualisiert, die im Verlauf
            eines simulierten Starkregenereignisses auftreten. Im Modus{" "}
            <strong>Zeitlicher Verlauf</strong> wird dagegen die Entwicklung der
            Wassertiefen bzw. der Fließgeschwindigkeiten über den gesamten
            zeitlichen Ablauf der Simulation (zwei Stunden) dargestellt. In der
            Mitte der stets sichtbaren Titelzeile oben im Kartenfenster wird
            Ihnen der gerade aktive Modus angezeigt (z. B. &quot;max.
            Wassertiefen&quot; vs. &quot;Wassertiefen im zeitlichen
            Verlauf&quot;). Auf der linken Seite der Titelzeile finden sie eine
            Schaltfläche{" "}
            <a>
              <Icon name="random" />
            </a>
            , mit der Sie den Darstellungsmodus wechseln können.{" "}
          </p>
          <p>
            In beiden Modi unterstützt die Starkregengefahrenkarte zwei
            verschiedene Kartenansichten, eine zu den Wassertiefen und eine zu
            den Fließgeschwindigkeiten. Die gerade aktive Kartenansicht können
            Sie ebenfalls der Bezeichnung in der Mitte der Titelzeile entnehmen
            (&quot;max. Wassertiefen&quot; vs. &quot;max.
            Fließgeschwindigkeiten&quot; bzw. &quot;Wassertiefen im zeitlichen
            Verlauf&quot; vs. &quot;Fließgeschwindigkeiten im zeitlichen
            Verlauf&quot;). Mit der Schaltfläche{" "}
            <a>
              <Icon name="random" />
            </a>{" "}
            auf der rechten Seite der Titelzeile können Sie zwischen den
            Kartenansichten wechseln.
          </p>

          <p>
            In der rechten unteren Ecke der Anwendung (bei kleinen Displays
            unten direkt über dem Eingabefeld) finden Sie das{" "}
            <b>Kontrollfeld</b>, mit dem Sie den weiteren Karteninhalt nach
            Ihren Wünschen festlegen können. Klicken Sie unter <b>Simulation</b>{" "}
            auf eine der vier Schaltflächen, um die Starkregensimulation
            auszuwählen, die angezeigt werden soll
            {simulationsklammer && <span>{simulationsklammer}</span>}. Details
            zu den Simulationsberechnungen finden Sie hier in der
            Kompaktanleitung unter{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("datengrundlage")}
            >
              Datengrundlagen
            </a>{" "}
            und{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
              Simulierte Szenarien
            </a>
            .
          </p>
          <p>
            Unter <strong>Karte</strong> können Sie aus drei verschiedenen
            Hintergrundkarten auswählen: einer topographischen Karte in
            Graustufen, einer Luftbildkarte und einem Stadtplan. Die
            topographische Karte verschafft Ihnen den besten Überblick über die
            Situation, da sie einen plastischen Geländeeindruck vermittelt. Der
            Stadtplan eignet sich gut für die sichere Identifizierung Ihres
            Hauses, da hier die Hausnummern aller Gebäude dargestellt werden.
            Die Luftbildkarte ist die anschaulichste Kartengrundlage, sie eignet
            sich daher vor allem für Detailbetrachtungen. Da die
            Hintergrundkartendienste immer wieder aktualisiert werden, kann es
            in Einzelfällen zu geringen Abweichungen zu der Datengrundlage des
            Simulationsmodells kommen, bis dieses ebenfalls mit den neuen
            Gebäuden/Objekten fortgeschrieben wird. Näheres zu den Geodaten, die
            diesen Karten zu Grunde liegen, finden Sie ebenfalls unter{" "}
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
            Legende, mit der die zur Klassifizierung der maximalen simulierten
            Wassertiefen bzw. Fließgeschwindigkeiten verwendeten Farben
            erläutert werden. Direkt darunter finden Sie die Bezeichnung und (in
            kleiner Schrift) eine Kurzbeschreibung des aktuell ausgewählten
            Simulationsszenarios. Über den Link{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
              (mehr)
            </a>{" "}
            am Ende jeder Kurzbeschreibung gelangen Sie zu einer ausführlicheren
            Darstellung aller Szenarien in der Kompaktanleitung. Mit der
            Schaltfläche <Icon name="chevron-circle-down" /> rechts neben der
            Simulationsbezeichnung lässt sich das Kontrollfeld so verkleinern,
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

(Component as any).defaultProps = {
  showModalMenu: () => {},
};
