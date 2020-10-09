import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

export const prettyNumber = (stat) =>
  stat ? `${numeral(stat).format("0a")}` : "+0";

const casesTypeValues = {
  active: {
    color: "#a820ff",
    multiplier: 800,
  },
  confirmed: {
    color: "#ff20ff",
    multiplier: 650,
  },
  recovered: {
    color: "#7dff1d",
    multiplier: 650,
  },
  deaths: {
    color: "#ff4443",
    multiplier: 2400,
  },
};
export const showCirclesOnMap = (data, casesType = "active") =>
  data.map((state, i) => {
    if (state.statecode !== "TT") {
      return (
        <Circle
          key={i}
          center={[state.lat, state.lng]}
          fillOpacity={0.4}
          stroke={true}
          color={casesTypeValues[casesType].color}
          fillColor={casesTypeValues[casesType].color}
          radius={
            Math.sqrt(state[casesType]) * casesTypeValues[casesType].multiplier
          }
        >
          <Popup key={state.statecode}>
            <div className="info-container">
              <div className="info-name">{state.state}</div>
              <div className="info-active">Active:{state.active}</div>
              <div className="info-confirmed">Recovered:{state.confirmed}</div>
              <div className="info-recovered">Recovered:{state.recovered}</div>
              <div className="info-deaths">Deaths: {state.deaths}</div>
            </div>
          </Popup>
        </Circle>
      );
    } else {
      return <div></div>;
    }
  });
