import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';

const rickRollURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const initialURL = 'https://www.youtube.com/watch?v=ysz5S6PUM-U';

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
  const [playing, setPlaying] = React.useState(false);
  const [playURL, setPlayURL] = React.useState(initialURL);

  React.useEffect(() => {
    function handleViewChange() {
      const dimensions = getDeviceInfo();
      setDimensions(dimensions);
    }

    window.addEventListener('orientationchange', handleViewChange);
    window.addEventListener('resize', handleViewChange);
  })

  const [stream, setStream] = React.useState();
  async function switchToWebcam(setPlayURL) {
    try {
      const constraints = { audio: true, video: true };
      const webcamStream = await navigator.mediaDevices.getUserMedia(constraints);
      webcamStream.getTracks().forEach(track /*: MediaStreamTrack */ => {
      });
      setStream(webcamStream);
      setPlaying(true);
    } catch (err) {
    }
  }

  function stopWebcam(stream) {
    const tracks = stream.getTracks();
    if (tracks) {
      tracks.forEach(track => {
        track.stop();
      });

    }
    setStream(null);
  }

  return (
    <div className="App" id="content">
      <div className="viewport PlayerArea" style={{ width: 480 }}>
        <ReactPlayer url={stream || playURL} playing={playing} width={480} />
        <div className="overlay">
          <div className="nomad">o</div>
          <div className="marqueeStrip">
            <span className="content">This is marquee script</span>
          </div>
        </div>
      </div>
      <div className="toolbar">
        <div className="tool column">
          Device Pixel Ratio: {dimensions.devicePixelRatio}<br />
          Viewport width: {dimensions.viewportWidth}<br />
          Viewport height: {dimensions.viewportHeight}<br />

          <button onClick={() => { setPlayURL(rickRollURL); setPlaying(true); }}>Rick roll me!</button>
          <button onClick={async () => await switchToWebcam(setPlayURL)}>Webcam</button>
          <button onClick={() => setPlayURL(initialURL)}>Initial video</button>
          <button onClick={() => stopWebcam(stream)}>Stop webcam</button>
        </div>
      </div>
    </div>
  );
}

export default App;
