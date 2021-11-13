import React from 'react';

const MusicPlayer: React.FC<unknown> = () => {
  return (
    <>
      <h3>Soundtrack</h3>
      <iframe
        width="450"
        height="300"
        src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </>
  );
};

export default MusicPlayer;
