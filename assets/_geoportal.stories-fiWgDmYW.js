import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as T,T as j}from"./TopicMapContextProvider-DiRhNVvh.js";import{G as v}from"./ModalApplicationMenu-DE4YMN3d.js";import{r as M}from"./index-CTjT7uj6.js";import{F as S,H as f,C as h,a as H,b as I,c as K,d as P,e as b}from"./DemoGif-CNPoY1Ix.js";import"./EMobiRadModal-Ch7jsass.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-ChbST2pP.js";import"./index-DRglUUZi.js";const k="Kompaktanleitung und Hintergrundinformationen",y="Wohin?",D=({versionString:i,showOverlayFromOutside:n=()=>{}})=>{const g=()=>{const{setAppMenuActiveMenuSection:C}=M.useContext(T);return e.jsx(S,{version:i,setAppMenuActiveMenuSection:C})};return{menuIntroduction:e.jsx(f,{showOverlayFromOutside:n}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(h,{},"Datengrundlage"),e.jsx(H,{showOverlayFromOutside:n},"InKartePositionieren"),e.jsx(I,{showOverlayFromOutside:n},"KarteninhalteHinzufuegen"),e.jsx(K,{showOverlayFromOutside:n},"MeinStandort"),e.jsx(P,{},"Haftungsausschluss"),e.jsx(b,{},"zwilling")],menuFooter:e.jsx(g,{})}},Z={title:"Geoportal"},o={render:()=>e.jsx(j,{appKey:"storybook-appkey",children:e.jsx(v,{...D({versionString:"xyz"}),visible:!0})})},r={render:()=>e.jsx("div",{children:y})},t={render:()=>e.jsx("div",{children:k})};var s,a,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const w=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{o as KompletterModalerDialog,r as TextInSearchPlaceholder,t as TextTooltip,w as __namedExportsOrder,Z as default};
