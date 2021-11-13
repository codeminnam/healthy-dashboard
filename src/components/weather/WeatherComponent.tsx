import React, { useEffect, useState } from 'react';
import { getWeather } from '../../api/getWeather';

const WeatherComponent: React.FC<unknown> = () => {
  const [condition, setCondition] = useState<any>({});
  const [temp, setTemp] = useState<number>(0);
  const [city, setCity] = useState<string>('');

  const COORDS = 'coords';

  const saveCoords = (coordsObj: any) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  };

  const getWeatherData = async (lat: number, lng: number) => {
    let weatherData: any = {};
    weatherData = await getWeather(lat, lng);
    setCondition(weatherData.weather[0]);
    setTemp(weatherData.main.temp);
    setCity(weatherData.name);
  };

  const handleGeoSuccess = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  };

  const handleGeoError = () => {
    console.log("can't access");
  };

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };

  const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (!loadedCoords) {
      askForCoords();
    } else {
      const parsedCoords = JSON.parse(loadedCoords);
      getWeatherData(parsedCoords.latitude, parsedCoords.longitude);
    }
  };

  useEffect(() => {
    loadCoords();
  }, []);

  return (
    <>
      <h3>Weather API</h3>
      <>
        <p>
          {condition.main} in {city}
        </p>
        <p>{temp}°c</p>
        <img
          src={`http://openweathermap.org/img/w/` + condition.icon + `.png`}
          alt={condition.main}
        />
      </>
    </>
  );
};

export default WeatherComponent;
