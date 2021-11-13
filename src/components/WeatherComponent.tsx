import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { weatherAPIKey } from '../key.json';

const WeatherComponentAPI: React.FC<unknown> = () => {
  const [city, setCity] = React.useState<string>('London');
  const [search, setSearch] = React.useState<string>('London');
  const [weather, setWeather] = React.useState<string>('');
  const [weatherIcon, setWeatherIcon] = React.useState<string>('');
  const [temperature, setTemperature] = React.useState<string>('');

  React.useEffect(() => {
    axios
      .get<any, AxiosResponse<any, any>, any>(
        `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${city}`
      )
      .then(({ data }) => {
        setTemperature(data.current.temp_c);
        setWeather(data.current.condition.text);
        setWeatherIcon(data.current.condition.icon);
      });
  }, [city]);

  return (
    <>
      <h3>Weather API</h3>
      <div>
        <input
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Enter a city"
          defaultValue={search}
          onKeyPress={(event) => {
            if (event.code === 'Enter') {
              setCity(search);
            }
          }}
        />
      </div>

      <p>
        {weather} in {city}
      </p>
      <p>{temperature}c</p>
      <img src={weatherIcon} alt={weather}></img>
    </>
  );
};

export default WeatherComponentAPI;
