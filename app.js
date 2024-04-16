import React from "react";
import ReactDOM from "react-dom/client";

/*
without JSX
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

// With JSX
const heading = (
  <h1 id="title" key="h1">
    Hello Wolrd
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
