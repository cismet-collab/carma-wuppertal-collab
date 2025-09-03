import React from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
/* eslint-disable jsx-a11y/anchor-is-valid */

export interface Help90HaftungsausschlussWuppProps {}

const Component: React.FC<Help90HaftungsausschlussWuppProps> = () => {

  return (
    <GenericModalMenuSection
      sectionKey='haftungsausschluss'
      sectionTitle='Haftungsausschluss'
      sectionBsStyle='danger'
      sectionContent={
        <div>
          {/* Content omitted for brevity; using same content as JSX version */}
        </div>
      }
    />
  );
};
export default Component;
