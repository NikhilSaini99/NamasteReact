import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

//Nested Element using React
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child-1" }, [
    React.createElement("h1", { id: "heading1" }, "Episode 02 Igniting our App"),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Namaste React --By Akshay Saini"
    ),
  ]),
  React.createElement("div", { id: "Child-2" }, [
    React.createElement("h1", { id: "heading1part2" }, "What is CDN?"),
    React.createElement(
      "h2",
      { id: "heading2part2" },
      "What is Crossorigin in script"
    ),
  ]),
]);

export default parent

