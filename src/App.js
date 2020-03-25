import React from 'react';
import logo from './logo.svg';
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

    </div>
  );
}

export default App;
