const RestArea = () => {

    return (

        <main>
            <div className="main-wrapper">
                <form>
                    <div className="select-container">
                        <div className="select-inner-container">
                            <label htmlFor="region-select" className="sr-only">Regions</label>
                            <select name="" id="region-select">
                                <option value="">--Select Region--</option>
                                <option value="Central">Central</option>
                                <option value="Eastern">Eastern</option>
                                <option value="Northeastern">Northeastern</option>
                                <option value="Northwestern">Northwestern</option>
                                <option value="Southwestern">Southwestern</option>
                            </select>
                        </div>

                        <div className="select-inner-container">
                            <label htmlFor="roadway-select" className="sr-only">Roadway</label>
                            <select name="" id="roadway-select">
                                <option value="">--Select Roadway--</option>
                                <option value="Highway 7">Highway 7</option>
                                <option value="Highway 11">Highway 11</option>
                                <option value="Highway 17">Highway 17</option>
                                <option value="Highway 400">Highway 400</option>
                                <option value="Highway 401">Highway 401</option>
                            </select>
                        </div>

                        <div className="select-inner-container">
                            <label htmlFor="direciton-select" className="sr-only">Direction</label>
                            <select name="" id="direciton-select">
                                <option value="">--Select Direction--</option>
                                <option value="Northbound">Northbound</option>
                                <option value="Southbound">Southbound</option>
                                <option value="Eastbound">Eastbound</option>
                                <option value="Westbound">Westbound</option>
                            </select>
                        </div>

                        <div className="select-inner-container">
                            <label htmlFor="area-type-select" className="sr-only">Area Type</label>
                            <select name="" id="area-type-select">
                                <option value="">--Select Area Type--</option>
                                <option value="Carpool Lot">Carpool Lot</option>
                                <option value="Metrolinx Park n Ride">Metrolinx Park n Ride</option>
                                <option value="Municipal Site">Municipal Site</option>
                                <option value="Picnic Park">Picnic Park</option>
                                <option value="Rest Area">Rest Area</option>
                                <option value="Service Centre">Service Centre</option>
                                <option value="Scenic Lookout">Scenic Lookout</option>
                                <option value="Tourist Info Centre">Tourist Info Centre</option>
                                <option value="Truck Inspection Station">Truck Inspection Station</option>
                            </select>
                        </div>

                    </div>
                    <div className="radio-container">
                        <p>Fuel:</p>
                        <div>
                            <label htmlFor="fuel-yes">Y</label>
                            <input type="radio" name="fuel"  id="fuel-yes"/>
                        </div>
                        <div>
                            <label htmlFor="fuel-no">N</label>
                            <input type="radio" name="fuel" id="fuel-no"/>
                        </div>
                        

                        <p>Accesibility:</p>
                        <div>
                            <label htmlFor="accesibility-yes">Y</label>
                            <input type="radio" name="accesibility"  id="accesibility-yes"/>
                        </div>
                        <div>
                            <label htmlFor="accesibility-no">N</label>
                            <input type="radio" name="accesibility" id="accesibility-no"/>
                        </div>
                    </div>
                    <button>Search</button>
                </form>
                <div></div>
            </div>
        </main>
    )

}

export default RestArea;