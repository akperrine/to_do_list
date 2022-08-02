import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFile } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="app-container">
      <nav className="nav-container">
        <div className="counter-box">
          <div className="counter-element"></div>
          <div className="counter-element"></div>
        </div>
        <h1 className="app-title">To Do List</h1>
        <div className="nav-btn-container">
          <button className="nav-btn home-btn">
            <FontAwesomeIcon className="fa" icon={faHome} />
          </button>
          <button className="nav-btn note-btn">
            <FontAwesomeIcon className="fa" icon={faFile} />
          </button>
        </div>
      </nav>
      <div className="list-container">
        <h4 className="list-title">Project 1</h4>
        <ul className="list">
          <li className="list-item">
            <button className="task-btn todo-btn"></button>Complete CSS
          </li>
          <li className="list-item">
            <button className="task-btn complete-btn"></button>Build Components
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
