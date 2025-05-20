import{j as e}from"./jsx-runtime-CiKstLBL.js";import{a as l}from"./index-B-lxVbXh.js";import{M as q,K as D,I as J,F as N,S as Q}from"./SecondaryInfoFooter-BazrP3Gr.js";import{T as U}from"./TopicMapContextProvider-DMmPNyQ8.js";import{G as x}from"./Section-CKMWhtWl.js";import"./index-CoXXcpNP.js";import"./v4-CtRu48qb.js";import"./ConfigurableDocBlocks-DNFdPQIi.js";import"./Card-jWAGKBuD.js";import"./index-BOR0u_yr.js";import"./CustomizationContextProvider-CEe6qQic.js";import"./index-wgoXybnB.js";import"./InKartePositionierenText-C-Cnt7F1.js";import"./MeinStandpunktMarkerMitKompass-CGICdwB8.js";import"./FuzzySearchParagraph-ClfIvOTd.js";import"./ResponsiveTopicMapContextProvider-BGhCEb85.js";const W=()=>"Filter, Einstellungen und Kompaktanleitung",Z=()=>"Keine Stationen Gefunden!",ee="Ladestation | Verleih | Adresse",re=()=>"Filter | Einstellungen | Kompaktanleitung",ne=(p,V)=>{let m;return m="Angebote",`Filter (${p} ${m} gefunden, davon ${V} in der Karte)`},te="primary",oe="Kompaktanleitung",se="default",he={title:"E-bikes"},r={render:()=>e.jsx(W,{})},n={render:()=>e.jsx(U,{appKey:"storybook-appkey",children:e.jsx("div",{children:e.jsx(q,{setAppMenuActiveMenuSection:l("setAppMenuActiveMenuSection")})})})},t={render:()=>{const p={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh"};return e.jsx("div",{id:"myMenu",style:p,children:e.jsx(D,{})})}},o={render:()=>e.jsx(Z,{})},s={render:()=>e.jsx(J,{})},i={render:()=>e.jsx("div",{children:ee})},a={render:()=>e.jsx(re,{})},c={render:()=>e.jsx(N,{version:"xyz",setAppMenuActiveMenuSection:l("setAppMenuActiveMenuSection")})},d={render:()=>e.jsx("div",{style:{width:"900px"},children:e.jsx(Q,{close:l("close"),version:"xyz"})})},u={render:()=>e.jsxs("div",{children:[e.jsx(x,{sectionBsStyle:te,sectionTitle:ne(100,10)}),e.jsx(x,{sectionBsStyle:se,sectionTitle:oe})]})};var S,v,M;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <MenuTitle />;
  }
}`,...(M=(v=r.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var T,y,g;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
        </div>
      </TopicMapContextProvider>;
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,h,I;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(h=t.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var A,j,k;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextTitle />;
  }
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var F,K,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextContent />;
  }
}`,...(B=(K=s.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var C,P,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var E,b,z;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return <MenuTooltip />;
  }
}`,...(z=(b=a.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var H,G,$;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    return <Footer version="xyz" setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />;
  }
}`,...($=(G=c.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var X,Y,_;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: "900px"
    }}>
        <SecondaryInfoFooter close={action("close")} version="xyz" />
      </div>;
  }
}`,...(_=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var L,O,R;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Section sectionBsStyle={FilterStyle} sectionTitle={getFilterHeader(100, 10)} />
        <Section sectionBsStyle={KompaktAnleitungStyle} sectionTitle={KompaktAnleitungTitle} />
      </div>;
  }
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Ie=["TitleMenu","IntroductionMenu","Kompaktanleitung","TextInInfoBoxTitle","TextInInfoBoxContent","TextInSearchPlaceholder","menuTooltipString","MenuFooter","InfoFooter","SecionTitles"];export{d as InfoFooter,n as IntroductionMenu,t as Kompaktanleitung,c as MenuFooter,u as SecionTitles,s as TextInInfoBoxContent,o as TextInInfoBoxTitle,i as TextInSearchPlaceholder,r as TitleMenu,Ie as __namedExportsOrder,he as default,a as menuTooltipString};
