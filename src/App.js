import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  const devicePixelRatio = window.devicePixelRatio;
  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  return (
    <div className="App" id="content">
      Device Pixel Ratio: {devicePixelRatio}<br />
      Viewport width: {viewportWidth}<br />
      Viewport height: {viewportHeight}<br />

      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  );
}

export default App;
