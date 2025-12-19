import React from "react";
import ReactDOM from "react-dom/client";

let root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = (
  <h1 className="root" tabIndex={"5"}>
    Namaste react 👏
  </h1>
); //this will be instantly converted to React.createElement

console.log(jsxHeading);

//React functional component

const HeadingComponent = () => {
  return <h1>Namaste React From Functional Component ✌</h1>;
}; //but this is a function defincation only

root.render(<HeadingComponent />); //this function will be called here to convert it to a react element

//Component Composition

import hands from "./assets/handsFolded.jpg";

const ImageLogo = () => {
  return <img src={hands.default} alt="This is the logo for namaste react" />;
};

const Logo = () => {
  return (
    <div>
      <h1>This is a logo</h1>
      <ImageLogo />
    </div>
  );
};

root.render(<Logo />);
