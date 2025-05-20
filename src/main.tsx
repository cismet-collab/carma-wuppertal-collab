import React from "react";
import ReactDOM from "react-dom/client";

import data from "./secondary-info-modals/_data/luftmessstationen";
import Sim from "./secondary-info-modals/LuftmessstationenSIM";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <TopicMapContextProvider>
        <div id="myMenu">
          <Sim
            feature={data["Hofkamp 86"]}
            setOpen={(x) => {}}
            versionString="myVersion"
          />
        </div>
      </TopicMapContextProvider>
    </div>
  </React.StrictMode>
);
