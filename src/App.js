import React, { Component } from "react";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do yo use React",
    content: "You use React by creating compontents",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },
];
function App() {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
}

export default App;
