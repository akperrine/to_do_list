import "./list-container.component.css";

import List from "./list/list.component";

const ListContainer = () => {
  return (
    <div className="list-container">
      <h4 className="list-title">Project To Do</h4>
      <ul className="list">
        <List />
      </ul>
    </div>
  );
};

export default ListContainer;
