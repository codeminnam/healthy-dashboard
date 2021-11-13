import React from 'react';
import WeatherComponent from './components/weather/WeatherComponent';
import TaskManager from './components/task-manager';
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  return (
    <div className="App">
      Hello Athena!
      <WeatherComponent />
      <TaskManager />
      <MusicPlayer />
    </div>
  );
};

export default App;
