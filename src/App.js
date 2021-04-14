import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header.js";
import RestArea from "./RestArea.js";
import RoadCamera from "./RoadCamera";
import DisplayRestAreaResults from "./DisplayRestAreaResults.js";
import DisplayRoadCameraResults from "./DisplayRoadCameraResults.js";
import Footer from "./Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function App() {
    // Create useState for result after the user click the search button
    const [userSearch, setUserSearch] = useState(false);
    const [restAreaResults, setRestAreaResults] = useState([]);
    const [filteredRestAreaResult, setFilteredRestAreaResult] = useState([]);
    const [roadCameraResults, setRoadCameraResults] = useState([]);
    const [filteredRoadCameraResult, setFilteredRoadCameraResult] = useState(
        []
    );

    // Create useEffect to fetch data from API call and run just once
    useEffect(() => {
        // Create an API call for rest area data
        // Create proxy server to avoid CORS policy
        const proxiedRestAreaUrl = "https://511on.ca/api/v2/get/allrestareas";
        const urlRestArea = new URL("https://proxy.hackeryou.com");
        urlRestArea.search = new URLSearchParams({
            reqUrl: proxiedRestAreaUrl,
        });

        // Fetch data from the server
        fetch(urlRestArea)
            .then((response) => {
                if (!response.ok)
                    throw new Error(`${response.status}. Try again!`);
                return response.json();
            })
            .then((datas) => {
                // Filter only rest areas are open
                const openedData = datas.filter((data) => data.Open === "Open");
                // Update the result when the component mounted
                setRestAreaResults(openedData);
            });
    }, []);

    useEffect(() => {
        // Create an API call for road camera data
        // Create proxy server to avoid CORS policy
        const proxiedRoadCameraUrl = "https://511on.ca/api/v2/get/cameras";
        const urlRoadCamera = new URL("https://proxy.hackeryou.com");
        urlRoadCamera.search = new URLSearchParams({
            reqUrl: proxiedRoadCameraUrl,
        });

        // Fetch data from the server
        fetch(urlRoadCamera)
            .then((response) => {
                if (!response.ok)
                    throw new Error(`${response.status}. Try again!`);
                return response.json();
            })
            .then((datas) => {
                // Filter only rest areas are open
                const cameraData = datas.filter((data) => {
                    if (data.CityName != "" && data.Status === "Enabled") {
                        return data;
                    }
                });
                // Update the result when the component mounted
                setRoadCameraResults(cameraData);
            });
    }, []);

    // handleRestAreaSubmit function to update the change of rest area form select
    const handleRestAreaSubmit = (e, region, areaType) => {
        // Prevent the page refreshing
        e.preventDefault();
        // Set the userSearch to true to display the result
        setUserSearch(true);
        // Copy a new array of result from API call by array destrucring
        const copyRestAreaResults = [...restAreaResults];
        // Create a new filtered array of result to check if all of selects are true
        const filteredRestAreaResult = copyRestAreaResults.filter((result) => {
            return result.Type === areaType && result.Region === region;
        });
        // Update the new results
        setFilteredRestAreaResult(filteredRestAreaResult);
    };

    // handleRoadCameraSubmit function to update the change of road camera form select
    const handleRoadCameraSubmit = (e, cityName, roadway) => {
        // Prevent the page refreshing
        e.preventDefault();
        // Set the userSearch to true to display the result
        setUserSearch(true);
        // Copy a new array of result from API call by array destrucring
        const copyRoadCameraResults = [...roadCameraResults];
        // Create a new filtered array of result to check if all of selects are true
        const filteredRoadCameraResult = copyRoadCameraResults.filter(
            (result) => {
                return (
                    result.CityName === cityName &&
                    result.RoadwayName === roadway
                );
            }
        );
        // Update the new results
        setFilteredRoadCameraResult(filteredRoadCameraResult);
    };

    return (
        <div className="App" id="home-page">
            {/* Header component */}
            <Header />

            <main>
                {/* Main wrapper starts */}
                <div className="main-wrapper">
                    <div id="rest-area">
                        {/* Rest area form section */}
                        <RestArea handleRestAreaSubmit={handleRestAreaSubmit} />
                        {/* Rest area result display here */}
                        <DisplayRestAreaResults
                            filteredRestAreaResult={filteredRestAreaResult}
                            userSearch={userSearch}
                        />
                    </div>
                    <div id="road-camera">
                        {/* Road camera form section */}
                        <RoadCamera
                            handleRoadCameraSubmit={handleRoadCameraSubmit}
                        />
                        {/* Road camera result display here */}
                        <DisplayRoadCameraResults
                            filteredRoadCameraResult={filteredRoadCameraResult}
                            userSearch={userSearch}
                        />
                    </div>
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
