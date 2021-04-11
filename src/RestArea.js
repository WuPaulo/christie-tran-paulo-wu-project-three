import { useState, useEffect } from "react";
import Select from "./Select.js";
import RadioInput from "./RadioInput.js";
import { regions, roadways, directions, areaTypes } from "./selectArrays";

const RestArea = () => {
    const [userSelect, setUserSelect] = useState();
    const [fuel, setFuel] = useState();
    const [accesibility, setAccesibility] = useState();

    useEffect(() => {
        const proxiedUrl = "https://511on.ca/api/v2/get/allrestareas";

        const url = new URL("http://proxy.hackeryou.com");
        url.search = new URLSearchParams({
            reqUrl: proxiedUrl,
        });

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    }, []);

    return (
        <main>
            {/* Main wrapper starts */}
            <div className="main-wrapper">
                <form>
                    {/* Select dropdown menus */}
                    <div className="select-container">
                        {/* Region select dropdown */}
                        <div className="select-inner-container">
                            <Select
                                id="Regions"
                                values={regions}
                                selectedValue="Select Region"
                                onValueChange={(val) => console.log(val)}
                            />
                        </div>

                        {/* Roadway select dropdown */}
                        <div className="select-inner-container">
                            <Select
                                id="Roadway"
                                values={roadways}
                                selectedValue="Select Roadway"
                                onValueChange={(val) => console.log(val)}
                            />
                        </div>

                        {/* Direction select dropdown */}
                        <div className="select-inner-container">
                            <Select
                                id="Directions"
                                values={directions}
                                selectedValue="Select Direction"
                                onValueChange={(val) => console.log(val)}
                            />
                        </div>

                        {/* Area type select dropdown */}
                        <div className="select-inner-container">
                            <Select
                                id="Area Types"
                                values={areaTypes}
                                selectedValue="Select Area Type"
                                onValueChange={(val) => console.log(val)}
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
                    <button className="btn-search">Search</button>
                </form>

                {/* Result display here */}
                <div></div>
            </div>
        </main>
    );
};

export default RestArea;
