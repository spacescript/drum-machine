import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="drum-machine" id="drum-machine">
        <div className="display" id="display">
          <div className="button-panel" id="button-panel">
            <div className="drum-pad" id="drum-pad-1">Q</div>
            <div className="drum-pad" id="drum-pad-2">W</div>
            <div className="drum-pad" id="drum-pad-3">E</div>
            <div className="drum-pad" id="drum-pad-4">A</div>
            <div className="drum-pad" id="drum-pad-5">S</div>
            <div className="drum-pad" id="drum-pad-6">D</div>
            <div className="drum-pad" id="drum-pad-7">Z</div>
            <div className="drum-pad" id="drum-pad-8">X</div>
            <div className="drum-pad" id="drum-pad-9">C</div>
          </div>
          <div className="options-menu" id="options-menu">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;