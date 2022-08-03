import "./nav.component.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFile } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
