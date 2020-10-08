import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@material-ui/core";
import { latlong } from "./constants";
import "leaflet/dist/leaflet.css";
import StatusCard from "./components/Card/Card";
import CircleMap from "./components/Map/CircleMap";
import "./App.css";
import Charts from "./components/Charts/Chart";

function App() {
  const [data, setData] = useState({});
  const [states, setStatesData] = useState([]);
  const [selectedState, setSelectedState] = useState("TT");
  const [selectedStateInfo, setSelectedStateInfo] = useState({});
  const [casesType, setCasesType] = useState("active");
  const [mapCenter, setMapCenter] = useState([24.070541, 83.003948]);

  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        let DataofStates = [];
        for (let i = 0; i < data.statewise.length; i++) {
          let temp = {
            ...data.statewise[i],
            lat: latlong[i].lat,
            lng: latlong[i].long,
            name: latlong[i].name,
          };
          DataofStates.push(temp);
        }
        console.log(DataofStates);
        setStatesData(DataofStates);
        setSelectedStateInfo(DataofStates[0]);
      });
  }, []);

  const onStateChange = (event) => {
    const stateCodeOfSelectedState = event.target.value;
    setSelectedState(stateCodeOfSelectedState);
    console.log("statecode -----", stateCodeOfSelectedState);
    const stateData = states.filter((state) => {
      return state.statecode === stateCodeOfSelectedState;
    })[0];
    setSelectedStateInfo(stateData);
    setMapCenter([stateData.lat, stateData.lng]);
  };

  const countrySelect = (
    <FormControl className="app__dropdown">
      <Select variant="outlined" value={selectedState} onChange={onStateChange}>
        {states.map((state) => (
          <MenuItem key={state.statecode} value={state.statecode}>
            {state.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select state from Here</FormHelperText>
    </FormControl>
  );

  return (
    <div className="app">
      <h4 className="app_header">Wuhan Virus Tracker</h4>
      <div className="app_body">
        <div className="app_right">
          <div className="app_right_select">{countrySelect}</div>
          <div className="app_status">
            <StatusCard
              onClick={(e) => setCasesType("active")}
              title="Active"
              cases={selectedStateInfo.active}
            />
            <StatusCard
              onClick={(e) => setCasesType("confirmed")}
              title="Confirmed"
              cases={selectedStateInfo.confirmed}
            />
            <StatusCard
              onClick={(e) => setCasesType("recovered")}
              title="Recovered"
              cases={selectedStateInfo.recovered}
            />
            <StatusCard
              onClick={(e) => setCasesType("deaths")}
              title="Deaths"
              cases={selectedStateInfo.deaths}
            />
          </div>
          <CircleMap
            center={mapCenter}
            casesType={casesType}
            mapData={states}
          />
        </div>

        <div className="app_left">
          <Charts data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
