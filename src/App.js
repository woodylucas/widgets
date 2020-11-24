import React, { useState } from "react";
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
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },
];
function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        handleChange={setSelected}
        selected={selected}
        options={options}
      />
    </div>
  );
}

export default App;
