import Section from "react-cismap/topicmaps/menu/Section";

export const Menu60Datenschutz = ({ showOpened = false }) => {
  const baseUrl = window.location.origin + window.location.pathname;
  return (
    <Section
      key="datenschutz"
      sectionKey="datenschutz"
      {...(showOpened ? { activeSectionKey: "datenschutz" } : {})}
      sectionTitle="Datenschutz"
      sectionBsStyle="danger"
      sectionContent={
        <div>
          <p>
            Die Informationen zum Datenschutz finden Sie in diesem{" "}
            <a href={baseUrl + "docs/102.23.-.Regengeld.pdf"} target="_more">
              Dokument
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
