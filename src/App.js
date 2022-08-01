import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="app-container">
      <nav className="nav-container">
        <div className="counter-element"></div>
        <h1 className="app-title">To Do List</h1>
        <button className="home-btn">
          <FontAwesomeIcon className="fa-home" icon={faHome} />
        </button>
      </nav>
      <div className="list-container">
        <h4 className="list-title">Project 1</h4>
        <ul className="list">
          <li className="list item">Complete CSS</li>
          <li className="list item">Build Components</li>
          <li className="list item">Enjoy JS</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
