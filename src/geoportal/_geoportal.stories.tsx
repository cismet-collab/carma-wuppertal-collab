import type { Meta, StoryObj } from "@storybook/react-vite";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import {
  getCollabedHelpComponentConfig,
  searchTextPlaceholder,
  tooltipText,
  mobileInfo,
  extServiceBackgroundImage,
  extServiceText,
} from ".";
import { Button, Modal } from "antd";
import { useState } from "react";

const meta: Meta = {
  title: "Geoportal",
};

export default meta;

export const KompletterModalerDialog: StoryObj = {
  render: () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const versionString = "xyz";
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            versionString,
            loginFormToggle: () => setShowLoginForm(!showLoginForm),
            isLoginFormVisible: showLoginForm,
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

export const ExtServiceStory: StoryObj = {
  render: () => {
    return (
      <div style={{ height: "500px", width: "500px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            borderRadius: "0.5rem",
            width: "100%",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            height: "fit-content",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "white",
              isolation: "isolate",
              borderRadius: "0.375rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              aspectRatio: "1.7777/1",
            }}
          >
            <div style={{ height: "100%", width: "100%" }}>
              <img
                src={extServiceBackgroundImage}
                alt={""}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  position: "relative",
                  height: "100%",
                  overflow: "clip",
                  width: "calc(130% + 7.2px)",
                  transition: "all 200ms",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingTop: "15%",
                }}
              >
                <span
                  style={{
                    color: "black",
                    opacity: 0.4,
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {extServiceText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
