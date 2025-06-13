import{j as n}from"./jsx-runtime-CiKstLBL.js";import{M as i,B as a}from"./index-D4f71bbD.js";import"./index-CoXXcpNP.js";import"./ContextIsolator-DIc7qPEd.js";import"./setPrototypeOf-BCvhvFfc.js";import"./index-BOR0u_yr.js";const d="Hinweis",l=`VerDIS-Desktop ist derzeit ausschließlich für die Nutzung auf
              Desktop-Computern optimiert. Bei der Verwendung eines mobilen
              Endgeräts kann es zu Funktionseinschränkungen kommen. Wir arbeiten
              aktiv an einer mobilen Version und danken Ihnen für Ihr
              Verständnis.`,m="Verstanden",c=!0,e={headerText:d,bodyText:l,confirmButtonText:m,isHardMode:c},h={title:"Verdis-desktop"},o={render:()=>n.jsx(i,{title:e.headerText,open:!0,closable:!1,closeIcon:!1,footer:[n.jsx(a,{disabled:e.isHardMode,type:"primary",children:e.confirmButtonText})],children:n.jsx("p",{children:e.bodyText})})};var t,r,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <Modal title={mobileInfo.headerText} open={true} closable={false} closeIcon={false} footer={[<Button disabled={mobileInfo.isHardMode} type="primary">
            {mobileInfo.confirmButtonText}
          </Button>]}>
        <p>{mobileInfo.bodyText}</p>
      </Modal>;
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const k=["MobileInfo"];export{o as MobileInfo,k as __namedExportsOrder,h as default};
