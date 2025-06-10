import{j as e}from"./jsx-runtime-CiKstLBL.js";import{a as n}from"./index-B-lxVbXh.js";import{T as D}from"./TopicMapContextProvider-D7yWJTtE.js";import{I as J,M as L,K as N,F as Q,S as U}from"./SecondaryInfoFooter-BVkYUenA.js";import{G as M}from"./Section-NlaWjDIO.js";import"./index-CoXXcpNP.js";import"./v4-CtRu48qb.js";import"./ResponsiveTopicMapContextProvider-Dt43E2VW.js";import"./leaflet-src-CpR2ONvF.js";import"./index-BOR0u_yr.js";import"./ConfigurableDocBlocks-BAkbCyqf.js";import"./CustomizationContextProvider-CEe6qQic.js";import"./MeinStandpunktMarkerMitKompass-BJoUhX3R.js";import"./InKartePositionierenText-BNJe0SYc.js";import"./FuzzySearchParagraph-ClfIvOTd.js";const W="P+R | B+R | Stadtteil | Adresse | POI",Z=()=>"Filter | Einstellungen | Kompaktanleitung",ee=()=>"Keine Anlagen gefunden!",ne=()=>"Filter, Einstellungen und Kompaktanleitung",te=(l,q)=>{let m;return m="Angebote",`Filter (${l} ${m} gefunden, davon ${q} in der Karte)`},re="primary",oe="Kompaktanleitung",se="default",ye={title:"X-and-ride"},t={render:()=>e.jsx("div",{children:W})},r={render:()=>e.jsx(ee,{})},o={render:()=>e.jsx(J,{setAppMenuVisible:n("setAppMenuVisible"),setAppMenuActiveMenuSection:n("setAppMenuActiveMenuSection")})},s={render:()=>e.jsx(Z,{})},i={render:()=>e.jsx(ne,{})},c={render:()=>e.jsx(D,{appKey:"storybook-appkey",children:e.jsx("div",{children:e.jsx(L,{setAppMenuActiveMenuSection:n("setAppMenuActiveMenuSection")})})})},a={render:()=>{const l={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh"};return e.jsx("div",{id:"myMenu",style:l,children:e.jsx(N,{setAppMenuActiveMenuSection:n("setAppMenuActiveMenuSection")})})}},u={render:()=>e.jsx(Q,{version:"xyz",setAppMenuActiveMenuSection:n("setAppMenuActiveMenuSection")})},p={render:()=>e.jsx("div",{style:{width:"900px"},children:e.jsx(U,{close:n("close"),version:"xyz"})})},d={render:()=>e.jsxs("div",{children:[e.jsx(M,{sectionBsStyle:re,sectionTitle:te(100,10)}),e.jsx(M,{sectionBsStyle:se,sectionTitle:oe})]})};var S,x,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var A,T,g;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextTitle />;
  }
}`,...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var y,f,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextContent setAppMenuVisible={action("setAppMenuVisible")} setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />;
  }
}`,...(I=(f=o.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var h,j,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <MenuTooltip />;
  }
}`,...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var F,K,k;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return <MenuTitle />;
  }
}`,...(k=(K=i.parameters)==null?void 0:K.docs)==null?void 0:k.source}}};var P,C,b;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
        </div>
      </TopicMapContextProvider>;
  }
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var w,z,E;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const modalBodyStyle: CSSProperties = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh"
    };
    return <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
      </div>;
  }
}`,...(E=(z=a.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var H,V,R;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    return <Footer version="xyz" setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />;
  }
}`,...(R=(V=u.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var X,$,G;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: "900px"
    }}>
        <SecondaryInfoFooter close={action("close")} version="xyz" />
      </div>;
  }
}`,...(G=($=p.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var O,Y,_;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Section sectionBsStyle={FilterStyle} sectionTitle={getFilterHeader(100, 10)} />
        <Section sectionBsStyle={KompaktAnleitungStyle} sectionTitle={KompaktAnleitungTitle} />
      </div>;
  }
}`,...(_=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const fe=["TextInSearchPlaceholder","TextInInfoBoxTitle","TextInInfoBoxContent","menuTooltipString","TitleMenu","IntroductionMenu","Kompaktanleitung","MenuFooter","InfoFooter","SecionTitles"];export{p as InfoFooter,c as IntroductionMenu,a as Kompaktanleitung,u as MenuFooter,d as SecionTitles,o as TextInInfoBoxContent,r as TextInInfoBoxTitle,t as TextInSearchPlaceholder,i as TitleMenu,fe as __namedExportsOrder,ye as default,s as menuTooltipString};
