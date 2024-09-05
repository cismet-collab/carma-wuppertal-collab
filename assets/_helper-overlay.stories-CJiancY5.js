import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as y}from"./index-RYns6xqu.js";const o=(n={primary:{containerPos:"center",contentPos:"center",content:t.jsx("div",{})}})=>{const[e,C]=y.useState();return y.useLayoutEffect(()=>{if(n!=null&&n.primary&&!e){const{containerPos:c,contentPos:h,content:H}=n.primary;C({content:H,containerPos:c,contentPos:h})}},[n,e]),e},E={menu:{key:"MENULEISTE",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Menüleiste"})},layerWrapper:{key:"LAYERBUTTONS",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Layer Buttons"})},hintergrund:{key:"HINTERGRUND",content:t.jsx("div",{children:"Hintergrund"}),containerPos:"center",contentPos:"center"},modalMenu:{key:"MENU",containerPos:"center",contentPos:"center",content:t.jsx("div",{children:"Menü"})},zoomControl:{key:"ZOOM",content:t.jsx("div",{children:"Zoom"}),containerPos:"center",contentPos:"left-center"},fullScreenControl:{key:"VOLLBILD",content:t.jsx("div",{children:"Vollbild"}),containerPos:"center",contentPos:"left-center"},navigatorControl:{key:"MINE_POSITION",content:t.jsx("div",{children:"Mine Position"}),containerPos:"center",contentPos:"left-center"},homeControl:{key:"RATHAUS",content:t.jsx("div",{children:"Rathaus"}),containerPos:"center",contentPos:"left-center"},measurementControl:{key:"MESSUNGEN",content:t.jsx("div",{children:"Messungen"}),containerPos:"center",contentPos:"left-center"},gazetteerControl:{key:"GAZETTEER_SUCHE",content:"Gazetteer Suche",containerPos:"center",contentPos:"center"}},s=n=>{for(const e in E)if(E[e].key===n)return{primary:{...E[e]}}};function r({config:n,transparency:e=.8,color:C="white"}){const[c,h]=y.useState(null);return y.useEffect(()=>{if(n){const{content:H,containerPos:b,contentPos:$}=n,ee=te(b),ne=re($);h({pos:ee,contPos:ne,content:H})}},[n]),t.jsx("div",{style:{position:"fixed",top:0,zIndex:1e3,width:"100vw",height:"100vh",background:C,opacity:e},children:t.jsx("div",{style:{marginTop:"1rem"},children:t.jsx("span",{children:c?c.content:""})})})}function te(n){let e={};switch(n){case"center":e.transform="translate(0, 0)";break;case"top":e.transform="translate(0, -100%)";break;case"left":e.transform="translate(-100%, 0)";break;case"right":e.transform="translate(100%, 0)";break;case"bottom":e.transform="translate(0, 100%)";break;default:console.log("yyy element position")}return e}function re(n){let e={};switch(n){case"center":e.top="50%",e.left="50%",e.transform="translate(-50%, -50%)";break;case"top-center":e.top=0,e.transform="translate(50%, 0)";break;case"top-right":e.top=0,e.right=0;break;case"top-left":e.top=0,e.left=0;break;case"left-center":e.top="50%",e.transform="translate(0, -50%)",e.left=0;break;case"left-top":e.top=0,e.left=0;break;case"left-bottom":e.bottom=0,e.left=0;break;case"right-center":e.top="50%",e.transform="translate(0, -50%)",e.right=0;break;case"right-top":e.top=0,e.right=0;break;case"right-bottom":e.bottom=0,e.right=0;break;case"bottom-center":e.bottom=0,e.transform="translate(50%, 0)";break;case"bottom-right":e.bottom=0,e.right=0;break;case"bottom-left":e.bottom=0,e.left=0;break;default:console.log("yyy content position")}return e}r.__docgenInfo={description:"",methods:[],displayName:"LibHelperOverlay",props:{transparency:{defaultValue:{value:"0.8",computed:!1},required:!1},color:{defaultValue:{value:'"white"',computed:!1},required:!1}}};const ce={title:"Helper overlay"},a={render:()=>{const n=s("MENULEISTE"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},i={render:()=>{const n=s("LAYERBUTTONS"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},l={render:()=>{const n=s("HINTERGRUND"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},d={render:()=>{const n=s("MENU"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},m={render:()=>{const n=s("ZOOM"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},p={render:()=>{const n=s("VOLLBILD"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},u={render:()=>{const n=s("MINE_POSITION"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},f={render:()=>{const n=s("RATHAUS"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},g={render:()=>{const n=s("MESSUNGEN"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}},v={render:()=>{const n=s("GAZETTEER_SUCHE"),e=o(n);return t.jsx("div",{children:t.jsx(r,{config:e})})}};var x,S,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MENULEISTE");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var P,O,k;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("LAYERBUTTONS");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(k=(O=i.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var M,N,T;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("HINTERGRUND");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(T=(N=l.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var L,R,U;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MENU");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(U=(R=d.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var I,D,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("ZOOM");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(A=(D=m.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var G,_,B;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("VOLLBILD");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var Z,w,V;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MINE_POSITION");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(V=(w=u.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var z,Y,q;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("RATHAUS");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(q=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var W,F,J;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("MESSUNGEN");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(J=(F=g.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpComponentConfig("GAZETTEER_SUCHE");
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ae=["Menüleiste","LayerButtons","Hintergrund","Menü","Zoom","Vollbild","MinePosition","Rathaus","Messungen","GazetteerSuche"];export{v as GazetteerSuche,l as Hintergrund,i as LayerButtons,d as Menü,a as Menüleiste,g as Messungen,u as MinePosition,f as Rathaus,p as Vollbild,m as Zoom,ae as __namedExportsOrder,ce as default};
