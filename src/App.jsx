import Player from './components/Player.jsx';
import TimerChalenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChalenge title="Easy" targetTime={1}/>
        <TimerChalenge title="Not easy" targetTime={5}/>
        <TimerChalenge title="Getting tough" targetTime={10}/>
        <TimerChalenge title="Pros Only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
