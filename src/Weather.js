import React, { useState } from "react";
import axios from "axios";
import DisplayDate from "./DisplayDate";
import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      precipitation: 6,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.name}</h1>
        <ul>
          <li>
            <DisplayDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul className="currentConditions">
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind * 3.6)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "83d4ec1e65679a00b9602279433dcdb9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
