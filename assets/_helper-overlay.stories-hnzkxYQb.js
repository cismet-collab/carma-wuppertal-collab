import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as E}from"./index-RYns6xqu.js";const o=(n,e)=>{for(const a in e)if(e[a].key===n)return{primary:{...e[a]}}};function r({config:n,transparency:e=.8,color:a="white"}){const[i,b]=E.useState(null);return E.useEffect(()=>{if(n){const{content:H,containerPos:x,contentPos:re}=n,oe=ce(x),se=ae(re);b({pos:oe,contPos:se,content:H})}},[n]),t.jsx("div",{style:{position:"fixed",top:0,zIndex:1e3,width:"100vw",height:"100vh",background:a,opacity:e},children:t.jsx("div",{style:{marginTop:"1rem"},children:t.jsx("span",{children:i?i.content:""})})})}function ce(n){let e={};switch(n){case"center":e.transform="translate(0, 0)";break;case"top":e.transform="translate(0, -100%)";break;case"left":e.transform="translate(-100%, 0)";break;case"right":e.transform="translate(100%, 0)";break;case"bottom":e.transform="translate(0, 100%)";break;default:console.log("yyy element position")}return e}function ae(n){let e={};switch(n){case"center":e.top="50%",e.left="50%",e.transform="translate(-50%, -50%)";break;case"top-center":e.top=0,e.transform="translate(50%, 0)";break;case"top-right":e.top=0,e.right=0;break;case"top-left":e.top=0,e.left=0;break;case"left-center":e.top="50%",e.transform="translate(0, -50%)",e.left=0;break;case"left-top":e.top=0,e.left=0;break;case"left-bottom":e.bottom=0,e.left=0;break;case"right-center":e.top="50%",e.transform="translate(0, -50%)",e.right=0;break;case"right-top":e.top=0,e.right=0;break;case"right-bottom":e.bottom=0,e.right=0;break;case"bottom-center":e.bottom=0,e.transform="translate(50%, 0)";break;case"bottom-right":e.bottom=0,e.right=0;break;case"bottom-left":e.bottom=0,e.left=0;break;default:console.log("yyy content position")}return e}r.__docgenInfo={description:"",methods:[],displayName:"LibHelperOverlay",props:{transparency:{defaultValue:{value:"0.8",computed:!1},required:!1},color:{defaultValue:{value:'"white"',computed:!1},required:!1}}};const s={menu:{key:"MENULEISTE",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Menüleiste"})},layerWrapper:{key:"LAYERBUTTONS",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Layer Buttons"})},hintergrund:{key:"HINTERGRUND",content:t.jsx("div",{children:"Hintergrund"}),containerPos:"center",contentPos:"center"},modalMenu:{key:"MENU",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Menü"})},zoomControl:{key:"ZOOM",content:t.jsx("div",{children:"Zoom"}),containerPos:"center",contentPos:"left-center"},fullScreenControl:{key:"VOLLBILD",content:t.jsx("div",{children:"Vollbild"}),containerPos:"center",contentPos:"left-center"},navigatorControl:{key:"MINE_POSITION",content:t.jsx("div",{children:"Mine Position"}),containerPos:"center",contentPos:"left-center"},homeControl:{key:"RATHAUS",content:t.jsx("div",{children:"Rathaus"}),containerPos:"center",contentPos:"left-center"},measurementControl:{key:"MESSUNGEN",content:t.jsx("div",{children:"Messungen"}),containerPos:"center",contentPos:"left-center"},gazetteerControl:{key:"GAZETTEER_SUCHE",content:"Gazetteer Suche",containerPos:"center",contentPos:"center"}},ie={transparency:.8,color:"#000000"},c=(n={primary:{containerPos:"center",contentPos:"center",content:t.jsx("div",{})}})=>{const[e,a]=E.useState();return E.useLayoutEffect(()=>{if(n!=null&&n.primary&&!e){const{containerPos:i,contentPos:b,content:H}=n.primary;a({content:H,containerPos:i,contentPos:b})}},[n,e]),e},me={title:"Geoportal helper overlay"},l={render:()=>{const n=o("MENULEISTE",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},d={render:()=>{const n=o("LAYERBUTTONS",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},m={render:()=>{const n=o("HINTERGRUND",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},p={render:()=>{const n=o("MENU",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},g={render:()=>{const n=o("ZOOM",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},u={render:()=>{const n=o("VOLLBILD",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},f={render:()=>{const n=o("MINE_POSITION",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},v={render:()=>{const n=o("RATHAUS",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},y={render:()=>{const n=o("MESSUNGEN",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},h={render:()=>{const n=o("GAZETTEER_SUCHE",s),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},C={render:()=>{const{transparency:n,color:e}=ie;return t.jsx("div",{style:{width:"100%",height:"90vh",backgroundColor:e,opacity:n}})}};var S,k,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MENULEISTE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var P,O,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("LAYERBUTTONS", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(M=(O=d.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var N,T,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("HINTERGRUND", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(L=(T=m.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,U,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MENU", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(I=(U=p.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var D,G,A;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("ZOOM", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(A=(G=g.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var B,w,_;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("VOLLBILD", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(_=(w=u.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var Z,V,z;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MINE_POSITION", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var Y,q,W;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("RATHAUS", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(W=(q=v.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var F,J,K;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MESSUNGEN", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,$;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("GAZETTEER_SUCHE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...($=(X=h.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,ne,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const pe=["Menüleiste","LayerButtons","Hintergrund","Menü","Zoom","Vollbild","MinePosition","Rathaus","Messungen","GazetteerSuche","Background"];export{C as Background,h as GazetteerSuche,m as Hintergrund,d as LayerButtons,p as Menü,l as Menüleiste,y as Messungen,f as MinePosition,v as Rathaus,u as Vollbild,g as Zoom,pe as __namedExportsOrder,me as default};
