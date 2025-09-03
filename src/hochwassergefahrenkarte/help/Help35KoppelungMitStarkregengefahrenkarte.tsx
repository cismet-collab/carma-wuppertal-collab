import { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  const { setAppMenuActiveMenuSection } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="koppelung"
      sectionTitle="Koppelung mit Starkregengefahrenkarte"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            Sobald die Hochwassergefahrenkarte und die{" "} 
            <a
                target="_legal"
                href="https://digital-twin-wuppertal-live.github.io/rainhazardmap/#/hoehen?lat=51.271680556266894&lng=7.199681997299195&zoom=18"
              >
                Starkregengefahrenkarte
            </a>{" "} 
            auf einem Endgerät in zwei Fenstern desselben Browsers 
            gestartet werden, sind sie standardmäßig miteinander gekoppelt. 
            (Achtung: Dieses Verhalten steht nicht bei Browsern für mobile Geräte zur Verfügung.) 
            Änderungen des Kartenausschnittes (Position und Maßstab), die in einer 
            der beiden Anwendungen erfolgen, werden dadurch automatisch auch in der 
            anderen Anwendung durchgeführt. Das funktioniert auch bei{" "}
            <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("positionieren")}>
              Positionierungen über Suchbegriffe
            </a>.
            Dabei gibt es keine feste 
            Rollenverteilung, welche der Anwendungen die führende und welche die 
            folgende ist. Die synchronisierte Steuerung der Kartenausschnitte erfolgt 
            wechselweise immer aus derjenigen Anwendung, deren Fenster gerade den 
            Fokus hat.
          </p>
          <p>
            Die Koppelung der beiden Kartenanwendungen ist nicht auf zwei 
            Browserfenster beschränkt. Sie können beliebig viele weitere 
            Anwendungsfenster öffnen, die alle standardmäßig synchronisiert werden. 
            Damit können Sie z. B. auch unterschiedliche Hochwasser-Szenarien aus 
            der Hochwassergefahrenkarte gut miteinander vergleichen.
          </p>
          <p>
            Mit dem Wechselschalter "Synchronisation stoppen / Synchronisation starten" 
            (das oberste Werkzeug in der Werkzeugleiste links oben) können Sie 
            einzelne Anwendungsfenster aus der Gruppe der synchronisierten Kartenanwendungen 
            herausnehmen und wieder hinzufügen. Bei deaktivierter Synchronisation wird das Symbol 
            auf dem Werkzeug ausgegraut dargestellt. Wenn Sie den Mauszeiger auf dieses Werkzeug 
            bewegen, wird das angezeigte Symbol so verändert, dass Sie eine Vorschau darauf erhalten, 
            was das Anklicken des Werkzeugs bewirkt. Bei Geräten mit Touch-Display führt das erste 
            Antippen zu der oben beschriebenen Vorschau, erst ab dem zweiten Antippen wird der Modus 
            tatsächlich umgestellt. Nach dem ersten Klick außerhalb des Werkzeugs wird wieder das 
            Standard-Symbol für die aktivierte bzw. deaktivierte Synchronisation des Kartenfensters 
            angezeigt. 
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

