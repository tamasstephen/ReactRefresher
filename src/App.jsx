import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "dog",
      name: "Luna",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      animal: "bird",
      name: "Pepper",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { animal: "cat", name: "Doink", breed: "Mixed" }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
