import{j as e}from"./jsx-runtime-CiKstLBL.js";import{T as A}from"./TopicMapContextProvider-Bcj_UL3V.js";import{G as R}from"./ModalApplicationMenu-BRaa3nay.js";import{r as d}from"./index-CoXXcpNP.js";import{H as E,F as V,C as G,a as W,b as U,c as $,d as _,e as N,f as q,g as J}from"./DemoGif-uJtdrDD2.js";import{D as x}from"./Section-8HFr_G_s.js";import{F as Q,k as X}from"./MeinStandpunktMarkerMitKompass-C_w-NlD_.js";import{B as K,M as Y}from"./index-D4f71bbD.js";import"./TrinkwasserModal-K2FiGWNc.js";import"./_sim-component-dictionary.stories-DSnlXH9f.js";import"./_ebikes-sim.stories-DSJJgAcl.js";import"./_emob-sim.stories-DrIIthZc.js";import"./leaflet-src-1OhIPnsa.js";import"./ResponsiveTopicMapContextProvider-C4p60gUI.js";import"./setPrototypeOf-BCvhvFfc.js";import"./index-BOR0u_yr.js";import"./Modal-iZwJ4333.js";import"./InKartePositionierenText-o0g0T0L-.js";import"./FuzzySearchParagraph-ClfIvOTd.js";import"./CompassNeedle-CJMkuLKM.js";import"./ContextIsolator-DIc7qPEd.js";import"./_luftmessstationen-sim.stories-DwldtAs2.js";import"./ConfigurableDocBlocks-M8yCfI3L.js";import"./CustomizationContextProvider-CEe6qQic.js";import"./SecondaryInfoFooter-Dm0ihkjU.js";import"./_x-and-ride-sim.stories-DQnywHmM.js";import"./SecondaryInfoFooter-DwlgI_Ax.js";import"./_klimaorte-sim.stories-DX8L92ZD.js";import"./SecondaryInfoFooter-BVHOf56X.js";import"./Table-C9S0GRWm.js";import"./SecondaryInfoFooter-CEBAj5cJ.js";const Z=""+new URL("extServiceBackground-DhSjF3s-.jpg",import.meta.url).href,O=({versionString:t,showOverlayFromOutside:n=()=>{},loginFormToggle:m=()=>{},isLoginFormVisible:z=!1,loginForm:c,loginFormTrigger:u})=>{const F=()=>{const{setAppMenuActiveMenuSection:o}=d.useContext(x);return e.jsx(V,{version:t,setAppMenuActiveMenuSection:o})},B=e.jsx(E,{showOverlayFromOutside:n,isLoginFormVisible:z,loginForm:c}),D="info",L=e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsx("span",{children:"Kompaktanleitung und Hintergrundinformationen"}),c&&u?u:c&&e.jsx(K,{type:"text",onClick:m,children:e.jsx(Q,{icon:X,size:"lg"})})]}),P=()=>{const{setAppMenuActiveMenuSection:o}=d.useContext(x);return[e.jsx(G,{setAppMenuActiveMenuSection:o},"zwilling"),e.jsx(W,{showOverlayFromOutside:n},"HintergrundkarteAuswaehlen"),e.jsx(U,{showOverlayFromOutside:n},"InKartePositionieren"),e.jsx($,{showOverlayFromOutside:n},"KarteninhalteHinzufuegen"),e.jsx(_,{showOverlayFromOutside:n,setAppMenuActiveMenuSection:o},"KarteninhalteUntersuchen"),e.jsx(N,{showOverlayFromOutside:n},"KarteninhalteDrucken"),e.jsx(q,{showOverlayFromOutside:n},"MeinStandort"),e.jsx(J,{},"Haftungsausschluss")]};return{menuIntroduction:B,menuIcon:D,menuTitle:L,menuSections:e.jsx(P,{}),menuFooter:e.jsx(F,{}),modalTitleStyle:{display:"flex",width:"100%",alignItems:"center",gap:"4px"}}},ee="Kompaktanleitung und Hintergrundinformationen",ne="Externer Service",te="Wohin?",oe="Hinweis",re=`Dieses Geoportal ist derzeit ausschließlich für die Nutzung auf
              Desktop-Computern optimiert. Bei der Verwendung eines mobilen
              Endgeräts kann es zu Funktionseinschränkungen kommen. Wir arbeiten
              aktiv an einer mobilen Version und danken Ihnen für Ihr
              Verständnis.`,ie="Verstanden",p={headerText:oe,bodyText:re,confirmButtonText:ie},Ae={title:"Geoportal"},r={render:()=>{const[t,n]=d.useState(!1);return e.jsx(A,{appKey:"storybook-appkey",children:e.jsx(R,{...O({versionString:"xyz",loginFormToggle:()=>n(!t),isLoginFormVisible:t}),visible:!0})})}},i={render:()=>e.jsx("div",{children:te})},s={render:()=>e.jsx("div",{children:ee})},a={render:()=>e.jsx(Y,{title:p.headerText,open:!0,closable:!1,closeIcon:!1,footer:[e.jsx(K,{type:"primary",children:p.confirmButtonText})],children:e.jsx("p",{children:p.bodyText})})},l={render:()=>e.jsx("div",{style:{height:"500px",width:"500px"},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",cursor:"pointer",borderRadius:"0.5rem",width:"100%",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",height:"fit-content",backgroundColor:"white"},children:e.jsx("div",{style:{position:"relative",overflow:"hidden",backgroundColor:"white",isolation:"isolate",borderRadius:"0.375rem",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",aspectRatio:"1.7777/1"},children:e.jsxs("div",{style:{height:"100%",width:"100%"},children:[e.jsx("img",{src:Z,alt:"",loading:"lazy",style:{objectFit:"cover",position:"relative",height:"100%",overflow:"clip",width:"calc(130% + 7.2px)",transition:"all 200ms"}}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"15%"},children:e.jsx("span",{style:{color:"black",opacity:.4,fontSize:"2.5rem",fontWeight:"bold"},children:ne})})]})})})})};var h,g,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,S,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,C,k;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <Modal title={mobileInfo.headerText} open={true} closable={false} closeIcon={false} footer={[<Button type="primary">{mobileInfo.confirmButtonText}</Button>]}>
        <p>{mobileInfo.bodyText}</p>
      </Modal>;
  }
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var I,M,H;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(M=l.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const Re=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip","MobileInfo","ExtServiceStory"];export{l as ExtServiceStory,r as KompletterModalerDialog,a as MobileInfo,i as TextInSearchPlaceholder,s as TextTooltip,Re as __namedExportsOrder,Ae as default};
