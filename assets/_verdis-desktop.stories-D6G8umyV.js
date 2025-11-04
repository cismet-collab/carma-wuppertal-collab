import{j as t}from"./jsx-runtime-CiKstLBL.js";import{M as i,B as a}from"./index-ssFdEkgH.js";import"./index-CoXXcpNP.js";import"./useClosable-B84RqC7C.js";import"./setPrototypeOf-CkMXiYaH.js";import"./index-BOR0u_yr.js";import"./ContextIsolator-k_ziJtNu.js";const d="Hinweis",l=`VerDIS-Desktop kann auf diesem Bildschirm nicht ausgeführt werden.
Bitte verwenden Sie ein Gerät mit größerem Display, um fortzufahren.`,m="Ok",c=!0,e={headerText:d,bodyText:l,confirmButtonText:m,isHardMode:c},B={title:"Verdis-desktop"},o={render:()=>t.jsx(i,{title:e.headerText,open:!0,closable:!1,closeIcon:!1,footer:[t.jsx(a,{disabled:e.isHardMode,type:"primary",children:e.confirmButtonText})],children:t.jsx("p",{children:e.bodyText})})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <Modal title={mobileInfo.headerText} open={true} closable={false} closeIcon={false} footer={[<Button disabled={mobileInfo.isHardMode} type="primary">
            {mobileInfo.confirmButtonText}
          </Button>]}>
        <p>{mobileInfo.bodyText}</p>
      </Modal>;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const M=["MobileInfo"];export{o as MobileInfo,M as __namedExportsOrder,B as default};
