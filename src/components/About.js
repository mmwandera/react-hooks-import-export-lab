import React from "react";

// Import the image variable in the src/components/About.js file
import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

// There are four components in this application, all located in the components folder. Use the default export syntax to export the <About>, <Home>, and <NavBar> components, and import them all in the <App> component.
export default About;