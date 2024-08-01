import { getSimpleHelpForTM } from "react-cismap/tools/uiHelper";
import { featureSamples4Icons } from "./iconFactory";
import { getSymbolSVGGetter } from "react-cismap/tools/uiHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "react-cismap/commons/Icon";
import {
  faInfoCircle,
  faMagnifyingGlassMinus,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
const topicMapTitle = "Hintergrund";
const simpleHelp = {
  type: "REACTCOMP",
  content: (
    <div>
      <p>
        Die Möglichkeiten zum Klima- und Umweltschutz werden aktuell global
        diskutiert, wobei bereits auf kommunaler Ebene viele Akteure und
        Einrichtungen an deren Umsetzung beteiligt sind. An den im Kartenbild
        gezeigten "Klimaorten" wird das Thema Klimaschutz praktiziert und
        vermittelt; hier wird der Klimaschutz für die Bürger:innen erlebbar.
        Viele dieser Klimaorte sind im Rahmen von innovativen Projekten durch
        den Wissenstransfer und das Engagement von Unternehmen, Vereinen,
        Verbänden sowie Quartiersbewohner:innen entstanden, die sich aktiv für
        Lösungen zum Klima- und Umweltschutz in ihrem Quartier und für die Stadt
        Wuppertal einsetzen. Zu den zielführenden Projekten gehören z.B.
        Wuppertals Klimasiedlungen, Anlagen zur effizienten und/oder
        regenerativen Energieerzeugung, Projekte der Verkehrswende sowie der
        Klima- und Umweltbildung, an denen zahlreiche Akteure mitwirken und
        mitgestalten.
      </p>
      <p>
        Mit den Klimarouten steht den Bürger:innen eine weitere Möglichkeit zur
        Erkundung der Klimaorte im Wuppertaler Stadtgebiet zur Verfügung.
        Verschiedene Routen (zu Fuß oder mit dem Fahrrad) führen Sie an
        ausgewählten Klimaorten vorbei: Aussichtspunkte{" "}
        {getSymbolSVGGetter(
          featureSamples4Icons.aussichtspunkt?.properties?.svgBadge,
          featureSamples4Icons.aussichtspunkt?.properties?.svgBadgeDimension
        )(
          20,
          featureSamples4Icons.aussichtspunkt?.properties.color,
          "aussichtspunktsample_"
        )}{" "}
        ermöglichen Ihnen den Blick auf weitere Klimaorte aus größerer
        Entfernung zu werfen und Zwischenstopps{" "}
        {getSymbolSVGGetter(
          featureSamples4Icons.zwischenstopp?.properties?.svgBadge,
          featureSamples4Icons.zwischenstopp?.properties?.svgBadgeDimension
        )(
          20,
          featureSamples4Icons.zwischenstopp?.properties.color,
          "zwischenstoppsample_"
        )}{" "}
        bieten Ihnen ausgewählte Highlights im Routenverlauf an.
      </p>
      <p>
        Ergänzt wird dieses Angebot durch weitere interessante Orte (Point of
        Interest, POI) entlang des Routenverlaufs. Begeben Sie sich auf
        Erkundungstour: die Welt des Klimaschutzes und nachhaltiger Ideen
        erwarten Sie.
      </p>
    </div>
  ),
};
export const configurableDocBlocks = getSimpleHelpForTM(
  topicMapTitle,
  simpleHelp
);

configurableDocBlocks[0].configs.splice(6, 0, {
  title: "Filtern",
  bsStyle: "warning",
  contentBlockConf: {
    type: "REACTCOMP",
    content: (
      <div>
        <p>
          Im Bereich &quot;<strong>Meine Klimaorte</strong>&quot; können Sie im
          Anwendungsmenü <Icon name="bars" /> die in der Karte angezeigten
          Klimaorte so ausdünnen, dass nur die für Sie interessanten Orte übrig
          bleiben. Dabei umfasst die Filterung die Angebote an den
          Klimastandorten, wobei sich ein Angebot aus einem Thema und einer
          Kategorie ergibt. Standardmäßig sind die Einstellungen hier so
          gesetzt, dass alle verfügbaren Klimaorte angezeigt werden.
        </p>
        <p>
          Ihnen stehen somit zwei Filterkriterien zur Verfügung: "Themen" und
          "Kategorien". Innerhalb dieser Kriterien können sie in einer
          alphabetisch sortieren Menge an Schlagworten (Tags) bestimmte Begriffe
          per Mausklick selektieren bzw. deselektieren; die Auswahl aller bzw.
          keines der Schlagworte erfolgt über die Schaltfläche{" "}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="renderAsLink">alle</a> bzw.{" "}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="renderAsLink">keine</a>.
        </p>
        <p>
          Ihre Einstellungen werden direkt in der blauen Titelzeile des Bereichs
          "<strong>Meine Klimaorte</strong>" und in dem Donut-Diagramm, das Sie
          rechts neben oder unter den Filteroptionen finden, ausgewertet. Die
          Titelzeile zeigt die Gesamtanzahl der Klimaorte, die den von Ihnen
          gesetzten Filterbedingungen entsprechen. Das Donut-Diagramm zeigt
          zusätzlich die Verteilung der Klimaorte entsprechend der
          Filterkriterien "Themen" oder "Kategorien". Bewegen Sie dazu den
          Mauszeiger auf eines der farbigen Segmente des Diagramms. Die Farben
          des Donut-Diagramms entsprechen den farbigen Hintergründen der
          Schlagworte aus dem Filterkriterium "Themen".
        </p>
      </div>
    ),
  },
});
configurableDocBlocks[0].configs.splice(4, 0, {
  title: "Datenblatt",
  bsStyle: "success",
  contentBlockConf: {
    type: "REACTCOMP",
    content: (
      <div>
        <p>
          Wenn Sie ein Objekt in der Karte markiert haben, werden Ihnen
          Objektangaben in der Infobox präsentiert. Bei manchen TopicMaps
          übersteigt die Menge an Informationen zu diesem Objekt (oder auch der
          Gestaltungsspielraum) die Möglichkeiten der Infobox, z. B. bei der
          Präsentation von Messwerten über einen längeren Zeitraum in Form von
          Diagrammen. Daher wird bei manchen TopicMaps ein ergänzendes
          Datenblatt angeboten, welches Sie über die Schaltfläche{" "}
          <FontAwesomeIcon icon={faInfoCircle} /> in der Infobox erreichen. Für
          das Datenblatt einer Klimaroute folgen die Erläuterungen zu den
          einzelnen Abschnitten und möglichen Funktionen.
        </p>
        <h5>
          <b>Höhenprofil</b>
        </h5>
        <p>
          In der Graphik wird Ihnen das Höhenprofil der jeweiligen Klimaroute
          auf der komoot-Datengrundlage als blaue Linie präsentiert (Höhen- und
          Entfernungswerte auf{" "}
          <span style={{ whiteSpace: "nowrap" }}>1 Meter</span> gerundet).
          Dadurch sind Bereiche mit flachem Terrain oder großem Gefälle/ großer
          Steigung schnell ersichtlich. Besonders für Wuppertal mit der
          markanten Topographie kann dies beim Erkunden der Klimaroute hilfreich
          sein. Per Mouseover oder Fingertipp auf die blaue Linie können Sie die
          entsprechenden Höhenwerte und einen Abstand zum Startpunkt der
          Klimaroute ermitteln. Am oberen Ende der Graphik befinden sich{" "}
          <span style={{ whiteSpace: "nowrap" }}>
            Markierungen{" "}
            <FontAwesomeIcon style={{ color: "#dddddd" }} icon={faStop} />,
          </span>{" "}
          welche auf die an der Klimaroute befindlichen Stationen hinweisen.
          Ähnlich wie zuvor, lassen sich für die Stationen die Höhenwerte oder
          Entfernungen zum Klimaroutenstartpunkt ermitteln. Für die genauere
          Betrachtung eines Routenabschnitts bzgl. des Höhenprofils markieren
          Sie mit der Maus den gewünschten Bereich oder verwenden Sie die
          Zoom-In-Geste (oder Zoom-Out) auf Ihrem mobilen Endgerät. Ein
          Zurücksetzen des Zooms ist mit einem Klick auf das Lupen-Symbol{" "}
          <FontAwesomeIcon icon={faMagnifyingGlassMinus} /> möglich.
        </p>
        <h5>
          <b>Routenverlauf</b>
        </h5>

        <p>
          In der Graphik wird Ihnen in einer Verlaufsansicht die Stationsabfolge
          an einer Klimaroute präsentiert: Station folgt auf Station entlang der
          Klimaroute. Die Entfernung zum Klimaroutenstartpunkt (auf{" "}
          <span style={{ whiteSpace: "nowrap" }}> 100 Meter</span> gerundet)
          wird Ihnen im linken Bereich der Verlaufsansicht geboten.
        </p>

        <h5>
          <b>Route in umgekehrter Reihenfolge</b>
        </h5>
        <p>
          Sie möchten das Höhenprofil bzw. den Routenverlauf in umgekehrter
          Reihenfolge anzeigen lassen? Im Kopfbereich des Datenblattes befindet
          sich hierzu die Schaltfläche "umgekehrte Reihenfolge anzeigen". Ein
          Klick darauf wechselt anschließend die Verlaufsrichtung der Graphiken.
          Ein weiterer Klick auf die jetzt "ursprüngliche Reihenfolge anzeigen"
          benannte Schaltfläche, setzt die Sortierung wieder in die Ausgangslage
          zurück.
        </p>
      </div>
    ),
  },
});