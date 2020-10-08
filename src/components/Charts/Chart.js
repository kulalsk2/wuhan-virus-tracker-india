import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import "./Chart.css";

const options = {
  bezierCurve: false,
  legend: {
    display: false,
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        ticks: {
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: { display: false },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
  },
};

const Charts = () => {
  const [dailyData, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.cases_time_series);
      });
  }, []);

  const lineChart1 = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ dailydeceased }) => dailydeceased),
            label: "Deaths",
            borderColor: "#ff3333",
            fill: true,
            backgroundColor: "rgba(218, 31, 31, 0.5)",
            borderWidth: 1,
          },
        ],
      }}
      options={{
        ...options,
        title: {
          display: true,
          text: "Deceased Cases",
          fontSize: 20,
          position: "left",
        },
      }}
    />
  ) : null;
  const lineChart2 = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ dailyconfirmed }) => dailyconfirmed),
            label: "Infected",
            borderColor: "#3333ff",
            backgroundColor: "rgba(56, 56, 244, 0.5)",
            borderWidth: 1,
            fill: true,
          },
        ],
      }}
      options={{
        ...options,
        title: {
          display: true,
          text: "Confirmed Cases",
          fontSize: 15,
          position: "left",
        },
      }}
    />
  ) : null;
  const lineChart3 = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ dailyrecovered }) => dailyrecovered),
            label: "Recovered",
            borderColor: "#33ff33",
            fill: true,
            backgroundColor: "rgba(56, 244,56 , 0.5)",
            borderWidth: 1,
          },
        ],
      }}
      options={{
        ...options,
        title: {
          display: true,
          text: "Recovered Cases",
          fontSize: 20,
          position: "left",
        },
      }}
    />
  ) : null;

  return (
    <div className="chart-container">
      <div className="chart">{lineChart1}</div>
      <div className="chart">{lineChart2}</div>
      <div className="chart">{lineChart3}</div>
    </div>
  );
};
export default Charts;
