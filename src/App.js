import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import RestArea from "./components/RestArea.js";
import RoadCamera from "./components/RoadCamera";
import DisplayRestAreaResults from "./components/DisplayRestAreaResults.js";
import DisplayRoadCameraResults from "./components/DisplayRoadCameraResults.js";
import Footer from "./components/Footer.js";
import ScrollUpButton from "react-scroll-up-button";

function App() {
    // Create useState for result after the user click the search button
    // Toggle state if the user click the search button
    const [userRestAreaSearch, setUserRestAreaSearch] = useState(false);
    const [userRoadCameraSearch, setUserRoadCameraSearch] = useState(false);
    // Toggle state if the user click different sections
    const [toggleSection, setToggleSection] = useState(true);
    // State to update the results from the form
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
                const cameraData = datas.filter(
                    (data) => data.CityName !== "" && data.Status === "Enabled"
                );
                // Update the result when the component mounted
                setRoadCameraResults(cameraData);
            });
    }, []);

    // handleRestAreaSubmit function to update the change of rest area form select
    const handleRestAreaSubmit = (e, region, areaType) => {
        // Prevent the page refreshing
        e.preventDefault();
        // Set the userRestAreaSearch to true to display the result
        setUserRestAreaSearch(true);
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
        // Set the userRoadCameraSearch to true to display the result
        setUserRoadCameraSearch(true);
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

    // handdleClick to toggle the section on the page
    const handleClick = (bool) => {
        setToggleSection(bool);
        // reset toogle the state of search button in the form to empty the result when changing the section
        if (bool === true) {
            setUserRoadCameraSearch(false);
        } else {
            setUserRestAreaSearch(false);
        }
    };

    return (
        <div className="App" id="home-page">
            {/* Header component */}
            <Header handleClick={handleClick} />

            <main>
                {/* Main wrapper starts */}
                <div className="main-wrapper">
                    {/* Togle the click button to choose the section and show the content of that section on the page */}
                    {toggleSection === true ? (
                        <div id="rest-area">
                            {/* Rest area form section */}
                            <RestArea
                                handleRestAreaSubmit={handleRestAreaSubmit}
                            />
                            {/* Rest area result display here */}
                            <DisplayRestAreaResults
                                filteredRestAreaResult={filteredRestAreaResult}
                                userRestAreaSearch={userRestAreaSearch}
                            />
                        </div>
                    ) : (
                        <div id="road-camera">
                            <RoadCamera
                                handleRoadCameraSubmit={handleRoadCameraSubmit}
                            />
                            {/* Road camera result display here */}
                            <DisplayRoadCameraResults
                                filteredRoadCameraResult={
                                    filteredRoadCameraResult
                                }
                                userRoadCameraSearch={userRoadCameraSearch}
                            />
                        </div>
                    )}
                </div>
                {/* Button to scroll up to the top page */}
                <ScrollUpButton
                    style={{
                        backgroundColor: "#f39b28",
                        border: "1px solid #f39b28",
                        borderRadius: "50%",
                        padding: "5px",
                        bottom: "75px",
                        outline: "none",
                    }}
                    ContainerClassName="btn-scroll-up"
                    StopPosition={0}
                    ShowAtPosition={800}
                    EasingType="easeInBounce"
                    tabIndex="0"
                />
            </main>
            {/* Footer component */}
            <Footer />
        </div>
    );
}

export default App;
