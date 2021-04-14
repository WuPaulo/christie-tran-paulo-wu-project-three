import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = ({ handleClick }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <nav className="header-nav">
            {/* Header button for showing navigation menu in mobile version */}
            <button className="btn-radar" onClick={handleToggle} aria-label="Radar icon to navigate the menu on mobile screen devices">
                <FontAwesomeIcon
                    icon={faSatelliteDish}
                    size="3x"
                    spin
                    aria-hidden="false"
                />
            </button>
            <ul className={`header-list ${navbarOpen ? "showMenu" : ""}`}>
                {/* Used react scroll and Link element to scroll to the specific section */}
                <li className="header-item" tabIndex="0">
                    <Link
                        to="rest-area"
                        spy={true}
                        smooth={true}
                        onClick={() => handleClick(true)}
                    >
                        Rest Areas
                    </Link>
                </li>
                <li className="header-item" tabIndex="0">
                    <Link
                        to="road-camera"
                        spy={true}
                        smooth={true}
                        onClick={() => handleClick(false)}
                    >
                        Road Camera
                    </Link>
                </li>{" "}
            </ul>
        </nav>
    );
};

export default Navbar;
