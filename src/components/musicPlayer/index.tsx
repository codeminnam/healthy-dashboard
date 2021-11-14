import React from 'react';
import styled from 'styled-components';

const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 700px;
`;

const Title = styled.h1`
  font-size: 16px;
`;

const MusicPlayer: React.FC<unknown> = () => {
  return (
    <MusicContainer>
      <Title>Soundtrack</Title>
      <iframe
        width="700"
        height="300"
        src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </MusicContainer>
  );
};

export default MusicPlayer;
