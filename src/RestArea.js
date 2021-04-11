import Select from "./Select.js";
import { regions, areaTypes } from "./selectArrays";
import { useState } from "react";

const RestArea = ({ handleSubmit }) => {
    // Create useState for form select
    const [regionSelect, setRegionSelect] = useState("Select Region");
    const [areaTypeSelect, setAreaTypeSelect] = useState("Select Area Type");

    return (
        <>
            <form
                onSubmit={(e) => handleSubmit(e, regionSelect, areaTypeSelect)}
            >
                {/* Select dropdown menus */}
                <div className="select-container">
                    {/* Region select dropdown */}
                    <div className="select-inner-container">
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
                    <div className="select-inner-container">
                        <Select
                            id="Area Types"
                            values={areaTypes}
                            selectedValue="Select Area Type"
                            onValueChange={(val) => {
                                setAreaTypeSelect(val);
                            }}
                        />
                    </div>
                </div>

                {/* Search button start */}
                <button type="submit" className="btn-search">
                    Search
                </button>
            </form>
        </>
    );
};

export default RestArea;
