import{j as e}from"./jsx-runtime-CiKstLBL.js";import{T as A}from"./TopicMapContextProvider-BTaAsJl2.js";import{G as R}from"./ModalApplicationMenu-BRaa3nay.js";import{r as d}from"./index-CoXXcpNP.js";import{H as E,F as V,C as G,a as W,b as $,c as U,d as _,e as N,f as q,g as J}from"./geoportal-8co_yDyU.js";import{D as x}from"./Section-8HFr_G_s.js";import"./TrinkwasserModal-Cdh_cDQW.js";import"./_sim-component-dictionary.stories-Cyn47-9Y.js";import"./_ebikes-sim.stories-CTSDzSsK.js";import"./_emob-sim.stories-B64JN0cA.js";import{F as Q,k as X}from"./MeinStandpunktMarkerMitKompass-Bw1iG3es.js";import{B as H,M as Y}from"./index-D4f71bbD.js";import"./leaflet-src-CpR2ONvF.js";import"./ResponsiveTopicMapContextProvider-C4p60gUI.js";import"./setPrototypeOf-BCvhvFfc.js";import"./index-BOR0u_yr.js";import"./Modal-iZwJ4333.js";import"./InKartePositionierenText-L-P8sCa1.js";import"./FuzzySearchParagraph-ClfIvOTd.js";import"./CompassNeedle-CJMkuLKM.js";import"./_luftmessstationen-sim.stories-DM0ox427.js";import"./ConfigurableDocBlocks-BPiecYpw.js";import"./CustomizationContextProvider-CEe6qQic.js";import"./SecondaryInfoFooter-DQv_OT-L.js";import"./_x-and-ride-sim.stories-BSoXyEgD.js";import"./SecondaryInfoFooter-CMLnqpMZ.js";import"./_klimaorte-sim.stories-AOhuB4tl.js";import"./SecondaryInfoFooter-Ce-y_yjC.js";import"./Table-C9S0GRWm.js";import"./SecondaryInfoFooter-BXLcR4dl.js";import"./ContextIsolator-DIc7qPEd.js";const Z=""+new URL("extServiceBackground-DhSjF3s-.jpg",import.meta.url).href,O="Kompaktanleitung und Hintergrundinformationen",ee="Externer Service",ne="Wohin?",te="Hinweis",oe=`Dieses Geoportal ist derzeit ausschließlich für die Nutzung auf
              Desktop-Computern optimiert. Bei der Verwendung eines mobilen
              Endgeräts kann es zu Funktionseinschränkungen kommen. Wir arbeiten
              aktiv an einer mobilen Version und danken Ihnen für Ihr
              Verständnis.`,re="Verstanden",p={headerText:te,bodyText:oe,confirmButtonText:re},ie=({versionString:t,showOverlayFromOutside:n=()=>{},loginFormToggle:m=()=>{},isLoginFormVisible:K=!1,loginForm:l,loginFormTrigger:u})=>{const z=()=>{const{setAppMenuActiveMenuSection:c}=d.useContext(x);return e.jsx(V,{version:t,setAppMenuActiveMenuSection:c})},B=e.jsx(E,{showOverlayFromOutside:n,isLoginFormVisible:K,loginForm:l}),D="info",L=e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsx("span",{children:"Kompaktanleitung und Hintergrundinformationen"}),l&&u?u:l&&e.jsx(H,{type:"text",onClick:m,children:e.jsx(Q,{icon:X,size:"lg"})})]}),P=()=>{const{setAppMenuActiveMenuSection:c}=d.useContext(x);return[e.jsx(G,{setAppMenuActiveMenuSection:c},"zwilling"),e.jsx(W,{showOverlayFromOutside:n},"HintergrundkarteAuswaehlen"),e.jsx($,{showOverlayFromOutside:n},"InKartePositionieren"),e.jsx(U,{showOverlayFromOutside:n},"KarteninhalteHinzufuegen"),e.jsx(_,{showOverlayFromOutside:n},"KarteninhalteUntersuchen"),e.jsx(N,{},"KartenDrucken"),e.jsx(q,{showOverlayFromOutside:n},"MeinStandort"),e.jsx(J,{},"Haftungsausschluss")]};return{menuIntroduction:B,menuIcon:D,menuTitle:L,menuSections:e.jsx(P,{}),menuFooter:e.jsx(z,{}),modalTitleStyle:{display:"flex",width:"100%",alignItems:"center",gap:"4px"}}},Ae={title:"Geoportal"},o={render:()=>{const[t,n]=d.useState(!1);return e.jsx(A,{appKey:"storybook-appkey",children:e.jsx(R,{...ie({versionString:"xyz",loginFormToggle:()=>n(!t),isLoginFormVisible:t}),visible:!0})})}},r={render:()=>e.jsx("div",{children:ne})},i={render:()=>e.jsx("div",{children:O})},s={render:()=>e.jsx(Y,{title:p.headerText,open:!0,closable:!1,closeIcon:!1,footer:[e.jsx(H,{type:"primary",children:p.confirmButtonText})],children:e.jsx("p",{children:p.bodyText})})},a={render:()=>e.jsx("div",{style:{height:"500px",width:"500px"},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",cursor:"pointer",borderRadius:"0.5rem",width:"100%",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",height:"fit-content",backgroundColor:"white"},children:e.jsx("div",{style:{position:"relative",overflow:"hidden",backgroundColor:"white",isolation:"isolate",borderRadius:"0.375rem",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",aspectRatio:"1.7777/1"},children:e.jsxs("div",{style:{height:"100%",width:"100%"},children:[e.jsx("img",{src:Z,alt:"",loading:"lazy",style:{objectFit:"cover",position:"relative",height:"100%",overflow:"clip",width:"calc(130% + 7.2px)",transition:"all 200ms"}}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"15%"},children:e.jsx("span",{style:{color:"black",opacity:.4,fontSize:"2.5rem",fontWeight:"bold"},children:ee})})]})})})})};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const versionString = "xyz";
    return <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu {...getCollabedHelpComponentConfig({
        versionString,
        loginFormToggle: () => setShowLoginForm(!showLoginForm),
        isLoginFormVisible: showLoginForm
      })} visible={true} />
      </TopicMapContextProvider>;
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,S,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,C,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <Modal title={mobileInfo.headerText} open={true} closable={false} closeIcon={false} footer={[<Button type="primary">{mobileInfo.confirmButtonText}</Button>]}>
        <p>{mobileInfo.bodyText}</p>
      </Modal>;
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var I,M,F;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: "500px",
      width: "500px"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        borderRadius: "0.5rem",
        width: "100%",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        height: "fit-content",
        backgroundColor: "white"
      }}>
          <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "white",
          isolation: "isolate",
          borderRadius: "0.375rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          aspectRatio: "1.7777/1"
        }}>
            <div style={{
            height: "100%",
            width: "100%"
          }}>
              <img src={extServiceBackgroundImage} alt={""} loading="lazy" style={{
              objectFit: "cover",
              position: "relative",
              height: "100%",
              overflow: "clip",
              width: "calc(130% + 7.2px)",
              transition: "all 200ms"
            }} />
              <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: "15%"
            }}>
                <span style={{
                color: "black",
                opacity: 0.4,
                fontSize: "2.5rem",
                fontWeight: "bold"
              }}>
                  {extServiceText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(F=(M=a.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};const Re=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip","MobileInfo","ExtServiceStory"];export{a as ExtServiceStory,o as KompletterModalerDialog,s as MobileInfo,r as TextInSearchPlaceholder,i as TextTooltip,Re as __namedExportsOrder,Ae as default};
