import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as C,T}from"./TopicMapContextProvider-fHeB4ya5.js";import{G as h}from"./ModalApplicationMenu-Chfz_gdX.js";import{r as j}from"./index-CTjT7uj6.js";import{F as M,H as S,C as f,a as y,b as H,c as I,d as P}from"./DemoGif-Dc403cGh.js";import"./EMobiModal-c8vZmT1p.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-CjyIi-Vq.js";import"./index-CeejqomF.js";const b="Kompaktanleitung und Hintergrundinformationen",K="Wohin?",k=({versionString:t,showOverlayFromOutside:x=()=>{}})=>{const g=()=>{const{setAppMenuActiveMenuSection:v}=j.useContext(C);return e.jsx(M,{version:t,setAppMenuActiveMenuSection:v})};return{menuIntroduction:e.jsx(S,{showOverlayFromOutside:x}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(f,{},"Datengrundlage"),e.jsx(y,{},"InKartePositionieren"),e.jsx(H,{},"MeinStandort"),e.jsx(I,{},"Haftungsausschluss"),e.jsx(P,{},"zwilling")],menuFooter:e.jsx(g,{})}},V={title:"Geoportal"},o={render:()=>e.jsx(T,{appKey:"storybook-appkey",children:e.jsx(h,{...k({versionString:"xyz"}),visible:!0})})},r={render:()=>e.jsx("div",{children:K})},n={render:()=>e.jsx("div",{children:b})};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
