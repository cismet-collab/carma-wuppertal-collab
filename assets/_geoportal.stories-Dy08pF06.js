import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as v,T as C}from"./TopicMapContextProvider-fHeB4ya5.js";import{G as j}from"./ModalApplicationMenu-Chfz_gdX.js";import{r as M}from"./index-CTjT7uj6.js";import{F as S,H as f,C as h,a as H,b as I,c as P,d as K}from"./DemoGif-CLTJ568e.js";import"./EMobiModal-B7DnkAqW.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-aJ-fgHX7.js";import"./index-CC161Io6.js";const b="Kompaktanleitung und Hintergrundinformationen",y="Wohin?",k=({versionString:i,showOverlayFromOutside:t=()=>{}})=>{const g=()=>{const{setAppMenuActiveMenuSection:T}=M.useContext(v);return e.jsx(S,{version:i,setAppMenuActiveMenuSection:T})};return{menuIntroduction:e.jsx(f,{showOverlayFromOutside:t}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(h,{},"Datengrundlage"),e.jsx(H,{showOverlayFromOutside:t},"InKartePositionieren"),e.jsx(I,{showOverlayFromOutside:t},"MeinStandort"),e.jsx(P,{},"Haftungsausschluss"),e.jsx(K,{},"zwilling")],menuFooter:e.jsx(g,{})}},Y={title:"Geoportal"},o={render:()=>e.jsx(C,{appKey:"storybook-appkey",children:e.jsx(j,{...k({versionString:"xyz"}),visible:!0})})},r={render:()=>e.jsx("div",{children:y})},n={render:()=>e.jsx("div",{children:b})};var s,a,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const versionString = "xyz";
    return <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu {...getCollabedHelpComponentConfig({
        versionString
      })} visible={true} />
      </TopicMapContextProvider>;
  }
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const Z=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{o as KompletterModalerDialog,r as TextInSearchPlaceholder,n as TextTooltip,Z as __namedExportsOrder,Y as default};
