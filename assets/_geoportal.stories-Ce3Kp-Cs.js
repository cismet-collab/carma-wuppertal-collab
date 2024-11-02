import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as C,T as M}from"./TopicMapContextProvider-DiRhNVvh.js";import{G as T}from"./ModalApplicationMenu-DE4YMN3d.js";import{r as j}from"./index-CTjT7uj6.js";import{F as h,H as f,a as s,C as y,b as H,c as I,d as P}from"./DemoGif-Cr4rKz6f.js";import"./EMobiModal-c8vZmT1p.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-CsKeTCLp.js";import"./index-CeejqomF.js";const b="Kompaktanleitung und Hintergrundinformationen",K="Wohin?",k=({versionString:r,showOverlayFromOutside:i=()=>{}})=>{const S=()=>{const{setAppMenuActiveMenuSection:v}=j.useContext(C);return e.jsx(h,{version:r,setAppMenuActiveMenuSection:v})};return{menuIntroduction:e.jsx(f,{showOverlayFromOutside:i}),menuSectionMeinStandort:e.jsx(s,{showOverlayFromOutside:i}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(y,{},"Datengrundlage"),e.jsx(H,{},"InKartePositionieren"),e.jsx(s,{},"MeinStandort"),e.jsx(I,{},"Haftungsausschluss"),e.jsx(P,{},"zwilling")],menuFooter:e.jsx(S,{})}},Y={title:"Geoportal"},o={render:()=>e.jsx(M,{appKey:"storybook-appkey",children:e.jsx(T,{...k({versionString:"xyz"}),visible:!0})})},n={render:()=>e.jsx("div",{children:K})},t={render:()=>e.jsx("div",{children:b})};var a,p,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const versionString = "xyz";
    return <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu {...getCollabedHelpComponentConfig({
        versionString
      })} visible={true} />
      </TopicMapContextProvider>;
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,x,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Z=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{o as KompletterModalerDialog,n as TextInSearchPlaceholder,t as TextTooltip,Z as __namedExportsOrder,Y as default};
