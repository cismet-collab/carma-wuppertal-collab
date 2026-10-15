// Platzhaltertexte fuer das Datenblatt der Wupperverband-Messstellen (#4129).
// Die endgueltigen Texte stimmt Benjamin mit dem Wupperverband ab. Bis dahin
// stammen die Beschreibungen der Messgroessen aus den Ebenenbeschreibungen der
// Styles (tiling-pipeline _in/fluggs*/).
const fluggsSensorenTexts = {
  messgroessen: {
    wasserstand:
      "Der Wasserstand gibt die Höhe des Wasserspiegels über einem festgelegten Pegelnullpunkt an. Erfasst wird mit unterschiedlicher Sensortechnik, unter anderem mit Radarpegeln; die Werte liegen je nach Messstelle in Zentimetern oder Metern vor. Einzelne Messstellen geben statt des Wasserstands den Abstand zur Messoberkante an.",
    durchfluss:
      "Der Durchfluss (Abfluss) ist das Wasservolumen, das den Messquerschnitt je Sekunde passiert. Er wird aus dem gemessenen Wasserstand über die Abflusskurve des jeweiligen Pegels abgeleitet und in Kubikmetern je Sekunde angegeben.",
    niederschlag:
      "Die Niederschlagshöhe wird mit Regenmessern erfasst, darunter Pluvio-Geräte an Talsperren, Klärwerken und im Stadtgebiet. Ein Millimeter Niederschlag entspricht einem Liter je Quadratmeter.",
    wassertemperatur:
      "Die Wassertemperatur wird an Gewässern und Talsperren in Grad Celsius gemessen. An den Talsperren wird in mehreren Tiefen gemessen, weshalb an einem Absperrbauwerk mehrere Messreihen hängen können.",
    speicherfuellstand:
      "Der Speicherfüllstand ist die Höhenlage des Wasserspiegels einer Talsperre oder eines Speicherbeckens, angegeben in Metern über Normalnull (mNN).",
    speicherinhalt:
      "Der Speicherinhalt ist das gespeicherte Wasservolumen einer Talsperre oder eines Speicherbeckens in Millionen Kubikmetern. Er wird aus dem Füllstand über die Speicherkennlinie der jeweiligen Sperre abgeleitet.",
    gewaesserguete:
      "An Gütemessstellen werden Kenngrößen der Wasserqualität erfasst: pH-Wert, Trübung, gelöster Sauerstoff und elektrische Leitfähigkeit.",
  } as Record<string, string>,
  allgemeineInformationen: {
    wupperverband:
      "[Platzhalter] Kurzbeschreibung des Wupperverbands und seines Messnetzes. Der Text wird mit dem Wupperverband abgestimmt.",
    datenquelle:
      "Die Messwerte stammen aus dem öffentlich zugänglichen FROST-Server (OGC SensorThings API) des Wupperverbands. Veröffentlicht werden alle Messstellen des Verbandsgebiets, also auch die Talsperren außerhalb der drei Städte, weil sie steuern, was durch Wuppertal, Remscheid und Solingen läuft.",
    kontext:
      "[Platzhalter] Einordnung der Messstellen in den Digitalen Zwilling Wuppertal. Der Text wird mit dem Wupperverband abgestimmt.",
  },
  hinweise: {
    zeitreihe:
      "[Platzhalter] Hier erscheinen künftig die Ganglinien der Messreihe. Die Messwerte werden dafür von cismet zwischengespeichert, damit nicht jeder Aufruf im Geoportal direkt an den Server des Wupperverbands geht.",
  },
};

export default fluggsSensorenTexts;
