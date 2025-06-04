import React from "react";
import { genericSecondaryInfoFooterFactory } from "../../commons";

export interface GenericFooterProps {
  close: () => void;
  version: string;
}

const GenericFooter: React.FC<GenericFooterProps> = ({ close, version }) => {
  return (
    <>
      {(() => {
        const FooterComponent = genericSecondaryInfoFooterFactory({
          skipTeilzwilling: true,
        });
        return <FooterComponent close={close} version={version} />;
      })()}
    </>
  );
};

export default GenericFooter;
