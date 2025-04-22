import React from "react";

const Contact = () => {
  return (
    <div
      className="contact-page"
      style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Contact Me</h2>

      <form>
        <div style={{ marginBottom: "1rem" }}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows="5"
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <p>Or connect with me here:</p>
        <a
          href="https://www.linkedin.com/in/mollyortiz0713/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://app.joinhandshake.com/profiles/26713311"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Handshake
        </a>{" "}
        |{" "}
        <a
          href="https://www.bymollyortiz.com/s/MariaOrtizResU.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  marginTop: "0.5rem",
};

const buttonStyle = {
  padding: "0.75rem 1.5rem",
  backgroundColor: "#FF3E81", // Flamingo pink
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

const linkStyle = {
  color: "#3F00FF", // Ultramarine blue
  textDecoration: "none",
  fontWeight: "bold",
};

export default Contact;
