import stepOne from "./assets/m-step-1.png";
import stepTwo from "./assets/m-step-2.png";
import stepThree from "./assets/m-step-3.png";
import stepFour from "./assets/m-step-4.png";

export const MeasurementsText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        Klicken/Tippen zum Zeichnen von Messgeometrien | 
        Linienzüge beenden mit Doppelklick, Polygone schließen durch erneutes Anklicken des Startpunktes | 
        Verwalten mehrerer Messgeometrien in der Info-Box | Speicherung der Messgeometrien im Browser-Speicher
      </div>
      <div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "-10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <img src={stepOne} style={{ height: "120px" }} />
          <img src={stepTwo} style={{ height: "120px" }} />
          <img src={stepThree} style={{ height: "120px" }} />
          <img src={stepFour} style={{ height: "120px" }} />
        </div>
      </div>
    </ul>
  );
};
