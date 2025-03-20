import React, { useContext } from "react";
import Icon from "react-cismap/commons/Icon";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="wechsel2D3D"
      sectionTitle="3D-Betrachtung"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
             Mit dem Wechselschalter <b>3D</b> bzw. <b>2D</b> in der Werkzeugleiste links 
             oben im Kartenfenster können Sie zwischen der 2D-Kartenansicht und einer 
             3D-Visualisierung der überfluteten Bereiche umschalten.  
          </p>
        </div>
      }
    />
  );
};
export default Component;
Component.defaultProps = {
  showModalMenu: () => {},
};

