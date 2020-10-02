import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [stateforsearch, setStateForSearch] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        let dataForAutoComplete = buildAutoCompleteData(data);
        setStateForSearch(dataForAutoComplete);
        console.log(data);
      });
  }, []);

  const buildAutoCompleteData = (data) => {
    let optionsData = [];
    for (let index = 1; index < data.statewise.length - 1; index++) {
      let tmp = { state: data.statewise[index].state };
      optionsData.push(tmp);
    }
    console.log(optionsData);
    return optionsData;
  };

  return (
    <div className="app">
      <div className="app_header">Wuhan Virus Tracker</div>
      <div className="app_body">
        <div className="app_right">
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app_left"></div>
      </div>
    </div>
  );
}

export default App;
