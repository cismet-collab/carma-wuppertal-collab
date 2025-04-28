import { Button } from "react-bootstrap";

interface SecondaryInfoFooterProps {
  close: () => void;
  version: string;
}

export const SecondaryInfoFooter = ({
  close,
}: SecondaryInfoFooterProps) => {
  return (
    <table
      style={{
        width: "100%",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              textAlign: "left",
              verticalAlign: "bottom",
              paddingRight: "30px",
            }}
          >
            <div>
              <span style={{ fontSize: "11px" }}>
                <div>
                  <b>DigiTal Zwilling</b>{" "}
                  <a href="https://smart.wuppertal.de/projekte/digital-zwilling.php">
                    powerd by cismet GmbH
                  </a>{" "}
                  auf Basis von{" "}
                  <a href="http://leafletjs.com/" target="_more">
                    Leaflet
                  </a>{" "}
                  und{" "}
                  <a href="https://cismet.de/#refs" target="_cismet">
                    cids | WuNDa
                  </a>{" "}
                  |{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://cismet.de/datenschutzerklaerung.html"
                  >
                    Datenschutzerklärung (Privacy Policy)
                  </a>
                </div>
              </span>
            </div>
          </td>
          <td>
            <Button
              id="cmdCloseModalApplicationMenu"
              type="submit"
              onClick={close}
            >
              Ok
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
