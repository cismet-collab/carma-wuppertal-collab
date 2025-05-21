# Funktionen aus Carma nutzen

## Link auf Abschnitt der Kompaktanleitung

Die Verlinkung auf einen weiteren Abschnitt der Kompaktanleitung kann in 3 Schritten erklärt werden:

1. Importieren der Link Komponente
2. Verlinken des Textes mit der Link Komponente
3. `setAppMenuActiveMenuSection` Funktion als Property übergeben

Hier jetzt eine genauere Beschreibund des Ablaufs:

Um eine Verknüpfung zwischen einem Textabschnitt und einem Abschnitt der Kompaktanleitung herzustellen, muss man anstelle des normalen `<a></a>` Tags das `<Link></Link>` Tag aus react-scroll verwenden.
Dafür muss die Link Komponente wie folgt am Anfang der Datei importiert werden:

```tsx
import { Link } from "react-scroll";
```

Damit dieser Link nun auch aussieht wie ein normaler Link, muss das Aussehen wie folgt verändert werden:

```tsx
<Link className="renderAsLink">Link zum Abschnitt</Link>
```

Um die Funktionalität nun hinzuzufügen, muss der Link wie folgt erweitert werden:

```tsx
<Link
  className="renderAsLink"
  containerId="myMenu"
  smooth={true}
  delay={100}
  onClick={() => setAppMenuActiveMenuSection("key_des_abschnitts")}
>
  Link zum Abschnitt
</Link>
```

Die Funktion `setAppMenuActiveMenuSection` braucht als Parameter den Key des Abschnitts, auf den man verlinkt. Dieser wird in den entsprechenden Abschnitten unter `sectionKey` definiert.
Ein Beispiel für die Verlinkung auf den Abschnitt "Karteninhalte hinzufügen" wäre:

```tsx
<Link
  className="renderAsLink"
  containerId="myMenu"
  smooth={true}
  delay={100}
  onClick={() => setAppMenuActiveMenuSection("karteninhalte")}
>
  Karteninhalte hinzufügen
</Link>
```

Die Funktion `setAppMenuActiveMenuSection` kommt in der Regel aus dem Kontext der Karte, welche in Carma definiert ist. Dadurch müssen wir die Funktion hier als Property definieren.

```tsx
const Component = ({ setAppMenuActiveMenuSection }) => {};
```

Je nachdem, ob der Abschnitt direkt exportiert wird (bspw. Bäderkarte) oder alle Modal-Abschnitte gemeinsam exportiert werden (bspw. Geoportal), muss die Funktion entweder in Carma oder direkt hier übergeben werden.
Am Beispiel der Bäderkarte muss hier nichts mehr verändert werden, und die Komponente kann einfach so exportiert werden.
Am Beispiel des Geoportals kann man die Komponenten dann in einer Funktion definieren und darin direkt auf die Funktion zugreifen:

```tsx
const MenuSections = () => {
  const { setAppMenuActiveMenuSection } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);

  return [
    <Help10DigitalerZwilling
      setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
      key="zwilling"
    />,
  ];
};
```

## Link zum Hilfe Overlay

Der Link zum Hilfe-Overlay funktioniert im Grunde wie der Link zu einem Abschnitt der Kompaktanleitung. Es wird auch hier wieder die <Link></Link> Komponente aus react-scroll verwendet. Der einzige Unterschied ist diesmal, dass wir anstatt der `setAppMenuActiveMenuSection`-Funktion die `showOverlayFromOutside`-Funktion aufrufen. Diese muss aber aus Carma kommen und muss hier nur entsprechend als Property angegeben werden.

```tsx
const Component = ({ showOverlayFromOutside }) => {};
```

Da das Hilfe-Overlay auf kleinen Bildschirmen aktuell nicht zur Verfügung steht, gibt es die Möglichkeit, die entsprechenden Verweise im Hilfetext auf kleinen Bildschirmen zu verstecken. Dafür wird nur die Klasse `hide-on-small-screens` benötigt. Diese wird wie folgt angewendet:

```tsx
<Link className="hide-on-small-screens">Link zur Hilfefolie</Link>
```
