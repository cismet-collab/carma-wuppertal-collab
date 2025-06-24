import type { Meta, StoryObj } from "@storybook/react-vite";

import type { CSSProperties } from "react";
import { KompaktanleitungSection } from ".";

const meta: Meta = {
  title: "Generic TopicMap",
};

export default meta;

export const Kompaktanleitung: StoryObj = {
  render: () => {
    const modalBodyStyle: CSSProperties = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh",
    };

    return (
      <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection />
      </div>
    );
  },
};
