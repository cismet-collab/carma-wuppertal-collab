import Markdown from "react-markdown";
import Page from "./commons/Page";
import ImpressumMd from "./content/Impressum.md";

export const Impressum = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Page>
        <Markdown allowDangerousHtml={true}>{ImpressumMd}</Markdown>
      </Page>
    </div>
  );
};
