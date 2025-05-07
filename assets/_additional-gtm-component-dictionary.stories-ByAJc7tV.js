import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";const p=()=>e.jsxs("div",{style:{padding:0,color:"#3d3d3d",background:"#f2f2f2",borderRadius:8},children:[e.jsx("h3",{children:"HelpTextDemo Component (.jsx)"}),e.jsx("p",{children:"This is a demo component for the GTMComponentDictionary auto-import test."})]});p.__docgenInfo={description:"",methods:[],displayName:"HelpTextDemo"};const x=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),m=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Help Text Demo (.tsx)"}),e.jsx("p",{children:"This is a demo of the HelpText component."}),e.jsx("p",{children:"The HelpText component can be used to provide additional information or instructions to the user."}),e.jsx("p",{children:"It can be used in conjunction with other components to provide context and guidance."})]});m.__docgenInfo={description:"",methods:[],displayName:"HelpTextDemo2"};const u=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),g={title:"Generic TopicMap",argTypes:{filter:{control:"text",description:"Filter components by name substring (case-insensitive)",defaultValue:""}}},t={args:{filter:""},render:({filter:n})=>{const o={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh",padding:24,background:"#fafbfc"},i=Object.entries(v).filter(([r])=>r.toLowerCase().includes(n.toLowerCase()));return e.jsxs("div",{id:"myMenu",style:o,children:[i.length===0&&e.jsx("div",{style:{color:"#888",fontStyle:"italic",padding:32},children:"No components match this filter."}),i.map(([r,b])=>e.jsxs("div",{style:{marginBottom:40},children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:0,color:"#0067b8",fontSize:18,padding:"0 8px",display:"inline-block",background:"#f5f7fa",borderRadius:"8px 8px 0 0",border:"1px solid #e0e0e0",borderBottom:"none",position:"relative",top:0,left:16},children:r}),e.jsx("div",{style:{border:"1px solid #e0e0e0",borderRadius:8,background:"#fff",borderTopLeftRadius:0,padding:0,margin:0,boxSizing:"border-box"},children:e.jsx("div",{style:{border:"1px dashed #bdbdbd",borderRadius:4,padding:0,margin:0,boxSizing:"border-box"},children:e.jsx(b,{})})})]},r))]})}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    filter: ""
  },
  render: ({
    filter
  }) => {
    const modalBodyStyle: React.CSSProperties = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh",
      padding: 24,
      background: "#fafbfc"
    };
    const filteredEntries = Object.entries(GTMComponentDictionary).filter(([name]) => name.toLowerCase().includes(filter.toLowerCase()));
    return <div id="myMenu" style={modalBodyStyle}>
        {filteredEntries.length === 0 && <div style={{
        color: "#888",
        fontStyle: "italic",
        padding: 32
      }}>
            No components match this filter.
          </div>}
        {filteredEntries.map(([name, Comp]) => <div key={name} style={{
        marginBottom: 40
      }}>
            <div style={{
          fontWeight: "bold",
          marginBottom: 0,
          color: "#0067b8",
          fontSize: 18,
          padding: "0 8px",
          display: "inline-block",
          background: "#f5f7fa",
          borderRadius: "8px 8px 0 0",
          border: "1px solid #e0e0e0",
          borderBottom: "none",
          position: "relative",
          top: 0,
          left: 16
        }}>
              {name}
            </div>
            <div style={{
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          background: "#fff",
          borderTopLeftRadius: 0,
          padding: 0,
          margin: 0,
          boxSizing: "border-box"
        }}>
              <div style={{
            border: "1px dashed #bdbdbd",
            borderRadius: 4,
            padding: 0,
            margin: 0,
            boxSizing: "border-box"
          }}>
                <Comp />
              </div>
            </div>
          </div>)}
      </div>;
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const h=["AdditionalComponents"],y=Object.freeze(Object.defineProperty({__proto__:null,AdditionalComponents:t,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"})),d=Object.assign({"./HelpTextDemo.tsx":x,"./HelpTextDemo2.jsx":u,"./_additional-gtm-component-dictionary.stories.tsx":y}),f={};var c;for(const n in d){if(/index\.(tsx|jsx|js)$/.test(n)||/\.stories\.(tsx|jsx|js)$/.test(n))continue;const o=n.match(/\.\/(.*)\.(tsx|jsx|js)$/);if(o&&((c=d[n])!=null&&c.default)){const i=o[1].charAt(0).toLowerCase()+o[1].slice(1);f[i]=d[n].default}}const v=f;export{t as AdditionalComponents,h as __namedExportsOrder,g as default};
