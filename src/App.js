import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header.js";
import RestArea from "./RestArea.js";
import DisplayResults from "./DisplayResults.js";
import Footer from "./Footer.js";

function App() {
    // Create useState for result after the user click the search button
    const [results, setResults] = useState([]);
    const [filteredResult, setFilteredResult] = useState([]);

    // Create useEffect to fetch data from API call and run just once
    useEffect(() => {
        // Create proxy server to avoid CORS policy
        const proxiedUrl = "https://511on.ca/api/v2/get/allrestareas";
        const url = new URL("http://proxy.hackeryou.com");
        url.search = new URLSearchParams({
            reqUrl: proxiedUrl,
        });

        // Fetch data from the server
        fetch(url)
            .then((response) => response.json())
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
        <div className="App">
            {/* Header component */}
            <Header />

            <main>
                {/* Main wrapper starts */}
                <div className="main-wrapper">
                    {/* Form section */}
                    <RestArea handleSubmit={handleSubmit} />

                    {/* Result display here */}
                    <DisplayResults filteredResult={filteredResult} />
                </div>
            </main>
            {/* Footer component */}
            <Footer />
        </div>
    );
}

export default App;
