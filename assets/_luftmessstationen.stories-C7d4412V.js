import{j as e}from"./jsx-runtime-CiKstLBL.js";import{a as O}from"./index-B-lxVbXh.js";import{T as Y}from"./TopicMapContextProvider-BTaAsJl2.js";import{I as _,M as q,K as R,F as D,S as J}from"./SecondaryInfoFooter-yGKjbwPu.js";import{G as l}from"./Section-8HFr_G_s.js";import"./index-CoXXcpNP.js";import"./v4-CtRu48qb.js";import"./leaflet-src-CpR2ONvF.js";import"./ResponsiveTopicMapContextProvider-C4p60gUI.js";import"./setPrototypeOf-BCvhvFfc.js";import"./index-BOR0u_yr.js";import"./ConfigurableDocBlocks-BPiecYpw.js";import"./CustomizationContextProvider-CEe6qQic.js";import"./InKartePositionierenText-CYzeFVF0.js";import"./MeinStandpunktMarkerMitKompass-BfBllSap.js";import"./FuzzySearchParagraph-ClfIvOTd.js";const N="Stadtteil | Adresse | POI",Q=()=>"Filter | Einstellungen | Anleitung",U=()=>"Filter, Einstellungen und Kompaktanleitung",V=(d,X)=>{let p;return p="Angebote",`Messstationen der Luftqualität (${d} ${p} gefunden, davon ${X} in der Karte)`},W="primary",Z="Kompaktanleitung",ee="default",Me={title:"Luftmessstationen"},r={render:()=>e.jsx("div",{children:N})},n={render:()=>e.jsx(_,{})},t={render:()=>e.jsx(Q,{})},o={render:()=>e.jsx(U,{})},s={render:()=>e.jsx(Y,{appKey:"storybook-appkey",children:e.jsx("div",{children:e.jsx(q,{setAppMenuActiveMenuSection:O("setAppMenuActiveMenuSection")})})})},i={render:()=>{const d={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh"};return e.jsx("div",{id:"myMenu",style:d,children:e.jsx(R,{})})}},a={render:()=>e.jsx(D,{version:"xyz",setAppMenuActiveMenuSection:O("setAppMenuActiveMenuSection")})},c={render:()=>e.jsx("div",{style:{width:"900px"},children:e.jsx(J,{version:"xyz"})})},u={render:()=>e.jsxs("div",{children:[e.jsx(l,{sectionBsStyle:W,sectionTitle:V(100,10)}),e.jsx(l,{sectionBsStyle:ee,sectionTitle:Z})]})};var m,S,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var v,M,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextContent />;
  }
}`,...(y=(M=n.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var g,T,A;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <MenuTooltip />;
  }
}`,...(A=(T=t.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var f,h,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <MenuTitle />;
  }
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var j,F,k;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
        </div>
      </TopicMapContextProvider>;
  }
}`,...(k=(F=s.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var K,B,P;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var C,w,z;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <Footer version="xyz" setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />;
  }
}`,...(z=(w=a.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var E,H,b;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: "900px"
    }}>
        <SecondaryInfoFooter version="xyz" />
      </div>;
  }
}`,...(b=(H=c.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var $,G,L;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Section sectionBsStyle={FilterStyle} sectionTitle={getFilterHeader(100, 10)} />
        <Section sectionBsStyle={KompaktAnleitungStyle} sectionTitle={KompaktAnleitungTitle} />
      </div>;
  }
}`,...(L=(G=u.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const ye=["TextInSearchPlaceholder","TextInInfoBoxContent","menuTooltipString","TitleMenu","IntroductionMenu","Kompaktanleitung","MenuFooter","InfoFooter","SecionTitles"];export{c as InfoFooter,s as IntroductionMenu,i as Kompaktanleitung,a as MenuFooter,u as SecionTitles,n as TextInInfoBoxContent,r as TextInSearchPlaceholder,o as TitleMenu,ye as __namedExportsOrder,Me as default,t as menuTooltipString};
