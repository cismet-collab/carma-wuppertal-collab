import{j as n}from"./jsx-runtime-CCjYJYRa.js";import{r as a}from"./index-uubelm5h.js";import{T as Cn}from"./TopicMapContextProvider-Bttv3ArM.js";import{c as z}from"./setPrototypeOf-Bdmw9Av6.js";import{i as En,j as Pn,k as Sn,P as On,u as Hn,T as In,O as m,I as Nn,G as kn,M as Tn,l as Dn,F as Mn,R as wn,m as An,L as Rn,n as Bn,Z as Ln,A as _n,B as Gn,o as $n,p as Wn,q as Vn,r as Un,D as zn,s as Fn}from"./index-CCZSQCJD.js";import{K as Zn}from"./KeyCode-DpDmaX-j.js";import{i as Kn,g as Yn}from"./ContextIsolator-DTxfI8V5.js";import{g as qn,m as Xn,r as Jn,P as Qn,C as et,u as nt,c as tt}from"./index-BkGEKA-Y.js";import"./index-DcQjGrIY.js";import"./Section-Bmrijq2t.js";import"./MeinStandpunktMarkerMitKompass-Bx6J2Utr.js";import"./TrinkwasserModal-Bj2ZREYq.js";import"./_ebikes-sim.stories-q8xMZ7oK.js";import"./_emob-sim.stories-DSr-rtK9.js";import"./leaflet-src-C2-UAFJj.js";import"./ResponsiveTopicMapContextProvider-CG29XBgl.js";import"./index-D3eZ-H7s.js";import"./InKartePositionierenText-BoGpjOiY.js";import"./genericSecondaryInfoFooterFactory-CDcx0LXr.js";import"./_vorhabenkarte-sim.stories-BdYLHZhy.js";import"./Modal-C_WSHB4z.js";import"./index-CfSZYJ7a.js";import"./slugify-5Xa0nNd3.js";import"./_luftmessstationen-sim.stories-DiOoiYCy.js";import"./imageUrlManipulation-DVIo1G1U.js";import"./FuzzySearchParagraph-DxkTl0P2.js";import"./CompassNeedle-C-p8W9Fc.js";import"./_x-and-ride-sim.stories-sfVvc8qV.js";import"./_klimaorte-sim.stories-POnEfrLx.js";import"./Table-Ba3j6loS.js";const F=t=>t?typeof t=="function"?t():t:null,rt=t=>{const{componentCls:e,popoverColor:o,titleMinWidth:r,fontWeightStrong:s,innerPadding:c,boxShadowSecondary:u,colorTextHeading:g,borderRadiusLG:y,zIndexPopup:b,titleMarginBottom:f,colorBgElevated:h,popoverBg:C,titleBorderBottom:j,innerContentPadding:P,titlePadding:x}=t;return[{[e]:Object.assign(Object.assign({},Jn(t)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:b,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":h,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${e}-content`]:{position:"relative"},[`${e}-inner`]:{backgroundColor:C,backgroundClip:"padding-box",borderRadius:y,boxShadow:u,padding:c},[`${e}-title`]:{minWidth:r,marginBottom:f,color:g,fontWeight:s,borderBottom:j,padding:x},[`${e}-inner-content`]:{color:o,padding:P}})},En(t,"var(--antd-arrow-background-color)"),{[`${e}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow,display:"inline-block",[`${e}-content`]:{display:"inline-block"}}}]},ot=t=>{const{componentCls:e}=t;return{[e]:Qn.map(o=>{const r=t[`${o}6`];return{[`&${e}-${o}`]:{"--antd-arrow-background-color":r,[`${e}-inner`]:{backgroundColor:r},[`${e}-arrow`]:{background:"transparent"}}}})}},st=t=>{const{lineWidth:e,controlHeight:o,fontHeight:r,padding:s,wireframe:c,zIndexPopupBase:u,borderRadiusLG:g,marginXS:y,lineType:b,colorSplit:f,paddingSM:h}=t,C=o-r,j=C/2,P=C/2-e,x=s;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:u+30},Pn(t)),Sn({contentRadius:g,limitVerticalRadius:!0})),{innerPadding:c?0:12,titleMarginBottom:c?0:y,titlePadding:c?`${j}px ${x}px ${P}px`:0,titleBorderBottom:c?`${e}px ${b} ${f}`:"none",innerContentPadding:c?`${h}px ${x}px`:0})},sn=qn("Popover",t=>{const{colorBgElevated:e,colorText:o}=t,r=Xn(t,{popoverBg:e,popoverColor:o});return[rt(r),ot(r),Kn(r,"zoom-big")]},st,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var ct=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(o[r[s]]=t[r[s]]);return o};const cn=({title:t,content:e,prefixCls:o})=>!t&&!e?null:a.createElement(a.Fragment,null,t&&a.createElement("div",{className:`${o}-title`},t),e&&a.createElement("div",{className:`${o}-inner-content`},e)),at=t=>{const{hashId:e,prefixCls:o,className:r,style:s,placement:c="top",title:u,content:g,children:y}=t,b=F(u),f=F(g),h=z(e,o,`${o}-pure`,`${o}-placement-${c}`,r);return a.createElement("div",{className:h,style:s},a.createElement("div",{className:`${o}-arrow`}),a.createElement(On,Object.assign({},t,{className:e,prefixCls:o}),y||a.createElement(cn,{prefixCls:o,title:b,content:f})))},it=t=>{const{prefixCls:e,className:o}=t,r=ct(t,["prefixCls","className"]),{getPrefixCls:s}=a.useContext(et),c=s("popover",e),[u,g,y]=sn(c);return u(a.createElement(at,Object.assign({},r,{prefixCls:c,hashId:g,className:z(o,y)})))};var lt=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(o[r[s]]=t[r[s]]);return o};const dt=a.forwardRef((t,e)=>{var o,r;const{prefixCls:s,title:c,content:u,overlayClassName:g,placement:y="top",trigger:b="hover",children:f,mouseEnterDelay:h=.1,mouseLeaveDelay:C=.1,onOpenChange:j,overlayStyle:P={},styles:x,classNames:E}=t,Y=lt(t,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{getPrefixCls:q,className:dn,style:mn,classNames:X,styles:J}=nt("popover"),Z=q("popover",s),[pn,gn,un]=sn(Z),fn=q(),yn=z(g,gn,un,dn,X.root,E==null?void 0:E.root),xn=z(X.body,E==null?void 0:E.body),[hn,vn]=Hn(!1,{value:(o=t.open)!==null&&o!==void 0?o:t.visible,defaultValue:(r=t.defaultOpen)!==null&&r!==void 0?r:t.defaultVisible}),Q=(v,S)=>{vn(v,!0),j==null||j(v,S)},bn=v=>{v.keyCode===Zn.ESC&&Q(!1,v)},jn=v=>{Q(v)},ee=F(c),ne=F(u);return pn(a.createElement(In,Object.assign({placement:y,trigger:b,mouseEnterDelay:h,mouseLeaveDelay:C},Y,{prefixCls:Z,classNames:{root:yn,body:xn},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},J.root),mn),P),x==null?void 0:x.root),body:Object.assign(Object.assign({},J.body),x==null?void 0:x.body)},ref:e,open:hn,onOpenChange:jn,overlay:ee||ne?a.createElement(cn,{prefixCls:Z,title:ee,content:ne}):null,transitionName:Yn(fn,"zoom-big",Y.transitionName),"data-popover-inject":!0}),tt(f,{onKeyDown:v=>{var S,K;a.isValidElement(f)&&((K=f==null?void 0:(S=f.props).onKeyDown)===null||K===void 0||K.call(S,v)),bn(v)}})))}),an=dt;an._InternalPanelDoNotUseOrYouWillBeFired=it;const l=(t,e)=>{for(const o in e)if(e[o].key===t)return{primary:{...e[o]},...e[o].secondary!==void 0&&{secondary:e[o].secondary}}};function i({config:t,transparency:e=.8,color:o="white",primaryPlaceInStory:r="center",showSecondaryWithKey:s=()=>{}}){const[c,u]=a.useState(null);let g;switch(r){case"center":g="0 auto";break;case"left":g="";break;case"right":g="0 0 0 auto";break}return a.useEffect(()=>{if(t){const{content:y,containerPos:b,contentPos:f,secondaryComponent:h}=t,C=mt(b),j=pt(f);u({pos:C,contPos:j,content:y,...h&&{secondaryComponent:h}})}},[t]),n.jsxs(Cn,{appKey:"storybook-appkey",children:[" ",n.jsxs("div",{style:{position:"fixed",top:0,zIndex:1e3,width:"100vw",height:"100vh",background:o,opacity:e},children:[c&&c.secondaryComponent&&n.jsx("div",{style:{fontSize:"12px",marginTop:"5px",textAlign:"right",width:"98%",paddingRight:"15px",color:"#919090"},children:"Auf den Text klicken um sekundäre Komponente zu öffnen"}),n.jsx("div",{style:{marginTop:"1rem",height:"95vh",width:"96%",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"},children:c&&(c.secondaryComponent?n.jsx(an,{content:c.secondaryComponent.content,trigger:"click",placement:c.secondaryComponent.secondaryPos,autoAdjustOverflow:!1,children:n.jsx("span",{style:{cursor:"pointer",textAlign:"center",width:"max-content",margin:g},children:c.content})}):n.jsx("div",{style:{textAlign:"center",width:"max-content",margin:g},children:a.cloneElement(c.content,{showSecondaryWithKey:s})}))})]})]})}function mt(t){let e={};switch(t){case"center":e.transform="translate(0, 0)";break;case"top":e.transform="translate(0, -100%)";break;case"left":e.transform="translate(-100%, 0)";break;case"right":e.transform="translate(100%, 0)";break;case"bottom":e.transform="translate(0, 100%)";break;default:console.log("yyy element position")}return e}function pt(t){let e={};switch(t){case"center":e.top="50%",e.left="50%",e.transform="translate(-50%, -50%)";break;case"top-center":e.top=0,e.transform="translate(50%, 0)";break;case"top-right":e.top=0,e.right=0;break;case"top-left":e.top=0,e.left=0;break;case"left-center":e.top="50%",e.transform="translate(0, -50%)",e.left=0;break;case"left-top":e.top=0,e.left=0;break;case"left-bottom":e.bottom=0,e.left=0;break;case"right-center":e.top="50%",e.transform="translate(0, -50%)",e.right=0;break;case"right-top":e.top=0,e.right=0;break;case"right-bottom":e.bottom=0,e.right=0;break;case"bottom-center":e.bottom=0,e.transform="translate(50%, 0)";break;case"bottom-right":e.bottom=0,e.right=0;break;case"bottom-left":e.bottom=0,e.left=0;break;default:console.log("yyy content position")}return e}i.__docgenInfo={description:"",methods:[],displayName:"LibHelperOverlay",props:{transparency:{defaultValue:{value:"0.8",computed:!1},required:!1},color:{defaultValue:{value:'"white"',computed:!1},required:!1},primaryPlaceInStory:{defaultValue:{value:'"center"',computed:!1},required:!1},showSecondaryWithKey:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const d=t=>{const[e,o]=a.useState();return a.useLayoutEffect(()=>{if(t!=null&&t.primary&&!e){const{containerPos:r,contentPos:s,content:c}=t.primary,u={content:c,containerPos:r,contentPos:s,...t.secondary&&{secondaryComponent:t.secondary}};o(u)}},[t,e]),e},p={menu:{key:"MENULEISTE",containerPos:"center",contentPos:"center",content:n.jsx("div",{children:n.jsx("b",{children:"Menüleiste"})}),secondary:{content:n.jsx(m,{children:n.jsx(Un,{})}),secondaryPos:"bottom"}},helpOverlay:{key:"HILFE_OVERLAY",containerPos:"center",contentPos:"center",contentWidth:"145px",content:n.jsx("div",{style:{textAlign:"center"},children:n.jsxs("b",{children:["Hilfefolie",n.jsx("br",{}),"überlagern"]})}),secondary:{content:n.jsx(m,{children:n.jsx(Vn,{})}),secondaryPos:"bottom"}},layerWrapper:{key:"LAYERBUTTONS",position:{top:69,right:"calc(50% - 73px)"},content:n.jsx("div",{children:n.jsx("b",{children:"Kartensteuerelemente"})}),secondary:{content:n.jsx(m,{children:n.jsx(Wn,{})}),secondaryPos:"bottom"}},centerElement:{key:"CENTER",position:{top:"50%",left:"50%"},content:n.jsx("div",{style:{border:1,borderRadius:10,padding:10,borderStyle:"solid",width:"max-content",textAlign:"center"},children:n.jsxs("b",{children:["Karteninteraktion mit ",n.jsx("br",{})," Maus oder Touchscreen"]})}),secondary:{content:n.jsx(m,{children:n.jsx($n,{})}),secondaryPos:"bottom"}},hintergrund:{key:"HINTERGRUND",containerPos:"center",contentPos:"center",content:n.jsx("div",{style:{textAlign:"center"},children:n.jsxs("b",{children:["Hintergrund",n.jsx("br",{}),"auswählen"]})}),secondary:{content:n.jsx(m,{children:n.jsx(Gn,{})}),secondaryPos:"bottom"}},modalMenu:{key:"MENU",containerPos:"center",contentPos:"right-center",content:n.jsx("div",{style:{textAlign:"center"},children:n.jsxs("b",{children:["Anwendungs-",n.jsx("br",{}),"menü"]})}),secondary:{content:n.jsx(m,{children:n.jsx(_n,{})}),secondaryPos:"bottom"}},zoomControl:{key:"ZOOM",content:n.jsx("div",{children:n.jsxs("b",{children:["Zoom in/",n.jsx("br",{}),"Zoom out"]})}),containerPos:"center",contentPos:"left-center",contentWidth:"70px",secondary:{content:n.jsx(m,{children:n.jsx(Ln,{})}),secondaryPos:"right"}},fullScreenControl:{key:"VOLLBILD",content:n.jsx("div",{children:n.jsx("b",{children:"Vollbildmodus"})}),containerPos:"center",contentPos:"left-center",contentWidth:"99px",secondary:{content:n.jsx(m,{children:n.jsx(Bn,{})}),secondaryPos:"right"}},navigatorControl:{key:"MEINE_POSITION",content:n.jsx("div",{children:n.jsx("b",{children:"Mein Standort"})}),containerPos:"center",contentPos:"left-center",contentWidth:"100px",secondary:{content:n.jsx(m,{children:n.jsx(Rn,{})}),secondaryPos:"right"}},mapModeToggleControl:{key:"2D_3D_TOGGLE",content:n.jsx("div",{children:n.jsx("b",{children:"Wechsel von 2D- und 3D-Ansicht"})}),containerPos:"center",contentPos:"left-center",contentWidth:"234px",secondary:{content:n.jsx(m,{children:n.jsx(An,{})}),secondaryPos:"right"}},alignNorthControl:{key:"EINNORDEN",content:n.jsx("div",{children:n.jsx("b",{children:"3D-Ansicht drehen und kippen"})}),containerPos:"center",contentPos:"left-center",contentWidth:"234px",secondary:{content:n.jsx(m,{children:n.jsx(wn,{})}),secondaryPos:"right"}},featureInfoControl:{key:"SACHDATENABFRAGE",content:n.jsx("div",{children:n.jsx("b",{children:"Modus Multi-Sachdatenabfrage"})}),containerPos:"center",contentPos:"left-center",contentWidth:"135px",secondary:{content:n.jsx(m,{children:n.jsx(Mn,{})}),secondaryPos:"right"}},homeControl:{key:"RATHAUS",content:n.jsx("div",{children:n.jsx("b",{children:"Zum Rathaus Barmen"})}),containerPos:"center",contentPos:"left-center",contentWidth:"149px",secondary:{content:n.jsx(m,{children:n.jsx(Dn,{})}),secondaryPos:"right"}},measurementControl:{key:"MESSUNGEN",content:n.jsx("div",{children:n.jsx("b",{children:"Modus Strecke/Fläche messen"})}),containerPos:"center",contentPos:"left-center",contentWidth:"214px",secondary:{content:n.jsx(m,{children:n.jsx(Tn,{})}),secondaryPos:"right"}},gazetteerControl:{key:"GAZETTEER_SUCHE",content:n.jsx("div",{children:n.jsx("b",{children:"In Karte positionieren"})}),containerPos:"center",contentPos:"center",secondary:{content:n.jsx(m,{children:n.jsx(kn,{})}),secondaryPos:"top"}},infoboxControl:{key:"INFOBOX",content:n.jsx("div",{children:n.jsx("b",{children:"Info-Box"})}),position:{bottom:0,right:10},secondary:{content:n.jsx(m,{children:n.jsx(Nn,{})}),secondaryPos:"top"}}},ln={videoControl:{key:"DEMOVIDEO",content:n.jsx("div",{children:"Demo video"}),containerPos:"center",contentPos:"left-center",secondary:{content:n.jsx(Fn,{}),secondaryPos:"right"}},gifControl:{key:"DEMOGIF",content:n.jsx("div",{children:"Demo gif"}),containerPos:"center",contentPos:"left-center",secondary:{content:n.jsx(zn,{}),secondaryPos:"right"}}},gt={transparency:.8,color:"#000000"},Ut={title:"Geoportal/Helper-Overlay"},O={render:()=>{const t=l("MENULEISTE",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e})})}},H={render:()=>{const t=l("HILFE_OVERLAY",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e})})}},I={render:()=>{const t=l("LAYERBUTTONS",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e})})}},N={render:()=>{const t=l("HINTERGRUND",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"right"})})}},k={render:()=>{const t=l("MENU",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"right"})})}},T={render:()=>{const t=l("ZOOM",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}},D={render:()=>{const t=l("VOLLBILD",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}},M={render:()=>{const t=l("MEINE_POSITION",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}},w={render:()=>{const t=l("RATHAUS",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}},A={render:()=>{const t=l("MESSUNGEN",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}},R={render:()=>{const t=l("2D_3D_TOGGLE",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}},B={render:()=>{const t=l("EINNORDEN",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}},L={render:()=>{const t=l("SACHDATENABFRAGE",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}},_={render:()=>{const t=l("GAZETTEER_SUCHE",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e})})}},G={render:()=>{const t=l("INFOBOX",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"right"})})}},$={render:()=>{const t=l("CENTER",p),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e})})}},W={render:()=>{const{transparency:t,color:e}=gt;return n.jsx("div",{style:{width:"100%",height:"90vh",backgroundColor:e,opacity:t}})}},V={render:()=>{const t=l("DEMOVIDEO",ln),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}},U={render:()=>{const t=l("DEMOGIF",ln),e=d(t);return n.jsx("div",{children:n.jsx(i,{config:e,primaryPlaceInStory:"left"})})}};var te,re,oe;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("MENULEISTE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(oe=(re=O.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ce,ae;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("HILFE_OVERLAY", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(ae=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var ie,le,de;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("LAYERBUTTONS", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(de=(le=I.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,pe,ge;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("HINTERGRUND", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="right" />
      </div>;
  }
}`,...(ge=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ue,fe,ye;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("MENU", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="right" />
      </div>;
  }
}`,...(ye=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var xe,he,ve;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("ZOOM", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(ve=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var be,je,Ce;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("VOLLBILD", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(Ce=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Ee,Pe,Se;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("MEINE_POSITION", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(Se=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Se.source}}};var Oe,He,Ie;w.parameters={...w.parameters,docs:{...(Oe=w.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("RATHAUS", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(Ie=(He=w.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var Ne,ke,Te;A.parameters={...A.parameters,docs:{...(Ne=A.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("MESSUNGEN", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(Te=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var De,Me,we;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("2D_3D_TOGGLE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(we=(Me=R.parameters)==null?void 0:Me.docs)==null?void 0:we.source}}};var Ae,Re,Be;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("EINNORDEN", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(Be=(Re=B.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var Le,_e,Ge;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("SACHDATENABFRAGE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(Ge=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Ge.source}}};var $e,We,Ve;_.parameters={..._.parameters,docs:{...($e=_.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("GAZETTEER_SUCHE", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(Ve=(We=_.parameters)==null?void 0:We.docs)==null?void 0:Ve.source}}};var Ue,ze,Fe;G.parameters={...G.parameters,docs:{...(Ue=G.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("INFOBOX", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="right" />
      </div>;
  }
}`,...(Fe=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source}}};var Ze,Ke,Ye;$.parameters={...$.parameters,docs:{...(Ze=$.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("CENTER", geoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} />
      </div>;
  }
}`,...(Ye=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var qe,Xe,Je;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Je=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var Qe,en,nn;V.parameters={...V.parameters,docs:{...(Qe=V.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("DEMOVIDEO", demoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(nn=(en=V.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,rn,on;U.parameters={...U.parameters,docs:{...(tn=U.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  render: () => {
    const element = getCollabedHelpElementsConfig("DEMOGIF", demoElements);
    const config = useOverlayHelper(element);
    return <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>;
  }
}`,...(on=(rn=U.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};const zt=["Menüleiste","HilfeOverlay","LayerButtons","Hintergrund","Menü","Zoom","Vollbild","MeinePosition","Rathaus","Messungen","Wechsel2D3D","Einnorden","Sachdatenabfrage","GazetteerSuche","Infobox","Center","Background","DemoVideo","DemoGif"];export{W as Background,$ as Center,U as DemoGif,V as DemoVideo,B as Einnorden,_ as GazetteerSuche,H as HilfeOverlay,N as Hintergrund,G as Infobox,I as LayerButtons,M as MeinePosition,k as Menü,O as Menüleiste,A as Messungen,w as Rathaus,L as Sachdatenabfrage,D as Vollbild,R as Wechsel2D3D,T as Zoom,zt as __namedExportsOrder,Ut as default};
