// Import fontawesome icons
import logo from "./assests/road-radar-logo.png";
import Navbar from "./Navbar";

const Header = ({ handleClick }) => {
    return (
        <header>
            <div className="header-wrapper">
                <div className="header-menu">
                    {/* Header logo */}
                    <div className="header-logo">
                        <img src={logo} alt="Road radar logo" />
                    </div>
                    {/* Header navigation menu */}

                    <Navbar handleClick={handleClick} />
                </div>
                {/* Radar animation container */}
                <div className="header-description">
                    <h1>Welcome to Road Radar</h1>
                    <div className="description-container">
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
                            data for travellers to find information on public
                            services such as rest areas, road camera and more.
                        </p>
                        <p>
                            Our app allows the user to access a list of data
                            according to their preferences on the region, and
                            the type of service to filter their search.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
