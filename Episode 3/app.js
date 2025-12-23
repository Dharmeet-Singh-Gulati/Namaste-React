  import React from "react";
  import ReactDOM from "react-dom/client";
  import "./Assignment.css";
  import user from "./assets/images/user.jpg";
  import logo from "./assets/images/leftLogo.jpg";

  // let root = ReactDOM.createRoot(document.getElementById("root"));

  // const jsxHeading = (
  //   <h1 className="root" tabIndex={"5"}>
  //     Namaste react 👏
  //   </h1>
  // ); //this will be instantly converted to React.createElement

  // console.log(jsxHeading);

  // //React functional component

  // const HeadingComponent = () => {
  //   return <h1>Namaste React From Functional Component ✌</h1>;
  // }; //but this is a function defincation only

  // root.render(<HeadingComponent />); //this function will be called here to convert it to a react element

  // //Component Composition

  // import hands from "./assets/handsFolded.jpg";

  // let ele = <h3>This is a Element</h3>;

  // const ImageLogo = () => {
  //   return (
  //     <>
  //       <img src={hands.default} alt="This is the logo for namaste react" /> {ele}
  //     </>
  //   );
  // };

  // const Logo = () => {
  //   return (
  //     <div>
  //       <h1>This is a logo</h1>
  //       {ImageLogo()}
  //     </div>
  //   );
  // };

  // root.render(<Logo />);

  let header = React.createElement("div", { className: "title" }, [
    React.createElement(
      "h1",
      { key: 1 },
      "This is Created using Recat.createElement()"
    ),
    React.createElement("h2", { key: 2 }, "Namaste React 🐱‍🚀"),
    React.createElement("h3", { key: 3 }, "Namaste React 😎"),
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  let headerJSX = (
    <div>
      <h1>This is Created using JSX Element</h1>
      <h2>Namaste React 🐱‍🚀</h2>
      <h3>Namaste React 😎</h3>
    </div>
  );

  let HeaderJSX = function () {
    return (
      <div>
        <h1>This is Created using JSX Functional Component</h1>
        <h2>Namaste React 🐱‍🚀</h2>
        <h3>Namaste React 😎</h3>
      </div>
    );
  };

  // passing Attribute

  let HeaderAttributeJSX = function () {
    return (
      <div>
        <h1 style={{ color: "red" }}>
          This is Created using JSX Functional Component
        </h1>
        <h2 style={{ color: "blue" }}>Namaste React 🐱‍🚀</h2>
        <h3 style={{ color: "green" }}>Namaste React 😎</h3>
      </div>
    );
  };

  // Component composition

  let AnotherComponent = function () {
    return <h1 style={{ color: "magenta" }}>I am another component</h1>;
  };

  HeaderJSX = function () {
    return (
      <div>
        <h1>This is Created using JSX Functional Component</h1>
        <h2>Namaste React 🐱‍🚀</h2>
        <h3>Namaste React 😎</h3>
        {AnotherComponent}
      </div>
    );
  };

  //`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

  const ele = <h1 style={{ color: "magenta" }}>I am a React element</h1>;
  const TitleComponent = () => (
    <h2 style={{ color: "teal" }}>I am a Recat Functional Component</h2>
  );
  const HeaderArrange = () => (
    <div>
      {ele}
      <TitleComponent />
      <TitleComponent></TitleComponent>
    </div>
  );

  // Q: Create a Header Component from scratch using Functional Component with JSX
  // - Add a Logo on Left
  // - Add a search bar in middle
  // - Add User icon on right
  // - Add CSS to make it look nice
  console.log(logo);
  console.log(user);

  const Header = () => {
    return (
      <>
        <header className="header">
          <div className="left">
            <img src={logo} alt="Logo" />
          </div>
          <div className="center">
            <input
              className="input"
              type="text"
              placeholder="Search anything you want..."
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="right">
            <img src={user} alt="User Icon" />
          </div>
        </header>
      </>
    );
  };
  root.render(<Header />);
