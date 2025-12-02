// Using React

// first hello world

// const heading = React.createElement("h1", { class: "first" }, "Hello World!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//nested structure
const heading = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { class: "child" }, "I am a child 1"),
  React.createElement("div", { class: "child" }, "I am a child 2"),
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", {}, "I am the Grand child H1"),
    React.createElement("h2", {}, "I am the Grand child H2"),
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
