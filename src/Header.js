// Import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                {/* Header logo */}
                <div className="header-logo">
                    <img src="" alt="Road radar logo" />
                </div>
                {/* Header navigation menu */}
                <nav className="header-nav">
                    <ul className="header-list">
                        <li className="header-item">road conditions</li>
                        <li className="header-item">rest areas</li>
                    </ul>
                </nav>
                {/* Header button for showing navigation menu in mobile version */}
                <button
                    className="btn-hamburger"
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
        </header>
    );
};

export default Header;
