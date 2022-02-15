import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Wed</div>
          <div className="Forecast-icon">
            <WeatherIcon code="01d" size={30} />
          </div>
          <div className="Forecast-temperatur">
            <span className="Forecast-temperature-max">10° </span>
            <span className="Forecast-temperature-min">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
