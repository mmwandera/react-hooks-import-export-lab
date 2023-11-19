import React from "react";

// There are four components in this application, all located in the components folder. Use the default export syntax to export the <About>, <Home>, and <NavBar> components, and import them all in the <App> component.

import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
