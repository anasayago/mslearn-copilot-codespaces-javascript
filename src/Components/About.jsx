/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description software engineer no UX more database PLSQL.
 */
const description =" I am a software engineer with a passion for creating innovative solutions that make a difference in people's lives. I have experience in web development, data analysis, and PL/SQL development. I am always looking for new challenges and opportunities to learn and grow.";

/**
 * List of some of skills or technologies you work on, developement with data and PLSQL are investigate
 * passionate about equitativity, or enjoy,
 */
const skillsList = [
  "Software Engineer",
  "Data Analysis",
  "PL/SQL Development",
  "Web Development",
  "Problem Solving",
  "Innovation",
  "Accessibility",
  "Creative Thinking",
  "Team Collaboration",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about creating innovative solutions that make a difference in people's lives. I believe in the power of technology to transform the world and I am committed to using my skills to make a positive impact. I am always looking for new challenges and opportunities to learn and grow.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
