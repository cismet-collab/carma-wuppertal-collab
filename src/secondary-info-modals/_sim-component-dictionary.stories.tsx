import type { Meta, StoryObj } from "@storybook/react";

import SIMComponentDictionary from "./index";

const meta: Meta = {
  title: "SecondaryInfo Modals",
  argTypes: {
    filter: {
      control: "text",
      description: "Filter components by name substring (case-insensitive)",
      defaultValue: "",
    },
  },
};

export default meta;

import React from "react";

type Args = { filter: string };

export const AllModals: StoryObj<Args> = {
  args: {
    filter: "",
  },
  render: ({ filter }) => {
    //   const modalBodyStyle: React.CSSProperties = {
    //     overflowY: "auto",
    //     overflowX: "hidden",
    //     maxHeight: "100vh",
    //     padding: 24,
    //     background: "#fafbfc",
    //};

    //   const filteredEntries = Object.entries(SIMComponentDictionary).filter(
    //     ([name]) => name.toLowerCase().includes(filter.toLowerCase())
    //   );
    return <div>all Modals</div>;
    // return (
    //   <div id="myMenu" style={modalBodyStyle}>
    //     {filteredEntries.length === 0 && (
    //       <div style={{ color: "#888", fontStyle: "italic", padding: 32 }}>
    //         No components match this filter.
    //       </div>
    //     )}
    //     {filteredEntries.map(([name, Comp]) => (
    //       <div key={name} style={{ marginBottom: 40 }}>
    //         <div
    //           style={{
    //             fontWeight: "bold",
    //             marginBottom: 0,
    //             color: "#0067b8",
    //             fontSize: 18,
    //             padding: "0 8px",
    //             display: "inline-block",
    //             background: "#f5f7fa",
    //             borderRadius: "8px 8px 0 0",
    //             border: "1px solid #e0e0e0",
    //             borderBottom: "none",
    //             position: "relative",
    //             top: 0,
    //             left: 16,
    //           }}
    //         >
    //           {name}
    //         </div>
    //         <div
    //           style={{
    //             border: "1px solid #e0e0e0",
    //             borderRadius: 8,
    //             background: "#fff",
    //             borderTopLeftRadius: 0,
    //             padding: 0,
    //             margin: 0,
    //             boxSizing: "border-box",
    //           }}
    //         >
    //           <div
    //             style={{
    //               border: "1px dashed #bdbdbd",
    //               borderRadius: 4,
    //               padding: 0,
    //               margin: 0,
    //               boxSizing: "border-box",
    //             }}
    //           >
    //             <Comp />
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // );
  },
};
