import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as j,T as h}from"./TopicMapContextProvider-fHeB4ya5.js";import{G as T}from"./ModalApplicationMenu-Chfz_gdX.js";import{r as v}from"./index-CTjT7uj6.js";import{F as f,H as M,C as S,a as H,b as K,c as I,d as P,e as k,f as b,g as y}from"./DemoGif-ipSjU5jW.js";import"./EMobiRadModal-Ch7jsass.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-Bob0piC1.js";import"./index-DRglUUZi.js";const A="Kompaktanleitung und Hintergrundinformationen",D="Wohin?",$=({versionString:s,showOverlayFromOutside:t=()=>{}})=>{const g=()=>{const{setAppMenuActiveMenuSection:C}=v.useContext(j);return e.jsx(f,{version:s,setAppMenuActiveMenuSection:C})};return{menuIntroduction:e.jsx(M,{showOverlayFromOutside:t}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(S,{},"zwilling"),e.jsx(H,{},"HintergrundkarteAuswaehlen"),e.jsx(K,{showOverlayFromOutside:t},"InKartePositionieren"),e.jsx(I,{},"KarteninhalteHinzufuegen"),e.jsx(P,{},"KarteninhalteUntersuchen"),e.jsx(k,{},"KartenDrucken"),e.jsx(b,{showOverlayFromOutside:t},"MeinStandort"),e.jsx(y,{},"Haftungsausschluss")],menuFooter:e.jsx(g,{})}},O={title:"Geoportal"},n={render:()=>e.jsx(h,{appKey:"storybook-appkey",children:e.jsx(T,{...$({versionString:"xyz"}),visible:!0})})},o={render:()=>e.jsx("div",{children:D})},r={render:()=>e.jsx("div",{children:A})};var i,a,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const versionString = "xyz";
    return <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu {...getCollabedHelpComponentConfig({
        versionString
      })} visible={true} />
      </TopicMapContextProvider>;
  }
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,d,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(x=(d=r.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const ee=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{n as KompletterModalerDialog,o as TextInSearchPlaceholder,r as TextTooltip,ee as __namedExportsOrder,O as default};
