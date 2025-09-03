import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = ({
  uiState,
  uiStateActions,
}: {
  uiState?: unknown;
  uiStateActions?: unknown;
}) => {
  return (
    <GenericModalMenuSection
      uiState={uiState}
      uiStateActions={uiStateActions}
      sectionKey="szenarien"
      sectionTitle="Simulierte Szenarien"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Zur Ermittlung der überfluteten Flächen werden vom Land NRW 
            Simulationsmodelle (z. B. Niederschlags-Abflussmodelle oder 
            hydraulische Modelle) eingesetzt. Dabei werden drei unterschiedlich 
            wahrscheinliche Hochwasser-Szenarien unterschieden. 
            Die Wahrscheinlichkeit wird dabei als "Jährlichkeit" ausgedrückt, 
            also über den zeitlichen Abstand, in dem ein entsprechendes 
            Hochwasserereignis statistisch gesehen einmal erreicht oder 
            überschritten wird:
          </p>
          <ul>
            <li>
              <strong>häufiges Hochwasser (HQhäufig)</strong>: Hochwasser tritt statistisch alle 
              10 bis 20 Jahre auf (hohe Wahrscheinlichkeit)
            </li>
            <li>
              <strong>100-jährliches Hochwasser (HQ100)</strong>: Hochwasser tritt statistisch alle 
              100 Jahre auf (mittlere Wahrscheinlichkeit)
            </li>
            <li>
              <strong>extremes Hochwasser (HQextrem)</strong>: Hochwasser tritt statistisch deutlich 
              seltener als einmal in 100 Jahren auf (geringe Wahrscheinlichkeit)
            </li>
          </ul>
          <p>
            Das Kürzel "HQ" steht dabei für die Wasserabflussmenge bei Hochwasser 
            ("H" für Hochwasser, "Q" ist die hydraulische Abflusskennzahl). Für das 
            extreme Hochwasser kann keine statistisch gesicherte Jährlichkeit 
            angegeben werden, weil die verfügbaren Zeitreihen für Flusspegel und 
            Niederschlagsmessungen keine dafür ausreichenden Zeiträume überspannen. 
            Gleichwohl stößt man in Fachpublikationen auch auf die Bezeichnungen 
            HQ200, HQ500 und HQ1000 für das extreme Hochwasser.
          </p>
          <p>
            Als Basis für die statistische Bemessung der simulierten 
            Hochwasserereignisse dienen für die Wupper insbesondere die Messreihen 
            der beiden Flusspegel "Buchenhofen" und "Kluserbrücke". Bei den 
            betrachteten Hochwasser-Szenarien stellen sich an den Pegeln die 
            folgenden maximalen Wasserstände ein:
          </p>
          <ul>
            <li>
              <strong>Buchenhofen</strong>: HQhäufig =&gt; 3,71 m | HQ100 =&gt; 4,06 m | 
              HQextrem =&gt; 5,21 m
            </li>
            <li>
              <strong>Kluserbrücke</strong>: HQhäufig =&gt; 2,24 m | HQ100 =&gt; 2,65 m | 
              HQextrem =&gt; 3,56 m
            </li>
          </ul>
          <p>
            An den weiteren vom Land NRW betrachteten Fließgewässern existieren im 
            Wuppertaler Stadtgebiet keine Pegel. Hier werden als statistische Grundlage 
            langfristige Niederschlagsmessungen verwendet, z. B. die Aufzeichnungen des 
            Regenschreibers der Niederschlagsstation Wuppertal-Buchenhofen, der seit 
            1960 kontinuierlich betrieben wird.
          </p>
        </div>
      }
    />
  );
};
export default Component;
