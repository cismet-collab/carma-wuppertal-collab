import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as j,T}from"./TopicMapContextProvider-DiRhNVvh.js";import{G as h}from"./ModalApplicationMenu-DE4YMN3d.js";import{r as v}from"./index-CTjT7uj6.js";import{F as f,H as M,C as S,a as K,b as H,c as I,d as P,e as b,f as k,g as y}from"./DemoGif-wrtP-dMG.js";import"./EMobiRadModal-Ch7jsass.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-ChbST2pP.js";import"./index-DRglUUZi.js";const D="Kompaktanleitung und Hintergrundinformationen",$="Wohin?",z=({versionString:s,showOverlayFromOutside:r=()=>{}})=>{const g=()=>{const{setAppMenuActiveMenuSection:C}=v.useContext(j);return e.jsx(f,{version:s,setAppMenuActiveMenuSection:C})};return{menuIntroduction:e.jsx(M,{showOverlayFromOutside:r}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(S,{},"Datengrundlage"),e.jsx(K,{showOverlayFromOutside:r},"InKartePositionieren"),e.jsx(H,{},"KarteninhalteHinzufuegen"),e.jsx(I,{},"KarteninhalteUntersuchen"),e.jsx(P,{},"KartenDrucken"),e.jsx(b,{showOverlayFromOutside:r},"MeinStandort"),e.jsx(k,{},"Haftungsausschluss"),e.jsx(y,{},"zwilling")],menuFooter:e.jsx(g,{})}},O={title:"Geoportal"},n={render:()=>e.jsx(T,{appKey:"storybook-appkey",children:e.jsx(h,{...z({versionString:"xyz"}),visible:!0})})},o={render:()=>e.jsx("div",{children:$})},t={render:()=>e.jsx("div",{children:D})};var i,a,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const versionString = "xyz";
    return <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu {...getCollabedHelpComponentConfig({
        versionString
      })} visible={true} />
      </TopicMapContextProvider>;
  }
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,m,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,d,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const ee=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{n as KompletterModalerDialog,o as TextInSearchPlaceholder,t as TextTooltip,ee as __namedExportsOrder,O as default};
