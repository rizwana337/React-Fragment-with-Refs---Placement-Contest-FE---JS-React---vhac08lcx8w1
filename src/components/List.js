import React from "react";
import ListItems from "./ListItems";

const List = ({ listx }) => {
  return (
    <ul id="list">
      {listx.map((i) => (
        <ListItems key={i} valuex={i} />
      ))}
    </ul>
  );
};

export default List;
