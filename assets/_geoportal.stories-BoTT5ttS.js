import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{D as T,T as j}from"./TopicMapContextProvider-fHeB4ya5.js";import{G as v}from"./ModalApplicationMenu-Chfz_gdX.js";import{r as M}from"./index-CTjT7uj6.js";import{F as S,H as f,C as h,a as H,b as I,c as K,d as P,e as b}from"./DemoGif-CJLWaxaB.js";import"./EMobiRadModal-Ch7jsass.js";import"./index-BRV0Se7Z.js";import"./index-BqsmnRTQ.js";import"./Card-sW1K-9N4.js";import"./inheritsLoose-D4WLrkXa.js";import"./_baseClone-M_p9LUfm.js";import"./_getPrototype-ClOnbHD-.js";import"./Modal-C4MwPEwt.js";import"./InKartePositionierenText-Bob0piC1.js";import"./index-DRglUUZi.js";const y="Kompaktanleitung und Hintergrundinformationen",k="Wohin?",D=({versionString:i,showOverlayFromOutside:t=()=>{}})=>{const g=()=>{const{setAppMenuActiveMenuSection:C}=M.useContext(T);return e.jsx(S,{version:i,setAppMenuActiveMenuSection:C})};return{menuIntroduction:e.jsx(f,{showOverlayFromOutside:t}),menuIcon:"info",menuTitle:"Kompaktanleitung und Hintergrundinformationen",menuSections:[e.jsx(h,{},"Datengrundlage"),e.jsx(H,{showOverlayFromOutside:t},"InKartePositionieren"),e.jsx(I,{},"KarteninhalteHinzufuegen"),e.jsx(K,{showOverlayFromOutside:t},"MeinStandort"),e.jsx(P,{},"Haftungsausschluss"),e.jsx(b,{},"zwilling")],menuFooter:e.jsx(g,{})}},Z={title:"Geoportal"},o={render:()=>e.jsx(j,{appKey:"storybook-appkey",children:e.jsx(v,{...D({versionString:"xyz"}),visible:!0})})},n={render:()=>e.jsx("div",{children:k})},r={render:()=>e.jsx("div",{children:y})};var s,a,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const versionString = "xyz";
    return <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu {...getCollabedHelpComponentConfig({
        versionString
      })} visible={true} />
      </TopicMapContextProvider>;
  }
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const w=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip"];export{o as KompletterModalerDialog,n as TextInSearchPlaceholder,r as TextTooltip,w as __namedExportsOrder,Z as default};
