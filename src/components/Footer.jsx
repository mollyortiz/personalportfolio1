import React from "react";

function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        borderTop: "1px solid #ccc",
        marginTop: "2rem",
        textAlign: "center",
        backgroundColor: "#FCF7EF",
      }}
    >
      <p>© 2025 Molly Ortiz</p>

      <div style={{ marginTop: "0.5rem" }}>
        <a
          href="https://www.linkedin.com/in/mollyortiz0713/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 1rem",
            color: "#3F00FF", // Ultramarine blue
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          LinkedIn
        </a>

        <a
          href="https://app.joinhandshake.com/profiles/26713311"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 1rem",
            color: "#3F00FF",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Handshake
        </a>

        <a
          href="https://www.bymollyortiz.com/s/MariaOrtizResU.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 1rem",
            color: "#3F00FF",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          My Resume
        </a>
      </div>
    </footer>
  );
}

export default Footer;
