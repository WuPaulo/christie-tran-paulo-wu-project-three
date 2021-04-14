const DisplayRoadCameraResults = ({
    filteredRoadCameraResult,
    userRoadCameraSearch,
}) => {
    return (
        <>
            {/* Check if the array is empty and the form is submitted, display the message */}
            {userRoadCameraSearch === true ? (
                <>
                    {" "}
                    {filteredRoadCameraResult.length === 0 ? (
                        <h2 className="display-message">
                            No results found! Try again!
                        </h2>
                    ) : (
                        //Filter the array of result and display it on the page when there is data available
                        <div className="result-container">
                            {filteredRoadCameraResult.map((result, index) => {
                                return (
                                    <div key={index} className="result">
                                        <h4>{result.Name}</h4>
                                        <div>
                                            <img
                                                src={result.Url}
                                                alt={
                                                    result.Name !== ""
                                                        ? result.Name
                                                        : "Live traffic record photo"
                                                }
                                            />
                                        </div>
                                        <div className="road-camera-description">
                                            <p>
                                                Photo record was captured at:{" "}
                                            </p>
                                            <ul>
                                                <li>
                                                    Latitude:{" "}
                                                    {result.Latitude !== ""
                                                        ? result.Latitude
                                                        : "N/A"}
                                                </li>
                                                <li>
                                                    Longitude:{" "}
                                                    {result.Logitude !== ""
                                                        ? result.Longitude
                                                        : "N/A"}
                                                </li>
                                            </ul>
                                        </div>
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

export default DisplayRoadCameraResults;
