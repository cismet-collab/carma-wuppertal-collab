import wupperwurm from "../assets/wupperwurm.svg";

interface HeaderProps {
  currentPage?: number;
  totalPages?: number;
}

const Header = ({ currentPage, totalPages }: HeaderProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        src={wupperwurm}
        alt="Wupperwurm"
        style={{
          filter: "brightness(0)", // Makes the SVG black
          width: "100px", // Makes the SVG smaller
          height: "auto", // Maintains aspect ratio
        }}
      />
      {currentPage && totalPages && (
        <div>
          <b>Seite</b> <br />
          {currentPage} von {totalPages}
        </div>
      )}
    </div>
  );
};

export default Header;
