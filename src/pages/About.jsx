import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">All About Me</h1>

      <img
        src="https://images.squarespace-cdn.com/content/v1/65bfd85873aac538961a85cb/3f63b164-34c3-4b60-be2a-3bc500aab160/CentralParkBenchPic?format=2500w"
        alt="Central Park Bench"
        style={{
          width: "250px",
          height: "auto",
          display: "block",
          margin: "2rem auto",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      />

      <p>
        I’m an Orlando native — born and raised — and am currently a senior at
        the University of Central Florida. I will be graduating with a
        Bachelor’s of Arts degree in Digital Media, specializing in Web Design
        and Social Platforms in May of this year.
      </p>
      <p>
        As graduation approaches, I'm excited to transition from customer
        service and warehouse roles into positions more aligned with my field of
        study. My Digital Media B.A. program has equipped me with a solid
        foundation in web design, user experience, social media platforms, and
        marketing on social media, providing a unique perspective on roles in UX
        design, product management, and digital marketing.
      </p>
      <p>
        I’m also currently working toward a Google Coursera User Experience
        Design Certificate to further expand my expertise in user experience
        principles and gain more experience from projects. I’ve been refining
        these skills through hands-on projects and collaborative team efforts.
      </p>
      <p>
        I’m currently available for any Summer/Fall 2025 employment
        opportunities and internships. When I'm not designing, you can probably
        find me sipping a coffee, playing piano or guitar, or endlessly
        doodling.
      </p>
    </div>
  );
};

export default About;
