import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as j,T}from"./TopicMapContextProvider-fHeB4ya5.js";import{G as h}from"./ModalApplicationMenu-Chfz_gdX.js";import{r as f}from"./index-CTjT7uj6.js";import{F as v,H as M,C as S,a as H,b as K,c as I,d as P,e as k,f as b,g as y}from"./DemoGif-DyP36UQU.js";import"./EMobiRadModal-CdtN_Rkq.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-CHrTkiVF.js";import"./index-jqfg6c5U.js";const A="Kompaktanleitung und Hintergrundinformationen",D="Wohin?",$=({versionString:s,showOverlayFromOutside:n=()=>{}})=>{const g=()=>{const{setAppMenuActiveMenuSection:C}=f.useContext(j);return e.jsx(v,{version:s,setAppMenuActiveMenuSection:C})};return{menuIntroduction:e.jsx(M,{showOverlayFromOutside:n}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(S,{},"zwilling"),e.jsx(H,{showOverlayFromOutside:n},"HintergrundkarteAuswaehlen"),e.jsx(K,{showOverlayFromOutside:n},"InKartePositionieren"),e.jsx(I,{},"KarteninhalteHinzufuegen"),e.jsx(P,{},"KarteninhalteUntersuchen"),e.jsx(k,{},"KartenDrucken"),e.jsx(b,{showOverlayFromOutside:n},"MeinStandort"),e.jsx(y,{},"Haftungsausschluss")],menuFooter:e.jsx(g,{})}},O={title:"Geoportal"},o={render:()=>e.jsx(T,{appKey:"storybook-appkey",children:e.jsx(h,{...$({versionString:"xyz"}),visible:!0})})},t={render:()=>e.jsx("div",{children:D})},r={render:()=>e.jsx("div",{children:A})};var i,a,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const versionString = "xyz";
    return <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu {...getCollabedHelpComponentConfig({
        versionString
      })} visible={true} />
      </TopicMapContextProvider>;
  }
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,d,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(x=(d=r.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const ee=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{o as KompletterModalerDialog,t as TextInSearchPlaceholder,r as TextTooltip,ee as __namedExportsOrder,O as default};
