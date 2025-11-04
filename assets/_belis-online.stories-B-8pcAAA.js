import{j as n}from"./jsx-runtime-CiKstLBL.js";import{M as i,B as a}from"./index-ssFdEkgH.js";import"./index-CoXXcpNP.js";import"./useClosable-B84RqC7C.js";import"./setPrototypeOf-CkMXiYaH.js";import"./index-BOR0u_yr.js";import"./ContextIsolator-k_ziJtNu.js";const l="Hinweis",d="BelIS-Online funktioniert derzeit am besten auf Tablets und Desktop-Computern. Auf kleineren Bildschirmen kann es zu Einschränkungen kommen.",m="Verstanden",c=!1,e={headerText:l,bodyText:d,confirmButtonText:m,isHardMode:c},T={title:"BelIS-Online"},o={render:()=>n.jsx(i,{title:e.headerText,open:!0,closable:!1,closeIcon:!1,footer:[n.jsx(a,{disabled:e.isHardMode,type:"primary",children:e.confirmButtonText})],children:n.jsx("p",{children:e.bodyText})})};var t,r,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <Modal title={mobileInfo.headerText} open={true} closable={false} closeIcon={false} footer={[<Button disabled={mobileInfo.isHardMode} type="primary">
            {mobileInfo.confirmButtonText}
          </Button>]}>
        <p>{mobileInfo.bodyText}</p>
      </Modal>;
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const M=["MobileInfo"];export{o as MobileInfo,M as __namedExportsOrder,T as default};
