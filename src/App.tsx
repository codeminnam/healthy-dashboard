import React from 'react';
import TaskManager from './components/taskManager/index';
import WeatherComponent from './components/weather';
import MusicPlayer from './components/musicPlayer';
import styled, { css } from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;
`;

const WeatherSection = styled.section`
  background-color: #002fa6;
  color: white;
  height: 30vh;
  width: 100%;
`;
const TaskSection = styled.section`
  background-color: #fef9ef;
  height: 70vh;
  width: 100%;
  border: 40px solid #ffb48f;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fef9ef;
  height: 100vh;
  width: 70%;
`;

const App = () => {
  return (
    <LayoutContainer>
      <LeftContainer>
        <WeatherSection>
          <WeatherComponent />
        </WeatherSection>
        <TaskSection>
          <TaskManager />
        </TaskSection>
      </LeftContainer>
      <RightContainer>
        <MusicPlayer />
      </RightContainer>
    </LayoutContainer>
  );
};

export default App;
