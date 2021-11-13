import React from 'react';
import TaskManager from './components/taskManager/index';
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  return (
    <div className="App">
      Hello Athena!
      <TaskManager />
      <MusicPlayer />
    </div>
  );
};

export default App;
