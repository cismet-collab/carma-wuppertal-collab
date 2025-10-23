import { MenuFooter } from "../commons";

interface SecondaryInfoFooterProps {
  version: string;
}

export const SecondaryInfoFooter = ({ version }: SecondaryInfoFooterProps) => {
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
                    title={"Teilzwilling Potenzialflächen-Online"}
                    skipHintergrundkarten={true}
                    skipTeilzwilling={true}
                    version={version}
                  />
                </div>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
