import "./list.component.jsx";

import { Fragment } from "react";

const addList = (event) => {
  if (event.key === "Enter") {
    console.log("enter was pressed");
  }
};

window.addEventListener("keyup", addList);

const List = () => {
  return (
    <Fragment>
      <li className="list-item">
        <button className="task-btn todo-btn"></button>
        <span className="textarea" role="textbox" contentEditable></span>
      </li>
    </Fragment>
  );
};

export default List;
