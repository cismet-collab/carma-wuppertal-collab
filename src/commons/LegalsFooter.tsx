interface LegalsFooterProps {
  isTopicMap?: boolean;
}

const LegalsFooter = ({ isTopicMap = true }: LegalsFooterProps) => {
  return (
    <>
      <b>Herausgeber Stadt Wuppertal:</b>{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          isTopicMap
            ? "https://digital-twin-wuppertal-live.github.io/legals/#/Datenschutzerklaerung_DigiTal-Zwilling_TopicMaps"
            : "https://digital-twin-wuppertal-live.github.io/legals/#/Datenschutzerklaerung_DigiTal-Zwilling_Geoportal"
        }
      >
        Datenschutzerklärung
      </a>{" "}
      |{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          isTopicMap
            ? "https://digital-twin-wuppertal-live.github.io/legals/#/Impressum_DigiTal-Zwilling_TopicMaps"
            : "https://digital-twin-wuppertal-live.github.io/legals/#/Impressum_DigiTal-Zwilling_Geoportal"
        }
      >
        Impressum
      </a>
    </>
  );
};

export default LegalsFooter;
