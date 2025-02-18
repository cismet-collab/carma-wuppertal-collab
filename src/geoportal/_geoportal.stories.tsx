import type { Meta, StoryObj } from "@storybook/react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import {
  getCollabedHelpComponentConfig,
  searchTextPlaceholder,
  tooltipText,
  mobileInfo,
} from ".";
import { Button, Modal } from "antd";

const meta: Meta = {
  title: "Geoportal",
};

export default meta;

export const KompletterModalerDialog: StoryObj = {
  render: () => {
    const versionString = "xyz";
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            versionString,
          })}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const TextTooltip: StoryObj = {
  render: () => {
    return <div>{tooltipText}</div>;
  },
};

export const MobileInfo: StoryObj = {
  render: () => {
    return (
      <Modal
        title={mobileInfo.headerText}
        open={true}
        closable={false}
        closeIcon={false}
        footer={[
          <Button type="primary">{mobileInfo.confirmButtonText}</Button>,
        ]}
      >
        <p>{mobileInfo.bodyText}</p>
      </Modal>
    );
  },
};
