import React from "react";
import DisplayDate from "./DisplayDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.name}</h1>
      <ul>
        <li>
          <DisplayDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="currentConditions">
            <li>Precipitation: {props.data.precipitation}%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
