import "./list-container.component.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import List from "./list/list.component";

const ListContainer = ({ listItemCount, handleAddBtn, handleMinusBtn }) => {
  const itemCountArr = [];
  for (let i = 0; i < listItemCount; i++) {
    itemCountArr.push(i);
  }
  console.log(itemCountArr);

  return (
    <div className="list-container">
      <div className="list-title-container">
        <span className="counter-box">
          <div className="counter-element"></div>
          <div className="counter-element"></div>
        </span>
        <h4 className="list-title">Project To Do</h4>
        <span className="btn-container">
          <button className="btn list-btn" onClick={handleMinusBtn}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button className="btn list-btn" onClick={handleAddBtn}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </span>
      </div>
      <ul className="list">
        {listItemCount > 0 ? (
          itemCountArr.map((item) => <List key={item} />)
        ) : (
          <div>Add a To Do</div>
        )}
      </ul>
    </div>
  );
};

export default ListContainer;
