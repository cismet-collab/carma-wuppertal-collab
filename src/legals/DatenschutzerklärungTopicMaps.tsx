import Markdown from "react-markdown";
import Page from "./commons/Page";
import DatenschutzMd from "./content/topicmaps/Datenschutzerklärung.md";

export const Datenschutzerklärung = () => {
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
        <Markdown allowDangerousHtml={true}>{DatenschutzMd}</Markdown>
      </Page>
    </div>
  );
};
