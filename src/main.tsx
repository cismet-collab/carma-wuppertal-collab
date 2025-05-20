import React from "react";
import ReactDOM from "react-dom/client";

import data from "./secondary-info-modals/_data/luftmessstationen";
import Sim from "./secondary-info-modals/LuftmessstationenSIM";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>

        <div id="myMenu">
          <Sim
            feature={data["Hofkamp 86"]}
            setOpen={() => {}}
            versionString="myVersion"
          />
        </div>

    </div>
  </React.StrictMode>
);
