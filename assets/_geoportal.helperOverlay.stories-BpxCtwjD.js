import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as b}from"./index-RYns6xqu.js";import"./Footer-DY2iwSly.js";import"./Section-DXPkuWLL.js";import"./EMobiModal-RSgnFFxM.js";import"./InKartePositionierenText-BUeZmqRB.js";import"./index-BWUJEnKi.js";import"./index-DNUR7M9R.js";import"./index-DvoZgHAm.js";import"./Card-zt9Fd8to.js";import"./inheritsLoose-Bt6Ne3b9.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./Modal-Dz-rQmEQ.js";const o={menu:{key:"MENULEISTE",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Menüleiste"})},layerWrapper:{key:"LAYERBUTTONS",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Layer Buttons"})},hintergrund:{key:"HINTERGRUND",content:t.jsx("div",{children:"Hintergrund"}),containerPos:"center",contentPos:"center"},modalMenu:{key:"MENU",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Menü"})},zoomControl:{key:"ZOOM",content:t.jsx("div",{children:"Zoom"}),containerPos:"center",contentPos:"left-center"},fullScreenControl:{key:"VOLLBILD",content:t.jsx("div",{children:"Vollbild"}),containerPos:"center",contentPos:"left-center"},navigatorControl:{key:"MEINE_POSITION",content:t.jsx("div",{children:"Meine Position"}),containerPos:"center",contentPos:"left-center",contentWidth:"100px"},homeControl:{key:"RATHAUS",content:t.jsx("div",{children:"Rathaus"}),containerPos:"center",contentPos:"left-center"},measurementControl:{key:"MESSUNGEN",content:t.jsx("div",{children:"Messungen"}),containerPos:"center",contentPos:"left-center"},gazetteerControl:{key:"GAZETTEER_SUCHE",content:"Gazetteer Suche",containerPos:"center",contentPos:"center"}},ce={transparency:.8,color:"#000000"},s=(n,e)=>{for(const a in e)if(e[a].key===n)return{primary:{...e[a]}}};function r({config:n,transparency:e=.8,color:a="white"}){const[i,C]=b.useState(null);return b.useEffect(()=>{if(n){const{content:H,containerPos:x,contentPos:re}=n,oe=ae(x),se=ie(re);C({pos:oe,contPos:se,content:H})}},[n]),t.jsx("div",{style:{position:"fixed",top:0,zIndex:1e3,width:"100vw",height:"100vh",background:a,opacity:e},children:t.jsx("div",{style:{marginTop:"1rem"},children:t.jsx("span",{children:i?i.content:""})})})}function ae(n){let e={};switch(n){case"center":e.transform="translate(0, 0)";break;case"top":e.transform="translate(0, -100%)";break;case"left":e.transform="translate(-100%, 0)";break;case"right":e.transform="translate(100%, 0)";break;case"bottom":e.transform="translate(0, 100%)";break;default:console.log("yyy element position")}return e}function ie(n){let e={};switch(n){case"center":e.top="50%",e.left="50%",e.transform="translate(-50%, -50%)";break;case"top-center":e.top=0,e.transform="translate(50%, 0)";break;case"top-right":e.top=0,e.right=0;break;case"top-left":e.top=0,e.left=0;break;case"left-center":e.top="50%",e.transform="translate(0, -50%)",e.left=0;break;case"left-top":e.top=0,e.left=0;break;case"left-bottom":e.bottom=0,e.left=0;break;case"right-center":e.top="50%",e.transform="translate(0, -50%)",e.right=0;break;case"right-top":e.top=0,e.right=0;break;case"right-bottom":e.bottom=0,e.right=0;break;case"bottom-center":e.bottom=0,e.transform="translate(50%, 0)";break;case"bottom-right":e.bottom=0,e.right=0;break;case"bottom-left":e.bottom=0,e.left=0;break;default:console.log("yyy content position")}return e}r.__docgenInfo={description:"",methods:[],displayName:"LibHelperOverlay",props:{transparency:{defaultValue:{value:"0.8",computed:!1},required:!1},color:{defaultValue:{value:'"white"',computed:!1},required:!1}}};const c=(n={primary:{containerPos:"center",contentPos:"center",content:t.jsx("div",{})}})=>{const[e,a]=b.useState();return b.useLayoutEffect(()=>{if(n!=null&&n.primary&&!e){const{containerPos:i,contentPos:C,content:H}=n.primary;a({content:H,containerPos:i,contentPos:C})}},[n,e]),e},He={title:"Geoportal/Helper-Overlay"},l={render:()=>{const n=s("MENULEISTE",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},d={render:()=>{const n=s("LAYERBUTTONS",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},m={render:()=>{const n=s("HINTERGRUND",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},p={render:()=>{const n=s("MENU",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},g={render:()=>{const n=s("ZOOM",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},u={render:()=>{const n=s("VOLLBILD",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},f={render:()=>{const n=s("MEINE_POSITION",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},E={render:()=>{const n=s("RATHAUS",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},v={render:()=>{const n=s("MESSUNGEN",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},y={render:()=>{const n=s("GAZETTEER_SUCHE",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},h={render:()=>{const{transparency:n,color:e}=ce;return t.jsx("div",{style:{width:"100%",height:"90vh",backgroundColor:e,opacity:n}})}};var S,k,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("MENULEISTE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var P,O,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("LAYERBUTTONS", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(M=(O=d.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var N,T,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("HINTERGRUND", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(L=(T=m.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,U,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("MENU", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(I=(U=p.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var D,G,A;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("ZOOM", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(A=(G=g.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var B,w,_;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("VOLLBILD", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(_=(w=u.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var Z,V,z;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("MEINE_POSITION", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var Y,q,W;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("RATHAUS", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(W=(q=E.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var F,J,K;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("MESSUNGEN", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,$;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("GAZETTEER_SUCHE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...($=(X=y.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,ne,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const {
      transparency,
      color
    } = backgroundSettings;
    return <div style={{
      width: "100%",
      height: "90vh",
      backgroundColor: color,
      opacity: transparency
    }}></div>;
  }
}`,...(te=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const xe=["Menüleiste","LayerButtons","Hintergrund","Menü","Zoom","Vollbild","MeinePosition","Rathaus","Messungen","GazetteerSuche","Background"];export{h as Background,y as GazetteerSuche,m as Hintergrund,d as LayerButtons,f as MeinePosition,p as Menü,l as Menüleiste,v as Messungen,E as Rathaus,u as Vollbild,g as Zoom,xe as __namedExportsOrder,He as default};
