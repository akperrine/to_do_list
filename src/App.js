import "./App.css";

import { useState, useEffect } from "react";

import ListContainer from "./components/list-container/list-container.component";
import Navigation from "./components/navbar/nav.component";

function App() {
  const [listItemCount, setListItemCount] = useState(0);

  console.log(listItemCount);

  const onHandleAdd = () => {
    setListItemCount(listItemCount + 1);
  };

  const onHandleMinus = () => {
    if (listItemCount > 0) {
      setListItemCount(listItemCount - 1);
    } else {
      setListItemCount(0);
    }
  };

  return (
    <div className="app-container">
      <Navigation />
      <ListContainer
        listItemCount={listItemCount}
        handleAddBtn={onHandleAdd}
        handleMinusBtn={onHandleMinus}
      />
    </div>
  );
}

export default App;
