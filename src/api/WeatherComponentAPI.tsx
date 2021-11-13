import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { weatherAPIKey } from '../key.json';

const WeatherComponentAPI: React.FC<unknown> = (city) => {
  //Property 'city' does not exist on type '{ children?: ReactNode; }'
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
      <p>
        {weather} in {city}
      </p>
      <p>{temperature}c</p>
      <img src={weatherIcon} alt={weather}></img>
    </>
  );
};

export default WeatherComponentAPI;
