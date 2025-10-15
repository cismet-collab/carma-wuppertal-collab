import { Button } from "react-bootstrap";

import MenuFooter from "./MenuFooter";

interface SecondaryInfoFooterProps {
  close: () => void;
  version: string;
  hintergrundKartenAttribution?: string | JSX.Element;
  applicationName?: string;
  skipTeilzwilling?: boolean;
  skipCloseButton?: boolean;
}

const SecondaryInfoFooter = ({
  close,
  version,
  hintergrundKartenAttribution,
  applicationName = document.title,
  skipTeilzwilling = false,
  skipCloseButton = false,
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
                <div
                  style={{
                    fontSize: "11px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MenuFooter
                    title={applicationName}
                    skipHintergrundkarten={
                      hintergrundKartenAttribution === undefined
                    }
                    skipTeilzwilling={skipTeilzwilling}
                    version={version}
                  />
                </div>
              </span>
            </div>
          </td>
          {!skipCloseButton && (
            <td>
              <Button
                id="cmdCloseModalApplicationMenu"
                type="submit"
                onClick={close}
              >
                Ok
              </Button>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

const genericSecondaryInfoFooterFactory = (
  defaultProps: Partial<SecondaryInfoFooterProps> = {}
) => {
  const FooterComponent = (props: SecondaryInfoFooterProps) => {
    return <SecondaryInfoFooter {...defaultProps} {...props} />;
  };

  FooterComponent.displayName = "GeneratedSecondaryInfoFooter"; // Or a more specific name

  return FooterComponent;
};
export default genericSecondaryInfoFooterFactory;
