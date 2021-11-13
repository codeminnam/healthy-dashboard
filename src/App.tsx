import React from 'react';
import MusicPlayer from './components/MusicPlayer';
import TaskManager from './components/task-manager';

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
