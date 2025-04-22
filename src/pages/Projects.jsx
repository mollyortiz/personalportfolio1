import React from "react";

const Projects = () => {
  return (
    <div className="projects-page" style={{ padding: "2rem" }}>
      <h1>Select Works / Case Studies</h1>

      {/* FarmFresh */}
      <section>
        <h2>FarmFresh: A Digital Farmer's Market</h2>
        <img
          src="https://images.squarespace-cdn.com/content/v1/65bfd85873aac538961a85cb/179dedba-7856-4947-bd84-f0101de9d409/FarmFreshLogoWhiteBackground.png?format=1500w"
          alt="FarmFresh logo"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            margin: "0.5rem 0",
          }}
        />
        <p>
          FarmFresh is an online marketplace designed to connect Floridians with
          fresh, locally sourced produce and artisan goods. Inspired by the
          community spirit of farmer's markets, the platform aims to provide a
          space where local growers and artisans can showcase their weekly
          offerings, allowing customers to place orders online for convenient
          delivery.
        </p>
        <p>
          This year-long project is a collaborative effort as part of my Senior
          Capstone workshop course, which guides teams through the entire
          development cycle of a project—from branding and brainstorming, to
          ideation and prototyping, and eventually high-fidelity design and
          final documentation.
        </p>
        <p>
          <a
            href="https://www.bymollyortiz.com/farm-fresh-florida"
            target="_blank"
            rel="noopener noreferrer"
          >
            View FarmFresh Case Study →
          </a>
        </p>
      </section>

      {/* Venue */}
      <section>
        <h2>Venue: A Music Sharing App</h2>
        <img
          src="https://images.squarespace-cdn.com/content/v1/65bfd85873aac538961a85cb/82ef0306-356f-453d-a58c-993184622899/Screen+Shot+2024-02-23+at+2.03.25+PM.png?format=1500w"
          alt="Venue app preview"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            margin: "0.5rem 0",
          }}
        />
        <p>
          <em>Venue – your sound. your spotlight.</em>
        </p>
        <p>
          The guidelines for this assignment were to pitch an imaginary social
          media platform with a marketing/branding website made using a web
          design platform like Wix or Squarespace.
        </p>
        <p>
          Venue is a music sharing app created with users in mind from start to
          finish. I came up with the premise during a conversation with my
          brother. We often share songs we love, and I was venting about how
          sharing music through texting is clunky and easy to lose. That moment
          sparked the idea.
        </p>
        <p>
          For the assignment, I designed the marketing landing page for Venue
          using Canva. Highlighting key features of the app, user testimonials,
          and what sets Venue apart from the competition, the website balances a
          modern nightlife aesthetic (based on the theming of a concert venue)
          with efficient delivery of information for consumers.
        </p>
        <p>
          <a
            href="https://www.bymollyortiz.com/venue"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Venue Project →
          </a>
        </p>
      </section>

      {/* FitCheck */}
      <section>
        <h2>FitCheck: A Fashion and Lifestyle App</h2>
        <img
          src="https://images.squarespace-cdn.com/content/v1/65bfd85873aac538961a85cb/3ffe2373-c694-44d7-a1f3-71da6bd5a614/App+Icon.png?format=1500w"
          alt="FitCheck app icon"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            margin: "0.5rem 0",
          }}
        />
        <p>
          FitCheck is the culmination of a semester’s worth of work in my
          User-Centered Design course at UCF. This project took us through the
          UX design process from start to finish.
        </p>
        <p>
          Throughout the semester, we learned more than just UX principles and
          research tactics — we practiced project management, collaboration, and
          professional communication skills.
        </p>
        <p>
          <a
            href="https://www.bymollyortiz.com/fitcheck"
            target="_blank"
            rel="noopener noreferrer"
          >
            View FitCheck Project →
          </a>
        </p>
      </section>

      {/* History of Photography Postcard */}
      <section>
        <h2>History of Photography: Postcard Project</h2>
        <img
          src="https://images.squarespace-cdn.com/content/v1/65bfd85873aac538961a85cb/2e42965b-a223-44ee-82ca-4886e45693a4/FinalPostcardFront.jpg?format=1500w"
          alt="Postcard Project preview"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            margin: "0.5rem 0",
          }}
        />
        <p>
          This was the final assignment for my History of Photography 1 course.
          The goal was to create a 5x7 image-based postcard that responds to,
          connects to, or analyzes a specific photographic work and theme from
          our textbook, while also making a personal connection.
        </p>
        <p>
          I chose to base my postcard on Robert Macpherson’s{" "}
          <em>Moses by Michelangelo</em>, circa 1850s, Albumen silver print.
        </p>
        <p>
          <a
            href="https://www.bymollyortiz.com/postcardproject"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Postcard Project →
          </a>
        </p>
      </section>
    </div>
  );
};

export default Projects;
