/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { weatherAPIKey } from '../key.json';

export const getWeather = async (lat: number, lng: number) => {
  const response = await axios.get<any, AxiosResponse<any, any>, any>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherAPIKey}&units=metric`
  );
  return response.data;
};
