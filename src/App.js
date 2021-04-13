import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header.js";
import RestArea from "./RestArea.js";
import DisplayResults from "./DisplayResults.js";
import Footer from "./Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function App() {
    // Create useState for result after the user click the search button
    const [userSearch, setUserSearch] = useState(false);
    const [results, setResults] = useState([]);
    const [filteredResult, setFilteredResult] = useState([]);

    // Create useEffect to fetch data from API call and run just once
    useEffect(() => {
        // Create proxy server to avoid CORS policy
        const proxiedUrl = "https://511on.ca/api/v2/get/allrestareas";
        const url = new URL("https://proxy.hackeryou.com");
        url.search = new URLSearchParams({
            reqUrl: proxiedUrl,
        });

        // Fetch data from the server
        fetch(url)
            .then((response) => {
                if (!response.ok)
                    throw new Error(`${response.status}. Try again!`);
                return response.json();
            })
            .then((datas) => {
                // Filter only rest areas are open
                const openedData = datas.filter((data) => data.Open === "Open");
                // Update the result when the component mounted
                setResults(openedData);
            });
    }, []);

    // handleSubmit function to update the change of form select
    const handleSubmit = (e, region, areaType) => {
        // Prevent the page refreshing
        e.preventDefault();
        // Set the userSearch to true to display the result
        setUserSearch(true);
        // Copy a new array of result from API call by array destrucring
        const copyResults = [...results];
        // Create a new filtered array of result to check if all of selects are true
        const filteredResult = copyResults.filter((result) => {
            return result.Type === areaType && result.Region === region;
        });
        // Update the new results
        setFilteredResult(filteredResult);
    };

    return (
        <div className="App" id="home-page">
            {/* Header component */}
            <Header />

            <main>
                {/* Main wrapper starts */}
                <div className="main-wrapper" id="rest-area">
                    {/* Form section */}
                    <RestArea handleSubmit={handleSubmit} />

                    {/* Result display here */}
                    <DisplayResults
                        filteredResult={filteredResult}
                        userSearch={userSearch}
                    />
                </div>
                <button
                    className="btn-scroll-up"
                    aria-label="Button scrolls to the top of the page"
                >
                    <Link to="home-page" spy={true} smooth={true}>
                        <FontAwesomeIcon
                            icon={faArrowCircleUp}
                            size="3x"
                            color="#f39b28"
                            aria-hidden="false"
                        />
                    </Link>
                </button>
            </main>
            {/* Footer component */}
            <Footer />
        </div>
    );
}

export default App;
