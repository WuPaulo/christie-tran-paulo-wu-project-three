// Import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import logo from "./assests/road-radar-logo.png";

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <div className="header-menu">
                    {/* Header logo */}
                    <div className="header-logo">
                        <img src={logo} alt="Road radar logo" />
                    </div>
                    {/* Header navigation menu */}
                    <nav className="header-nav">
                        <ul className="header-list">
                            <li className="header-item">
                                <a href="#">rest areas</a>
                            </li>
                        </ul>
                    </nav>
                    {/* Header button for showing navigation menu in mobile version */}
                    <button
                        className="btn-radar"
                        aria-label="Opening or closing navigation menu button"
                    >
                        <FontAwesomeIcon
                            icon={faSatelliteDish}
                            size="2x"
                            spin
                            aria-hidden="false"
                        />
                    </button>
                </div>
                {/* Radar animation container */}
                <div className="header-description">
                    <div className="description-container">
                        <h2>Welcome to Road Radar</h2>
                        <div className="upper-triangle"></div>
                        <div className="first-circle"></div>
                        <div className="second-circle"></div>
                        <div className="third-circle"></div>
                        <div className="fourth-circle"></div>
                        <div className="light-circle"></div>
                        <div className="triangle"></div>
                        <div className="inner-triangle"></div>
                        <div className="lower-triangle"></div>
                        <div className="bottom-stand"></div>
                    </div>
                    {/* App description */}
                    <div className="description-content">
                        <p>
                            Road Radar is an app that specializes in generating
                            data for travelers looking for service areas to use
                            within Ontario.
                        </p>
                        <p>
                            Our app allows the user to access a list of data
                            according to their preferences such as the region,
                            roadway, direction and the type of service they are
                            looking for .
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
