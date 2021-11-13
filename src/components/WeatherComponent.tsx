import React from 'react';

const WeatherComponentAPI: React.FC<unknown> = () => {
  const [city, setCity] = React.useState<string>('London');
  const [search, setSearch] = React.useState<string>('London');

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
      <WeatherComponentAPI city={city} />
    </>
  );
};

export default WeatherComponentAPI;
