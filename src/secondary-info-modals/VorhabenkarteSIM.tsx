import {
  faLocationDot,
  faMapLocation,
  faTag,
  faCalendarMinus,
  faClockRotateLeft,
  faMagnifyingGlassLocation,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import { Tag } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Accordion } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { LightBoxDispatchContext } from "react-cismap/contexts/LightBoxContextProvider";
import Panel from "react-cismap/commons/Panel";
import PhotoGallery from "../vorhabenkarte/PhotoGallery";
import Contacts from "../vorhabenkarte/Contacts";
import { md5FetchJSON } from "react-cismap/tools/fetching";
import { genericSecondaryInfoFooterFactory } from "../commons";

interface FeatureType {
  properties?: any;
  [key: string]: any;
}

export const formatIsoString = (isoString: string): string => {
  const date = new Date(isoString);
  date.setMonth(date.getMonth() - 1);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export function formatDatum(datumIso) {
  const [year, month, day] = datumIso.split("-");
  return `${day}.${month}.${year}`;
}
export const assetsBaseUrl =
  "https://wunda-geoportal-docs.cismet.de/vorhabenkarte/";
export const daqUrl =
  import.meta.env.VITE_WUPP_ASSET_BASEURL + "/data/vorhabenkarte.data.json";
const styles = {
  container: {
    padding: "10px 10px 0 10px",
    paddingTop: "0px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  row: {
    display: "flex",
    gap: "8px",
    alignItems: "baseline",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  value: {
    fontSize: "14px",
    whiteSpace: "pre-line",
  },
  focusRoomContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  focusRoomValues: {
    paddingLeft: "8px",
    fontSize: "14px",
  },
} as const;

export type LightboxDispatch = {
  setPhotoUrls: (urls: string[]) => void;
  setIndex: (i: number) => void;
  setTitle: (t: string) => void;
  setCaptions: (t: string[]) => void;
  setVisible: (v: boolean) => void;
};

const SecondaryInfoModal = ({
  feature: featureInput = {},
  setOpen = () => {},
  versionString = "???",
  Footer = genericSecondaryInfoFooterFactory({ skipTeilzwilling: true }),
}: {
  feature?: FeatureType;
  setOpen?: (open: boolean) => void;
  versionString?: string;
  Footer?: React.ComponentType<any>;
}) => {
  const [feature, setFeature] = useState<FeatureType | undefined>();
  const [completeFeature, setCompleteFeature] = useState<boolean | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //check whether the feature is fully equipped or if it is a basefeature from a vectorlayer

  useEffect(() => {
    if (featureInput?.properties?.fid) {
      // Vector tile feature - need to fetch data
      setCompleteFeature(false);
      setFeature(undefined);
      setIsLoading(true);
    } else {
      // Complete feature - use directly
      setCompleteFeature(true);
      setFeature(featureInput);
      setIsLoading(false);
    }
  }, [featureInput]);

  useEffect(() => {
    if (completeFeature === false) {
      // load the data from DAQ Server
      md5FetchJSON("VorhabenkarteWuppertal2025", daqUrl).then((data) => {
        // run over the array and store the stuff in an object where fid is the key
        const vorhabenDataMap = data.reduce((acc, vorhaben) => {
          acc[vorhaben.id] = vorhaben;
          return acc;
        }, {});

        // Get the fid from the vector tile feature
        const fid =
          featureInput.properties?.fid ||
          featureInput.properties?.targetProperties?.fid;
        const item = vorhabenDataMap[fid];

        if (item) {
          // Wrap the DAQ data in a properties object to match the expected structure
          const text = item.titel;

          if (
            item.fotos &&
            item.fotos.length > 0 &&
            item.fotos[0].url.includes(".")
          ) {
            item.foto = assetsBaseUrl + "fotos/" + item.fotos[0].url;
            item.originalPhotos = item.fotos;
          }

          if (item.fotos && item.fotos.length > 0) {
            item.fotos = item.fotos.map(
              (photo) => assetsBaseUrl + "fotos/" + photo.url
            );
          }

          const wrappedFeature = {
            properties: {
              ...item,
              info: {
                title: item.abgeschlossen ? text + " (abgeschlossen)" : text,

                header: item.thema.name,
              },
              tel: item.kontakt.telefon,
              email: item.kontakt.mail,
            },
          };
          setFeature(wrappedFeature);
          setIsLoading(false);
        }
      });
    }
  }, [completeFeature, featureInput]);

  const lightBoxDispatchContext = useContext(
    LightBoxDispatchContext
  ) as LightboxDispatch;

  const close = () => {
    setOpen(false);
  };

  // If we're loading data, show loading state
  if (isLoading) {
    return (
      <Modal
        style={{ zIndex: 2900000000 }}
        size="lg"
        show={true}
        onHide={close}
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Laden...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ padding: "20px", textAlign: "center" }}>
            Daten werden geladen...
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  // If we don't have a feature yet, don't render
  if (!feature) {
    return null;
  }

  if (feature) {
    const plan = feature.properties;
    const districtNames =
      plan?.stadtbezirke && plan?.stadtbezirke.length > 0
        ? plan?.stadtbezirke.map((s) => s.replace(/^\d+\s*-\s*/, "")).join(", ")
        : [];

    const district = "Stadtbezirk:";
    const street = plan?.adresse?.strasse || null;
    const locationDescription = plan?.ortsbeschreibung || null;
    const focusRoom = plan?.stek || [];
    const focusRoomLink =
      "https://www.wuppertal.de/wirtschaft-stadtentwicklung/stadtentwicklung/stadtentwicklungskonzept.php";
    const resolutions = plan?.beschluesse ? [...plan.beschluesse] : [];
    const documents = plan?.dokumente ? [...plan.dokumente] : [];
    const docsPrefix = "/dokumente/";
    const sortedResolutions = resolutions.sort((a, b) =>
      b.datum.localeCompare(a.datum)
    );
    const completion = plan?.ende_quartal || null;
    const email = plan?.kontakt?.mail || null;
    const phone = plan?.kontakt?.telefon || null;
    const photos = plan?.originalPhotos || null;
    const citizenText = plan?.bb_text || null;
    const citizenUrl = plan?.bb_url || null;

    const linksArray = plan?.links || [];

    const handleImgClick = (idx) => {
      console.log("xxx handleImgClick", { idx, planinfo: plan.info });
      close();
      const photos = plan.originalPhotos;
      const urls = plan.fotos;
      const titleArr = photos.map((p) => p.anzeige);
      lightBoxDispatchContext.setPhotoUrls(urls);
      lightBoxDispatchContext.setCaptions(titleArr);
      lightBoxDispatchContext.setIndex(0);

      lightBoxDispatchContext.setIndex(idx);
      lightBoxDispatchContext.setTitle(plan.info.title);
      lightBoxDispatchContext.setVisible(true);
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
            {` Datenblatt: `}
            <span
            // style={{
            //   color: plan.abgeschlossen
            //     ? changeUnreadableColor(plan.color)
            //     : "inherit",
            // }}
            >
              {plan.info.title} {plan.abgeschlossen ? "(abgeschlossen)" : ""}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="myMenu" key={"prbr.secondaryInfo"}>
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <div style={styles.container}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <FontAwesomeIcon icon={faClockRotateLeft} />
                <b>Letzte Aktualisierung:</b>
                <span style={styles.value}>
                  {formatIsoString(plan.letzte_aktualisierung)}
                </span>
              </div>
              {!plan.stadtweit && districtNames.length > 0 && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <FontAwesomeIcon icon={faMapLocation} />
                  <b style={styles.label}>{district}</b>
                  {districtNames.length > 0 && (
                    <span style={styles.value}>{districtNames}</span>
                  )}
                </div>
              )}
              {plan.stadtweit && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <FontAwesomeIcon icon={faMapLocation} />
                  <b style={styles.label}>stadtweites Vorhaben</b>
                </div>
              )}
              {street && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span style={styles.label}>Adresse:</span>
                  <span style={styles.value}>
                    {street}{" "}
                    {plan?.adresse?.hausnummer ? plan?.adresse?.hausnummer : ""}
                  </span>
                </div>
              )}
              {locationDescription && (
                <div style={{ display: "flex", gap: "8px" }}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassLocation}
                    style={{ marginTop: "4px" }}
                  />

                  <b style={styles.label}>Ortsbeschreibung:</b>
                  <span style={styles.value}>{locationDescription}</span>
                </div>
              )}
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <FontAwesomeIcon icon={faTag} />
                <b style={styles.label}>Thema:</b>
                <span style={styles.value}>{plan.thema.name}</span>
              </div>
              {focusRoom.length > 0 && (
                <div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <FontAwesomeIcon
                      icon={faBullseye}
                      style={{ marginTop: "8px" }}
                    />

                    <b style={{ ...styles.label, marginTop: "5px" }}>
                      {" "}
                      Fokusraum STEK{" "}
                      <span>
                        {" "}
                        <a href={focusRoomLink} target="_blank">
                          (?)
                        </a>
                      </span>
                      :
                    </b>
                    <div style={styles.focusRoomValues}>
                      {focusRoom.map((i, idx) => (
                        <Tag style={{ margin: "4px 0" }} key={idx}>
                          {i}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {completion && (
                <div style={{ ...styles.row, marginLeft: "2px" }}>
                  <FontAwesomeIcon icon={faCalendarMinus} />

                  <b style={styles.label}>Voraussichtlicher Abschluss:</b>
                  <span style={styles.value}>
                    {completion}
                    {". Quartal"}
                    {plan?.ende_jahr ? ` ${plan?.ende_jahr}` : ""}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div style={{ padding: "0 10px" }}>
            <div style={{ padding: "12px 0" }}>
              <b style={{ fontSize: "16px" }}>Beschreibung: </b>
              <div style={{ marginTop: "4px" }}>
                <span style={{ whiteSpace: "pre-line" }}>
                  {plan.beschreibung}{" "}
                </span>
                <div style={{ marginTop: "4px" }}>
                  {plan?.link && (
                    <a href={plan.link} target="_blank">
                      Mehr Informationen…
                    </a>
                  )}
                </div>
              </div>
            </div>
            {photos && (
              <PhotoGallery photos={photos} handleImgClick={handleImgClick} />
            )}

            <br />
            {sortedResolutions.length > 0 && (
              <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"0"}>
                <Panel
                  header="Politische Beschlüsse"
                  eventKey="0"
                  bsStyle="info"
                >
                  <div>
                    {sortedResolutions.map((res, idx) => {
                      return (
                        <p key={idx}>
                          <span>{formatDatum(res.datum)}: </span>
                          <a href={res.url} target="_blank">
                            {res.anzeige}
                          </a>
                        </p>
                      );
                    })}
                  </div>
                </Panel>
              </Accordion>
            )}

            {citizenText && (
              <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"1"}>
                <Panel
                  header="Bürger­beteiligung"
                  eventKey="1"
                  bsStyle="success"
                >
                  <div style={{ marginBottom: "4px", whiteSpace: "pre-line" }}>
                    {citizenText}
                  </div>
                  {citizenUrl && (
                    <a href={citizenUrl} target="_blank">
                      Mehr Informationen...
                    </a>
                  )}
                </Panel>
              </Accordion>
            )}
            {(documents.length > 0 || linksArray.length > 0) && (
              <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"2"}>
                <Panel header="Anhang" eventKey="2" bsStyle="warning">
                  <ul style={{ marginLeft: "-22px" }}>
                    {documents.map((res, idx) => {
                      return (
                        <li key={idx}>
                          <a
                            href={assetsBaseUrl + docsPrefix + res.url}
                            target="_blank"
                          >
                            {res?.anzeige ? res?.anzeige : res.url}
                          </a>
                        </li>
                      );
                    })}

                    {plan.links &&
                      plan.links.map((res, idx) => {
                        return (
                          <li key={idx}>
                            <a href={res.url} target="_blank">
                              {res?.anzeige ? res?.anzeige : res.url}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </Panel>
              </Accordion>
            )}
            {(phone || email) && <Contacts phone={phone} email={email} />}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Footer close={close} version={versionString} />
        </Modal.Footer>
      </Modal>
    );
  }
};

export default SecondaryInfoModal;
