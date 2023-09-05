const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

//Nested Element using React
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child-1" }, [
    React.createElement("h1", { id: "heading1" }, "Learning React Js"),
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
console.log(heading); // JS Object

const root = ReactDOM.createRoot(document.getElementById("root"));

//This render Method is responsible of converting Js object- which is a react element(heading) into H1 element and put it inside the DOM.
root.render(parent); //
