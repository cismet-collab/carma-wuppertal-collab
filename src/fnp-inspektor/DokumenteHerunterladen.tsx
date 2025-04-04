import Section from "react-cismap/topicmaps/menu/Section";
import Icon from "react-cismap/commons/Icon";

export const DokumenteHerunterladen = () => {
  return (
    <Section
      sectionKey="DokumenteHerunterladen"
      sectionTitle="Dokumente herunterladen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Das Herunterladen der Dokumente zum FNP, einem
            FNP-Änderungsverfahren oder zu einem B-Plan-Verfahren erfolgt aus
            dem Dokumentenviewer. Dazu finden Sie in der Werkzeugleiste zwei
            Möglichkeiten. Mit dem immer verfügbaren Werkzeug{" "}
            <Icon name="download" /> <i>"Dokument herunterladen (pdf)"</i>{" "}
            können Sie das aktuell im Anzeigebereich dargestellte Dokument als
            PDF-Datei herunterladen. Das zweite Werkzeug{" "}
            <Icon name="file-archive-o" /> <i>"alles herunterladen (zip)"</i>{" "}
            dient zum Download eines zip-Archivs mit allen in der
            Navigationsleiste angebotenen Dokumenten. Es lässt sich bei
            FNP-Änderungsverfahren und B-Plan-Verfahren nur aktivieren, wenn zu
            dem aktuell betrachteten Verfahren mehrere Dokumente verfügbar sind.
          </p>
          <p>
            Unten rechts im Anzeigebereich finden Sie stets den Dateinamen,
            unter dem das gerade dargestellte Dokument heruntergeladen wird.
            Ob eine heruntergeladene Datei nach dem Download sofort mit einem
            geeigneten Programm (PDF-Viewer oder Dateimanager) geöffnet wird,
            hängt von Ihren Betriebssystem- und/oder Browsereinstellungen ab.
          </p>
        </div>
      }
    />
  );
};
