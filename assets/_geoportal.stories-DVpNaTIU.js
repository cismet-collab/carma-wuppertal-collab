import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as M,T as f}from"./TopicMapContextProvider-fHeB4ya5.js";import{G as S}from"./ModalApplicationMenu-Chfz_gdX.js";import{r as H}from"./index-CTjT7uj6.js";import{C as K,H as P,a as b,b as y,c as I,d as k,F as D,e as z}from"./DemoGif-BpDIu0-g.js";import"./EMobiRadModal-Ch7jsass.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-Bob0piC1.js";import"./index-DRglUUZi.js";const A="Kompaktanleitung und Hintergrundinformationen",E="Wohin?",G=({versionString:s,showOverlayFromOutside:t=()=>{}})=>{const g=()=>{const{setAppMenuActiveMenuSection:T}=H.useContext(M);return e.jsx(D,{version:s,setAppMenuActiveMenuSection:T})},h=e.jsx(z,{showOverlayFromOutside:t}),j="info",C="Kompaktanleitung und Hintergrundinformationen",v=[e.jsx(K,{},"Datengrundlage"),e.jsx(P,{showOverlayFromOutside:t},"InKartePositionieren"),e.jsx(b,{},"KarteninhalteHinzufuegen"),e.jsx(Help35KarteninhalteUntersuchen,{},"KarteninhalteUntersuchen"),e.jsx(y,{showOverlayFromOutside:t},"MeinStandort"),e.jsx(I,{},"Haftungsausschluss"),e.jsx(k,{},"zwilling")];return{menuIntroduction:h,menuIcon:j,menuTitle:C,menuSections:v,menuFooter:e.jsx(g,{})}},Z={title:"Geoportal"},n={render:()=>e.jsx(f,{appKey:"storybook-appkey",children:e.jsx(S,{...G({versionString:"xyz"}),visible:!0})})},r={render:()=>e.jsx("div",{children:E})},o={render:()=>e.jsx("div",{children:A})};var i,a,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const versionString = "xyz";
    return <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu {...getCollabedHelpComponentConfig({
        versionString
      })} visible={true} />
      </TopicMapContextProvider>;
  }
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const w=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{n as KompletterModalerDialog,r as TextInSearchPlaceholder,o as TextTooltip,w as __namedExportsOrder,Z as default};
