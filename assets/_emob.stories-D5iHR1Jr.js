import{j as e}from"./jsx-runtime-CiKstLBL.js";import{a}from"./index-B-lxVbXh.js";import{M as j,K as T,F as B,S as w}from"./SecondaryInfoFooter-GFrZDVva.js";import{T as I}from"./TopicMapContextProvider-DUV4RE9j.js";import{G as p}from"./Section-DKWAqBu0.js";import"./index-CoXXcpNP.js";import"./v4-CtRu48qb.js";import"./ConfigurableDocBlocks-DYaW2HDg.js";import"./Card-jWAGKBuD.js";import"./index-BOR0u_yr.js";import"./CustomizationContextProvider-CEe6qQic.js";import"./index-wgoXybnB.js";import"./InKartePositionierenText-DYOXvLAv.js";import"./MeinStandpunktMarkerMitKompass-CGICdwB8.js";import"./FuzzySearchParagraph-ClfIvOTd.js";import"./ResponsiveTopicMapContextProvider-DsMmH1uG.js";const E=(s,h)=>{let c;return c="Angebote",`Filter (${s} ${c} gefunden, davon ${h} in der Karte)`},z="primary",C="Kompaktanleitung",H="default",V={title:"E-Auto Ladestationskarte"},t={render:()=>e.jsx(I,{appKey:"storybook-appkey",children:e.jsx(j,{setAppMenuActiveMenuSection:a("setAppMenuActiveMenuSection")})})},n={render:()=>{const s={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh"};return e.jsx("div",{id:"myMenu",style:s,children:e.jsx(T,{})})}},o={render:()=>e.jsx(B,{version:"xyz",setAppMenuActiveMenuSection:a("setAppMenuActiveMenuSection")})},r={render:()=>e.jsx("div",{style:{width:"900px"},children:e.jsx(w,{close:a("close"),version:"xyz"})})},i={render:()=>e.jsxs("div",{children:[e.jsx(p,{sectionBsStyle:z,sectionTitle:E(100,10)}),e.jsx(p,{sectionBsStyle:H,sectionTitle:C})]})};var u,d,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
      </TopicMapContextProvider>;
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,S,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,M,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <Footer version="xyz" setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />;
  }
}`,...(x=(M=o.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var g,A,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: "900px"
    }}>
        <SecondaryInfoFooter close={action("close")} version="xyz" />
      </div>;
  }
}`,...(f=(A=r.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var k,F,K;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Section sectionBsStyle={FilterStyle} sectionTitle={getFilterHeader(100, 10)} />
        <Section sectionBsStyle={KompaktAnleitungStyle} sectionTitle={KompaktAnleitungTitle} />
      </div>;
  }
}`,...(K=(F=i.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const W=["MenuEinleitung","Kompaktanleitung","MenuFooter","InfoFooter","SecionTitles"];export{r as InfoFooter,n as Kompaktanleitung,t as MenuEinleitung,o as MenuFooter,i as SecionTitles,W as __namedExportsOrder,V as default};
