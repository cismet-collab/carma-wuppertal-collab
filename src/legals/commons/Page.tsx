import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../legals.css";

interface PageProps {
  children: ReactNode;
  currentPage?: number;
  totalPages?: number;
}
const Page = ({ children, currentPage, totalPages }: PageProps) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        minHeight: "1200px",
        height: "100%",
        backgroundColor: "white",
        paddingBottom: "clamp(15px, 5%, 30px)",
        paddingTop: "clamp(15px, 3%, 30px)",
        paddingLeft: "clamp(15px, 3%, 40px)",
        paddingRight: "clamp(15px, 3%, 40px)",
        marginTop: "15px",
        marginBottom: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header currentPage={currentPage} totalPages={totalPages} />
      <div
        style={{
          flex: "1 1 auto",
          width: "100%",
          padding: "60px",
          paddingLeft: "clamp(20px, 5%, 90px)",
          paddingRight: "clamp(20px, 5%, 90px)",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
