import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as v,T as C}from"./TopicMapContextProvider-DiRhNVvh.js";import{G as T}from"./ModalApplicationMenu-DE4YMN3d.js";import{r as h}from"./index-CTjT7uj6.js";import{F as j,H as M,C as S,a as f,b as y,c as I,d as P}from"./DemoGif-CuY_A-66.js";import"./EMobiModal-c8vZmT1p.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-CsKeTCLp.js";import"./index-CeejqomF.js";const b="Kompaktanleitung und Hintergrundinformationen",H="Wohin?",K=({versionString:t})=>{const x=()=>{const{setAppMenuActiveMenuSection:g}=h.useContext(v);return e.jsx(j,{version:t,setAppMenuActiveMenuSection:g})};return{menuIntroduction:e.jsx(M,{}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(S,{},"Datengrundlage"),e.jsx(f,{},"InKartePositionieren"),e.jsx(y,{},"MeinStandort"),e.jsx(I,{},"Haftungsausschluss"),e.jsx(P,{},"zwilling")],menuFooter:e.jsx(x,{})}},U={title:"Geoportal"},o={render:()=>e.jsx(C,{appKey:"storybook-appkey",children:e.jsx(T,{...K({versionString:"xyz"}),visible:!0})})},r={render:()=>e.jsx("div",{children:H})},n={render:()=>e.jsx("div",{children:b})};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const versionString = "xyz";
    return <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu {...getCollabedHelpComponentConfig({
        versionString
      })} visible={true} />
      </TopicMapContextProvider>;
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const V=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{o as KompletterModalerDialog,r as TextInSearchPlaceholder,n as TextTooltip,V as __namedExportsOrder,U as default};
