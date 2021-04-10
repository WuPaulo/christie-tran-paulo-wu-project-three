import { useState } from "react";

const RestArea = () => {
    const [userSelect, setUserSelect] = useState("");

    // Created handle changes for select and input form
    const handleRegionChange = () => {
        console.log("Region changed");
    };

    const handleDirectionChange = () => {
        console.log("Direction changed");
    };

    const handleRoadwayChange = () => {
        console.log("Roadway changed");
    };

    const handleAreaChange = () => {
        console.log("Type area changed");
    };

    const handleFuelChange = () => {
        console.log("Fuel changed");
    };

    const handleAccessibilityChange = () => {
        console.log("Accessibility changed");
    };

    return (
        <main>
            {/* Main wrapper starts */}
            <div className="main-wrapper">
                <form>
                    {/* Select dropdown menus */}
                    <div className="select-container">
                        {/* Region select dropdown */}
                        <div className="select-inner-container">
                            <label htmlFor="region-select" className="sr-only">
                                Regions
                            </label>
                            <select
                                name=""
                                id="region-select"
                                onChange={handleRegionChange}
                            >
                                <option value="" disabled selected>
                                    --Select Region--
                                </option>
                                <option value="Central">Central</option>
                                <option value="Eastern">Eastern</option>
                                <option value="Northeastern">
                                    Northeastern
                                </option>
                                <option value="Northwestern">
                                    Northwestern
                                </option>
                                <option value="Southwestern">
                                    Southwestern
                                </option>
                            </select>
                        </div>

                        {/* Roadway select dropdown */}
                        <div className="select-inner-container">
                            <label htmlFor="roadway-select" className="sr-only">
                                Roadway
                            </label>
                            <select
                                name=""
                                id="roadway-select"
                                onChange={handleRoadwayChange}
                            >
                                <option value="" disabled selected>
                                    --Select Roadway--
                                </option>
                                <option value="Highway 7">Highway 7</option>
                                <option value="Highway 11">Highway 11</option>
                                <option value="Highway 17">Highway 17</option>
                                <option value="Highway 400">Highway 400</option>
                                <option value="Highway 401">Highway 401</option>
                            </select>
                        </div>

                        {/* Direction select dropdown */}
                        <div className="select-inner-container">
                            <label
                                htmlFor="direciton-select"
                                className="sr-only"
                            >
                                Direction
                            </label>
                            <select
                                name=""
                                id="direciton-select"
                                onChange={handleDirectionChange}
                            >
                                <option value="" disabled selected>
                                    --Select Direction--
                                </option>
                                <option value="Northbound">Northbound</option>
                                <option value="Southbound">Southbound</option>
                                <option value="Eastbound">Eastbound</option>
                                <option value="Westbound">Westbound</option>
                            </select>
                        </div>

                        {/* Area type select dropdown */}
                        <div className="select-inner-container">
                            <label
                                htmlFor="area-type-select"
                                className="sr-only"
                            >
                                Area Type
                            </label>
                            <select
                                name=""
                                id="area-type-select"
                                onChange={handleAreaChange}
                            >
                                <option value="" disabled selected>
                                    --Select Area Type--
                                </option>
                                <option value="Carpool Lot">Carpool Lot</option>
                                <option value="Metrolinx Park n Ride">
                                    Metrolinx Park n Ride
                                </option>
                                <option value="Municipal Site">
                                    Municipal Site
                                </option>
                                <option value="Picnic Park">Picnic Park</option>
                                <option value="Rest Area">Rest Area</option>
                                <option value="Service Centre">
                                    Service Centre
                                </option>
                                <option value="Scenic Lookout">
                                    Scenic Lookout
                                </option>
                                <option value="Tourist Info Centre">
                                    Tourist Info Centre
                                </option>
                                <option value="Truck Inspection Station">
                                    Truck Inspection Station
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="radio-container">
                        {/* Fuel radio input starts */}
                        <p>Fuel:</p>
                        <div>
                            <label htmlFor="fuel-yes">Y</label>
                            <input
                                type="radio"
                                name="fuel"
                                id="fuel-yes"
                                value="Y"
                                onChange={handleFuelChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="fuel-no">N</label>
                            <input
                                type="radio"
                                name="fuel"
                                id="fuel-no"
                                value="N"
                                onChange={handleFuelChange}
                            />
                        </div>

                        {/* Accessibility radio inout starts */}
                        <p>Accesibility:</p>
                        <div>
                            <label htmlFor="accesibility-yes">Y</label>
                            <input
                                type="radio"
                                name="accesibility"
                                id="accesibility-yes"
                                value="Y"
                                onChange={handleAccessibilityChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="accesibility-no">N</label>
                            <input
                                type="radio"
                                name="accesibility"
                                id="accesibility-no"
                                value="N"
                                onChange={handleAccessibilityChange}
                            />
                        </div>
                    </div>

                    {/* Search button start */}
                    <button className="btn-search">Search</button>
                </form>

                {/* Result display here */}
                <div></div>
            </div>
        </main>
    );
};

export default RestArea;
