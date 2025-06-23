import{j as e}from"./jsx-runtime-CiKstLBL.js";import{T as P}from"./TopicMapContextProvider-BXeyJ3Sz.js";import{G as A}from"./ModalApplicationMenu-ats_LXip.js";import{r as p}from"./index-CoXXcpNP.js";import{H as R,F as E,C as V,a as $,b as G,c as W,d as U,e as _,f as N,g as q}from"./geoportal-CVNRIX4g.js";import{D as u}from"./Section-Cn36vWGM.js";import"./TrinkwasserModal-DcToWxjb.js";import"./_sim-component-dictionary.stories-Cb8PNwbi.js";import{F as J,j as Q}from"./MeinStandpunktMarkerMitKompass-B_qOpeIt.js";import{B as F,M as X}from"./index-D4f71bbD.js";import"./leaflet-src-1OhIPnsa.js";import"./ResponsiveTopicMapContextProvider-l2rqen_G.js";import"./setPrototypeOf-BCvhvFfc.js";import"./index-BOR0u_yr.js";import"./Modal-D2Bjxpws.js";import"./InKartePositionierenText-yUf7771K.js";import"./FuzzySearchParagraph-ClfIvOTd.js";import"./CompassNeedle-CJMkuLKM.js";import"./Table-BBwHHwXc.js";import"./_emob-sim.stories-DCT_gZ2P.js";import"./SecondaryInfoFooter-DdEjlaO8.js";import"./ConfigurableDocBlocks-C420zP3l.js";import"./CustomizationContextProvider-CEe6qQic.js";import"./_ebikes-sim.stories-GJ0u2ec4.js";import"./SecondaryInfoFooter-C_OqLccq.js";import"./_luftmessstationen-sim.stories-Dn6O_C1u.js";import"./SecondaryInfoFooter-DMQmsGVw.js";import"./_x-and-ride-sim.stories-DU1YJ4t5.js";import"./SecondaryInfoFooter-D9gLyVgU.js";import"./_klimaorte-sim.stories-AOhuB4tl.js";import"./ContextIsolator-DIc7qPEd.js";const Y=""+new URL("extServiceBackground-DhSjF3s-.jpg",import.meta.url).href,Z="Kompaktanleitung und Hintergrundinformationen",O="Externer Service",ee="Wohin?",ne="Hinweis",te=`Dieses Geoportal ist derzeit ausschließlich für die Nutzung auf
              Desktop-Computern optimiert. Bei der Verwendung eines mobilen
              Endgeräts kann es zu Funktionseinschränkungen kommen. Wir arbeiten
              aktiv an einer mobilen Version und danken Ihnen für Ihr
              Verständnis.`,oe="Verstanden",c={headerText:ne,bodyText:te,confirmButtonText:oe},re=({versionString:t,showOverlayFromOutside:n=()=>{},loginFormToggle:d=()=>{},isLoginFormVisible:z=!1,loginForm:m})=>{const H=()=>{const{setAppMenuActiveMenuSection:l}=p.useContext(u);return e.jsx(E,{version:t,setAppMenuActiveMenuSection:l})},K=e.jsx(R,{showOverlayFromOutside:n,isLoginFormVisible:z,loginForm:m}),B="info",D=e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsx("span",{children:"Kompaktanleitung und Hintergrundinformationen"}),m&&e.jsx(F,{type:"text",onClick:d,children:e.jsx(J,{icon:Q,size:"lg"})})]}),L=()=>{const{setAppMenuActiveMenuSection:l}=p.useContext(u);return[e.jsx(V,{setAppMenuActiveMenuSection:l},"zwilling"),e.jsx($,{showOverlayFromOutside:n},"HintergrundkarteAuswaehlen"),e.jsx(G,{showOverlayFromOutside:n},"InKartePositionieren"),e.jsx(W,{showOverlayFromOutside:n},"KarteninhalteHinzufuegen"),e.jsx(U,{},"KarteninhalteUntersuchen"),e.jsx(_,{},"KartenDrucken"),e.jsx(N,{showOverlayFromOutside:n},"MeinStandort"),e.jsx(q,{},"Haftungsausschluss")]};return{menuIntroduction:K,menuIcon:B,menuTitle:D,menuSections:e.jsx(L,{}),menuFooter:e.jsx(H,{}),modalTitleStyle:{display:"flex",width:"100%",alignItems:"center",gap:"4px"}}},Pe={title:"Geoportal"},o={render:()=>{const[t,n]=p.useState(!1);return e.jsx(P,{appKey:"storybook-appkey",children:e.jsx(A,{...re({versionString:"xyz",loginFormToggle:()=>n(!t),isLoginFormVisible:t}),visible:!0})})}},r={render:()=>e.jsx("div",{children:ee})},i={render:()=>e.jsx("div",{children:Z})},s={render:()=>e.jsx(X,{title:c.headerText,open:!0,closable:!1,closeIcon:!1,footer:[e.jsx(F,{type:"primary",children:c.confirmButtonText})],children:e.jsx("p",{children:c.bodyText})})},a={render:()=>e.jsx("div",{style:{height:"500px",width:"500px"},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",cursor:"pointer",borderRadius:"0.5rem",width:"100%",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",height:"fit-content",backgroundColor:"white"},children:e.jsx("div",{style:{position:"relative",overflow:"hidden",backgroundColor:"white",isolation:"isolate",borderRadius:"0.375rem",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",aspectRatio:"1.7777/1"},children:e.jsxs("div",{style:{height:"100%",width:"100%"},children:[e.jsx("img",{src:Y,alt:"",loading:"lazy",style:{objectFit:"cover",position:"relative",height:"100%",overflow:"clip",width:"calc(130% + 7.2px)",transition:"all 200ms"}}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"15%"},children:e.jsx("span",{style:{color:"black",opacity:.4,fontSize:"2.5rem",fontWeight:"bold"},children:O})})]})})})})};var x,h,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,v,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,j,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <div>{tooltipText}</div>;
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,T,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <Modal title={mobileInfo.headerText} open={true} closable={false} closeIcon={false} footer={[<Button type="primary">{mobileInfo.confirmButtonText}</Button>]}>
        <p>{mobileInfo.bodyText}</p>
      </Modal>;
  }
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,k,M;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(k=a.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const Ae=["KompletterModalerDialog","TextInSearchPlaceholder","TextTooltip","MobileInfo","ExtServiceStory"];export{a as ExtServiceStory,o as KompletterModalerDialog,s as MobileInfo,r as TextInSearchPlaceholder,i as TextTooltip,Ae as __namedExportsOrder,Pe as default};
