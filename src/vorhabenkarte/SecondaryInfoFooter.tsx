import { Button } from "react-bootstrap";

interface SecondaryInfoFooterProps {
  close: () => void;
  version: string;
}

export const SecondaryInfoFooter = ({
  close,
  version,
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
                  <b>Teilzwilling Vorhabenkarte Wuppertal #{version}</b> powered
                  by{" "}
                  <a href="https://cismet.de/" target="_cismet">
                    cismet GmbH
                  </a>{" "}
                  auf Basis von{" "}
                  <a href="http://leafletjs.com/" target="_cismet">
                    Leaflet
                  </a>{" "}
                  und{" "}
                  <a href="https://github.com/cismet/carma" target="_cismet">
                    carma
                  </a>{" "}
                  |{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://cismet.de/datenschutzerklaerung.html"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  |{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://cismet.de/impressum.html"
                  >
                    Impressum
                  </a>{" "}
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
