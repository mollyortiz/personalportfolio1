import React from "react";

const Home = () => {
  return (
    <div className="home-page" style={{ padding: "2rem" }}>
      <div className="home-content" style={{ textAlign: "center" }}>
        <h1 className="portfolio-heading">PORTFOLIO</h1>

        <h2 className="name-heading">Maria Ortiz</h2>

        <h3>UX/UI Designer</h3>

        <p>
          Hi there! My name is Maria Ortiz and I am a Digital Media student at
          the University of Central Florida — specializing in Web Design and
          Social Platforms.
          <br /> Welcome to my professional portfolio.
          <br />
          Designing with empathy, curiosity, and a spark for innovation.
        </p>

        <img
          src="https://images.squarespace-cdn.com/content/v1/65bfd85873aac538961a85cb/c4dc61ac-7f15-4d13-aa1b-4a7bdd23e96b/NYC+park+pic.jpg?format=1500w"
          alt="NYC park view"
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "8px",
            margin: "2rem auto",
            display: "block",
          }}
        />
      </div>

      <h4 style={{ marginTop: "2rem" }}>My Latest Projects:</h4>

      <ul>
        <li>
          <strong>Farm Fresh Florida:</strong> A team project aiming to create
          an online farmer’s market. I recently built and designed the
          low-fidelity prototype for our website in Figma.
        </li>
        <li>
          <strong>FitCheck:</strong> A group project in my User Experience
          Design class at UCF. We designed a fashion and lifestyle app for fans
          of platforms like Pinterest and Depop.
        </li>
        <li>
          <strong>Postcard Project:</strong> For my History of Photography
          course — creating visual and thematic connections between my work and
          a featured photo in the textbook, while also adding a personal
          perspective.
        </li>
      </ul>
    </div>
  );
};

export default Home;
