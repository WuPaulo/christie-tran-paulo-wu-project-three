// Import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <div className="header-menu">
                    {/* Header logo */}
                    <div className="header-logo">
                        <img src="" alt="Road radar logo" />
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
                <div className="header-description">
                    <div class="description-container">
                        <h2>Welcome to Road Radar</h2>
                        <div class="upper-triangle"></div>
                        <div class="first-circle"></div>
                        <div class="second-circle"></div>
                        <div class="third-circle"></div>
                        <div class="fourth-circle"></div>
                        <div class="light-circle"></div>
                        <div class="triangle"></div>
                        <div class="inner-triangle"></div>
                        <div class="lower-triangle"></div>
                        <div class="bottom-stand"></div>
                    </div>
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
