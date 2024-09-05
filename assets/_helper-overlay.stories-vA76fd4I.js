import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as C}from"./index-RYns6xqu.js";const o={menu:{key:"MENULEISTE",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Menüleiste"})},layerWrapper:{key:"LAYERBUTTONS",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Layer Buttons"})},hintergrund:{key:"HINTERGRUND",content:t.jsx("div",{children:"Hintergrund"}),containerPos:"center",contentPos:"center"},modalMenu:{key:"MENU",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Menü"})},zoomControl:{key:"ZOOM",content:t.jsx("div",{children:"Zoom"}),containerPos:"center",contentPos:"left-center"},fullScreenControl:{key:"VOLLBILD",content:t.jsx("div",{children:"Vollbild"}),containerPos:"center",contentPos:"left-center"},navigatorControl:{key:"MINE_POSITION",content:t.jsx("div",{children:"Mine Position"}),containerPos:"center",contentPos:"left-center"},homeControl:{key:"RATHAUS",content:t.jsx("div",{children:"Rathaus"}),containerPos:"center",contentPos:"left-center"},measurementControl:{key:"MESSUNGEN",content:t.jsx("div",{children:"Messungen"}),containerPos:"center",contentPos:"left-center"},gazetteerControl:{key:"GAZETTEER_SUCHE",content:"Gazetteer Suche",containerPos:"center",contentPos:"center"}},s=(n,e)=>{for(const a in e)if(e[a].key===n)return{primary:{...e[a]}}};function r({config:n,transparency:e=.8,color:a="white"}){const[l,h]=C.useState(null);return C.useEffect(()=>{if(n){const{content:H,containerPos:b,contentPos:$}=n,ee=te(b),ne=re($);h({pos:ee,contPos:ne,content:H})}},[n]),t.jsx("div",{style:{position:"fixed",top:0,zIndex:1e3,width:"100vw",height:"100vh",background:a,opacity:e},children:t.jsx("div",{style:{marginTop:"1rem"},children:t.jsx("span",{children:l?l.content:""})})})}function te(n){let e={};switch(n){case"center":e.transform="translate(0, 0)";break;case"top":e.transform="translate(0, -100%)";break;case"left":e.transform="translate(-100%, 0)";break;case"right":e.transform="translate(100%, 0)";break;case"bottom":e.transform="translate(0, 100%)";break;default:console.log("yyy element position")}return e}function re(n){let e={};switch(n){case"center":e.top="50%",e.left="50%",e.transform="translate(-50%, -50%)";break;case"top-center":e.top=0,e.transform="translate(50%, 0)";break;case"top-right":e.top=0,e.right=0;break;case"top-left":e.top=0,e.left=0;break;case"left-center":e.top="50%",e.transform="translate(0, -50%)",e.left=0;break;case"left-top":e.top=0,e.left=0;break;case"left-bottom":e.bottom=0,e.left=0;break;case"right-center":e.top="50%",e.transform="translate(0, -50%)",e.right=0;break;case"right-top":e.top=0,e.right=0;break;case"right-bottom":e.bottom=0,e.right=0;break;case"bottom-center":e.bottom=0,e.transform="translate(50%, 0)";break;case"bottom-right":e.bottom=0,e.right=0;break;case"bottom-left":e.bottom=0,e.left=0;break;default:console.log("yyy content position")}return e}r.__docgenInfo={description:"",methods:[],displayName:"LibHelperOverlay",props:{transparency:{defaultValue:{value:"0.8",computed:!1},required:!1},color:{defaultValue:{value:'"white"',computed:!1},required:!1}}};const c=(n={primary:{containerPos:"center",contentPos:"center",content:t.jsx("div",{})}})=>{const[e,a]=C.useState();return C.useLayoutEffect(()=>{if(n!=null&&n.primary&&!e){const{containerPos:l,contentPos:h,content:H}=n.primary;a({content:H,containerPos:l,contentPos:h})}},[n,e]),e},ce={title:"Helper overlay"},i={render:()=>{const n=s("MENULEISTE",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},d={render:()=>{const n=s("LAYERBUTTONS",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},m={render:()=>{const n=s("HINTERGRUND",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},p={render:()=>{const n=s("MENU",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},g={render:()=>{const n=s("ZOOM",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},u={render:()=>{const n=s("VOLLBILD",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},f={render:()=>{const n=s("MINE_POSITION",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},v={render:()=>{const n=s("RATHAUS",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},y={render:()=>{const n=s("MESSUNGEN",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},E={render:()=>{const n=s("GAZETTEER_SUCHE",o),e=c(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}};var x,S,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MENULEISTE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var P,O,k;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("LAYERBUTTONS", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(k=(O=d.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var M,N,T;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("HINTERGRUND", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var L,R,U;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MENU", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var I,D,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("ZOOM", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(A=(D=g.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var G,_,B;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("VOLLBILD", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(B=(_=u.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var Z,w,V;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MINE_POSITION", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(V=(w=f.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var z,Y,q;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("RATHAUS", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var W,F,J;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MESSUNGEN", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(J=(F=y.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,X;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("GAZETTEER_SUCHE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ae=["Menüleiste","LayerButtons","Hintergrund","Menü","Zoom","Vollbild","MinePosition","Rathaus","Messungen","GazetteerSuche"];export{E as GazetteerSuche,m as Hintergrund,d as LayerButtons,p as Menü,i as Menüleiste,y as Messungen,f as MinePosition,v as Rathaus,u as Vollbild,g as Zoom,ae as __namedExportsOrder,ce as default};
