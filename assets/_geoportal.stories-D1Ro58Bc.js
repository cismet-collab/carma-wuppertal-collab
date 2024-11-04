import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as C,T}from"./TopicMapContextProvider-DiRhNVvh.js";import{G as j}from"./ModalApplicationMenu-DE4YMN3d.js";import{r as M}from"./index-CTjT7uj6.js";import{F as S,H as h,C as f,a as y,b as H,c as I,d as P}from"./DemoGif-Eu3HGvYZ.js";import"./EMobiModal-c8vZmT1p.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-CsKeTCLp.js";import"./index-CeejqomF.js";const b="Kompaktanleitung und Hintergrundinformationen",K="Wohin?",k=({versionString:t,showOverlayFromOutside:s=()=>{}})=>{const g=()=>{const{setAppMenuActiveMenuSection:v}=M.useContext(C);return e.jsx(S,{version:t,setAppMenuActiveMenuSection:v})};return{menuIntroduction:e.jsx(h,{showOverlayFromOutside:s}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(f,{},"Datengrundlage"),e.jsx(y,{},"InKartePositionieren"),e.jsx(H,{showOverlayFromOutside:s},"MeinStandort"),e.jsx(I,{},"Haftungsausschluss"),e.jsx(P,{},"zwilling")],menuFooter:e.jsx(g,{})}},X={title:"Geoportal"},o={render:()=>e.jsx(T,{appKey:"storybook-appkey",children:e.jsx(j,{...k({versionString:"xyz"}),visible:!0})})},r={render:()=>e.jsx("div",{children:K})},n={render:()=>e.jsx("div",{children:b})};var i,a,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const Y=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{o as KompletterModalerDialog,r as TextInSearchPlaceholder,n as TextTooltip,Y as __namedExportsOrder,X as default};
