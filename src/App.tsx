import React from 'react';
import TaskManager from './components/taskManager/index';
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  return (
    <div className="App">
      <div className="left-hand-side">
        <div className="weather-time-container">Hello Athena!</div>
        <div className="task-manager-container">
          <TaskManager />
        </div>
      </div>
      <div className="widgets-container">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default App;
