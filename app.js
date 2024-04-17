import React from "react";
import ReactDOM from "react-dom/client";

/**
 * These are pure ReactElements
 * But its readbility is low, so we won't use them.
 */

const heading_1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Hello World"
);
const heading_2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },
  "Hi World"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading_1, heading_2]
);

/**
 * This is JSX. Which is compiled/ or converted into React Element by Bable.
 * This HTML like syntax,, but not html
 * Its like HTML inside JS.
 */
const heading = (
  <h1 id="title" key="h1">
    Hello Wolrd
  </h1>
);

/**
 * This is a Functional Component
 */
const Title = () => (
  <h1 id="title" key="h1">
    This is Functional Component
  </h1>
);

/**
 * React Component is Nothing but a JavaScript function
 * Convetion is To Start the With Caps(PascalCase, UpperCamelCase )
 * Use => Functions, you can use normal function too
 * Inside function you will write only JSX
 */
const HeaderComponent = () => {
  return (
    <div>
      {/* Inserting ReactElement inside a Component */}
      {heading}

      {/* Inserting Functional Component Inside Functional Component 
      This is Also Called "ComponentComposition"*/}
      {/* <Title /> */}
      {Title()}
      <h2>This is h1 Tag</h2>

      {console.log("You can write any JS Code in side this {} braces")}
      <h2>This is h2 Tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeaderComponent />);
