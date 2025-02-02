import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{D as x,G as r,I as i}from"./TopicMapContextProvider-DiRhNVvh.js";import{G as f,I as b,M as j}from"./InKartePositionierenText-ChbST2pP.js";import{F as s,q as k,u as S,v as A}from"./index-DRglUUZi.js";const h=d.createContext({setSecondaryWithKey:()=>{},showOverlay:()=>{}}),w=({setSecondaryWithKey:t=()=>{},showOverlay:a=()=>{},children:l})=>e.jsx(h.Provider,{value:{setSecondaryWithKey:t,showOverlay:a},children:l});w.__docgenInfo={description:"",methods:[],displayName:"OverlayTourProvider",props:{children:{required:!0,tsType:{name:"JSX.Element"},description:""},setSecondaryWithKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},showOverlay:{required:!1,tsType:{name:"signature",type:"function",raw:"(show: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"show"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const n=({children:t,target:a,section:l,onClick:o})=>{const{setSecondaryWithKey:c}=d.useContext(h),{setAppMenuActiveMenuSection:u,setAppMenuVisible:g}=d.useContext(x),m=p=>{p.stopPropagation(),a&&c(a),l&&(g(!0),u(l))};return e.jsx("span",{onClick:o||m,style:{cursor:"pointer",color:"#4493F8"},children:e.jsx("u",{children:t})})};n.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"union",raw:"JSX.Element | string",elements:[{name:"JSX.Element"},{name:"string"}]},description:""},target:{required:!1,tsType:{name:"string"},description:""},section:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const y=({showOverlayFromOutside:t})=>e.jsxs("span",{children:["Wählen Sie eine der folgenden farbigen Schaltflächen, um sich weitere Bedienungs- und Hintergrundinformationen zu dem entsprechenden Thema anzeigen zu lassen. Als alternative Unterstützung steht Ihnen auch eine"," ",e.jsx(n,{onClick:()=>{t()},children:"Hilfefolie"})," ","zur Verfügung, mit der Sie gezielt die Nutzung und Funktionsweise der einzelnen Bedienungselemente des Portals erforschen können."]});y.__docgenInfo={description:"",methods:[],displayName:"Help05Introduction"};const z=()=>e.jsx(r,{sectionKey:"zwilling",sectionTitle:"Urbaner Digitaler Zwilling",sectionBsStyle:"warning",sectionContent:e.jsx(f,{})});z.__docgenInfo={description:"",methods:[],displayName:"Component"};const v=({showOverlayFromOutside:t})=>e.jsx(r,{sectionKey:"hintergrundkarte",sectionTitle:"Hintergrundkarte auswählen",sectionBsStyle:"info",sectionContent:e.jsxs("div",{children:[e.jsx("p",{children:"Mit dem Wechselschalter Karte / Luftbild rechts oben können Sie jederzeit zwischen einer klassischen Karte und einer Luftbildkarte als Hintergrundkarte wechseln. Durch Anklicken des Hintergrund-Steuerelements rechts neben dem Wechselschalter öffnen Sie einen Dialog mit einer größeren Auswahl an Karten bzw. Luftbildkarten. Im aufgeklappten Zustand dieses Dialogs werden zusätzlich Informationen zur Eignung und zum Inhalt der jeweils selektierten Karte angezeigt. Die von Ihnen hier ausgewählte Hintergrundkarte wird sofort geladen und zusätzlich als Belegung für den Wechselschalter gespeichert. Wenn Sie den Mauszeiger über die beiden Schaltflächen des Wechselschalters bewegen, werden die aktuell eingestellten Hintergrundkarten als Tooltip angezeigt."}),e.jsx("p",{children:"Das identische Hintergrund-Steuerelement finden Sie auch als erstes (linkes) Kartensteuerelement oben im Kartenfenster. Es dient nämlich auch als zentrales Steuerelement für alle geladenen Kartenebenen, was vor allem für kleine Bildschirme vorteilhaft ist."}),e.jsx("p",{children:'Im 3D-Modus bieten wir Ihnen über den Wechselschalter Karte / Luftbild zwei fest eingestellte 3D-Modelle an. Mit der Schaltfläche "Karte" laden Sie den Wuppertaler Ausschnitt des für ganz NRW vorliegenden 3D-Gebäudemodells der Landesvermessung NRW (Geobasis NRW) in der inhaltlichen Ausbaustufe "Level of Detail 2 (LoD2)". Das sind einfache Klötzchen mit standardisierten Dachformen. Mit "Luftbild" laden Sie ein 3D-Mesh, das weitestgehend automatisiert aus den Bilddaten der im Auftrag der Stadt Wuppertal im März 2024 durchgeführten Befliegung abgeleitet wurde. Für ein 3D-Mesh wird aus den Bilddaten ein Digitales Oberflächenmodell in Form eines Dreiecksnetzes berechnet, auf das dann die Bildinhalte projiziert werden. Solche Modelle enthalten beim gegenwärtigen Stadt der Technik regelmäßig Lücken und falsche Darstellungen, vor allem dort, wo mehrere Ebenen vertikal übereinander liegen (z. B. bei den Schwebebahnhöfen).'}),e.jsx(n,{onClick:()=>{t("HINTERGRUND")},children:"zur Hilfefolie"})]})});v.__docgenInfo={description:"",methods:[],displayName:"Component"};const D=({showOverlayFromOutside:t})=>e.jsx(r,{sectionKey:"positionieren",sectionTitle:"In Karte positionieren",sectionBsStyle:"info",sectionContent:e.jsx("div",{children:e.jsx(b,{pretext:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["Um eine bestimmte Stelle des Stadtgebietes zu erkunden, geben Sie den Anfang eines Stadtteils (Stadtbezirk oder Quartier), einer Adresse, eines Straßennamens oder eines POI im Eingabefeld links unten ein (mindestens 2 Zeichen). In der inkrementellen Auswahlliste werden Ihnen passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, wird der Inhalt der Auswahlliste angepasst.) Durch das vorangestellte Symbol erkennen Sie, ob es sich dabei um einen ",e.jsx(i,{name:"circle"})," ","Stadtbezirk, ein ",e.jsx(i,{name:"pie-chart"})," Quartier, eine"," ",e.jsx(i,{name:"home"})," Adresse, eine ",e.jsx(i,{name:"road"})," Straße ohne zugeordnete Hausnummern, einen ",e.jsx(i,{name:"tag"})," POI, die ",e.jsx(i,{name:"tags"})," alternative Bezeichnung eines POI, eine ",e.jsx(i,{name:"child"})," Kindertageseinrichtung oder eine"," ",e.jsx(i,{name:"graduation-cap"})," Schule handelt."]})}),posttext:e.jsx("p",{children:e.jsx(n,{onClick:()=>{t("GAZETTEER_SUCHE")},children:"zur Hilfefolie"})})})})});D.__docgenInfo={description:"",methods:[],displayName:"Help30InKartePositionieren"};const I=()=>e.jsx(r,{sectionKey:"karteninhalte",sectionTitle:"Karteninhalte hinzufügen",sectionBsStyle:"info",sectionContent:e.jsx("div",{children:"Could now she how in was sleep dropped in by back shall come into needed wild that picture they to have would by her succeeding, hair a with the I first should expected line of so got her solitary the and that coffee that omens, treble-range are quitting for high line text, parts else. A have the unprofitable both the leather at neighbours in on each written and assignment. When me the his degree read. She that the equation, of by hand. Select picture spare not got in social and parameters absolutely he and that if the alphabet carpeting of."})});I.__docgenInfo={description:"",methods:[],displayName:"Component"};const M=()=>e.jsx(r,{sectionKey:"untersuchen",sectionTitle:"Karteninhalte untersuchen",sectionBsStyle:"info",sectionContent:e.jsx("div",{children:"Could now she how in was sleep dropped in by back shall come into needed wild that picture they to have would by her succeeding, hair a with the I first should expected line of so got her solitary the and that coffee that omens, treble-range are quitting for high line text, parts else. A have the unprofitable both the leather at neighbours in on each written and assignment. When me the his degree read. She that the equation, of by hand. Select picture spare not got in social and parameters absolutely he and that if the alphabet carpeting of."})});M.__docgenInfo={description:"",methods:[],displayName:"Component"};const T=()=>e.jsx(r,{sectionKey:"drucken",sectionTitle:"Karten drucken und teilen",sectionBsStyle:"info",sectionContent:e.jsx("div",{children:"Could now she how in was sleep dropped in by back shall come into needed wild that picture they to have would by her succeeding, hair a with the I first should expected line of so got her solitary the and that coffee that omens, treble-range are quitting for high line text, parts else. A have the unprofitable both the leather at neighbours in on each written and assignment. When me the his degree read. She that the equation, of by hand. Select picture spare not got in social and parameters absolutely he and that if the alphabet carpeting of."})});T.__docgenInfo={description:"",methods:[],displayName:"Component"};const N=""+new URL("MeinStandpunktMarkerMitKompass-CjzOs80a.jpg",import.meta.url).href,K=""+new URL("MeinStandpunktMarkerDoppel-63B_eDGU.jpg",import.meta.url).href,B=({showOverlayFromOutside:t})=>e.jsx(r,{sectionKey:"standort",sectionTitle:"Nutzung auf mobilen Geräten",sectionBsStyle:"success",sectionContent:e.jsxs("div",{children:[e.jsxs("p",{children:['Das Werkzeug "Mein Standort"'," ",e.jsx(s,{icon:k})," funktioniert so wie hier beschrieben nur auf mobilen Endgeräten wie Smartphones und Tablet-PC's, die i. d. R. mit einem GNSS-Empfänger als Positionssensor ausgestattet sind (GNSS steht für Global Navigation Satellite Systems, z.B."," ",e.jsx("a",{target:"_info",href:"https://dvw.de/sites/default/files/landesverein-bayern/VeroeffentlichungenMitteilungen1996_4/DVW_1996_4_Schlie%C3%9Fer_GPS_Systemgrundlagen.pdf",children:"GPS"}),'). Mit dem ersten Antippen dieses Werkzeugs aktivieren Sie den "Follow me"-Modus, erkennbar an der orangefarbigen Darstellung des Werkzeug-Symbols. Ggf. werden Sie vom Browser bzw. dem Betriebssystem Ihres Endgerätes zur Freigabe der Lokalisierung aufgefordert. Die Karte wird auf Ihren aktuellen Standort zentriert, der mit einem blauen Kreissymbol'," ",e.jsx("img",{alt:"MeinStandpunktMarker",src:N})," ","markiert wird. Das kleine blaue Dreieck am Rand dieses Standortsymbols zeigt Ihre aktuelle Blickrichtung an (genauer: die Richtung, in die Ihr Endgerät zeigt). Das Standortsymbol ist umgeben von einem zweiten Kreis mit transparenter, blauer Füllung, dessen Radius die Unsicherheit der Positionsbestimmung angibt"," ",e.jsx("img",{alt:"MeinStandpunktMarkerDoppel",src:K}),'. Durch Antippen des inneren Kreises können Sie einen Texthinweis mit einer konkreten Angabe der aktuellen Positionsgenauigkeit einblenden. Dieser Hinweis kann durch das Antippen einer beliebigen Stelle außerhalb seines Textfeldes geschlossen werden. Wenn Sie sich mit Ihrem Endgerät bewegen (z. B. bei einer Wanderung), wird Ihre aktuelle Position im "Follow me"-Modus in schneller Folge neu bestimmt und stets in der Mitte der Karte angezeigt. Die Karte wird dazu automatisiert nachgeführt. Ein weiteres Antippen von "Mein Standort" schaltet die Anzeige Ihrer Position wieder ab (schwarzes Werkzeug-Symbol).'," "]}),e.jsxs("p",{children:['Wenn Sie die Karte im aktivierten "Follow me"-Modus manuell verschieben, wird der "Follow me"-Modus unterbrochen, erkennbar an einer blauen Darstellung des Werkzeug-Symbols. Ihr aktueller Standort wird weiterhin angezeigt und in schneller Folge aktualisiert. Der Kartenausschnitt wird jetzt aber nicht mehr automatisch an den aktuellen Standort angepasst. Bei fortgesetzter Bewegung in eine Richtung wird das Standortsymbol daher vom Zentrum zum Rand des Kartenfensters wandern und dann verschwinden - Ihr Standort liegt jetzt nicht mehr im aktuell eingestellten Kartenausschnitt! In diesem Fall führt ein erneutes Antippen von "Mein Standort" dazu, dass wieder in den "Follow me"-Modus zurückgewechselt wird. Wenn Ihr aktueller Standort dagegen noch in der Karte sichtbar ist, wird durch diese Aktion die Anzeige der Position abgeschaltet (schwarzes Werkzeug-Symbol). Sie können die Unterbrechung des "Follow me"-Modus bei einer Wanderung o. ä. nutzen, wenn Sie sich die vor Ihnen liegende Strecke in der Karte anschauen wollen. Verschieben Sie dazu den Kartenausschnitt manuell auf den Abschnitt Ihres Interesses. Ihr aktueller Standort wird dann zumeist nicht mehr dargestellt werden können. Der "Follow me"-Modus wird unterbrochen (blaues Werkzeug-Symbol). Wenn Sie sich ausreichend über den weiteren Streckenverlauf informiert haben, reaktivieren Sie durch erneutes Antippen von "Mein Standort" den "Follow me"-Modus und setzen die Karte damit wieder auf Ihren aktuellen Standort zurück.'," "]}),e.jsx("p",{children:"Noch ein Hinweis zur Genauigkeit: Die Richtigkeit der Positionsanzeige ist nicht garantiert. Ihre Genauigkeit hängt von verschiedenen Faktoren ab, u. a. von der Qualität des GNSS-Empfängers in Ihrem Endgerät, der Umgebungssituation (z. B. hohe Gebäude oder spiegelnde Oberflächen in der Nachbarschaft) sowie der Methode, mit der Ihr Endgerät und der von Ihnen verwendete Browser die Position bestimmen."}),e.jsx(n,{onClick:()=>{t("MEINE_POSITION")},children:"zur Hilfefolie"})]})});B.__docgenInfo={description:"",methods:[],displayName:"Help40MeinStandort"};const E=()=>e.jsx(r,{sectionKey:"haftungsausschluss",sectionTitle:"Haftungsausschluss",sectionBsStyle:"danger",sectionContent:e.jsx("div",{children:"Could now she how in was sleep dropped in by back shall come into needed wild that picture they to have would by her succeeding, hair a with the I first should expected line of so got her solitary the and that coffee that omens, treble-range are quitting for high line text, parts else. A have the unprofitable both the leather at neighbours in on each written and assignment. When me the his degree read. She that the equation, of by hand. Select picture spare not got in social and parameters absolutely he and that if the alphabet carpeting of."})});E.__docgenInfo={description:"",methods:[],displayName:"Component"};const L=({version:t,setAppMenuActiveMenuSection:a})=>e.jsx(j,{title:"Geoportal",version:t,setAppMenuActiveMenuSection:a});L.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{version:{required:!0,tsType:{name:"string"},description:""},setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""}}};const W=""+new URL("m-step-1-3RDFdoKG.png",import.meta.url).href,O=""+new URL("m-step-2-sZE7Z7uc.png",import.meta.url).href,R=""+new URL("m-step-3-SQr7V3Fb.png",import.meta.url).href,C=""+new URL("m-step-4-2l8SVRHM.png",import.meta.url).href,F=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsxs("div",{children:["Wechselschalter zum Ein-/Ausschalten des Messungsmodus (",e.jsx("b",{children:"2D"}),") | in Karte klicken zum Zeichnen von Messgeometrien | Linienzüge beenden mit Doppelklick, Flächen schließen durch erneutes Anklicken des Startpunktes | Ergebnisanzeige und Verwalten mehrerer Messgeometrien in der ",e.jsx(n,{target:"INFOBOX",children:"Info-Box"})," | Speicherung der Messgeometrien im Browser"]}),e.jsx("div",{children:e.jsxs("div",{style:{marginTop:"10px",marginLeft:"-10px",display:"flex",gap:"10px"},children:[e.jsx("img",{src:W,style:{height:"120px"}}),e.jsx("img",{src:O,style:{height:"120px"}}),e.jsx("img",{src:R,style:{height:"120px"}}),e.jsx("img",{src:C,style:{height:"120px"}})]})})]});F.__docgenInfo={description:"",methods:[],displayName:"MeasurementsText"};const _=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Nur sichtbar in Modi mit Anzeige von Objektinformationen (",e.jsx("b",{children:"2D"}),") |"," ",e.jsx(n,{target:"MESSUNGEN",children:"Modus Strecke/Fläche messen"}),": Navigation in zuvor angelegten Messgeometrien, Anzeige der Messergebnisse, Löschen von Messgeometrien | ",e.jsx("b",{children:"Modus Sachdatenabfrage"}),": Anzeige der wichtigsten Informationen/Links zum selektierten Objekt oder bei"," ",e.jsx(n,{target:"SACHDATENABFRAGE",children:"Multi-Sachdatenabfrage"})," ","zu Objekten an ausgewählter Position, jeweils mit Link zu vollständigen Sachinformationen; Informationen zu mehreren Objekten in überlappenden Info-Boxen, Info-Box in den Vordergrund holen durch Klicken auf den Titelbalken"]})});_.__docgenInfo={description:"",methods:[],displayName:"InfoboxText"};const G=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Wechselschalter zum Ein-/Ausschalten des Vollbildmodus (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),") | Ausblenden der Bedienungselemente des Browsers erzeugt maximalen Platz für das Geoportal | Vollbildmodus kombinierbar mit"," ",e.jsx(n,{target:"MESSUNGEN",children:"Modus Strecke/Fläche messen"})," oder"," ",e.jsx(n,{target:"SACHDATENABFRAGE",children:"Modus Multi-Sachdatenabfrage"})," | Beenden auch mit esc-Taste"]})});G.__docgenInfo={description:"",methods:[],displayName:"FullScreenModeText"};const H=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Klicken für Rückkehr zum Ausgangspunkt (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),") | feste  Voreinstellung: Rathaus Wuppertal-Barmen | im 3D-Modus als Schrägansicht"]})});H.__docgenInfo={description:"",methods:[],displayName:"HomeText"};const U=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Wechselschalter zum Ein-/Ausschalten des Multi-Sachdatenabfragemodus (",e.jsx("b",{children:"2D"}),") | blau unterstrichene ",e.jsx(n,{target:"LAYERBUTTONS",children:"Kartensteuerelemente"}),' kennzeichnen abfragbare Kartenebenen | in Karte klicken für Abfrage aller sichtbaren "blauen" Kartenebenen an dieser Stelle ("thematischer Durchstich") | Ergebnis- und zusätzliche Koordinatenanzeige in der ',e.jsx(n,{target:"INFOBOX",children:"Info-Box"})]})});U.__docgenInfo={description:"",methods:[],displayName:"FeatureInfoText"};const P=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Wechselschalter für Aktivierung/Deaktivierung von Standort- und Blickrichtungsanzeige (",e.jsx("b",{children:"2D"}),", ",e.jsx("b",{children:"mobil"}),') | Durchmesser des Standortsymbols visualisiert Unsicherheit der Positionsbestimmung | "Follow me"-Modus (Symbol auf Schaltfläche orange): Standortsymbol zentriert, automatische Kartennachführung | Verschiebung der Karte bewirkt Umstellung auf bewegliche Positionsanzeige (blaues Symbol)',e.jsx("br",{}),e.jsx(n,{section:"standort",children:"weitere Informationen"})," "]})});P.__docgenInfo={description:"",methods:[],displayName:"LocatorText"};const V=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["2-stufiges Eingabeelement für Positionierung über Adresse oder andere Ortsbezeichnung (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),") | Text eingeben (min. 2 Zeichen) für unscharfe Suche im Verzeichnis der Ortsnamen | Treffer werden nach Grad der Übereinstimmung mit Suchtext klassifiziert und gruppiert | Eintrag in Trefferliste anklicken zur Zentrierung der Karte auf diesen Ort | Ortsmarkierung in Karte durch Placemark-Symbol oder (bei Flächen) Spotlight-Effekt",e.jsx("br",{}),e.jsx(n,{section:"positionieren",children:"weitere Informationen"})," "]})});V.__docgenInfo={description:"",methods:[],displayName:"GazetteerText"};const X=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Klicken zum Vergrößern („Zoom in“) bzw. Verkleinern („Zoom out“) des Kartenmaßstabs in festen Zoomstufen (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),') | "+" für Zoom in, "-" für Zoom out | je größer die Zoomstufe, desto größer der Maßstab']})});X.__docgenInfo={description:"",methods:[],displayName:"ZoomText"};const Z=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:[e.jsx("b",{children:"3D"}),"-Darstellung nach Norden ausrichten und zurück in die Senkrechtperspektive kippen | kartenartige Darstellung im 3D-Modus | automatische Ausführung beim"," ",e.jsx(n,{target:"2D_3D_TOGGLE",children:"Wechsel von 3D auf 2D"})]})});Z.__docgenInfo={description:"",methods:[],displayName:"NorthOrientationText"};const q=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Wechselschalter zum Umschalten zwischen ",e.jsx("b",{children:"2D"}),"- und ",e.jsx("b",{children:"3D"}),"-Ansicht | aktuelle Einstellung Karte/Luftbild wird beim Umschalten beibehalten | bei Wechsel von 3D nach 2D wird Darstellung zuerst nach Norden ausgerichtet und Senkrechtperspektive eingestellt (kartenartige Darstellung)"]})});q.__docgenInfo={description:"",methods:[],displayName:"Toggle2d3dText"};const Q=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsxs("div",{children:["Festes Hintergrund-Steuerelement, dazu variabel für jede weitere geladene Kartenebene ein Ebenen-Steuerelement (",e.jsx("b",{children:"2D"}),") | horizontales Verschieben der Ebenen-Steuerelemente zur Änderung der Darstellungsreihenfolge | Klicken auf das Steuerelement zum Öffnen einer Zeile für die Steuerung von Transparenz und Sichtbarkeit | Aufklappen der Zeile zur Anzeige weiterer Informationen:"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Hintergrund-Steuerelement"}),": Auswahl/Voreinstellung der ",e.jsx(n,{target:"HINTERGRUND",children:"Hintergrundkarte"}),' | Informationen zur ausgewählten Hintergrundkarte | "Stapel" mit den Bedienungszeilen aller Kartenebenen (zentrale Steuerung für kleine Bildschirme)']}),e.jsxs("li",{children:[e.jsx("b",{children:"Ebenen-Steuerelemente"}),": Kurzbeschreibung | Legende | Verknüpfungen mit Metadaten, Open Data etc."]})]});Q.__docgenInfo={description:"",methods:[],displayName:"LayerButtonsText"};const Y=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Bedienungsanleitung und Hintergrundinformationen in kompaktem Akkordeon-Design (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),") | diverse Verknüpfungen mit ",e.jsx(n,{target:"HILFE_OVERLAY",children:"Hilfefolie"})]})});Y.__docgenInfo={description:"",methods:[],displayName:"ApplicationMenuText"};const J=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:["Deckfolie mit positionsgetreuen Benennungen für alle Schaltflächen und Eingabefelder (",e.jsx("b",{children:"2D"})," und ",e.jsx("b",{children:"3D"}),') | auf Benennungen klicken für Text- und Bildinformationen zur Funktion und Bedienung ("Sekundärinformationen") | z. T. wechselseitige Verknüpfungen zwischen den Sekundärinformationen sowie mit der Bedienungsanleitung im ',e.jsx(n,{target:"MENU",children:"Anwendungsmenü"})]})});J.__docgenInfo={description:"",methods:[],displayName:"HelpOverlayText"};const $=()=>e.jsx("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:e.jsxs("div",{children:[e.jsx("b",{children:"Wechselschalter für Auswahl von Hintergrundkarte (2D) bzw. 3D-Modell (3D)"}),e.jsx("br",{}),"Voreinstellung der 2D-Karte im ",e.jsx(n,{target:"LAYERBUTTONS",children:"Hintergrund-Steuerelement"}),', wird dazu auch direkt rechts neben dem Wechselschalter angeboten | 3D: "Karte" basiert auf LoD2-Gebäudemodell der Landesvermessung NRW, "Luftbild" liefert 3D-Mesh (berechnet aus Befliegung in 03/24)',e.jsx("br",{}),e.jsx(n,{section:"hintergrundkarte",children:"weitere Informationen"})," "]})});$.__docgenInfo={description:"",methods:[],displayName:"BackgroundSelectionText"};const ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABXklEQVQ4jZ3Tz4uNcRTH8dfj1qipW2oWbs2Goiws2YpYX46FEsXOkgVqyo9M+RG2pkYpO8uTsphcf4GyImXJ6maFnprNDBb3oet7H9c1p87m/Hh/zzl9vsxmnRnrptpePMMQF7F9K5BFrGIDP8b8I86bcdIFPMB6ASn9PU6iaoN0cR1f/wEp/TWOjoNO4fN/Qkp/hZ0wj2uotwh6g8Plqj08xuaMkE84i21tdxMRi9iPtSmQb1jq9XrdiOiO91cNZB/u4Tie42pm7sbDBq6ZeLXT6Sz3+/0DuN9scxePMnO9iohzeOJP7Wxgpa7r24PBoI9juBUR80bSOVIs9QGHqoiocKJ5aU9R9AXLeIGbOFPkvzeD3MjM4W/RRcQcLjRNC5MXnbA1XMnMd78CEwqOiB1YwiXMtUDe4nJmviwTrd+hge7CHZxuQkMjPT7NzM22nr/CxqAHjQ6+kpn1tNqfL7iTc0cRZL4AAAAASUVORK5CYII=",ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABYUlEQVQ4jZ3RvUvVYRjG8c9JDTlhL6BTFJSD/4BnbrsbDtHbUktzRGSkklQgCFJRTQ0tTSFSTWd+pigKHIOGaKkcRNCGmtQj2HDOiR9PP/XoBdd0X8+X+74eulNPl7kddQj3sIqXOLEfyEHcxDK2Cl7DMwx2A+nBNXzPILn/YBoDZZAKLuDLLpDcK7iN/g5oGAt7hORexNnOVufwdZ+gXxjT6vmf+nCjvXo3kHU8wbGy3qSUhmq12hAeaf3cdqDXOJ1SOpoXL6U0gIm2lzBZr9c/N5vNWVwt5D9hPKW0goe4jDlMR8SPSkrpFD7geLboe9yJiF7cxXyj0XhXrVYftOvoK2Q3cLGz2Qge43zJ9a8wg0u4jyPZfAHjEfGxknV2Bk8xWgLN9RNTeBMRW7Q7y4AHcEWrk5MlkN+YxfOIWCsO/oMVoP24pXXaYWziBWYiYrXszbawAnQQ1/E2Ir7tlP0La3GYsd4MEgoAAAAASUVORK5CYII=",te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAVCAYAAACkCdXRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACYElEQVQ4jZ3UT2hcZRQF8N9YdCDS0JhacVEXEQlK3AglYlRGVxIE/cSNxAhKaRa6sgNSWqf4DxV0Jy4S6SKSTaB8iIRoXURXjRBwUf8slBbciAYUEi1j6HhdvPfq8DoNwQtv8+555zvn3Ps+9lb79ojbtW7CS/gFyxj/PyT78BwuIfqeK/gIh/dC0sCT+LbZbMbk5GQ/UYyNjUWr1Qp08T4OXo/oUawjms1mLC0tRUTE+vp6zM3NxcLCQmxtbcX29nbMzMxUB2zhNPZXJIfwRc1OIDqdTvR6vahqdXU1xsfHr8FhE89UhA9jo2oODw/H4uJidLvd2NzcjPn5+djY2Iherxdra2sxNTXVT/QnOri53+YNmMHPiOnp6eh0OjE6Onr1w9nZ2Wi32zE0NBToYR63DwwtpTQyMTFxECfKPAZZCqzi3pTSgfr0pJSain06ics4ubKycm5nZ6eDY6VquIB2SukCXsfz+BSncs7fNVJKt+Ir3F0T+g2O55x/LSf2eavVOjsyMvIy2hjqwwZeqJQdxpuKRa3XJ6Xth0o1t9X635fknzVqmd2H9/DIANJ6/YZXcSbnfIX/sqjqH8zhcfxwHZIu3sJdpaqrgiqbdyhsPqv4/z7A23iqtHZIkcvHiiGNlQ6O4EfFni1XA/gS99QU/IHXsISjOIe/8C6eqGF3cKx/NV4sMzhQA/5UnvxgGUH9blvGiZzzxfoAbsEpxc7daPc6r1id89WLxiBUSulOvIOnB7Qv4hWczTlHf2MgWR/pA4p7635Fhm/gw5zz34Pwu5KVhA08hq9zzr/vhv0XapXwNPJOWlYAAAAASUVORK5CYII=",ie=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsx("div",{children:"Die Menüleiste umfasst mehrere Aktionen und Dialoge zur Steuerung und Weiterverarbeitung der Karteninhalte:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{icon:S})}),e.jsxs("td",{children:[e.jsx("b",{children:"Aktualisieren"})," - Erneutes Laden aller nicht ausgeblendeten"," ",e.jsx(n,{target:"LAYERBUTTONS",children:"Kartenebenen"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("img",{src:te,style:{height:"18px"}})}),e.jsxs("td",{children:[e.jsx("b",{children:"Karteninhalte hinzufügen"})," - Dialog für Suche, Vorschau und Laden von Karteninhalten im DigiTal Zwilling | zum Laden externer Kartendienste Adresse (WMS-Capabilities-URL) markieren und in das Kartenfenster ziehen"]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("img",{src:ne,style:{height:"14px"}}),e.jsx("img",{src:ee,style:{height:"14px"}})]}),e.jsxs("td",{children:[e.jsx("b",{children:"Hintergrundkarte abschwächen / zurücksetzen"})," - Wechselschalter zum Abschwächen (starke Transparenz) und Zurücksetzen (keine Transparenz) der ",e.jsx(n,{target:"HINTERGRUND",children:"Hintergrundkarte"})," "]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(s,{icon:"eye"})," ",e.jsx(s,{icon:"eye-slash"})]}),e.jsxs("td",{children:[e.jsx("b",{children:"Kartensteuerelemente aus-/einblenden"})," - Wechselschalter zum Aus- und Einblenden der"," ",e.jsx(n,{target:"LAYERBUTTONS",children:"Kartensteuerelemente"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{icon:"file-export"})}),e.jsxs("td",{children:[e.jsx("b",{children:"Karte speichern"})," - Dialog zum Speichern der aktuell zusammengestellten Kartenebenen mit Beschreibung und Vorschaubild | Laden über Menüleiste / Karteninhalte hinzufügen / Favoriten / Meine Karten"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{icon:"print"})}),e.jsxs("td",{children:[e.jsx("b",{children:"Drucken"})," - Dialog für einfachen Ausdruck in PDF-Datei mit Auswahl von Format, Maßstab und Auflösung | verschiebbarer Druckvorschaurahmen | kein Ausdruck von Legenden, Metadaten etc."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{icon:A})}),e.jsxs("td",{children:[e.jsx("b",{children:"Teilen"})," - Dialog für das Erzeugen von Links auf das Geoportal mit den aktuellen Karteninhalten | variables Ausblenden von Bedienungselement-Gruppen | Links werden in Zwischenablage kopiert"]})]})]})]});ie.__docgenInfo={description:"",methods:[],displayName:"MenuBarText"};const re=""+new URL("m-vide-demo-DjPGFUu8.mp4",import.meta.url).href,se=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsx("li",{children:"Die Schaltfläche aktiviert einen Modus zum Messen von Strecken und/oder Flächen, nicht nur eine einmalige Messung."}),e.jsx("li",{children:"Linienzüge schließt man durch erneutes Anklicken des letzten Punktes („Doppelklick auf Endpunkt“), Flächen durch erneutes Anklicken des Startpunktes."}),e.jsx("li",{children:"Man kann mehrere Messgeometrien anlegen, deren Verwaltung über die Info-Box erfolgt."}),e.jsx("li",{children:"Die Messgeometrien werden im Browser-Cache gespeichert und stehen dadurch nach einem erneuten Starten des Geoportals weiterhin zur Verfügung."}),e.jsx("div",{children:e.jsx("div",{style:{marginTop:"10px",marginLeft:"-10px",display:"flex",gap:"10px"},children:e.jsx("video",{width:"100%",height:"383px",controls:!0,muted:!0,children:e.jsx("source",{src:re,type:"video/mp4"})})})})]});se.__docgenInfo={description:"",methods:[],displayName:"DemoVideo"};const ae=""+new URL("m-demo-gif-Du85j88z.gif",import.meta.url).href,le=()=>e.jsxs("ul",{className:"overlay-helper-ul-class",style:{margin:"0",paddingLeft:"20px",maxWidth:"600px"},children:[e.jsx("li",{children:"Die Schaltfläche aktiviert einen Modus zum Messen von Strecken und/oder Flächen, nicht nur eine einmalige Messung."}),e.jsx("li",{children:"Linienzüge schließt man durch erneutes Anklicken des letzten Punktes („Doppelklick auf Endpunkt“), Flächen durch erneutes Anklicken des Startpunktes."}),e.jsx("li",{children:"Man kann mehrere Messgeometrien anlegen, deren Verwaltung über die Info-Box erfolgt."}),e.jsx("li",{children:"Die Messgeometrien werden im Browser-Cache gespeichert und stehen dadurch nach einem erneuten Starten des Geoportals weiterhin zur Verfügung."}),e.jsx("div",{children:e.jsx("div",{style:{marginTop:"10px",marginLeft:"-10px",display:"flex",gap:"10px"},children:e.jsx("img",{src:ae,style:{height:"360px"}})})})]});le.__docgenInfo={description:"",methods:[],displayName:"DemoGif"};export{Y as A,$ as B,z as C,se as D,L as F,V as G,y as H,_ as I,Q as L,ie as M,Z as N,w as O,q as T,X as Z,v as a,D as b,I as c,M as d,T as e,B as f,E as g,J as h,G as i,P as j,U as k,H as l,F as m,le as n};
