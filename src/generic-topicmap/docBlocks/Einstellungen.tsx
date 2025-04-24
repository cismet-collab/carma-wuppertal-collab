export const Einstellungen = () => {
  return (
    <div>
      <p>
        Unter &quot;<strong>Einstellungen</strong>&quot; können Sie im
        Anwendungsmenü festlegen, welche Hintergrundkarte angezeigt werden 
        soll. In zukünftigen Ausbaustufen der GenericTopicMap werden Sie 
        hier auch Einstellungen zur Anzeige der Fachobjekte des Kartenthemas 
        vornehmen können.
      </p>
      <p>
        Unter &quot;
        <strong>
          <em>Hintergrundkarte</em>
        </strong>
        &quot; können Sie auswählen, ob Sie die standardmäßig aktivierte farbige
        Hintergrundkarte verwenden möchten (&quot;Stadtplan (Tag)&quot;) oder
        lieber eine invertierte Graustufenkarte (&quot;Stadtplan (Nacht)&quot;),
        zu der uns die von vielen PKW-Navis bei Dunkelheit eingesetzte
        Darstellungsweise inspiriert hat. <strong>Hinweis</strong>: Der
        Stadtplan (Nacht) wird Ihnen nur angeboten, wenn Ihr Browser
        CSS3-Filtereffekte unterstützt, also z. B. nicht beim Microsoft Internet
        Explorer. Die Nacht-Karte erzeugt einen deutlicheren Kontrast mit den
        farbigen Symbolen für die Fachobjekte des Kartenthemas, die
        unterschiedlichen Flächennutzungen in der Hintergrundkarte lassen sich
        aber nicht mehr so gut unterscheiden wie in der Tag-Karte. Als dritte
        Möglichkeit steht eine Luftbildkarte zur Verfügung, die die
        Anschaulichkeit des Luftbildes mit der Eindeutigkeit des Stadtplans
        (Kartenschrift, durchscheinende Linien) verbindet.
      </p>
      <p>
        In der{" "}
        <strong>
          <em>Vorschau</em>
        </strong>{" "}
        sehen Sie direkt die Wirkung ihrer Einstellungen.
      </p>
    </div>
  );
};
