const DisplayResults = ({ filteredResult }) => {
  return (
    <div className="result-container">
      {/* Check if the array is empty, display the message */}

      {filteredResult.length === 0 ? (
        <h2 className="display-message">No results found!</h2>
      ) : (
        //Filter the array of result and display it on the page
        <>
          {filteredResult.map((result, index) => {
            return (
              <div key={index} className="result">
                <h3>{result.Name}</h3>
                <ul className="result-list">
                  <li>
                    Roadway: {""}
                    {result.Roadway !== "" ? result.Roadway : "N/A"}
                  </li>
                  <li>
                    Direction: {""}
                    {result.Direction !== "" ? result.Direction : "N/A"}
                  </li>
                  <li>Location: {result.Location}</li>
                  <li>
                    Accessibility:
                    {result.Accessible === "Y" ? " Yes" : " N/A"}
                  </li>
                  <li>
                    Fuel:
                    {result.Fuel === "Y" ? " Yes" : " N/A"}
                  </li>

                  <li>
                    Longitude:{" "}
                    {result.Longitude !== "" ? result.Longitude : "N/A"}
                  </li>
                  <li>
                    Latitude: {result.Latitude !== "" ? result.Latitude : "N/A"}
                  </li>
                </ul>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayResults;
