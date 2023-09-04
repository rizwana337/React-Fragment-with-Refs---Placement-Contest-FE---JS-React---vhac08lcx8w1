import React, { useState, useRef } from "react";
import List from "./List";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const inputRef = useRef(null);

  const onButtonClick = () => {
    const inputValue = inputRef.current.value;

    if (inputValue === "") {
      inputRef.current.focus();
      return;
    }

    setList(Array.from({ length: parseInt(inputValue) }, (_, i) => i + 1));
    setValue("");
  };

  return (
    <div id="main">
      <input
        id="input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        ref={inputRef}
      />
      <button id="button" onClick={onButtonClick}>
        Click
      </button>
      <ul id="list">
        <List listx={list} />
      </ul>
    </div>
  );
};

export default App;
