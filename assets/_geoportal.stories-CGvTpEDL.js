import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as v}from"./TopicMapContextProvider-DwM_zj5L.js";import{G as C}from"./ModalApplicationMenu-Dc6RFnbF.js";import{r as T}from"./index-RYns6xqu.js";import{F as h,H as j,C as f,a as M,b as S,c as y,d as I}from"./Footer-DY2iwSly.js";import{D as P}from"./Section-DXPkuWLL.js";import"./inheritsLoose-Bt6Ne3b9.js";import"./index-DNUR7M9R.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./_baseClone-DwyQSMPx.js";import"./_getPrototype-Dwr3C2Zh.js";import"./Modal-Dz-rQmEQ.js";import"./Card-zt9Fd8to.js";import"./index-DvoZgHAm.js";import"./InKartePositionierenText-BUeZmqRB.js";import"./index-BWUJEnKi.js";const b="Kompaktanleitung und Hintergrundinformationen",H="Wohin?",K=({versionString:t})=>{const x=()=>{const{setAppMenuActiveMenuSection:g}=T.useContext(P);return e.jsx(h,{version:t,setAppMenuActiveMenuSection:g})};return{menuIntroduction:e.jsx(j,{}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(f,{},"Datengrundlage"),e.jsx(M,{},"InKartePositionieren"),e.jsx(S,{},"MeinStandort"),e.jsx(y,{},"Haftungsausschluss"),e.jsx(I,{},"zwilling")],menuFooter:e.jsx(x,{})}},V={title:"Geoportal"},o={render:()=>e.jsx(v,{appKey:"storybook-appkey",children:e.jsx(C,{...K({versionString:"xyz"}),visible:!0})})},r={render:()=>e.jsx("div",{children:H})},n={render:()=>e.jsx("div",{children:b})};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const X=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{o as KompletterModalerDialog,r as TextInSearchPlaceholder,n as TextTooltip,X as __namedExportsOrder,V as default};
