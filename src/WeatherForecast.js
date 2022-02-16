import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleReponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
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
  } else {
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    const apiKey = `83d4ec1e65679a00b9602279433dcdb9`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleReponse);

    return "Loading...";
  }
}
