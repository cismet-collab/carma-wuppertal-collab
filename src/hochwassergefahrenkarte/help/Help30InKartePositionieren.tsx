import Icon from "react-cismap/commons/Icon";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { InKartePositionierenText } from "../../commons";
import FuzzySearchParagraph from "../../commons/FuzzySearchParagraph";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="positionieren"
      sectionTitle="In Karte positionieren"
      sectionBsStyle="success"
      sectionContent={
        <InKartePositionierenText
          pretext={
            <>
              <p>
                Um die Gefährdung durch Hochwasser in einem bestimmten Bereich
                des Stadtgebietes zu erkunden, geben Sie den Namen eines Stadtteils 
                (Stadtbezirk oder Quartier), eine Adresse, den Namen eines 
                interessanten Ortes (Point of Interest, kurz POI)
                oder die Bezeichnung eines GEP-Bereichs im Eingabefeld links 
                unten ein. (Die Bedeutung der GEP-Bereiche wird am Ende dieses 
                Abschnittes der Kompaktanleitung erläutert!) In der inkrementellen 
                Auswahlliste werden Ihnen schon nach der Eingabe des ersten Buchstabens 
                passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, 
                wird der Inhalt der Auswahlliste angepasst.)
                Durch das vorangestellte Symbol erkennen Sie, ob es sich dabei
                um einen <Icon name="circle" /> Stadtbezirk, ein{" "}
                <Icon name="chart-pie" /> Quartier, eine <Icon name="home" />{" "}
                Adresse, eine <Icon name="road" /> Straße ohne zugeordnete
                Hausnummern, einen <Icon name="tag" /> POI, die{" "}
                <Icon name="tags" /> alternative Bezeichnung eines POI, eine{" "}
                <Icon name="child" /> Kindertageseinrichtung, eine{" "}
                <Icon name="graduation-cap" /> Schule oder einen{" "}
                <Icon name="code-branch" /> GEP-Bereich handelt.
              </p>
              <FuzzySearchParagraph />
            </>
          }
          flachengeometrie="(Stadtbezirk, Quartier, GEP)"
          zoomstufe={18}
          posttext={
            <p>
              <b>Erläuterung der GEP-Bereiche</b>: In der
              Generalentwässerungsplanung (GEP), dem langfristigen Prozess zur
              Weiterentwicklung des Wuppertaler Kanalnetzes, wird nahezu das
              gesamte Stadtgebiet in Teilbereiche (GEP-Bereiche) eingeteilt. Die
              GEP-Bereiche haben eine Nummer und einen Namen, der zumeist dem
              Bach entspricht, in den der GEP-Bereich entwässert, z. B. "GEP 09
              Mirker Bach". Alternativ können Sie die GEP-Bereiche auch über den
              vorangestellten Namen ansprechen, also z. B. "Mirker Bach (GEP
              09)". Zusätzlich haben wir weitere wichtige Wuppertaler Bäche, die
              direkt in die Wupper oder die Düssel einmünden, als Alias für die
              zugehörigen GEP-Bereiche angelegt. Diese werden dann in der Form
              "Morsbach (im GEP 28 Cronenberg-Ost)“ angezeigt. Für den Deilbach,
              dessen durch Wuppertal laufender Abschnitt nicht in einem
              GEP-Bereich liegt, haben wir eine individuelle Fläche gebildet,
              auf die Sie sich mit dem Suchbegriff "Deilbach (Wuppertaler
              Abschnitt)" positionieren können.
            </p>
          }
        />
      }
    />
  );
};
export default Component;
