import Icon from "react-cismap/commons/Icon";
import FuzzySearchParagraph from "../../commons/FuzzySearchParagraph";

const NW = (props) => {
  return <span style={{ whiteSpace: "nowrap" }}>{props.children}</span>;
};

export const InKartePositionieren = ({
  listWithSymbols = (
    <p>
      Durch das in der Auswahlliste vorangestellte Symbol erkennen Sie, ob es
      sich bei einem Treffer um einen{" "}
      <NW>
        <Icon name="circle" /> Stadtbezirk
      </NW>
      , ein{" "}
      <NW>
        <Icon name="pie-chart" /> Quartier
      </NW>
      , eine{" "}
      <NW>
        <Icon name="home" /> Adresse
      </NW>
      , eine{" "}
      <NW>
        <Icon name="road" /> Straße ohne Hausnummern
      </NW>
      , einen{" "}
      <NW>
        <Icon name="tag" /> POI
      </NW>
      , die{" "}
      <NW>
        <Icon name="tags" /> alternative Bezeichnung eines POI
      </NW>
      , eine{" "}
      <NW>
        <Icon name="child" /> Kindertageseinrichtung
      </NW>{" "}
      oder eine{" "}
      <NW>
        <Icon name="graduation-cap" /> Schule
      </NW>{" "}
      handelt.
    </p>
  ),
  listAddendum = null,
  grosseZoomstufe = 18,
  addendum = null,
}) => {
  return (
    <div>
      <p>
        Um in der Karte direkt zu einer bestimmten Adresse zu gelangen, geben
        Sie diese im Eingabefeld links unten ein. In der inkrementellen Auswahlliste
        werden Ihnen schon nach der Eingabe des ersten Buchstabens passende Treffer 
        angeboten. (Wenn Sie weitere Zeichen eingeben, wird der Inhalt der Auswahlliste 
        angepasst.) Sie können auch andere Suchbegriffe eingeben, nämlich Stadtteil 
        (Stadtbezirk oder Quartier), Straßenname (bei Straßen ohne zugeordnete Hausnummern) 
        oder &quot;Point of Interest&quot; (interessanter Ort, kurz als POI bezeichnet).
      </p>
      {listWithSymbols}

      {listAddendum && <p>{listAddendum}</p>}
      
      <FuzzySearchParagraph />
      <p>
        Einige GenericTopicMaps bieten Ihnen alternative Eingabefelder für spezielle 
        Ortsbezeichnungen. Als erstes Beispiel wurde das für die Wohnlagenkarte umgesetzt, 
        in der Sie sich auch über die Eingabe eines Flurstückskennzeichens in der Karte 
        positionieren können. Die Umschaltmöglichkeit erkennen Sie an einer kleinen Pfeilspitze 
        neben dem Symbol{" "}<Icon name="map-marker" />{" "}links neben dem Eingabefeld. Mit einem Klick auf 
        {" "}<Icon name="map-marker" />{" "}öffnen Sie in diesem Fall eine Auswahlliste für die verschiedenen 
        Varianten der Positionierung über Ortsbegriffe. Im Beispiel der Wohnlagenkarte steht 
        neben dem voreingestellten Modus "Adressen und Orte" (Beschreibung in den vorigen 2 Absätzen) 
        noch "Flurstücke" zur Auswahl. Jedes Flurstück besitzt ein eindeutiges Flurstückskennzeichen, 
        das sich aus den drei Bestandteilen Gemarkungsnummer, Flurnummer und Flurstücksnummer zusammensetzt. 
        Das Eingabefeld bietet Ihnen hierfür nacheinander 3 Auswahllisten an: zuerst für die Gemarkung, 
        dann für die Fluren in der ausgewählten Gemarkung, zuletzt für die Flurstücke in der gewählten Flur. 
        Vor jeder Auswahl können Sie einen Suchtext im Eingabefeld eingeben und den Inhalt der Liste damit 
        ausdünnen. Eine unscharfe Suche wird hier nur bei der Gemarkung durchgeführt. Dort können Sie sowohl 
        den Gemarkungsnamen (z. B. "Barmen") als auch die Gemarkungsnummer (im Beispiel "3001" für Barmen) 
        eingeben.
      </p>
      <p>
        Nach der Auswahl eines Treffers aus der Liste wird die Karte auf die
        zugehörige Position zentriert. Bei Suchbegriffen mit Punktgeometrie
        (Adresse, Straße, POI) wird außerdem ein großer Maßstab (Zoomstufe{" "}
        {grosseZoomstufe}) eingestellt und ein Marker auf der Zielposition
        platziert. Bei Suchbegriffen mit Flächengeometrie (Stadtbezirk,
        Quartier) wird der Maßstab so eingestellt, dass die Fläche vollständig
        dargestellt werden kann. Zusätzlich wird der Bereich außerhalb dieser
        Fläche abgedunkelt (Spotlight-Effekt).
      </p>
      <p>
        Durch Anklicken des Werkzeugs <Icon name="times" /> links neben dem
        Eingabefeld können Sie die Suche zurücksetzen (Entfernung von Marker
        bzw. Abdunklung, Löschen des Textes im Eingabefeld).
        {addendum}
      </p>
    </div>
  );
};
