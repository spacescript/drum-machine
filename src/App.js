import './App.scss';
import ArmorKlang from "./Media/Armor KaClang Effect.mp3";
import BlueBlast from "./Media/Blue Horror Blast.mp3";
import BowSound from "./Media/Bow and Arrow Sound Effect.mp3";
import KnifeStab from "./Media/Knife Stab Sound Effect.mp3";
import GuardSweetRoll from "./Media/Skyrim Sound Effects - Guard Speech  Sweetroll.mp3";
import NewQuest from "./Media/Skyrim Sound Effects - New Quest.mp3";
import ShakingDungeon from "./Media/Skyrim Sound Effects - Shaking Dungeon.mp3";
import SwordSlash from "./Media/Sword Sound Effect   Sword Slash Sound Effect   Knife Slash Sound Effect   Blade Sound Effect.mp3";
import WilhelmScream from "./Media/Wilhelm Scream sound effect.mp3";

// import { Howl } from "howler"
// import { click } from '@testing-library/user-event/dist/click';

const audios = {
  'audio0': new Audio(ArmorKlang),
  'audio1': new Audio(BlueBlast),
  'audio2': new Audio(BowSound),
  'audio3': new Audio(KnifeStab),
  'audio4': new Audio(GuardSweetRoll),
  'audio5': new Audio(NewQuest),
  'audio6': new Audio(ShakingDungeon),
  'audio7': new Audio(SwordSlash),
  'audio8': new Audio(WilhelmScream)
} 

const soundBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Armor-Klang',
    audioKey: audios.audio0,
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Armor-Klang',
    audioKey: audios.audio1,
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Armor-Klang',
    audioKey: audios.audio2,
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Armor-Klang',
    audioKey: audios.audio3,
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Armor-Klang',
    audioKey: audios.audio4,
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Armor-Klang',
    audioKey: audios.audio5,
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Armor-Klang',
    audioKey: audios.audio6,
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Armor-Klang',
    audioKey: audios.audio7,
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Armor-Klang',
    audioKey: audios.audio8,
  }
]

function App() {
  // const playSound = (src) => {
  //   const sound = new Howl({
  //     src, 
  //     html5: true,
  //   });
  //   sound.play()
  // }
  // const soundList = [
  //   ArmorKlang, BlueBlast, BowSound, KnifeStab, GuardSweetRoll, NewQuest, ShakingDungeon, SwordSlash, WilhelmScream
  // ]

  const mySound = new Audio(ArmorKlang);

  // let mySound 

  const clickSound = () => {
    // mySound = new Audio(ArmorKlang);
    // document.getElementById("Q").play();

    // The good stuff
    mySound.currentTime = 0;
    mySound.play();

    return console.log({});
  }
  

  return (
    <div className="App">
      <div className="drum-machine" id="drum-machine">
        <div className="button-display" id="button-display">
          <div className="button-panel" id="button-panel">
            {/* <div className="drum-pad" id="drum-pad-1" onClick={clickSound}>
              <audio src="mySound" className="clip" id="Q" type="audio/mpeg"></audio>Q
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
            </div> */}
            {soundBank.map((drumPad) => (
              <div className='drum-pad' id={soundBank.keyTrigger} onClick={clickSound}>
                {soundBank.keyTrigger}
                <audio 
                  className='clip'
                  id={soundBank.keyTrigger}
                  src={soundBank.audioKey}
                ></audio>
              </div>
            ))}
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