import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul className="currentConditions">
            <li>Feels like: {Math.round(props.data.feelslike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
