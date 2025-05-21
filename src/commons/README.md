# Funktionen aus Carma nutzen

## Link auf Abschnitt der Kompaktanleitung

Die Verlinkung auf einen weiteren Abschnitt der Kompaktanleitung kann in 3 Schritten erklärt werden:

1. Importieren der Link Komponente
2. Verlinken des Textes mit der Link Komponente
3. `setAppMenuActiveMenuSection` Funktion als Property übergeben

Hier jetzt eine genauere Beschreibung des Ablaufs:

Um eine Verknüpfung zwischen einem Textabschnitt und einem Abschnitt der Kompaktanleitung herzustellen, muss man anstelle des normalen `<a></a>` Tags, den `<Link></Link>` Tag aus react-scroll verwenden.
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

Der Link zum Hilfe-Overlay wird über die <HelpOverlayLink></HelpOverlayLink> Komponente genutzt. Dies ist eine eigene Link Komponente die von uns erstellt wurde um die Verlinkung zwischen der Kompaktanleitung und dem Hilfe-Overlay zu ermöglichen.
Auch diese muss als erstes importiert werden. Dafür gibt es aber keinen Import Code der immer funktioniert, da diese Komponente im Collab Projekt definiert wurde und dadurch einen relativen Pfad bekommt. Ein Beispiel dazu aus den Hilfetexten des Geoportals:

```tsx
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
```

Dieser Link benötigt nun anstatt `setAppMenuActiveMenuSection` wie vorher die Funktion `showOverlayFromOutside` als Property. Dies sieht dann wie folgt aus:

```tsx
const Component = ({ showOverlayFromOutside }) => {};
```

Diese Funktion kann entweder ohne Parameter aufgerufen werden und würde dadurch einfach nur das Hilfe-Overlay öffnen ohne einen bestimmten Abschnitt zu aktivieren.

```tsx
<HelpOverlayLink onClick={() => showOverlayFromOutside()}>
  Hilfefolie
</HelpOverlayLink>
```

Um einen bestimmten Abschnitt zu aktivieren muss der entsprechende Key dazu übergeben werden. Die Keys können in der [elements.tsx](../geoportal/elements.tsx) Datei gefunden werden. Wenn man nun bspw. auf die Gazetteer Suche verlinkt, sieht das dann so aus:

```tsx
<HelpOverlayLink onClick={() => showOverlayFromOutside("GAZETTEER_SUCHE")}>
  Gazetteer Suche
</HelpOverlayLink>
```

Da das Hilfe-Overlay auf kleinen Bildschirmen aktuell nicht zur Verfügung steht, gibt es die Möglichkeit, die entsprechenden Verweise im Hilfetext auf kleinen Bildschirmen zu verstecken. Dafür wird nur die Klasse `hide-on-small-screens` benötigt. Diese wird wie folgt angewendet:

```tsx
<HelpOverlayLink className="hide-on-small-screens">
  Link zur Hilfefolie
</HelpOverlayLink>
```

Dieser Link kann aber auch als Verlinkung innerhalb des Hilfe-Overlays genutzt werden. Auch hierfür wird wieder der Key aus der elements.tsx Datei benötigt. Dieser wird jetzt aber einfach nur als target angegeben und dadurch automatisch vom Hilfe-Overlay erkannt und aktiviert.

```tsx
<HelpOverlayLink target="GAZETTEER_SUCHE">
  Link zur Gazetteer Suche
</HelpOverlayLink>
```

Dann gibt es auch noch eine Verlinkung aus dem Hilfe-Overlay zu verschiedenen Abschnitten in der Kompaktanleitung. Dafür werden wieder die `sectionKeys` der Menüabschnitte benötigt. Diese werden dann wie folgt angegeben:

```tsx
<HelpOverlayLink section="positionieren">
  Link zur Kompaktanleitung
</HelpOverlayLink>
```
