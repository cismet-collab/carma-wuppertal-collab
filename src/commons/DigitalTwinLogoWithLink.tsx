import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";

const DigitalTwinLogoWithLink = () => {
  return (
    <a
      href="https://smart.wuppertal.de/projekte/digital-zwilling.php"
      target="_blank"
      style={{ flexShrink: "0" }}
      rel="noopener noreferrer"
    >
      <img
        style={{ marginBottom: 0, marginLeft: 20, float: "right" }}
        alt="Logo DigiTal Zwilling"
        height="60"
        src={Logo_DigiTalZwilling}
      />
    </a>
  );
};

export default DigitalTwinLogoWithLink;
