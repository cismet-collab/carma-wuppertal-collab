import type { Meta, StoryObj } from "@storybook/react-vite";
import { mobileInfo } from ".";
import { Button, Modal } from "antd";

const meta: Meta = {
  title: "BelIS-Online",
};

export default meta;

export const MobileInfo: StoryObj = {
  render: () => {
    return (
      <Modal
        title={mobileInfo.headerText}
        open={true}
        closable={false}
        closeIcon={false}
        footer={[
          <Button disabled={mobileInfo.isHardMode} type="primary">
            {mobileInfo.confirmButtonText}
          </Button>,
        ]}
      >
        <p>{mobileInfo.bodyText}</p>
      </Modal>
    );
  },
};
