const DisplayRestAreaResults = ({
    filteredRestAreaResult,
    userRestAreaSearch,
}) => {
    return (
        <>
            {/* Check if the array is empty and the form is submitted, display the message */}
            {userRestAreaSearch === true ? (
                <>
                    {filteredRestAreaResult.length === 0 ? (
                        <h2 className="display-message">
                            No results found! Try again!
                        </h2>
                    ) : (
                        //Filter the array of result and display it on the page when there is data available
                        <div className="result-container">
                            {filteredRestAreaResult.map((result, index) => {
                                return (
                                    <div key={index} className="result">
                                        <h3>{result.Name}</h3>
                                        <ul className="result-list">
                                            <li>
                                                Roadway: {""}
                                                {result.Roadway !== ""
                                                    ? result.Roadway
                                                    : "N/A"}
                                            </li>
                                            <li>
                                                Direction: {""}
                                                {result.Direction !== ""
                                                    ? result.Direction
                                                    : "N/A"}
                                            </li>
                                            <li>
                                                Location:{" "}
                                                {result.Location !== ""
                                                    ? result.Location
                                                    : "N/A"}
                                            </li>
                                            <li>
                                                Accessibility:
                                                {result.Accessible === "Y"
                                                    ? " Yes"
                                                    : " N/A"}
                                            </li>
                                            <li>
                                                Fuel:
                                                {result.Fuel === "Y"
                                                    ? " Yes"
                                                    : " N/A"}
                                            </li>

                                            <li>
                                                Longitude:{" "}
                                                {result.Longitude !== ""
                                                    ? result.Longitude
                                                    : "N/A"}
                                            </li>
                                            <li>
                                                Latitude:{" "}
                                                {result.Latitude !== ""
                                                    ? result.Latitude
                                                    : "N/A"}
                                            </li>
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : null}
        </>
    );
};

export default DisplayRestAreaResults;
