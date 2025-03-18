import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{F as j,b as C,c as y,d as k,e as z,g as L}from"./index-CrOVL4CJ.js";import{M as g}from"./Modal-B7mRiT6y.js";import{_ as K,u as R,c as T,a as M,A as a,C as t}from"./Card-BjEfaFhr.js";import{R as v,r as H}from"./index-CTjT7uj6.js";import{_ as E}from"./inheritsLoose-D4WLrkXa.js";var N=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],B=v.forwardRef(function(r,l){var d=r.bsPrefix,i=r.className,s=r.striped,n=r.bordered,c=r.borderless,o=r.hover,h=r.size,f=r.variant,u=r.responsive,w=K(r,N),x=R(d,"table"),A=T(i,x,f&&x+"-"+f,h&&x+"-"+h,s&&x+"-striped",n&&x+"-bordered",c&&x+"-borderless",o&&x+"-hover"),m=v.createElement("table",E({},w,{className:A,ref:l}));if(u){var p=x+"-responsive";return typeof u=="string"&&(p=p+"-"+u),v.createElement("div",{className:p},m)}return m});const S=r=>{let l=[],d=[],i="";for(let s in r){if(s.startsWith("stecker")){const c=r[s].split("!").map(o=>o.trim());l.push({url:c[0]+".png",text:c[1]})}if(s.startsWith("zugang")){const n=r[s];d.push(n)}}return r.offen&&(r.offen.includes("24-7")?i="24/7":i=r.offen),{stecker:l,zugang:d,oeffnungszeiten:i,...r}},b=({children:r,eventKey:l,color:d})=>{const i=M(l,()=>{}),[s,n]=H.useState(!1),c=()=>{n(!0)},o=()=>{n(!1)};return e.jsx("span",{onMouseEnter:c,onMouseLeave:o,onClick:i,style:{color:d,cursor:"pointer",textDecoration:s?"underline":"none"},children:r})};b.__docgenInfo={description:"",methods:[],displayName:"CustomAccordionToggle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},eventKey:{required:!0,tsType:{name:"string"},description:""},color:{required:!0,tsType:{name:"string"},description:""}}};const I=({feature:r,setOpen:l})=>{const d=()=>{l(!1)},i=S(r.properties);let s;i.foto!==void 0&&(s=i.foto);let n=[];i!=null&&i.betreibertelefon&&n.push(e.jsx("a",{href:"tel:"+(i==null?void 0:i.betreibertelefon),style:{marginRight:"4px"},children:e.jsx(j,{icon:y,style:{color:"grey",width:"26px",textAlign:"center"},size:"2x"})})),i!=null&&i.betreiberemail&&n.push(e.jsx("a",{href:"mailto:"+(i==null?void 0:i.betreiberemail),target:"_blank",children:e.jsx(j,{icon:k,style:{color:"grey",width:"26px",textAlign:"center"},size:"2x"})})),i!=null&&i.betreiberhomepage&&n.push(e.jsx("a",{href:i==null?void 0:i.betreiberhomepage,target:"_blank",style:{marginLeft:"4px"},children:e.jsx(j,{icon:z,style:{color:"grey",width:"26px",textAlign:"center"},size:"2x"})}));let c=[];return i.stecker.forEach(o=>{let h=e.jsx("img",{src:o.url,width:"50"});c.push(e.jsxs("tr",{children:[e.jsx("td",{style:{verticalAlign:"middle",textAlign:"center"},children:h}),e.jsx("td",{style:{verticalAlign:"middle"},children:o.text})]}))}),e.jsxs(g,{style:{zIndex:29e8},height:"100%",size:"lg",show:!0,onHide:d,keyboard:!1,children:[e.jsx(g.Header,{children:e.jsxs(g.Title,{children:[e.jsx(j,{icon:C}),` Datenblatt: Ladestation ${i.standort}`]})}),e.jsxs(g.Body,{id:"myMenu",children:[e.jsxs("div",{style:{width:"100%",minHeight:250},children:[s!==void 0&&e.jsx("img",{alt:"Bild",style:{paddingLeft:10,paddingRight:10,float:"right",paddingBottom:"5px"},src:s,width:"250"}),e.jsxs("div",{style:{fontSize:"115%",padding:"10px",paddingTop:"0px"},children:[e.jsx("div",{children:e.jsx("b",{children:"Adresse:"})}),e.jsx("div",{children:i.adresse}),e.jsx("br",{}),e.jsx("div",{children:i.bemerkung}),e.jsxs("div",{children:[" ",i.zusatzinfo]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("b",{children:"Öffnungszeiten:"})," ",i.oeffnungszeiten]})]})]}),e.jsx(a,{style:{marginBottom:6},defaultActiveKey:"0",children:e.jsxs(t,{style:{backgroundColor:"#bce8f1"},children:[e.jsx(t.Header,{children:e.jsx(b,{eventKey:"0",color:"#31708f",children:i.status?"Lademöglichkeit verfügbar (online)":"Lademöglichkeit momentan nicht verfügbar (offline)"})}),e.jsx(a.Collapse,{eventKey:"0",children:e.jsxs(t.Body,{style:{backgroundColor:"white"},children:[e.jsxs("div",{children:[e.jsx("b",{children:"Ladepunkte:"})," ",i.anzahl]}),e.jsxs("div",{children:[e.jsx("b",{children:"Steckerverbindungen:"}),e.jsx(B,{striped:!0,bordered:!0,hover:!0,style:{marginTop:8},children:e.jsx("tbody",{children:c})}),e.jsx("div",{style:{textAlign:"right"},children:e.jsx("a",{href:"https://github.com/cismet/wupp-topic-maps/blob/feature/039-winter-2019-dev-sprint/public/images/emob/",target:"_license",children:"Bildnachweis"})})]}),e.jsxs("div",{children:[e.jsx("b",{children:"Strom:"})," ",i.strom]}),e.jsxs("div",{children:[e.jsx("b",{children:"Schnellladestation:"})," ",i.schnellladestation?"Ja":"Nein"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Öko-Strom:"})," ",i.gruen?"Ja":"Nein"]})]})})]})}),e.jsx(a,{style:{marginBottom:6},defaultActiveKey:"1",children:e.jsxs(t,{style:{backgroundColor:"#faebcc",color:"black"},children:[e.jsx(t.Header,{children:e.jsx(b,{eventKey:"1",color:"#8a6d3b",children:"Bezahlen"})}),e.jsx(a.Collapse,{eventKey:"1",children:e.jsxs(t.Body,{style:{backgroundColor:"white"},children:[e.jsxs("div",{children:[e.jsx("b",{children:"Zugang:"})," ",i.zugang.map((o,h)=>e.jsx("div",{children:o},h))]}),e.jsxs("div",{children:[e.jsx("b",{children:"Parkgebühr:"})," ",i.parkgebuehr]})]})})]})}),e.jsx(a,{style:{marginBottom:6},defaultActiveKey:"2",children:e.jsxs(t,{style:{backgroundColor:"#d6e9c6"},children:[e.jsx(t.Header,{children:e.jsx(b,{eventKey:"2",color:"#3c763d",children:"Betreiber"})}),e.jsx(a.Collapse,{eventKey:"2",children:e.jsxs(t.Body,{style:{backgroundColor:"white"},children:[e.jsx("div",{style:{paddingLeft:10,paddingRight:10,float:"right",paddingBottom:"5px"},children:n}),e.jsx("div",{children:i==null?void 0:i.betreiber}),e.jsx("div",{children:i==null?void 0:i.betreiberadresse}),e.jsx("div",{children:i==null?void 0:i.betreiberort}),e.jsx("br",{})]})})]})})]},"prbr.secondaryInfo")]})};I.__docgenInfo={description:"",methods:[],displayName:"EMobiModal"};const P=r=>{let l=[],d=[],i="";for(let s in r){if(s.startsWith("typ")){const n=r[s];l.push(n)}if(s.startsWith("zugang")){const n=r[s];d.push(n)}}return r.offen&&(r.offen.includes("24-7")?i="24/7":i=r.offen),{...r,stecker:l,zugangsarten:d,oeffnungszeiten:i}},q=({feature:r,setOpen:l})=>{const d=()=>{l(!1)};if(r!==void 0){const i=P(r.properties);let s;i.foto!==void 0&&(s=i.foto);let n=[];i!=null&&i.betreibertelefon&&n.push(e.jsx("a",{href:"tel:"+(i==null?void 0:i.betreibertelefon),style:{marginRight:"4px"},children:e.jsx(j,{icon:y,style:{color:"grey",width:"26px",textAlign:"center"},size:"2x"})})),i!=null&&i.betreiberemail&&n.push(e.jsx("a",{href:"mailto:"+(i==null?void 0:i.betreiberemail),target:"_blank",children:e.jsx(j,{icon:k,style:{color:"grey",width:"26px",textAlign:"center"},size:"2x"})})),i!=null&&i.betreiberhomepage&&n.push(e.jsx("a",{href:i==null?void 0:i.betreiberhomepage,target:"_blank",style:{marginLeft:"4px"},children:e.jsx(j,{icon:z,style:{color:"grey",width:"26px",textAlign:"center"},size:"2x"})}));let c=[];i.stecker.forEach(h=>{c.push(e.jsx("tr",{children:e.jsx("td",{style:{verticalAlign:"middle"},children:h})}))});let o=[];return o.push(e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("div",{style:{width:"100%",minHeight:50},children:[e.jsxs("div",{style:{float:"left",paddingRight:"5px"},children:[e.jsx("div",{children:e.jsx("b",{children:"Ladebox:"})}),e.jsx("div",{children:e.jsx("img",{alt:"Box",style:{paddingLeft:10,paddingRight:10,float:"left",paddingBottom:"5px"},src:i.ladebox_zu,width:"50"})})]}),e.jsxs("div",{style:{float:"left"},children:[e.jsx("div",{children:i.ladebox_anz}),e.jsx("div",{children:i.ladebox_pfand})]})]})})})),e.jsxs(g,{style:{zIndex:29e8},height:"100%",size:"lg",show:!0,onHide:d,keyboard:!1,children:[e.jsx(g.Header,{children:e.jsxs(g.Title,{children:[e.jsx(j,{icon:L}),` Datenblatt: Ladestation ${i.standort}`]})}),e.jsxs(g.Body,{id:"myMenu",children:[e.jsx("div",{style:{width:"100%",minHeight:250},children:e.jsxs("div",{style:{width:"100%",minHeight:250},children:[s!==void 0&&e.jsx("img",{alt:"Bild",style:{paddingLeft:10,paddingRight:10,float:"right",paddingBottom:"5px"},src:s,width:"250"}),e.jsxs("div",{style:{fontSize:"115%",padding:"10px",paddingTop:"0px"},children:[e.jsx("div",{children:e.jsx("b",{children:"Adresse:"})}),e.jsx("div",{children:i.adresse}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("b",{children:"Detailinformation:"})," "]}),e.jsxs("div",{children:[i.detailbeschreibung," "]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("b",{children:"Bemerkung:"})," "]}),e.jsx("div",{children:i.bemerkung}),e.jsx("div",{children:i.zusatzinfo})]})]})}),e.jsxs("div",{style:{padding:"10px",paddingTop:"0px"},children:[e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("b",{children:"Öffnungszeiten:"})," ",i.oeffnungszeiten]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("b",{children:"Stellplätze:"})," ",i.anzahl_plaetze]})]}),e.jsx(a,{style:{marginBottom:6},defaultActiveKey:"0",children:e.jsxs(t,{style:{backgroundColor:"#bce8f1"},children:[e.jsx(t.Header,{children:e.jsx(b,{eventKey:"0",color:"#31708f",children:i.status?"Lademöglichkeit verfügbar (online)":"Lademöglichkeit momentan nicht verfügbar (offline)"})}),e.jsx(a.Collapse,{eventKey:"0",children:e.jsxs(t.Body,{style:{backgroundColor:"white"},children:[e.jsx("div",{children:i.verfuegbar}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("b",{children:"Ladepunkte:"})," ",i.anzahl_ladepunkte]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("b",{children:"Steckerverbindungen:"}),e.jsx(B,{striped:!0,bordered:!0,hover:!0,style:{marginTop:8},children:e.jsx("tbody",{children:c})})]}),e.jsxs("div",{children:[e.jsx("b",{children:"Öko-Strom:"})," ",i.gruen?"Ja":"Nein"]}),e.jsx("div",{style:{width:"100%"},children:e.jsx("table",{style:{marginTop:8},children:o})})]})})]})}),e.jsx(a,{style:{marginBottom:6},defaultActiveKey:"1",children:e.jsxs(t,{style:{backgroundColor:"#faebcc",color:"black"},children:[e.jsx(t.Header,{children:e.jsx(b,{eventKey:"1",color:"#8a6d3b",children:"Bezahlen"})}),e.jsx(a.Collapse,{eventKey:"1",children:e.jsxs(t.Body,{style:{backgroundColor:"white"},children:[e.jsxs("div",{children:[e.jsx("b",{children:"Authentifizierung:"})," ",i.zugangsarten.map((h,f)=>e.jsx("div",{children:h},f))]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("b",{children:"Ladekosten:"})," ",i.ladekosten]})]})})]})}),e.jsx(a,{style:{marginBottom:6},defaultActiveKey:"2",children:e.jsxs(t,{style:{backgroundColor:"#d6e9c6"},children:[e.jsx(t.Header,{children:e.jsx(b,{eventKey:"2",color:"#3c763d",children:"Betreiber"})}),e.jsx(a.Collapse,{eventKey:"2",children:e.jsxs(t.Body,{style:{backgroundColor:"white"},children:[e.jsx("div",{style:{paddingLeft:10,paddingRight:10,float:"right",paddingBottom:"5px"},children:n}),e.jsx("div",{children:i==null?void 0:i.betreiber}),e.jsx("div",{children:i==null?void 0:i.betreiberadresse}),e.jsx("div",{children:i==null?void 0:i.betreiberort}),e.jsx("br",{})]})})]})})]},"prbr.secondaryInfo")]})}};q.__docgenInfo={description:"",methods:[],displayName:"EMobiRadModal"};export{I as E,q as a};
