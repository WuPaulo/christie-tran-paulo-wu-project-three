import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="header-nav">
      {/* Header button for showing navigation menu in mobile version */}
      <button className="btn-radar" onClick={handleToggle}>
        <FontAwesomeIcon
          icon={faSatelliteDish}
          size="3x"
          spin
          aria-hidden="false"
        />
      </button>
      <ul className={`header-list ${navbarOpen ? "showMenu" : ""}`}>
        <li className="header-item">
          <a href="#">rest areas</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
