import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

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
          {/* Used react scroll and Link element to scroll to element */}
          <Link to="rest-area" spy={true} smooth={true}>
            Rest Areas
          </Link>
        </li>
        <li className="header-item">Road Conditions</li>
      </ul>
    </nav>
  );
};

export default Navbar;
