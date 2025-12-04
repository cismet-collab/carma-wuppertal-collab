import{j as t}from"./jsx-runtime-CCjYJYRa.js";import{M as i,B as a}from"./index-DkCPnzFK.js";import"./index-uubelm5h.js";import"./index-BkGEKA-Y.js";import"./setPrototypeOf-Bdmw9Av6.js";import"./index-DcQjGrIY.js";import"./ContextIsolator-DTxfI8V5.js";import"./KeyCode-DpDmaX-j.js";const l="Hinweis",d="BelIS-Online funktioniert derzeit am besten auf Tablets und Desktop-Computern. Auf kleineren Bildschirmen kann es zu Einschränkungen kommen.",m="Verstanden",c=!1,e={headerText:l,bodyText:d,confirmButtonText:m,isHardMode:c},M={title:"BelIS-Online"},o={render:()=>t.jsx(i,{title:e.headerText,open:!0,closable:!1,closeIcon:!1,footer:[t.jsx(a,{disabled:e.isHardMode,type:"primary",children:e.confirmButtonText})],children:t.jsx("p",{children:e.bodyText})})};var n,r,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    return <Modal title={mobileInfo.headerText} open={true} closable={false} closeIcon={false} footer={[<Button disabled={mobileInfo.isHardMode} type="primary">
            {mobileInfo.confirmButtonText}
          </Button>]}>
        <p>{mobileInfo.bodyText}</p>
      </Modal>;
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const h=["MobileInfo"];export{o as MobileInfo,h as __namedExportsOrder,M as default};
