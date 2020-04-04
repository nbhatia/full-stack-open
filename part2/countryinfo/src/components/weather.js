import React from "react";

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  } else {
    return (
      <div>
        <div>temperature {weatherData.temperature}</div>
        <img
          width="100"
          height="100"
          src={weatherData.weather_icons}
          alt="weather"
        />
        <div>
          wind {weatherData.wind_speed} direction {weatherData.wind_dir}
        </div>
      </div>
    );
  }
};

export default Weather;
