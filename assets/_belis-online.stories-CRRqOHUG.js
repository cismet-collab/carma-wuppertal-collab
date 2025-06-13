import{j as o}from"./jsx-runtime-CiKstLBL.js";import{M as s,B as a}from"./index-D4f71bbD.js";import"./index-CoXXcpNP.js";import"./ContextIsolator-DIc7qPEd.js";import"./setPrototypeOf-BCvhvFfc.js";import"./index-BOR0u_yr.js";const d="Hinweis",l=`BelIS-Online ist derzeit ausschließlich für die Nutzung auf
              Desktop-Computern optimiert. Bei der Verwendung eines mobilen
              Endgeräts kann es zu Funktionseinschränkungen kommen. Wir arbeiten
              aktiv an einer mobilen Version und danken Ihnen für Ihr
              Verständnis.`,m="Verstanden",c=!1,e={headerText:d,bodyText:l,confirmButtonText:m,isHardMode:c},h={title:"BelIS-Online"},n={render:()=>o.jsx(s,{title:e.headerText,open:!0,closable:!1,closeIcon:!1,footer:[o.jsx(a,{disabled:e.isHardMode,type:"primary",children:e.confirmButtonText})],children:o.jsx("p",{children:e.bodyText})})};var t,r,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <Modal title={mobileInfo.headerText} open={true} closable={false} closeIcon={false} footer={[<Button disabled={mobileInfo.isHardMode} type="primary">
            {mobileInfo.confirmButtonText}
          </Button>]}>
        <p>{mobileInfo.bodyText}</p>
      </Modal>;
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const B=["MobileInfo"];export{n as MobileInfo,B as __namedExportsOrder,h as default};
