import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{T as v}from"./TopicMapContextProvider-GSIvl7Q-.js";import{G as C}from"./ModalApplicationMenu-BDmdn6M-.js";import{r as T}from"./index-CTjT7uj6.js";import{F as h,H as j,C as f,a as M,b as S,c as y,d as I}from"./DemoGif-mjKxG1GZ.js";import{D as P}from"./Section-5I4D0bfc.js";import"./EMobiModal-D5Mvee0D.js";import"./inheritsLoose-D4WLrkXa.js";import"./index-BRV0Se7Z.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./_baseClone-DKxiyT0B.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-DNmc0cUl.js";import"./Card-Ckt1z5JF.js";import"./index-BqsmnRTQ.js";import"./InKartePositionierenText-CzA6eNhz.js";import"./index-CeejqomF.js";const b="Kompaktanleitung und Hintergrundinformationen",H="Wohin?",K=({versionString:n})=>{const x=()=>{const{setAppMenuActiveMenuSection:g}=T.useContext(P);return e.jsx(h,{version:n,setAppMenuActiveMenuSection:g})};return{menuIntroduction:e.jsx(j,{}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(f,{},"Datengrundlage"),e.jsx(M,{},"InKartePositionieren"),e.jsx(S,{},"MeinStandort"),e.jsx(y,{},"Haftungsausschluss"),e.jsx(I,{},"zwilling")],menuFooter:e.jsx(x,{})}},X={title:"Geoportal"},o={render:()=>e.jsx(v,{appKey:"storybook-appkey",children:e.jsx(C,{...K({versionString:"xyz"}),visible:!0})})},r={render:()=>e.jsx("div",{children:H})},t={render:()=>e.jsx("div",{children:b})};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const Y=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{o as KompletterModalerDialog,r as TextInSearchPlaceholder,t as TextTooltip,Y as __namedExportsOrder,X as default};
