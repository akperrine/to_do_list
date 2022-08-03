import "./App.css";

import { useState } from "react";

import ListContainer from "./components/list-container/list-container.component";
import Navigation from "./components/navbar/nav.component";

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <ListContainer />
    </div>
  );
}

export default App;
