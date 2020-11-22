import React, { Component } from "react";
import Accordion from "./components/Accordion";

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
function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
