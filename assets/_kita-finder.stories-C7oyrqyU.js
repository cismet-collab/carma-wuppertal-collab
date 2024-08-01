import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as P}from"./chunk-454WOBUV-CM0pFb8Z.js";import{T as R}from"./TopicMapContextProvider-k7ZZCPEt.js";import{I as r,G}from"./Section-DlvS9IvB.js";import{L as c,s as L}from"./index-BTM6MDJA.js";import{A as U}from"./Attribution-CQL1DozA.js";import{C as O}from"./ConfigurableDocBlocks-FdaPUQpF.js";import{G as Y}from"./GenericHelpTextForMyLocation-BLBpaZvz.js";import{C as Q,a as J}from"./LicenseStadtplanTagNacht-Xztwg1qv.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./_baseClone-WMB_q0Oe.js";import"./_getPrototype-Dwr3C2Zh.js";import"./index-DNUR7M9R.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DvoZgHAm.js";const X="Stadtteil | Adresse | Kita",_=({title:n="Keine Kitas gefunden"})=>n,q=e.jsxs("span",{children:["Für mehr Kita Ansicht mit ",e.jsx(r,{name:"minus-square"})," verkleinern. Um nach Themenfeldern zu filtern, das Menü öffnen."]}),$=({text:n=q})=>n,ee=({text:n="Filter | Einstellungen | Kompaktanleitung"})=>n,ne=({title:n="Filter, Einstellungen und Kompaktanleitung"})=>n,W=({setAppMenuActiveMenuSection:n})=>e.jsxs("span",{children:["Benutzen Sie die Auswahlmöglichkeiten unter"," ",e.jsx(c,{className:"useAClassNameToRenderProperLink",to:"filter",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>n("filter"),children:"Filtern"}),", um die in der Karte angezeigten Kindertageseinrichtungen (Kitas) auf die für Sie relevanten Kitas zu beschränken. Über"," ",e.jsx(c,{className:"useAClassNameToRenderProperLink",to:"settings",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>n("settings"),children:"Einstellungen"})," ","können Sie die Darstellung der Hintergrundkarte und der Kitas an Ihre Vorlieben anpassen. Wählen Sie"," ",e.jsx(c,{className:"useAClassNameToRenderProperLink",to:"help",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>n("help"),children:"Kompaktanleitung"})," ","für detailliertere Bedienungsinformationen."]});W.__docgenInfo={description:"",methods:[],displayName:"MenuIntroduction",props:{setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""}}};const N=({title:n=document.title,version:H,setAppMenuActiveMenuSection:Z})=>e.jsxs("div",{style:{fontSize:"11px"},children:[e.jsx("b",{children:"Hintergrundkarten"}),": Stadtkarte 2.0 © RVR | True Orthophoto 2022 © Stadt Wuppertal"," ",e.jsx("a",{className:"pleaseRenderAsLink",onClick:()=>{Z("help"),L.scrollTo("Datengrundlage",{containerId:"myMenu"})},children:"(Details und Nutzungsbedingungen)"}),e.jsx("br",{}),e.jsx(U,{applicationName:n,applicationVersion:H})]});N.__docgenInfo={description:"",methods:[],displayName:"MenuFooter",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"document.title",computed:!0}},version:{required:!0,tsType:{name:"string"},description:""},setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""}}};const re=""+new URL("kita_zusammen-Br3EgFz7.png",import.meta.url).href,te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAFCAYAAABxeg0vAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gYUCg42m80YgAAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAAmklEQVQImWP8/OnTfwYkULDjMgMDAwPDBE89ZGGGKSfvMxx5+JaBhYGBgeHCy48MyRsuMHz++Ydhsrceg7uKGAMDAwPDiy8/GSJWnWF49vk7Q56FMsOKMBMGlimnHjAcefiW4UCSNQMvGyvcxJ13XjG0H7rNsCLMhEGChx0uzvj58+f/F17AbPiN14Ycc0WIBhQ/bIf5QRerHwBx4EvlZwa+KwAAAABJRU5ErkJggg==",ie=""+new URL("AdressMarker-DMhvmSxh.jpg",import.meta.url).href,V=()=>e.jsx(G,{sectionKey:"help",sectionBsStyle:"default",sectionTitle:"Kompaktanleitung",sectionContent:e.jsx(O,{configs:[{type:"FAQS",configs:[{title:"Datengrundlage",bsStyle:"secondary",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:["Der ",e.jsx("strong",{children:"Kita-Finder Wuppertal"})," bietet ihnen die folgenden Hintergrundkarten an, die auf verschiedenen Geodatendiensten und Geodaten basieren:"]}),e.jsxs("ul",{children:[e.jsx(Q,{}),e.jsx(J,{})]}),e.jsxs("p",{children:["Zusätzlich nutzt der Kita-Finder den Datensatz"," ",e.jsx("a",{target:"_legal",href:"https://offenedaten-wuppertal.de/dataset/kindertageseinrichtungen-wuppertal",children:"Kindertageseinrichtungen Wuppertal"})," ",'des Stadtbetriebs "Tageseinrichtungen für Kinder - Jugendamt" aus dem Open-Data-Angebot der Stadt Wuppertal.']})]})}},{title:"Kartendarstellung der Kitas",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:['Für die Darstellung der Kitas in der Karte stehen Ihnen 2 Zeichenvorschriften zur Verfügung, zwischen denen Sie unter "',e.jsx("strong",{children:"Einstellungen"}),'" umschalten können. Standardmäßig wird die Vorschrift "',e.jsx("em",{children:"nach Trägertyp"}),'" verwendet, bei der die Kitas in 6 unterschiedlichen Farben für die 6 unterschiedenen Trägertypen (städtisch, evangelisch, katholisch, Elterninitiative, Betrieb, freier Träger) ausgeprägt werden. Die Zeichenvorschrift "',e.jsx("em",{children:"nach Profil (Inklusionsschwerpunkt j/n)"}),'" benutzt nur 2 Farben für die Unterscheidung zwischen Einrichtungen mit Schwerpunkt Inklusion und solchen ohne Inklusionsschwerpunkt.']}),e.jsxs("p",{children:["Räumlich nah beieinander liegende Einrichtungen werden standardmäßig maßstabsabhängig zu größeren Kreis-Symbolen zusammengefasst, jeweils mit der Anzahl der repräsentierten Kitas im Zentrum"," ",e.jsx("img",{alt:"Cluster",src:re}),". Vergrößern Sie ein paar Mal durch direktes Anklicken eines solchen Punktes oder mit ",e.jsx(r,{name:"plus"})," die Darstellung, so werden die zusammengefassten Kitas Schritt für Schritt in die kleineren Piktogramm-Symbole für die Einzel-Kitas zerlegt."]})]})}},{title:"Kitas auswählen und abfragen",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:["Bewegen Sie den Mauszeiger im Kartenfenster auf eine konkrete Einzel-Kita, um sich ihre strukturierte, eindeutige Kurzbezeichnung anzeigen zu lassen. Diese Bezeichnung besteht - sofern vorhanden - aus dem individuellen Namen der Kita, der Straße und dem Trägertyp. Ein Klick auf das zugehörige Kita-Symbol setzt den Fokus auf diese Einrichtung. Sie wird dann blau hinterlegt und die zugehörigen Informationen (Name, Straße und Hausnummer, Info-Text mit Angabe der Kapazität und des Trägertyps, Mindestaufnahmealter und angebotener Betreuungsumfang) werden unten rechts in der Info-Box angezeigt. (Auf einem Tablet-PC wird der Fokus durch das erste Antippen des Angebots gesetzt, das zweite Antippen blendet die Bezeichnung ein.) Außerdem werden Ihnen in der Info-Box weiterführende (Kommunikations-) Links zur Kita angezeigt:"," ",e.jsx(r,{name:"external-link-square"})," Internet und"," ",e.jsx(r,{name:"phone"})," Telefon."]}),e.jsxs("p",{children:["Wenn Sie noch nicht aktiv eine bestimmte Kita im aktuellen Kartenausschnitt selektiert haben, wird der Fokus automatisch auf die nördlichste Einrichtung gesetzt. Mit den Funktionen"," ",e.jsx("img",{alt:"Cluster",src:te})," vorheriger Treffer und ",e.jsx("a",{children:">>"})," nächster Treffer können Sie ausgehend von der Kita, auf der gerade der Fokus liegt, in nördlicher bzw. südlicher Richtung alle aktuell im Kartenfenster angezeigten Kitas durchmustern."]}),e.jsxs("p",{children:["Mit der Schaltfläche"," ",e.jsx(r,{name:"chevron-circle-down"})," im dunkelgrau abgesetzten rechten Rand der Info-Box lässt sich diese so verkleinern, dass nur noch der Name der Kita und die Link-Symbole angezeigt werden - nützlich für Endgeräte mit kleinem Display. Mit der Schaltfläche"," ",e.jsx(r,{name:"chevron-circle-up"})," an derselben Stelle können Sie die Info-Box dann wieder vollständig einblenden."]})]})}},{title:"In Karte positionieren",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:["Um die Kitas in einem bestimmten Bereich des Stadtgebietes zu erkunden, geben Sie den Anfang eines Stadtteils (Stadtbezirk oder Quartier), einer Adresse, eines Straßennamens oder eines Kita-Namens im Eingabefeld links unten ein (mindestens 2 Zeichen). In der inkrementellen Auswahlliste werden Ihnen passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, wird der Inhalt der Auswahlliste angepasst.) Durch das vorangestellte Symbol erkennen Sie, ob es sich dabei um einen ",e.jsx(r,{name:"circle"})," Stadtbezirk, ein"," ",e.jsx(r,{name:"pie-chart"})," Quartier, eine"," ",e.jsx(r,{name:"home"})," Adresse, eine"," ",e.jsx(r,{name:"road"})," Straße ohne zugeordnete Hausnummern, einen ",e.jsx(r,{name:"tag"})," POI oder eine"," ",e.jsx(r,{name:"child"})," Kita handelt."]}),e.jsxs("p",{children:["Nach der Auswahl eines Treffers aus der Liste wird die Karte auf die zugehörige Position zentriert. Bei Suchbegriffen mit Punktgeometrie (Adresse, Straße, Kita) wird außerdem ein großer Maßstab (Zoomstufe 14) eingestellt und ein Marker"," ",e.jsx("img",{alt:"Cluster",src:ie})," auf der Zielposition platziert. Bei Suchbegriffen mit Flächengeometrie (Stadtbezirk, Quartier) wird der Maßstab so eingestellt, dass die Fläche vollständig dargestellt werden kann. Zusätzlich wird der Bereich außerhalb dieser Fläche abgedunkelt (Spotlight-Effekt)."]}),e.jsxs("p",{children:["Durch Anklicken des Werkzeugs ",e.jsx(r,{name:"times"})," ","links neben dem Eingabefeld können Sie die Suche zurücksetzen (Entfernung von Marker bzw. Abdunklung, Löschen des Textes im Eingabefeld)."]})]})}},{title:"Mein Standort",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:e.jsx("div",{children:e.jsx(Y,{})})}},{title:"Filtern",bsStyle:"primary",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:['Im Bereich "',e.jsx("strong",{children:"Filtern"}),'" können Sie im Anwendungsmenü ',e.jsx(r,{name:"bars"}),' die in der Karte angezeigten Kitas so ausdünnen, dass nur die für Sie interessanten Einrichtungen übrig bleiben. Standardmäßig sind die Einstellungen hier so gesetzt, dass alle Kitas angezeigt werden. Zunächst können Sie hier unter "',e.jsx("em",{children:e.jsx("strong",{children:"Trägertyp"})}),'" die für Sie in Frage kommenden Kita-Träger auswählen und unter "',e.jsx("em",{children:e.jsx("strong",{children:"Profil"})}),'" einstellen, ob Einrichtungen mit oder ohne Schwerpunkt Inklusion (oder beide Typen) angezeigt werden sollen. Die beiden Zeichenvorschriften "',e.jsx("em",{children:"nach Träger"}),'" und "',e.jsx("em",{children:"nach Profil"}),'", die Ihnen unter "',e.jsx("strong",{children:"Einstellungen"}),'" zur Auswahl angeboten werden, beziehen sich auf diese beiden Merkmale. Welche Zeichenvorschrift gerade aktiv ist, erkennen Sie an den farbigen Punkten, die als Legende entweder hinter den Auswahlmöglichkeiten für "',e.jsx("em",{children:e.jsx("strong",{children:"Trägertyp"})}),'" oder denen für "',e.jsx("em",{children:e.jsx("strong",{children:"Profil"})}),'" erscheinen.']}),e.jsxs("p",{children:['Unter "',e.jsx("em",{children:e.jsx("strong",{children:"Kindesalter"})}),'" sollten Sie das Alter des Kindes, für das Sie eine Unterbringung suchen, angeben. Dann werden alle Kitas, die ein höheres Mindestalter der Kinder fordern, ausgeblendet.']}),e.jsxs("p",{children:['Beim gewünschten "',e.jsx("em",{children:e.jsx("strong",{children:"Betreuungsumfang"})}),'" gilt es zu berücksichtigen, dass viele Kitas sowohl 35 wie auch 45 Stunden als Betreuungsdauer anbieten. Diese werden angezeigt, sobald Sie eine der beiden Möglichkeiten (35 oder 45 Stunden pro Woche) ausgewählt haben. Bei einigen Einrichtungen hängt die angebotene Betreuungsdauer auch vom Alter des Kindes ab. Das geht aus den Daten, auf die der Kita-Finder Wuppertal zugreift, nicht hervor. Bitte erfragen Sie diesen Zusammenhang daher ggf. direkt bei der jeweiligen Einrichtung.']}),e.jsxs("p",{children:['Ihre Einstellungen werden direkt in der blauen Titelzeile des Bereichs "',e.jsx("strong",{children:"Filtern"}),'" und in dem Donut-Diagramm, das Sie rechts neben oder unter den Filteroptionen finden, ausgewertet. Die Titelzeile zeigt die Gesamtanzahl der Kitas, die den von Ihnen gesetzten Filterbedingungen entsprechen. Das Donut-Diagramm zeigt zusätzlich die Verteilung auf die Kategorien der aktuell gewählten Zeichenvorschrift. Bewegen Sie dazu den Mauszeiger auf eines der farbigen Segmente des Diagramms.']})]})}},{title:"Einstellungen",bsStyle:"success",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:['Unter "',e.jsx("strong",{children:"Einstellungen"}),'" können Sie im Anwendungsmenü ',e.jsx(r,{name:"bars"})," ",'festlegen, wie die Kitas und die Hintergrundkarte angezeigt werden sollen. Zu den Kitas können Sie auswählen, ob Ihre unter "',e.jsx("strong",{children:"Filtern"}),'" festgelegten Filterbedingungen in einer Titelzeile ausgeprägt werden oder nicht. Weiter können Sie festlegen, ob räumlich nah beieinander liegende Kitas maßstabsabhängig zu einem Punktsymbol zusammengefasst werden oder nicht. "',e.jsx("em",{children:e.jsx("strong",{children:"Zeichenvorschrift"})}),'" erlaubt es Ihnen, zwischen der standardmäßig aktivierten Zeichenvorschrift "',e.jsx("em",{children:"nach Trägertyp"}),'" und der Alternative "',e.jsx("em",{children:"nach Profil (Inklusionsschwerpunkt j/n)"}),'" zu wechseln. Unter "',e.jsx("em",{children:e.jsx("strong",{children:"Symbolgröße"})}),'" können Sie in Abhängigkeit von Ihrer Bildschirmauflösung und Ihrem Sehvermögen auswählen, ob die Kitas mit kleinen (25 Pixel), mittleren (35 Pixel) oder großen (45 Pixel) Symbolen angezeigt werden.']}),e.jsxs("p",{children:['Unter "',e.jsx("strong",{children:e.jsx("em",{children:"Hintergrundkarte"})}),'" können Sie auswählen, ob Sie die standardmäßig aktivierte farbige Hintergrundkarte verwenden möchten ("',e.jsx("em",{children:"Stadtplan (Tag)"}),'") oder lieber eine invertierte Graustufenkarte ("',e.jsx("em",{children:"Stadtplan (Nacht)"}),'"), zu der uns die von vielen PKW-Navis bei Dunkelheit eingesetzte Darstellungsweise inspiriert hat.'," ",e.jsx("strong",{children:"Hinweis:"})," Der Stadtplan (Nacht) wird Ihnen nur angeboten, wenn Ihr Browser CSS3-Filtereffekte unterstützt, also z. B. nicht beim Microsoft Internet Explorer. Die Nacht-Karte erzeugt einen deutlicheren Kontrast mit den farbigen Kita-Symbolen, die unterschiedlichen Flächennutzungen in der Hintergrundkarte lassen sich aber nicht mehr so gut unterscheiden wie in der Tag-Karte. Als dritte Möglichkeit steht eine Luftbildkarte zur Verfügung, die die Anschaulichkeit des Luftbildes mit der Eindeutigkeit des Stadtplans (Kartenschrift, durchscheinende Linien) verbindet."," "]}),e.jsx("p",{children:"Im Vorschaubild sehen Sie direkt die prinzipielle Wirkung ihrer Einstellungen."})]})}},{title:"Personalisierung",bsStyle:"success",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[" ",e.jsx("p",{children:"Ihre Filterbedingungen und Einstellungen bleiben auch nach einem Neustart der Anwendung erhalten. (Es sei denn, Sie löschen den Browser-Verlauf einschließlich der gehosteten App-Daten.) Damit können Sie mit wenigen Klicks aus dem Kita-Finder Wuppertal einen dauerhaft für Sie optimierten Kita-Finder machen."})]})}}]}]})},"help");V.__docgenInfo={description:"",methods:[],displayName:"KompaktanleitungSection"};const Se={title:"Kita-finder"},t={render:()=>e.jsx("div",{children:X})},i={render:()=>e.jsx(_,{})},s={render:()=>e.jsx($,{})},a={render:()=>e.jsx(ee,{})},d={render:()=>e.jsx(ne,{})},o={render:()=>e.jsx(R,{appKey:"storybook-appkey",children:e.jsx("div",{children:e.jsx(W,{setAppMenuActiveMenuSection:P("setAppMenuActiveMenuSection")})})})},l={render:()=>e.jsx(R,{appKey:"storybook-appkey",children:e.jsx(N,{title:"Kita-Finder Wuppertal",version:"xyz",setAppMenuActiveMenuSection:P("setAppMenuActiveMenuSection")})})},u={render:()=>{const n={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh"};return e.jsx("div",{id:"myMenu",style:n,children:e.jsx(V,{})})}};var h,g,m;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,f,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextTitle />;
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var A,k,b;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextContent />;
  }
}`,...(b=(k=s.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var S,j,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <MenuTooltip />;
  }
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var z,v,K;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <MenuTitle />;
  }
}`,...(K=(v=d.parameters)==null?void 0:v.docs)==null?void 0:K.source}}};var y,M,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
        </div>
      </TopicMapContextProvider>;
  }
}`,...(T=(M=o.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var I,B,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter title="Kita-Finder Wuppertal" version={"xyz"} setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
      </TopicMapContextProvider>;
  }
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var E,F,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const modalBodyStyle: CSSProperties = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh"
    };
    return <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection />
      </div>;
  }
}`,...(D=(F=u.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const je=["TextInSearchPlaceholder","TextInInfoBoxTitle","TextInInfoBoxContent","menuTooltipString","TitleMenu","IntroductionMenu","MenuFußzeile","Kompaktanleitung"];export{o as IntroductionMenu,u as Kompaktanleitung,l as MenuFußzeile,s as TextInInfoBoxContent,i as TextInInfoBoxTitle,t as TextInSearchPlaceholder,d as TitleMenu,je as __namedExportsOrder,Se as default,a as menuTooltipString};
