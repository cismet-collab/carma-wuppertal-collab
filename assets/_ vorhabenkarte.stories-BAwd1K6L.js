import{j as e}from"./jsx-runtime-CiKstLBL.js";import{a as l}from"./index-B-lxVbXh.js";import{M as D,K as J,F as L,S as N,I as Q}from"./InfoBoxTextContent-Dn4Opu3r.js";import{T as U}from"./TopicMapContextProvider-D9ezyiNu.js";import{G as x}from"./Section-sUH94gHW.js";import"./index-CoXXcpNP.js";import"./v4-CtRu48qb.js";import"./ConfigurableDocBlocks-S-3m6UmC.js";import"./react-markdown-Qh2k-FH8.js";import"./index-BL0hGrs8.js";import"./index-C2sH1ddT.js";import"./leaflet-src-CpR2ONvF.js";import"./setPrototypeOf-CkMXiYaH.js";import"./CustomizationContextProvider-CEe6qQic.js";import"./MeinStandpunktMarkerMitKompass-DkOKJyrr.js";import"./InKartePositionierenText-BPN8w9V_.js";import"./FuzzySearchParagraph-NC9kWKjC.js";import"./ResponsiveTopicMapContextProvider-ByNYSwTA.js";import"./index-BOR0u_yr.js";const W=(d,q)=>{let m;return m="Angebote",`Filter (${d} ${m} gefunden, davon ${q} in der Karte)`},Z="primary",ee="Kompaktanleitung",re="default",ne=()=>"Keine Vorhaben gefunden!",te="Vorhaben | Adressen | POI",oe=()=>"Filter | Einstellungen | Kompaktanleitung",se=()=>"Filter, Einstellungen und Kompaktanleitung",je={title:"Vorhabenkarte"},r={render:()=>e.jsx(se,{})},n={render:()=>e.jsx("div",{children:te})},t={render:()=>e.jsx(oe,{})},o={render:()=>e.jsx(U,{appKey:"storybook-appkey",children:e.jsx(D,{setAppMenuActiveMenuSection:l("setAppMenuActiveMenuSection")})})},s={render:()=>{const d={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh"};return e.jsx("div",{id:"myMenu",style:d,children:e.jsx(J,{})})}},i={render:()=>e.jsx(L,{version:"xyz",setAppMenuActiveMenuSection:l("setAppMenuActiveMenuSection")})},a={render:()=>e.jsx("div",{style:{width:"900px"},children:e.jsx(N,{close:l("close"),version:"xyz"})})},c={render:()=>e.jsxs("div",{children:[e.jsx(x,{sectionBsStyle:Z,sectionTitle:W(100,10)}),e.jsx(x,{sectionBsStyle:re,sectionTitle:ee})]})},u={render:()=>e.jsx(ne,{})},p={render:()=>e.jsx(Q,{})};var S,M,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <MenuTitle />;
  }
}`,...(T=(M=r.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var g,v,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,h,A;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <MenuTooltip />;
  }
}`,...(A=(h=t.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var I,j,k;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
      </TopicMapContextProvider>;
  }
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var F,K,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(K=s.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var P,C,b;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <Footer version="xyz" setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />;
  }
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var w,E,z;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: "900px"
    }}>
        <SecondaryInfoFooter close={action("close")} version="xyz" />
      </div>;
  }
}`,...(z=(E=a.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var H,V,$;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Section sectionBsStyle={FilterStyle} sectionTitle={getFilterHeader(100, 10)} />
        <Section sectionBsStyle={KompaktAnleitungStyle} sectionTitle={KompaktAnleitungTitle} />
      </div>;
  }
}`,...($=(V=c.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var G,O,X;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextTitle />;
  }
}`,...(X=(O=u.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var Y,_,R;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextContent />;
  }
}`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const ke=["TitleMenu","TextInSearchPlaceholder","menuTooltipString","MenuEinleitung","Kompaktanleitung","MenuFooter","InfoFooter","SecionTitles","TextInInfoBoxTitle","TextInInfoBoxContent"];export{a as InfoFooter,s as Kompaktanleitung,o as MenuEinleitung,i as MenuFooter,c as SecionTitles,p as TextInInfoBoxContent,u as TextInInfoBoxTitle,n as TextInSearchPlaceholder,r as TitleMenu,ke as __namedExportsOrder,je as default,t as menuTooltipString};
