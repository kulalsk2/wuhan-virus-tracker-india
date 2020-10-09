import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import { latlong } from "./constants";
import "leaflet/dist/leaflet.css";
import StatusCard from "./components/Card/Card";
import CircleMap from "./components/Map/CircleMap";
import "./App.css";
import Charts from "./components/Charts/Chart";
import { prettyNumber } from "./components/util";
import StateInfoTable from "./components/Table/Table";

function App() {
  const [data, setData] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [states, setStatesData] = useState([]);
  const [selectedState, setSelectedState] = useState("TT");
  const [selectedStateInfo, setSelectedStateInfo] = useState({});
  const [casesType, setCasesType] = useState("active");
  const [mapCenter, setMapCenter] = useState([24.070541, 83.003948]);

  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        let DataofStates = [];
        for (let i = 0; i < data.statewise.length; i++) {
          for (let j = 0; j < latlong.length; j++) {
            if (data.statewise[i].statecode === latlong[j].statecode) {
              let temp = {
                ...data.statewise[i],
                lat: latlong[i].lat,
                lng: latlong[i].long,
                name: latlong[i].name,
              };
              DataofStates.push(temp);
            }
          }
        }
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
    <FormControl className="app_dropdown">
      <Select
        className="app_select"
        variant="outlined"
        value={selectedState}
        onChange={onStateChange}
      >
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
      <div className="app_header">
        <h4>Wuhan Virus Tracker</h4>
      </div>
      <div className="app_body">
        <div className="app_right_left">
          <div className="app_right">
            <div className="app_right_select">{countrySelect}</div>
            <div className="app_status">
              <StatusCard
                onClick={(e) => setCasesType("active")}
                title="Active"
                cases={
                  windowWidth < 770
                    ? prettyNumber(selectedStateInfo.active)
                    : selectedStateInfo.active
                }
              />
              <StatusCard
                onClick={(e) => setCasesType("confirmed")}
                title="Confirmed"
                cases={
                  windowWidth < 770
                    ? prettyNumber(selectedStateInfo.confirmed)
                    : selectedStateInfo.confirmed
                }
              />
              <StatusCard
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                cases={
                  windowWidth < 770
                    ? prettyNumber(selectedStateInfo.recovered)
                    : selectedStateInfo.recovered
                }
              />
              <StatusCard
                onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                cases={
                  windowWidth < 770
                    ? prettyNumber(selectedStateInfo.deaths)
                    : selectedStateInfo.deaths
                }
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
        <div className="stateinfotable">
          <StateInfoTable states={states} />
        </div>
      </div>
    </div>
  );
}

export default App;
