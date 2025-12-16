// Using React
import React from "react";
import ReactDOM from "react-dom/client";
// first hello world

// const heading = React.createElement("h1", { class: "first" }, "Hello World!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//nested structure
const heading = React.createElement("div", { className: "parent" }, [
  React.createElement(
    "div",
    { className: "child", key: "c1" },
    "I am a child 1"
  ),
  React.createElement(
    "div",
    { className: "child", key: "c2" },
    "I am a child 2"
  ),
  React.createElement("div", { className: "child", key: "c3" }, [
    React.createElement("h1", { key: "h1" }, "I am grandchild H1"),
    React.createElement("h2", { key: "h2" }, "I am grandchild H2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(typeof root); //Object
console.log(root); //Object
root.render(heading);

// Using Js DOM manipulation

// let heading2 = document.createElement("h1");

// heading2.innerHTML = "I am from Js DOM maipulation";
// document.getElementById("root").appendChild(heading2);
