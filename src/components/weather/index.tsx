import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getWeather } from '../../api/getWeather';

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

const WeatherText = styled.p`
  font-size: 24px;
  margin: 10px;
`;

const TempText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const StrongText = styled.strong`
  text-transform: uppercase;
`;

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
    <WeatherContainer>
      <Title>Weather API</Title>
      <>
        <WeatherText>
          <StrongText>{condition.main}</StrongText> in{' '}
          <StrongText>{city}</StrongText>
        </WeatherText>
        <TempText>{temp}°c</TempText>
        <img
          src={`http://openweathermap.org/img/w/` + condition.icon + `.png`}
          alt={condition.main}
        />
      </>
    </WeatherContainer>
  );
};

export default WeatherComponent;
