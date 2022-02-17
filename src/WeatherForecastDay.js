import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    const date = new Date(props.data.dt * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="Forecast-temperatur">
        <span className="Forecast-temperature-max">
          {Math.round(props.data.temp.max)}°{" "}
        </span>
        <span className="Forecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
