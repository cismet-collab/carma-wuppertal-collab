import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as h}from"./chunk-454WOBUV-CM0pFb8Z.js";import{I as n,L as i,G as p,T as $}from"./TopicMapContextProvider-BvZUpqBa.js";import{C as X}from"./ConfigurableDocBlocks-Bd_r7mD7.js";import{F as Y,f as J}from"./index-jqfg6c5U.js";import{S as ee,L as ne,I as te,b as re,M as ie}from"./InKartePositionierenText-DUnKxIRx.js";import{F as se}from"./FuzzySearchParagraph-DQ_o0XHK.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-BRV0Se7Z.js";import"./index-toJ0aHy3.js";import"./Card-BjEfaFhr.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./CustomizationContextProvider-B7Ii7Dw2.js";const ae="Stadtteil | Adresse | POI",oe=()=>"Mein Kulturstadtplan | Einstellungen | Kompaktanleitung",de=()=>"Keine POI gefunden!",_=({setAppMenuVisible:t,setAppMenuActiveMenuSection:r})=>e.jsxs("p",{children:["Für mehr POI Ansicht mit ",e.jsx(n,{name:"minus-square"})," verkleinern. Um nach Themenfeldern zu filtern, das",e.jsxs("a",{onClick:()=>{t(!0),r("filter")},className:"renderAsLink",children:[" ","Menü ",e.jsx(n,{name:"bars",style:{color:"black"}})," ","öffnen."]})]});_.__docgenInfo={description:"",methods:[],displayName:"InfoBoxTextContent"};const le=()=>"Mein Kulturstadtplan, Einstellungen und Kompaktanleitung",Z=({setAppMenuActiveMenuSection:t})=>e.jsxs("span",{children:["Der ",e.jsx("strong",{children:"Kulturstadtplan Wuppertal"})," präsentiert Ihnen alle Points Of Interest (POI) aus unserem Open-Data-Datensatz"," ",e.jsx("a",{href:"https://offenedaten-wuppertal.de/dataset/interessante-orte-wuppertal-poi",target:"_opendata",children:"Interessante Orte Wuppertal (POI)"}),", die dort als kultureller Veranstaltungsort eingeordnet sind. Unter"," ",e.jsx(i,{to:"filter",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>t("filter"),className:"renderAsLink",children:"Mein Kulturstadtplan"})," ","können Sie die angezeigten POI auf die Kategorien beschränken, die Sie interessieren oder nach den jeweils angebotenen Veranstaltungsarten filtern. Über"," ",e.jsx(i,{to:"settings",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>t("settings"),className:"renderAsLink",children:"Einstellungen"})," ","können Sie die Karten- und POI-Darstellung an Ihre Vorlieben anpassen. Wählen Sie"," ",e.jsx(i,{to:"help",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>t("help"),className:"renderAsLink",children:"Kompaktanleitung"})," ","für detailliertere Bedienungsinformationen und"," ",e.jsx(i,{id:"lnkUDZ",to:"digiTal",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>t("digiTal"),className:"renderAsLink",children:"Urbaner Digitaler Zwilling"})," ",'für eine Einordnung des Kulturstadtplans in das Gesamtsystem des Digitalen Zwillings der Stadt Wuppertal ("DigiTal Zwilling").']});Z.__docgenInfo={description:"",methods:[],displayName:"MenuIntroduction",props:{setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""}}};const ue=""+new URL("bergische_musikschule-D5ux1_Cv.png",import.meta.url).href,ce=""+new URL("kontakthof-DQ-8siqn.png",import.meta.url).href,ge=""+new URL("veranstaltungsorte_zusammen-BCnsHzuo.png",import.meta.url).href,me=(t,r)=>{let f;return f="Angebote",`Mein Kulturstadtplan (${t} ${f} gefunden, davon ${r} in der Karte)`},he="primary",U="Kompaktanleitung",G="default",q=()=>e.jsx(p,{sectionKey:"help",sectionBsStyle:G,sectionTitle:U,sectionContent:e.jsx(X,{configs:[{type:"FAQS",configs:[{title:"Datengrundlage",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:["Der ",e.jsx("strong",{children:"Kulturstadtplan Wuppertal"})," bietet ihnen die folgenden Hintergrundkarten an, die auf verschiedenen Geodatendiensten und Geodaten basieren:"]}),e.jsxs("ul",{children:[e.jsx(ee,{}),e.jsx(ne,{bodenaufloesung:3})]}),e.jsxs("p",{children:["Zusätzlich nutzt der Kulturstadtplan für die Themendarstellung den Datensatz"," ",e.jsx("a",{target:"_legal",href:"https://offenedaten-wuppertal.de/dataset/veranstaltungsorte-wuppertal",children:"Veranstaltungsorte Wuppertal"})," ","aus dem Open-Data-Angebot der Stadt Wuppertal."]})]})}},{title:"Kartendarstellung der POI",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[" ",e.jsxs("p",{children:['Die POI der kulturellen Einrichtungen werden in der Karte durch Punktsymbole in Form von Piktogrammen mit farbigem Hintergrund dargestellt. Für einige klar definier- und unterscheidbare Kategorien (Clubs, Filmtheater, Museen und Galerien, Theater) verwenden wir feste Kombinationen von Piktogramm und Hintergrundfarbe. In der Kategorie "Sonstige Veranstaltungsorte" werden dagegen verschiedene Piktogramme mit der gleichen Hintergrundfarbe (Ocker) verwendet. Hierunter fallen zum einen Einrichtungen mit einem individuellen Profil, die unterschiedlichen Veranstaltungsarten Raum geben'," ",e.jsx("img",{style:{height:20},alt:"Cluster",src:ce}),". Zum anderen umfasst diese Kategorie alle POI, die nur in zweiter Linie Veranstaltungsorte sind. So ist z. B. die Bergische Musikschule"," ",e.jsx("img",{alt:"Cluster",style:{height:20},src:ue})," ","in erster Linie als Bildungseinrichtung eingestuft, in der aber auch Konzerte, Lesungen und Theateraufführungen stattfinden."]}),e.jsxs("p",{children:["Räumlich nah beieinander liegende Veranstaltungsorte werden standardmäßig maßstabsabhängig zu größeren Punkten zusammengefasst, mit der Anzahl der repräsentierten POI im Zentrum"," ",e.jsx("img",{alt:"Cluster",style:{height:30},src:ge}),". Vergrößern Sie ein paar Mal durch direktes Anklicken eines solchen Punktes oder mit ",e.jsx(n,{name:"plus"})," ","die Darstellung, so werden die zusammengefassten POI Schritt für Schritt in die kleineren Symbole für die konkreten Einzel-POI zerlegt. Ab einer bestimmten Maßstabsstufe (Zoomstufe 12) führt ein weiterer Klick dazu, dass eine Explosionsgraphik der zusammengefassten POI angezeigt wird."]})]})}},{title:"POI auswählen und abfragen",bsStyle:"secondary",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:["Bewegen Sie den Mauszeiger im Kartenfenster auf einen konkreten Einzel-POI, um sich seine Bezeichnung anzeigen zu lassen. Ein Klick auf das zugehörige POI-Symbol setzt den Fokus auf diesen POI. Er wird dann blau hinterlegt und die zugehörigen Informationen (Bezeichnung, Info-Text und ggf. Adresse) werden in der Info-Box (unten rechts) angezeigt. (Auf einem Tablet-PC wird der Fokus durch das erste Antippen des Angebots gesetzt, das zweite Antippen blendet die Bezeichnung ein.) Außerdem werden Ihnen in der Info-Box weiterführende (Kommunikations-) Links zum POI angezeigt: ",e.jsx(n,{name:"external-link-square"})," ","Internet, ",e.jsx(n,{name:"envelope-square"})," E-Mail und"," ",e.jsx(n,{name:"phone"})," Telefon. Bei POI, zu denen im Terminkalender von"," ",e.jsx("a",{href:"https://wuppertal-live.de",children:"www.wuppertal-live.de"})," ","Veranstaltungen geführt werden, finden sie zusätzlich noch eine ",e.jsx(n,{name:"calendar"})," Verknüpfung zu wuppertal-live.de, wo sie für viele Veranstaltungen auch Online-Tickets erwerben können. Mit dem Lupensymbol"," ",e.jsx(Y,{icon:J})," wird die Karte auf den POI, der gerade den Fokus hat, zentriert und gleichzeitig ein großer Betrachtungsmaßstab (Zoomstufe 15) eingestellt."," "]}),e.jsxs("p",{children:["Wenn Sie noch nicht aktiv einen bestimmten POI im aktuellen Kartenausschnitt selektiert haben, wird der Fokus automatisch auf den nördlichsten POI gesetzt. Mit den Funktionen ",e.jsx("a",{children:"<<"})," vorheriger Treffer und ",e.jsx("a",{children:">>"})," nächster Treffer können Sie in nördlicher bzw. südlicher Richtung alle aktuell im Kartenfenster angezeigten POI durchmustern."]}),e.jsxs("p",{children:["Mit der Schaltfläche"," ",e.jsx(n,{name:"chevron-circle-down"})," im dunkelgrau abgesetzten rechten Rand der Info-Box lässt sich diese so verkleinern, dass nur noch die Kategorisierung und die Bezeichnung des POI sowie die Link-Symbole angezeigt werden - nützlich für Endgeräte mit kleinem Display. Mit der Schaltfläche"," ",e.jsx(n,{name:"chevron-circle-up"})," an derselben Stelle können Sie die Info-Box dann wieder vollständig einblenden."]})]})}},{title:"In Karte positionieren",bsStyle:"secondary",contentBlockConf:{type:"REACTCOMP",content:e.jsx(te,{pretext:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Um eine bestimmte Stelle des Stadtgebietes zu erkunden, geben Sie den Namen eines Stadtteils (Stadtbezirk oder Quartier), eine Adresse, einen Straßennamen oder den Namen eines POI im Eingabefeld links unten ein. In der inkrementellen Auswahlliste werden Ihnen schon nach der Eingabe des ersten Buchstabens passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, wird der Inhalt der Auswahlliste angepasst.) Durch das vorangestellte Symbol erkennen Sie, ob es sich dabei um einen ",e.jsx(n,{name:"circle"})," Stadtbezirk, ein ",e.jsx(n,{name:"pie-chart"})," Quartier, eine"," ",e.jsx(n,{name:"home"})," Adresse, eine"," ",e.jsx(n,{name:"road"})," Straße ohne zugeordnete Hausnummern, einen ",e.jsx(n,{name:"tag"})," POI, die"," ",e.jsx(n,{name:"tags"})," alternative Bezeichnung eines POI, eine ",e.jsx(n,{name:"child"})," ","Kindertageseinrichtung oder eine"," ",e.jsx(n,{name:"graduation-cap"})," Schule handelt."]}),e.jsx(se,{})]})})}},{title:"Mein Standort",bsStyle:"secondary",contentBlockConf:{type:"REACTCOMP",content:e.jsx(re,{})}},{title:"Mein Kulturstadtplan",bsStyle:"primary",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[" ",e.jsxs("p",{children:['Unter "',e.jsx("strong",{children:"Mein Kulturstadtplan"}),'" finden sie im Anwendungsmenü zwei alternative Möglichkeiten, die Menge der angezeigten POI gemäß Ihren Vorlieben einzuschränken. Auf zwei angedeuteten Karteikarten wird zum einen das Filtern nach Kategorien von Einrichtungen angeboten, zum anderen das Filtern nach Kategorien von Veranstaltungen, die an den zugehörigen POI typischerweise angeboten werden. Der Titel der gerade nicht sichtbaren Karteikarte wird als'," ",e.jsx("a",{children:"Hyperlink"})," dargestellt. Zum Wechsel zwischen den beiden Karteikarten klicken Sie auf den jeweils verfügbaren Link."]}),e.jsx("p",{children:"Auf den beiden Karteikarten wird Ihnen eine Liste von Einrichtungs- bzw. Veranstaltungskategorien angeboten. Die Auswahl erfolgt durch Anklicken des (leeren) Kontrollkästchens vor dem jeweiligen Listenelement, die Abwahl durch erneutes Anklicken dieses Kästchens. Die beiden Filterbereiche werden nicht logisch miteinander verknüpft. Für die Filterung wird immer nur die Auswahl auf der im Anwendungsmenü sichtbaren Karteikarte ausgewertet."}),e.jsx("p",{children:"Als Vorschau für die Wirkung ihrer Filtereinstellungen wird Ihnen auf beiden Karteikarten ein Donut-Diagramm angezeigt, das die Anzahl der herausgefilterten POI und ihre Verteilung auf die Einrichtungskategorien anzeigt. Bewegen Sie dazu den Mauszeiger auf eines der farbigen Segmente des Diagramms. (Bei einem Gerät mit Touchscreen tippen Sie auf eines der farbigen Segmente.)"})]})}},{title:"Einstellungen",bsStyle:"success",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:['Unter "',e.jsx("strong",{children:"Einstellungen"}),'" können Sie im Anwendungsmenü ',e.jsx(n,{name:"bars"})," ",'festlegen, wie die POI und die Hintergrundkarte angezeigt werden sollen. Zu den POI können Sie auswählen, ob Ihre unter "',e.jsx("strong",{children:"Mein Kulturstadtplan"}),'" festgelegte Filterung in einer Titelzeile ausgeprägt wird oder nicht. Weiter können Sie festlegen, ob räumlich nah beieinander liegende POI maßstabsabhängig zu einem Punktsymbol zusammengefasst werden oder nicht. Unter "',e.jsx("em",{children:e.jsx("strong",{children:"Symbolgröße"})}),'" können Sie in Abhängigkeit von Ihrer Bildschirmauflösung und Ihrem Sehvermögen auswählen, ob die POI mit kleinen (25 Pixel), mittleren (35 Pixel) oder großen (45 Pixel) Symbolen angezeigt werden.']}),e.jsxs("p",{children:['Unter "',e.jsx("em",{children:e.jsx("strong",{children:"Hintergrundkarte"})}),'" können Sie auswählen, ob Sie die standardmäßig aktivierte farbige Hintergrundkarte verwenden möchten ("',e.jsx("em",{children:"Stadtplan (Tag)"}),'") oder lieber eine invertierte Graustufenkarte ("',e.jsx("em",{children:"Stadtplan (Nacht)"}),'"), zu der uns die von vielen PKW-Navis bei Dunkelheit eingesetzte Darstellungsweise inspiriert hat.'," ",e.jsx("strong",{children:"Hinweis:"})," Der Stadtplan (Nacht) wird Ihnen nur angeboten, wenn Ihr Browser CSS3-Filtereffekte unterstützt, also z. B. nicht beim Microsoft Internet Explorer. Die Nacht-Karte erzeugt einen deutlicheren Kontrast mit den farbigen POI-Symbolen, die unterschiedlichen Flächennutzungen in der Hintergrundkarte lassen sich aber nicht mehr so gut unterscheiden wie in der Tag-Karte. Als dritte Möglichkeit steht eine Luftbildkarte zur Verfügung, die die Anschaulichkeit des Luftbildes mit der Eindeutigkeit des Stadtplans (Kartenschrift, durchscheinende Linien) verbindet."," "]}),e.jsx("p",{children:"Im Vorschaubild sehen Sie direkt die prinzipielle Wirkung ihrer Einstellungen."})]})}},{title:"Personalisierung",bsStyle:"success",contentBlockConf:{type:"REACTCOMP",content:e.jsx("p",{children:"Ihre Filterauswahl und Einstellungen bleiben auch nach einem Neustart der Anwendung erhalten. (Es sei denn, Sie löschen den Browser-Verlauf einschließlich der gehosteten App-Daten.) Damit können Sie unseren Kulturstadtplan mit wenigen Klicks dauerhaft für sich optimieren."})}}]}]})},"help");q.__docgenInfo={description:"",methods:[],displayName:"KompaktanleitungSection"};const Q=({version:t,setAppMenuActiveMenuSection:r})=>e.jsx(ie,{title:"Kulturstadtplan Wuppertal",version:t,setAppMenuActiveMenuSection:r});Q.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{version:{required:!0,tsType:{name:"string"},description:""},setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""}}};const Ke={title:"Kulturstadtplan"},s={render:()=>e.jsx("div",{children:ae})},a={render:()=>e.jsx(de,{})},o={render:()=>e.jsx(_,{setAppMenuVisible:h("setAppMenuVisible"),setAppMenuActiveMenuSection:h("setAppMenuActiveMenuSection")})},d={render:()=>e.jsx(oe,{})},l={render:()=>e.jsx(le,{})},u={render:()=>e.jsx($,{appKey:"storybook-appkey",children:e.jsx("div",{children:e.jsx(Z,{setAppMenuActiveMenuSection:h("setAppMenuActiveMenuSection")})})})},c={render:()=>{const t={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh"};return e.jsx("div",{id:"myMenu",style:t,children:e.jsx(q,{})})}},g={render:()=>e.jsx(Q,{version:"xyz",setAppMenuActiveMenuSection:h("setAppMenuActiveMenuSection")})},m={render:()=>e.jsxs("div",{children:[e.jsx(p,{sectionBsStyle:he,sectionTitle:me(100,10)}),e.jsx(p,{sectionBsStyle:G,sectionTitle:U})]})};var k,x,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var b,w,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextTitle />;
  }
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var j,y,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextContent setAppMenuVisible={action("setAppMenuVisible")} setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />;
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var M,z,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <MenuTooltip />;
  }
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var T,P,K;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <MenuTitle />;
  }
}`,...(K=(P=l.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var O,B,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
        </div>
      </TopicMapContextProvider>;
  }
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var E,F,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var L,V,H;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    return <Footer version="xyz" setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />;
  }
}`,...(H=(V=g.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var N,R,W;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Section sectionBsStyle={FilterStyle} sectionTitle={getFilterHeader(100, 10)} />
        <Section sectionBsStyle={KompaktAnleitungStyle} sectionTitle={KompaktAnleitungTitle} />
      </div>;
  }
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const Oe=["TextInSearchPlaceholder","TextInInfoBoxTitle","TextInInfoBoxContent","menuTooltipString","TitleMenu","IntroductionMenu","Kompaktanleitung","MenuFooter","SecionTitles"];export{u as IntroductionMenu,c as Kompaktanleitung,g as MenuFooter,m as SecionTitles,o as TextInInfoBoxContent,a as TextInInfoBoxTitle,s as TextInSearchPlaceholder,l as TitleMenu,Oe as __namedExportsOrder,Ke as default,d as menuTooltipString};
