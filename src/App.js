import './App.scss';
import ArmorKlang from "./Media/Armor KaClang Effect.mp3";
// import BlueBlast from "./Media/Blue Horror Blast.mp3";
// import BowSound from "./Media/Bow and Arrow Sound Effect.mp3";

import { Howl } from "howler"

function App() {
  // let sounder = document.querySelectorAll('clip')
  
  // const soundSrc = ArmorKlang;
  const playSound = (src) => {
    const sound = new Howl({
      src, 
      html5: true,
    });
    sound.play()
  }

  // const playSound = () => {
  //   // var x = document.getElementById("Q");
  //   this.audio.current.play();
  // }

  // const runReport = () => {
  //   console.log('Report here');
  // }
  

  return (
    <div className="App">
      <div className="drum-machine" id="drum-machine">
        <div className="button-display" id="button-display">
          <div className="button-panel" id="button-panel">
            <div className="drum-pad" id="drum-pad-1" onClick={playSound(ArmorKlang)}>
              <audio src="media/Armor KaClang Effect.mp3" className="clip" id="Q" type="audio/mpeg"></audio>Q
            </div>
            <div className="drum-pad" id="drum-pad-2">
              <audio src="media/Blue Horror Blast.mp3" className="clip" id="W" type="audio/mpeg"></audio>W
            </div>
            <div className="drum-pad" id="drum-pad-3">
              <audio src="media/Bow and Arrow Sound Effect.mp3" className="clip" id="E" type="audio/mpeg"></audio>E
            </div>
            <div className="drum-pad" id="drum-pad-4">
              <audio src="media/Knife Stab Sound Effect.mp3" className="clip" id="A" type="audio/mpeg"></audio>A
            </div>
            <div className="drum-pad" id="drum-pad-5">
              <audio src="media/Skyrim Sound Effects - Guard Speech  Sweetroll.mp3" className="clip" id="S" type="audio/mpeg"></audio>S
            </div>
            <div className="drum-pad" id="drum-pad-6">
              <audio src="media/Skyrim Sound Effects - New Quest.mp3" className="clip" id="D" type="audio/mpeg"></audio>D
            </div>
            <div className="drum-pad" id="drum-pad-7">
              <audio src="media/Skyrim Sound Effects - Shaking Dungeon.mp3" className="clip" id="Z" type="audio/mpeg"></audio>Z
            </div>
            <div className="drum-pad" id="drum-pad-8">
              <audio src="media/Sword Sound Effect   Sword Slash Sound Effect   Knife Slash Sound Effect   Blade Sound Effect.mp3" className="clip" id="X" type="audio/mpeg"></audio>X
            </div>
            <div className="drum-pad" id="drum-pad-9">
              <audio src="media/Wilhelm Scream sound effect.mp3" className="clip" id="C" type="audio/mpeg"></audio>C
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