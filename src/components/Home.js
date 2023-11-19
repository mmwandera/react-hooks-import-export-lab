import React from "react";

// Import the username and city variables in the src/components/Home.js file
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

// There are four components in this application, all located in the components folder. Use the default export syntax to export the <About>, <Home>, and <NavBar> components, and import them all in the <App> component.
export default Home;