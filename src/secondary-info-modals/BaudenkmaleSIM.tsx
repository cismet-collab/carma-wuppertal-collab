import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Accordion } from "react-bootstrap";
import { useContext } from "react";
import { LightBoxDispatchContext } from "react-cismap/contexts/LightBoxContextProvider";
import Panel from "react-cismap/commons/Panel";
import { genericSecondaryInfoFooterFactory } from "../commons";

interface FeatureType {
  properties?: any;
  [key: string]: any;
}

const fotoUrlPrefix =
  "https://www.wuppertal.de/denkmalliste-online/Image?filename=";

const getImageUrl = (imagePath: string) => {
  return fotoUrlPrefix + encodeURIComponent(imagePath);
};

const SecondaryInfoModal = ({
  feature = {},
  setOpen = () => {},
  versionString = "???",
  Footer = genericSecondaryInfoFooterFactory({ skipTeilzwilling: true }),
}: {
  feature?: FeatureType;
  setOpen?: (open: boolean) => void;
  versionString?: string;
  Footer?: React.ComponentType<any>;
}) => {
  const close = () => setOpen(false);
  const lightBoxDispatchContext = useContext(LightBoxDispatchContext) as any;
  const props = feature.properties || {};

  let bilder: { name: string; bezeichnung?: string }[] = [];
  if (Array.isArray(props.bilder)) {
    bilder = props.bilder;
  } else if (typeof props.bilder === "string") {
    try {
      const parsed = JSON.parse(props.bilder);
      bilder = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      // ignore
    }
  }

  const strasse = props.strasse
    ? props.strasse.replace(/\s*~\s*$/, "").trim()
    : "";

  let bezeichnung = props.gaengigebezeichnung || "Baudenkmal";
  if (
    props.gaengigebezeichnung &&
    strasse &&
    !(
      props.gaengigebezeichnung.includes(strasse) ||
      (props.gaengigebezeichnung.startsWith(strasse.substring(0, 6)) &&
        props.gaengigebezeichnung.endsWith(
          strasse.substring(strasse.length - 2)
        ))
    )
  ) {
    bezeichnung = strasse + " - " + props.gaengigebezeichnung;
  }
  const fotoUrls = bilder
    .filter((b) => b?.name)
    .map((b) => getImageUrl(b.name));
  const fotoCaptions = bilder
    .filter((b) => b?.name)
    .map((b) => b.bezeichnung || "");
  const foto = fotoUrls.length > 0 ? fotoUrls[0] : undefined;

  const handleImgClick = () => {
    if (lightBoxDispatchContext && fotoUrls.length > 0) {
      close();
      lightBoxDispatchContext.setPhotoUrls(fotoUrls);
      lightBoxDispatchContext.setCaptions(fotoCaptions);
      lightBoxDispatchContext.setIndex(0);
      lightBoxDispatchContext.setTitle(bezeichnung);
      lightBoxDispatchContext.setVisible(true);
    }
  };

  return (
    <Modal
      style={{
        zIndex: 2900000000,
      }}
      height="100%"
      size="lg"
      show={true}
      onHide={close}
      keyboard={false}
      dialogClassName="modal-dialog-scrollable"
    >
      <Modal.Header>
        <Modal.Title>
          <FontAwesomeIcon icon={faLandmark} />
          {` Datenblatt: ${bezeichnung}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="myMenu" key={"prbr.secondaryInfo"}>
        <div style={{ width: "100%", overflow: "hidden" }}>
          {foto !== undefined && (
            <img
              alt="Bild"
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                float: "right",
                paddingBottom: "5px",
                cursor: "pointer",
              }}
              src={foto}
              width="200"
              onClick={handleImgClick}
            />
          )}
          <div
            style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
          >
            {strasse && (
              <div style={{ marginBottom: 6 }}>
                <b>Adresse:</b> {strasse}
              </div>
            )}
            {props.stadtbezirk && (
              <div style={{ marginBottom: 6 }}>
                <b>Stadtbezirk:</b> {props.stadtbezirk}
              </div>
            )}
            {(props.denkmalnr || props.denkmalnummer) && (
              <div style={{ marginBottom: 6 }}>
                <b>Denkmalnummer:</b>{" "}
                {props.denkmalnr || props.denkmalnummer}
              </div>
            )}
            {props.eintragungsdatum && (
              <div style={{ marginBottom: 6 }}>
                <b>Eintragungsdatum:</b> {props.eintragungsdatum}
              </div>
            )}
            {props.schutzumfang && (
              <div style={{ marginBottom: 6 }}>
                <b>Schutzumfang:</b> {props.schutzumfang}
              </div>
            )}
            <div style={{ marginBottom: 6 }}>
              <b>Klassifizierung:</b> Denkmal
            </div>
          </div>
        </div>
        <Accordion
          style={{ marginBottom: 6 }}
          defaultActiveKey={"0"}
        >
          <Panel header="Beschreibung" eventKey="0" bsStyle="info">
            <div style={{ whiteSpace: "pre-line" }}>{props.beschreibung}</div>
          </Panel>
        </Accordion>
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"1"}>
          <Panel
            header="Weitere Informationen zum Denkmalschutz"
            eventKey="1"
            bsStyle="warning"
          >
            <div>
              <b>Denkmalschutz und -pflege (105.41)</b>
            </div>
            <div>Johannes-Rau-Platz 1</div>
            <div>42275 Wuppertal</div>
            <br />
            <div>
              <a
                href="https://www.wuppertal.de/vv/oe/105.41.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                weitere Informationen auf der städtischen Webseite
              </a>
            </div>
          </Panel>
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Footer close={close} version={versionString} />
      </Modal.Footer>
    </Modal>
  );
};

export default SecondaryInfoModal;
