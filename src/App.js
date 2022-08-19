import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="drum-machine" id="drum-machine">
        <div className="button-display" id="button-display">
          <div className="button-panel" id="button-panel">
            <div className="drum-pad" id="drum-pad-1">
              <audio src="" id="Q"></audio>Q
            </div>
            <div className="drum-pad" id="drum-pad-2">
              <audio src="" id="W"></audio>W
            </div>
            <div className="drum-pad" id="drum-pad-3">
              <audio src="" id="E"></audio>E
            </div>
            <div className="drum-pad" id="drum-pad-4">
              <audio src="" id="A"></audio>A
            </div>
            <div className="drum-pad" id="drum-pad-5">
              <audio src="" id="S"></audio>S
            </div>
            <div className="drum-pad" id="drum-pad-6">
              <audio src="" id="D"></audio>D
            </div>
            <div className="drum-pad" id="drum-pad-7">
              <audio src="" id="Z"></audio>Z
            </div>
            <div className="drum-pad" id="drum-pad-8">
              <audio src="" id="X"></audio>X
            </div>
            <div className="drum-pad" id="drum-pad-9">
              <audio src="" id="C"></audio>C
            </div>
          </div>
          <div className="options-menu" id="options-menu">
            <div className="power" id="power"></div>
            <div className="display" id="display"></div>
            <div className="vol-slider" id="vol-slider"></div>
            <div className="bank" id="bank"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;