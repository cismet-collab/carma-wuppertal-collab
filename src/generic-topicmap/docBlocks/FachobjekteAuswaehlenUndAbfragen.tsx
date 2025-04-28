import Icon from "react-cismap/commons/Icon";

export const FachobjekteAuswaehlenUndAbfragen = () => {
  return (
    <div>
      <p>
        Durch Anklicken eines Fachobjektes (Punktsymbol, Linie oder Fläche) 
        setzen Sie den Fokus auf dieses Objekt. Es wird dann blau hinterlegt 
        oder umrandet und die zugehörigen Informationen (bei Punktkatastern 
        i. d. R. Name, Straße und Hausnummer, Kurzinformation) werden unten 
        rechts in der Info-Box angezeigt. Ggf. werden Ihnen in der Info-Box 
        auch weiterführende Funktionen und Kommunikationslinks zu diesem 
        Fachobjekt angeboten. Mit der Lupenfunktion <Icon name="search" />{" "} 
        wird die Karte auf das aktuelle Fachobjekt zentriert und gleichzeitig 
        ein großer Betrachtungsmaßstab eingestellt. Falls es mehr Informationen 
        zu den Fachobjekten gibt, als in der Info-Box dargestellt werden können, 
        können Sie sich diese über die Datenblattfunktion <Icon name="info" />{" "} 
        anzeigen lassen. Die Kommunikationslinks können <Icon name="phone" />{" "}
        Telefon, <Icon name="envelope-square" /> E-Mail und{" "}
        <Icon name="external-link-square" /> Internet-Homepage umfassen.
      </p>
      <p>
        Mit der Schaltfläche <Icon name="chevron-circle-down" /> im dunkelgrau
        abgesetzten rechten Rand der Info-Box lässt sich diese so verkleinern,
        dass nur noch die thematische Zuordnung und der Name des Fachobjektes
        sowie die Link-Symbole angezeigt werden - nützlich für Endgeräte mit
        kleinem Display. Mit der Schaltfläche <Icon name="chevron-circle-up" />{" "}
        an derselben Stelle können Sie die Info-Box dann wieder vollständig
        einblenden.
      </p>
      <p>
        In manchen Kartenanwendungen bieten wir Ihnen zumindest zu
        einigen Fachobjekten Fotos oder Fotoserien an. Sie finden dann ein
        Vorschaubild direkt über der Info-Box. Klicken Sie auf das Vorschaubild,
        um einen Bildbetrachter (&quot;Leuchtkasten&quot;) mit dem Foto / der
        Fotoserie zu öffnen. Wenn wir hier auf Bildmaterial zugreifen, das der
        Urheber auch selbst im Internet publiziert, finden Sie im Fußbereich des
        Bildbetrachters einen Link auf dieses Angebot.
      </p>
    </div>
  );
};
