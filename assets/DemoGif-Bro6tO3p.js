import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as x,G as a,I as r}from"./TopicMapContextProvider-DiRhNVvh.js";import{I as f,G as b,M as k}from"./InKartePositionierenText-C32K51Yz.js";import{F as s,p as j,t as S}from"./index-CC161Io6.js";import{r as l}from"./index-CTjT7uj6.js";const c=l.createContext({setSecondaryWithKey:()=>{},showOverlay:()=>{}}),y=({setSecondaryWithKey:t=()=>{},showOverlay:i=()=>{},children:d})=>e.jsx(c.Provider,{value:{setSecondaryWithKey:t,showOverlay:i},children:d});y.__docgenInfo={description:"",methods:[],displayName:"OverlayTourProvider",props:{children:{required:!0,tsType:{name:"JSX.Element"},description:""},setSecondaryWithKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},showOverlay:{required:!1,tsType:{name:"signature",type:"function",raw:"(show: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"show"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const n=({children:t,target:i,section:d,onClick:o})=>{const{setSecondaryWithKey:u}=l.useContext(c),{setAppMenuActiveMenuSection:h,setAppMenuVisible:m}=l.useContext(x),g=p=>{p.stopPropagation(),i&&u(i),d&&(m(!0),h(d))};return e.jsx("span",{onClick:o||g,style:{cursor:"pointer",color:"#4493F8"},children:e.jsx("u",{children:t})})};n.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"union",raw:"JSX.Element | string",elements:[{name:"JSX.Element"},{name:"string"}]},description:""},target:{required:!1,tsType:{name:"string"},description:""},section:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const A=({showOverlayFromOutside:t})=>e.jsxs("span",{children:["Wählen Sie eine der folgenden farbigen Schaltflächen, um sich weitere Bedienungs- und Hintergrundinformationen zu dem entsprechenden Thema anzeigen zu lassen. Als alternative Unterstützung steht Ihnen auch eine"," ",e.jsx(n,{onClick:()=>{t()},children:"Hilfefolie"})," ","zur Verfügung, mit der Sie gezielt die Nutzung und Funktionsweise der einzelnen Bedienungselemente des Portals erforschen können."]});A.__docgenInfo={description:"",methods:[],displayName:"Help05Introduction"};const w=()=>e.jsx(a,{sectionKey:"datengrundlage",sectionTitle:"Datengrundlagen",sectionBsStyle:"warning",sectionContent:e.jsx("div",{children:"Could now she how in was sleep dropped in by back shall come into needed wild that picture they to have would by her succeeding, hair a with the I first should expected line of so got her solitary the and that coffee that omens, treble-range are quitting for high line text, parts else. A have the unprofitable both the leather at neighbours in on each written and assignment. When me the his degree read. She that the equation, of by hand. Select picture spare not got in social and parameters absolutely he and that if the alphabet carpeting of."})});w.__docgenInfo={description:"",methods:[],displayName:"Component"};const z=({showOverlayFromOutside:t})=>e.jsx(a,{sectionKey:"positionieren",sectionTitle:"In Karte positionieren",sectionBsStyle:"info",sectionContent:e.jsx("div",{children:e.jsx(f,{pretext:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["Um eine bestimmte Stelle des Stadtgebietes zu erkunden, geben Sie den Anfang eines Stadtteils (Stadtbezirk oder Quartier), einer Adresse, eines Straßennamens oder eines POI im Eingabefeld links unten ein (mindestens 2 Zeichen). In der inkrementellen Auswahlliste werden Ihnen passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, wird der Inhalt der Auswahlliste angepasst.) Durch das vorangestellte Symbol erkennen Sie, ob es sich dabei um einen ",e.jsx(r,{name:"circle"})," ","Stadtbezirk, ein ",e.jsx(r,{name:"pie-chart"})," Quartier, eine"," ",e.jsx(r,{name:"home"})," Adresse, eine ",e.jsx(r,{name:"road"})," Straße ohne zugeordnete Hausnummern, einen ",e.jsx(r,{name:"tag"})," POI, die ",e.jsx(r,{name:"tags"})," alternative Bezeichnung eines POI, eine ",e.jsx(r,{name:"child"})," Kindertageseinrichtung oder eine"," ",e.jsx(r,{name:"graduation-cap"})," Schule handelt."]})}),posttext:e.jsx("p",{children:e.jsx(n,{onClick:()=>{t("GAZETTEER_SUCHE")},children:"zur Hilfefolie"})})})})});z.__docgenInfo={description:"",methods:[],displayName:"Help30InKartePositionieren"};const v=""+new URL("MeinStandpunktMarkerMitKompass-CjzOs80a.jpg",import.meta.url).href,D=""+new URL("MeinStandpunktMarkerDoppel-63B_eDGU.jpg",import.meta.url).href,M=({showOverlayFromOutside:t})=>e.jsx(a,{sectionKey:"standort",sectionTitle:"Mein Standort",sectionBsStyle:"success",sectionContent:e.jsxs("div",{children:[e.jsxs("p",{children:['Das Werkzeug "Mein Standort"'," ",e.jsx(s,{icon:j})," funktioniert so wie hier beschrieben nur auf mobilen Endgeräten wie Smartphones und Tablet-PC's, die i. d. R. mit einem GNSS-Empfänger als Positionssensor ausgestattet sind (GNSS steht für Global Navigation Satellite Systems, z.B."," ",e.jsx("a",{target:"_info",href:"https://dvw.de/sites/default/files/landesverein-bayern/VeroeffentlichungenMitteilungen1996_4/DVW_1996_4_Schlie%C3%9Fer_GPS_Systemgrundlagen.pdf",children:"GPS"}),'). Mit dem ersten Antippen dieses Werkzeugs aktivieren Sie den "Follow me"-Modus, erkennbar an der orangefarbigen Darstellung des Werkzeug-Symbols. Ggf. werden Sie vom Browser bzw. dem Betriebssystem Ihres Endgerätes zur Freigabe der Lokalisierung aufgefordert. Die Karte wird auf Ihren aktuellen Standort zentriert, der mit einem blauen Kreissymbol'," ",e.jsx("img",{alt:"MeinStandpunktMarker",src:v})," ","markiert wird. Das kleine blaue Dreieck am Rand dieses Standortsymbols zeigt Ihre aktuelle Blickrichtung an (genauer: die Richtung, in die Ihr Endgerät zeigt). Das Standortsymbol ist umgeben von einem zweiten Kreis mit transparenter, blauer Füllung, dessen Radius die Unsicherheit der Positionsbestimmung angibt"," ",e.jsx("img",{alt:"MeinStandpunktMarkerDoppel",src:D}),'. Durch Antippen des inneren Kreises können Sie einen Texthinweis mit einer konkreten Angabe der aktuellen Positionsgenauigkeit einblenden. Dieser Hinweis kann durch das Antippen einer beliebigen Stelle außerhalb seines Textfeldes geschlossen werden. Wenn Sie sich mit Ihrem Endgerät bewegen (z. B. bei einer Wanderung), wird Ihre aktuelle Position im "Follow me"-Modus in schneller Folge neu bestimmt und stets in der Mitte der Karte angezeigt. Die Karte wird dazu automatisiert nachgeführt. Ein weiteres Antippen von "Mein Standort" schaltet die Anzeige Ihrer Position wieder ab (schwarzes Werkzeug-Symbol).'," "]}),e.jsxs("p",{children:['Wenn Sie die Karte im aktivierten "Follow me"-Modus manuell verschieben, wird der "Follow me"-Modus unterbrochen, erkennbar an einer blauen Darstellung des Werkzeug-Symbols. Ihr aktueller Standort wird weiterhin angezeigt und in schneller Folge aktualisiert. Der Kartenausschnitt wird jetzt aber nicht mehr automatisch an den aktuellen Standort angepasst. Bei fortgesetzter Bewegung in eine Richtung wird das Standortsymbol daher vom Zentrum zum Rand des Kartenfensters wandern und dann verschwinden - Ihr Standort liegt jetzt nicht mehr im aktuell eingestellten Kartenausschnitt! In diesem Fall führt ein erneutes Antippen von "Mein Standort" dazu, dass wieder in den "Follow me"-Modus zurückgewechselt wird. Wenn Ihr aktueller Standort dagegen noch in der Karte sichtbar ist, wird durch diese Aktion die Anzeige der Position abgeschaltet (schwarzes Werkzeug-Symbol). Sie können die Unterbrechung des "Follow me"-Modus bei einer Wanderung o. ä. nutzen, wenn Sie sich die vor Ihnen liegende Strecke in der Karte anschauen wollen. Verschieben Sie dazu den Kartenausschnitt manuell auf den Abschnitt Ihres Interesses. Ihr aktueller Standort wird dann zumeist nicht mehr dargestellt werden können. Der "Follow me"-Modus wird unterbrochen (blaues Werkzeug-Symbol). Wenn Sie sich ausreichend über den weiteren Streckenverlauf informiert haben, reaktivieren Sie durch erneutes Antippen von "Mein Standort" den "Follow me"-Modus und setzen die Karte damit wieder auf Ihren aktuellen Standort zurück.'," "]}),e.jsx("p",{children:"Noch ein Hinweis zur Genauigkeit: Die Richtigkeit der Positionsanzeige ist nicht garantiert. Ihre Genauigkeit hängt von verschiedenen Faktoren ab, u. a. von der Qualität des GNSS-Empfängers in Ihrem Endgerät, der Umgebungssituation (z. B. hohe Gebäude oder spiegelnde Oberflächen in der Nachbarschaft) sowie der Methode, mit der Ihr Endgerät und der von Ihnen verwendete Browser die Position bestimmen."}),e.jsx(n,{onClick:()=>{t("MEINE_POSITION")},children:"zur Hilfefolie"})]})});M.__docgenInfo={description:"",methods:[],displayName:"Help40MeinStandort"};const T=()=>e.jsx(a,{sectionKey:"haftungsausschluss",sectionTitle:"Haftungsausschluss",sectionBsStyle:"danger",sectionContent:e.jsx("div",{children:"Could now she how in was sleep dropped in by back shall come into needed wild that picture they to have would by her succeeding, hair a with the I first should expected line of so got her solitary the and that coffee that omens, treble-range are quitting for high line text, parts else. A have the unprofitable both the leather at neighbours in on each written and assignment. When me the his degree read. She that the equation, of by hand. Select picture spare not got in social and parameters absolutely he and that if the alphabet carpeting of."})});T.__docgenInfo={description:"",methods:[],displayName:"Component"};const I=()=>e.jsx(a,{sectionKey:"zwilling",sectionTitle:"Urbaner Digitaler Zwilling",sectionBsStyle:"warning",sectionContent:e.jsx(b,{})});I.__docgenInfo={description:"",methods:[],displayName:"Component"};const N=({version:t,setAppMenuActiveMenuSection:i})=>e.jsx(k,{title:"Geoportal",version:t,setAppMenuActiveMenuSection:i});N.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{version:{required:!0,tsType:{name:"string"},description:""},setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""}}};const B=""+new URL("m-step-1-3RDFdoKG.png",import.meta.url).href,E=""+new URL("m-step-2-sZE7Z7uc.png",import.meta.url).href,L=""+new URL("m-step-3-SQr7V3Fb.png",import.meta.url).href,K=""+new URL("m-step-4-2l8SVRHM.png",import.meta.url).href,O=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsxs("div",{children:["Wechselschalter zum An-/Abschalten des Messungsmodus (",e.jsx("b",{children:"2D"}),") | Klicken/Tippen zum Zeichnen von Messgeometrien | Linienzüge beenden mit Doppelklick, Polygone schließen durch erneutes Anklicken des Startpunktes | Ergebnisanzeige und Verwalten mehrerer Messgeometrien in der ",e.jsx(n,{target:"INFOBOX",children:"Info-Box"})," | Speicherung der Messgeometrien im Browser"]}),e.jsx("div",{children:e.jsxs("div",{style:{marginTop:"10px",marginLeft:"-10px",display:"flex",gap:"10px"},children:[e.jsx("img",{src:B,style:{height:"120px"}}),e.jsx("img",{src:E,style:{height:"120px"}}),e.jsx("img",{src:L,style:{height:"120px"}}),e.jsx("img",{src:K,style:{height:"120px"}})]})})]});O.__docgenInfo={description:"",methods:[],displayName:"MeasurementsText"};const W=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Nur sichtbar in Modi mit Anzeige von Objektinformationen (",e.jsx("b",{children:"2D"}),") |"," ",e.jsx(n,{target:"MESSUNGEN",children:"Modus Strecke/Fläche messen"}),": Navigation in zuvor angelegten Messgeometrien, Anzeige der Messergebnisse, Löschen von Messgeometrien |"," ",e.jsx(n,{target:"SACHDATENABFRAGE",children:"Modus Sachdaten abfragen"}),": Anzeige der wichtigsten Informationen/Links zum selektierten Objekt und/oder zu Objekten an ausgewählter Position mit Link zu vollständigen Sachinformationen; Informationen zu mehreren Objekten in überlappenden Info-Boxen, Info-Box in den Vordergrund holen durch Klicken/Tippen auf den Titelbalken"]})});W.__docgenInfo={description:"",methods:[],displayName:"InfoboxText"};const _=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Wechselschalter zum An-/Abschalten des Vollbildmodus (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),") | Ausblenden der Bedienungselemente des Browsers erzeugt maximalen Platz für das Geoportal | Vollbildmodus kombinierbar mit"," ",e.jsx(n,{target:"MESSUNGEN",children:"Modus Strecke/Fläche messen"})," oder"," ",e.jsx(n,{target:"SACHDATENABFRAGE",children:"Modus Sachdaten abfragen"})," | Beenden auch mit esc-Taste"]})});_.__docgenInfo={description:"",methods:[],displayName:"FullScreenModeText"};const R=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Klicken/Tippen für Rückkehr zum Ausgangspunkt (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),") | feste  Voreinstellung: Rathaus Wuppertal-Barmen | im 3D-Modus als Schrägansicht"]})});R.__docgenInfo={description:"",methods:[],displayName:"HomeText"};const F=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Wechselschalter zum An-/Abschalten des Multi-Sachdatenabfragemodus (",e.jsx("b",{children:"2D"}),") | blau unterstrichene ",e.jsx(n,{target:"LAYERBUTTONS",children:"Kartensteuerelemente"}),' kennzeichnen abfragbare Kartenebenen | in Karte klicken/tippen für Abfrage aller sichtbaren "blauen" Kartenebenen an dieser Stelle ("thematischer Durchstich") | Ergebnis- und zusätzliche Koordinatenanzeige in der ',e.jsx(n,{target:"INFOBOX",children:"Info-Box"})]})});F.__docgenInfo={description:"",methods:[],displayName:"FeatureInfoText"};const G=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Wechselschalter für Aktivierung/Deaktivierung von Standort- und Blickrichtungsanzeige (",e.jsx("b",{children:"2D"}),", ",e.jsx("b",{children:"mobil"}),') | Durchmesser des Standortsymbols visualisiert Unsicherheit der Positionsbestimmung | "Follow me"-Modus (Symbol auf Schaltfläche orange): Standortsymbol zentriert, automatische Kartennachführung | Verschiebung der Karte bewirkt Umstellung auf bewegliche Positionsanzeige (blaues Symbol)',e.jsx("br",{}),e.jsx(n,{section:"standort",children:"weitere Informationen"})," "]})});G.__docgenInfo={description:"",methods:[],displayName:"LocatorText"};const P=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["2-stufiges Eingabeelement für Positionierung über Adresse oder andere Ortsbezeichnung (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),") | Text eingeben (min. 2 Zeichen) für unscharfe Suche im Verzeichnis der Ortsnamen | Treffer werden nach Grad der Übereinstimmung mit Suchtext klassifiziert und gruppiert | Eintrag in Trefferliste anklicken/antippen zur Zentrierung der Karte auf diesen Ort | Ortsmarkierung in Karte durch Placemark-Symbol oder (bei Flächen) Spotlight-Effekt",e.jsx("br",{}),e.jsx(n,{section:"positionieren",children:"weitere Informationen"})," "]})});P.__docgenInfo={description:"",methods:[],displayName:"GazetteerText"};const H=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Klicken/Tippen zum Vergrößern („Zoom in“) bzw. Verkleinern („Zoom out“) des Kartenmaßstabs in festen Zoomstufen (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),') | "+" für Zoom in, "-" für Zoom out | je größer die Zoomstufe, desto größer der Maßstab']})});H.__docgenInfo={description:"",methods:[],displayName:"ZoomText"};const C=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:[e.jsx("b",{children:"3D"}),"-Darstellung nach Norden ausrichten und zurück in die Senkrechtperspektive kippen | kartenartige Darstellung im 3D-Modus | automatische Ausführung beim"," ",e.jsx(n,{target:"2D_3D_TOGGLE",children:"Wechsel von 3D auf 2D"})]})});C.__docgenInfo={description:"",methods:[],displayName:"NorthOrientationText"};const V=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Wechselschalter zum Umschalten zwischen ",e.jsx("b",{children:"2D"}),"- und ",e.jsx("b",{children:"3D"}),"-Ansicht | aktuelle Einstellung Karte/Luftbild wird beim Umschalten beibehalten | bei Wechsel von 3D nach 2D wird Darstellung zuerst nach Norden ausgerichtet und Senkrechtperspektive eingestellt (kartenartige Darstellung)"]})});V.__docgenInfo={description:"",methods:[],displayName:"Toggle2d3dText"};const U=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsxs("div",{children:["Festes Hintergrund-Steuerelement wird immer angezeigt, dazu variabel für jede weitere geladene Kartenebene ein Ebenen-Steuerelement (",e.jsx("b",{children:"2D"}),") | horizontales Verschieben der Ebenen-Steuerelemente zur Änderung der Darstellungsreihenfolge | Klicken/Tippen auf das Steuerelement zum Öffnen einer Zeile für die Steuerung von Transparenz und Sichtbarkeit | Aufklappen der Zeile zur Anzeige weiterer Informationen:"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Hintergrund-Steuerelement"}),": Auswahl/Voreinstellung der ",e.jsx(n,{target:"HINTERGRUND",children:"Hintergrundkarte"}),' | Informationen zur ausgewählten Hintergrundkarte | "Stapel" mit den Bedienungszeilen aller Kartenebenen (zentrale Steuerung für kleine Bildschirme)']}),e.jsxs("li",{children:[e.jsx("b",{children:"Ebenen-Steuerelemente"}),": Kurzbeschreibung (abstract) | Legende | Verknüpfungen mit Metadaten, Open Data etc."]})]});U.__docgenInfo={description:"",methods:[],displayName:"LayerButtonsText"};const X=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Bedienungsanleitung und Hintergrundinformationen in kompaktem Akkordeon-Design (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),") | diverse Verknüpfungen mit ",e.jsx(n,{target:"HILFE_OVERLAY",children:"Hilfefolie"})]})});X.__docgenInfo={description:"",methods:[],displayName:"ApplicationMenuText"};const Z=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Deckfolie mit positionsgetreuen Benennungen für alle Schaltflächen und Eingabefelder (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),') | auf Benennungen klicken/tippen für Text- und Bildinformationen zur Funktion und Bedienung ("Sekundärinformationen") | z. T. wechselseitige Verknüpfungen zwischen den Sekundärinformationen sowie mit der Bedienungsanleitung im ',e.jsx(n,{target:"MENU",children:"Anwendungsmenü"})]})});Z.__docgenInfo={description:"",methods:[],displayName:"HelpOverlayText"};const q=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Wechselschalter für die Auswahl der Hintergrundkarte (",e.jsx("b",{children:"2D"}),") bzw. des 3D-Modells (",e.jsx("b",{children:"3D"}),") | Voreinstellung der 2D-Karte im ",e.jsx(n,{target:"LAYERBUTTONS",children:"Hintergrund-Steuerelement"}),' | 3D: "Karte" basiert auf LoD2-Gebäudemodell der Landesvermessung NRW, "Luftbild" liefert 3D-Mesh (berechnet aus Befliegung in 03/24)']})});q.__docgenInfo={description:"",methods:[],displayName:"BackgroundSelectionText"};const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABXklEQVQ4jZ3Tz4uNcRTH8dfj1qipW2oWbs2Goiws2YpYX46FEsXOkgVqyo9M+RG2pkYpO8uTsphcf4GyImXJ6maFnprNDBb3oet7H9c1p87m/Hh/zzl9vsxmnRnrptpePMMQF7F9K5BFrGIDP8b8I86bcdIFPMB6ASn9PU6iaoN0cR1f/wEp/TWOjoNO4fN/Qkp/hZ0wj2uotwh6g8Plqj08xuaMkE84i21tdxMRi9iPtSmQb1jq9XrdiOiO91cNZB/u4Tie42pm7sbDBq6ZeLXT6Sz3+/0DuN9scxePMnO9iohzeOJP7Wxgpa7r24PBoI9juBUR80bSOVIs9QGHqoiocKJ5aU9R9AXLeIGbOFPkvzeD3MjM4W/RRcQcLjRNC5MXnbA1XMnMd78CEwqOiB1YwiXMtUDe4nJmviwTrd+hge7CHZxuQkMjPT7NzM22nr/CxqAHjQ6+kpn1tNqfL7iTc0cRZL4AAAAASUVORK5CYII=",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABYUlEQVQ4jZ3RvUvVYRjG8c9JDTlhL6BTFJSD/4BnbrsbDtHbUktzRGSkklQgCFJRTQ0tTSFSTWd+pigKHIOGaKkcRNCGmtQj2HDOiR9PP/XoBdd0X8+X+74eulNPl7kddQj3sIqXOLEfyEHcxDK2Cl7DMwx2A+nBNXzPILn/YBoDZZAKLuDLLpDcK7iN/g5oGAt7hORexNnOVufwdZ+gXxjT6vmf+nCjvXo3kHU8wbGy3qSUhmq12hAeaf3cdqDXOJ1SOpoXL6U0gIm2lzBZr9c/N5vNWVwt5D9hPKW0goe4jDlMR8SPSkrpFD7geLboe9yJiF7cxXyj0XhXrVYftOvoK2Q3cLGz2Qge43zJ9a8wg0u4jyPZfAHjEfGxknV2Bk8xWgLN9RNTeBMRW7Q7y4AHcEWrk5MlkN+YxfOIWCsO/oMVoP24pXXaYWziBWYiYrXszbawAnQQ1/E2Ir7tlP0La3GYsd4MEgoAAAAASUVORK5CYII=",J=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsx("div",{children:"Die Menüleiste umfasst mehrere Aktionen und Dialoge zur Steuerung und Weiterverarbeitung der Karteninhalte:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{icon:S})}),e.jsxs("td",{children:[e.jsx("b",{children:"Aktualisieren"})," - Erneutes Laden aller nicht ausgeblendeten"," ",e.jsx(n,{target:"LAYERBUTTONS",children:"Kartenebenen"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("img",{src:Y,style:{height:"14px"}}),e.jsx("img",{src:Q,style:{height:"14px"}})]}),e.jsxs("td",{children:[e.jsx("b",{children:"Hintergrundkarte abschwächen / zurücksetzen"})," - Wechselschalter zum Abschwächen (starke Transparenz) und Zurücksetzen (keine Transparenz) der ",e.jsx(n,{target:"HINTERGRUND",children:"Hintergrundkarte"})," ","| zum Auffinden von Fachobjekten bei dünn besetzten Kartenebenen"]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(s,{icon:"eye"})," ",e.jsx(s,{icon:"eye-slash"})]}),e.jsxs("td",{children:[e.jsx("b",{children:"Kartensteuerelemente aus-/einblenden"})," - Wechselschalter zum Aus- und Einblenden der"," ",e.jsx(n,{target:"LAYERBUTTONS",children:"Kartensteuerelemente"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{icon:"print"})}),e.jsxs("td",{children:[e.jsx("b",{children:"Drucken"})," - Einfacher Ausdruck in PDF-Datei mit Auswahl von Format, Maßstab und Auflösung | verschiebbarer Druckvorschaurahmen | kein Ausdruck von Legenden, Metadaten etc."]})]})]})]});J.__docgenInfo={description:"",methods:[],displayName:"MenuBarText"};const $=""+new URL("m-vide-demo-DjPGFUu8.mp4",import.meta.url).href,ee=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsx("li",{children:"Die Schaltfläche aktiviert einen Modus zum Messen von Strecken und/oder Flächen, nicht nur eine einmalige Messung."}),e.jsx("li",{children:"Linienzüge schließt man durch erneutes Anklicken des letzten Punktes („Doppelklick auf Endpunkt“), Flächen durch erneutes Anklicken des Startpunktes."}),e.jsx("li",{children:"Man kann mehrere Messgeometrien anlegen, deren Verwaltung über die Info-Box erfolgt."}),e.jsx("li",{children:"Die Messgeometrien werden im Browser-Cache gespeichert und stehen dadurch nach einem erneuten Starten des Geoportals weiterhin zur Verfügung."}),e.jsx("div",{children:e.jsx("div",{style:{marginTop:"10px",marginLeft:"-10px",display:"flex",gap:"10px"},children:e.jsx("video",{width:"100%",height:"383px",controls:!0,muted:!0,children:e.jsx("source",{src:$,type:"video/mp4"})})})})]});ee.__docgenInfo={description:"",methods:[],displayName:"DemoVideo"};const ne=""+new URL("m-demo-gif-Du85j88z.gif",import.meta.url).href,te=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsx("li",{children:"Die Schaltfläche aktiviert einen Modus zum Messen von Strecken und/oder Flächen, nicht nur eine einmalige Messung."}),e.jsx("li",{children:"Linienzüge schließt man durch erneutes Anklicken des letzten Punktes („Doppelklick auf Endpunkt“), Flächen durch erneutes Anklicken des Startpunktes."}),e.jsx("li",{children:"Man kann mehrere Messgeometrien anlegen, deren Verwaltung über die Info-Box erfolgt."}),e.jsx("li",{children:"Die Messgeometrien werden im Browser-Cache gespeichert und stehen dadurch nach einem erneuten Starten des Geoportals weiterhin zur Verfügung."}),e.jsx("div",{children:e.jsx("div",{style:{marginTop:"10px",marginLeft:"-10px",display:"flex",gap:"10px"},children:e.jsx("img",{src:ne,style:{height:"360px"}})})})]});te.__docgenInfo={description:"",methods:[],displayName:"DemoGif"};export{X as A,q as B,w as C,ee as D,N as F,P as G,A as H,W as I,U as L,J as M,C as N,y as O,V as T,H as Z,z as a,M as b,T as c,I as d,Z as e,_ as f,G as g,F as h,R as i,O as j,te as k};
