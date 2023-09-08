import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML LIKE FILE, BUT NOT HTML
//JSX CODE IS TRANSPILE before going to browser so that browser can understand.. this translation is done by (BABEL)
//Functional Components returns us JSX
const JSXHeading = () => (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX
  </h1>
);

//Component Compositions -- calling one Comoponent in another Component(composing two components into one another)
const HeadingComponent = () => (
  <div id="container">
    <JSXHeading />
    <h1 className="heading" tabIndex="5">
      {" "}
      Namaste React using Functional Component{" "}
    </h1>
  </div>
);

console.log(HeadingComponent);
console.log(<HeadingComponent />);                                                     
export default HeadingComponent;
