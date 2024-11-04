import { Link } from "../../helper-overlay/components/Link";

const Help05Introduction = ({ showOverlayFromOutside }) => {
  return (
    <span>
      Could now she how in was sleep dropped in by back shall come into needed
      wild that picture they to have would by her succeeding.{" "}
      <Link
        onClick={() => {
          showOverlayFromOutside();
        }}
      >
        Test Link
      </Link>
    </span>
  );
};

export default Help05Introduction;
