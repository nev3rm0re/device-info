import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function getDeviceInfo() {
  const devicePixelRatio = window.devicePixelRatio;
  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  return { devicePixelRatio, viewportWidth, viewportHeight }
}

function App() {
  const initialState = getDeviceInfo();
  const [dimensions, setDimensions] = React.useState(initialState);
  React.useEffect(() => {
    function handleViewChange() {
      const dimensions = getDeviceInfo();
      setDimensions(dimensions);
    }

    window.addEventListener('orientationchange', handleViewChange);
    window.addEventListener('resize', handleViewChange);
  })

  return (
    <div className="App" id="content">
      Device Pixel Ratio: {dimensions.devicePixelRatio}<br />
      Viewport width: {dimensions.viewportWidth}<br />
      Viewport height: {dimensions.viewportHeight}<br />

      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  );
}

export default App;
