import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

interface ContactsProps {
  phone: string | null;
  email: string | null;
}

const Contacts = ({ phone, email }: ContactsProps) => {
  return (
    <div style={{ padding: "12px 0" }}>
      <b style={{ fontSize: "16px", marginBottom: "24px" }}>Kontakt:</b>
      <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
        {phone && (
          <a
            href={`tel:${phone}`}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", color: "inherit", textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faPhone} /> {phone}
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            style={{ display: "flex", alignItems: "center", gap: "8px", color: "inherit", textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faEnvelope} /> <span>{email}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Contacts;
