import Select from "./Select.js";
import { regions, areaTypes } from "./selectArrays";
import { useState } from "react";

const RestArea = ({ handleRestAreaSubmit }) => {
    // Create useState for form select
    const [regionSelect, setRegionSelect] = useState("Select Region");
    const [areaTypeSelect, setAreaTypeSelect] = useState("Select Area Type");

    return (
        <>
            <form
                onSubmit={(e) =>
                    handleRestAreaSubmit(e, regionSelect, areaTypeSelect)
                }
            >
                {/* Select dropdown menus */}
                <div className="select-outter-container">
                    <h2>Rest Area</h2>
                    <div className="select-container">
                        {/* Region select dropdown */}
                        <div className="region-container">
                            <Select
                                id="Regions"
                                values={regions}
                                selectedValue="Select Region"
                                onValueChange={(val) => {
                                    setRegionSelect(val);
                                }}
                            />
                        </div>

                        {/* Area type select dropdown */}
                        <div className="area-container">
                            <Select
                                id="Area Types"
                                values={areaTypes}
                                selectedValue="Select Area Type"
                                onValueChange={(val) => {
                                    setAreaTypeSelect(val);
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
                        Select the region as well as the area type of your
                        choice from the dropdown menus, to search and generate
                        data that matches!
                    </p>
                </div>
            </form>
        </>
    );
};

export default RestArea;
