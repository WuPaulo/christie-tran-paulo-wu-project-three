import { useState, useEffect } from "react";
import Select from "./Select.js";
import RadioInput from "./RadioInput.js";
import { regions, roadways, directions, areaTypes } from "./selectArrays";

const RestArea = () => {
    const [regionSelect, setRegionSelect] = useState("");
    const [roadwaySelect, setRoadwaySelect] = useState("");
    const [directionSelect, setDirectionSelect] = useState("");
    const [areaTypeSelect, setAreaTypeSelect] = useState("");
    const [fuel, setFuel] = useState();
    const [accesibility, setAccesibility] = useState();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const proxiedUrl = "https://511on.ca/api/v2/get/allrestareas";

        const url = new URL("http://proxy.hackeryou.com");
        url.search = new URLSearchParams({
            reqUrl: proxiedUrl,
        });

        fetch(url)
            .then((response) => response.json())
            .then((datas) => {
                console.log(datas);
                setResults(datas);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    };

    return (
        <main>
            {/* Main wrapper starts */}
            <div className="main-wrapper">
                <form onSubmit={handleSubmit}>
                    {/* Select dropdown menus */}
                    <div className="select-container">
                        {/* Region select dropdown */}
                        <div className="select-inner-container">
                            <Select
                                id="Regions"
                                values={regions}
                                selectedValue="Select Region"
                                onValueChange={(val) => {
                                    console.log(val);
                                    setRegionSelect(val);
                                }}
                            />
                        </div>

                        {/* Roadway select dropdown */}
                        <div className="select-inner-container">
                            <Select
                                id="Roadway"
                                values={roadways}
                                selectedValue="Select Roadway"
                                onValueChange={(val) => {
                                    console.log(val);
                                    setRoadwaySelect(val);
                                }}
                            />
                        </div>

                        {/* Direction select dropdown */}
                        <div className="select-inner-container">
                            <Select
                                id="Directions"
                                values={directions}
                                selectedValue="Select Direction"
                                onValueChange={(val) => {
                                    console.log(val);
                                    setDirectionSelect(val);
                                }}
                            />
                        </div>

                        {/* Area type select dropdown */}
                        <div className="select-inner-container">
                            <Select
                                id="Area Types"
                                values={areaTypes}
                                selectedValue="Select Area Type"
                                onValueChange={(val) => {
                                    console.log(val);
                                    setAreaTypeSelect(val);
                                }}
                            />
                        </div>
                    </div>

                    <div className="radio-container">
                        {/* Fuel radio input starts */}
                        <div className="radio-inner-container">
                            <p>Fuel:</p>
                            <RadioInput
                                label="Yes"
                                value="Y"
                                checked={fuel}
                                setter={setFuel}
                            />
                            <RadioInput
                                label="No"
                                value="N"
                                checked={fuel}
                                setter={setFuel}
                            />
                        </div>

                        {/* Accessibility radio inout starts */}
                        <div className="radio-inner-container">
                            <p>Accesibility:</p>
                            <RadioInput
                                label="Yes"
                                value="Y"
                                checked={accesibility}
                                setter={setAccesibility}
                            />
                            <RadioInput
                                label="No"
                                value="N"
                                checked={accesibility}
                                setter={setAccesibility}
                            />
                        </div>
                    </div>

                    {/* Search button start */}
                    <button type="submit" className="btn-search">
                        Search
                    </button>
                </form>

                {/* Result display here */}
                <div>
                    {results.map((result) => {
                        return (
                            <div>
                                <p>
                                    Accessibility: {result.Accessible}, Fuel:
                                    {result.Fuel}, Roadway: {result.Roadway},
                                    Area Type: {result.Type}, Direction:{" "}
                                    {result.Direction}, Region: {result.Region}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default RestArea;
