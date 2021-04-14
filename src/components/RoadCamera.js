import Select from "./Select.js";
import { cityNames, roadway } from "../selectArrays";
import { useState } from "react";

const RoadCamera = ({ handleRoadCameraSubmit }) => {
    // Create useState for form select
    const [cityNameSelect, setCityNameSelect] = useState("Select City Name");
    const [roadwaySelect, setRoadwaySelect] = useState("Select Roadway");

    return (
        <>
            <form
                onSubmit={(e) =>
                    handleRoadCameraSubmit(e, cityNameSelect, roadwaySelect)
                }
            >
                {/* Select dropdown menus */}
                <div className="select-outter-container">
                    <h2>Road Camera</h2>
                    <div className="select-container">
                        {/* City Name select dropdown */}
                        <div className="city-name-container">
                            <Select
                                id="City Names"
                                values={cityNames}
                                selectedValue="Select City Name"
                                onValueChange={(val) => {
                                    setCityNameSelect(val);
                                }}
                            />
                        </div>

                        {/* Area type select dropdown */}
                        <div className="road-camera-container">
                            <Select
                                id="Roadway"
                                values={roadway}
                                selectedValue="Select Roadway"
                                onValueChange={(val) => {
                                    setRoadwaySelect(val);
                                }}
                            />
                        </div>
                        <div className="submit-container">
                            {/* Search button start */}
                            <button type="submit" className="btn-search">
                                Search
                            </button>
                        </div>
                    </div>
                    <p>
                        Select the city name as well as the roaway of your
                        choice from the dropdown menus, to search and generate
                        data that matches!
                    </p>
                </div>
            </form>
        </>
    );
};

export default RoadCamera;
