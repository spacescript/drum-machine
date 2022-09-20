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
import { useEffect } from 'react';

// import { Howl } from "howler"
// import { click } from '@testing-library/user-event/dist/click';

const soundBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Armor Klang',
    audioKey: ArmorKlang
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Blue Blast',
    audioKey: BlueBlast
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Bow Sound',
    audioKey: BowSound
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Knife Stab',
    audioKey: KnifeStab
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Guard Sweet Roll',
    audioKey: GuardSweetRoll
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'New Quest',
    audioKey: NewQuest
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Shaking Dungeon',
    audioKey: ShakingDungeon
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Swords Slash',
    audioKey: SwordSlash
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Wilhelm Scream',
    audioKey: WilhelmScream
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
  
  function playSound(selector) {
    const mySound = document.getElementById(selector);
    const colorizer = mySound.parentElement;
    function buttonReset() {
      colorizer.classList.remove('active')
    };
    colorizer.classList.add('active');
    setTimeout(buttonReset, 150);
    mySound.currentTime = 0;
    mySound.play();
  }

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
      // console.log(event.key.toUpperCase)
    })
  }, [])

  // const handleKeyPress = (event) => {
  //   switch(event.key) {
  //     case 81:
  //       let selectSound = soundBank
  //   }
  // }

  return (
    <div className="App">
      <div className="drum-machine" id="drum-machine">
        <div className="button-display" id="button-display">
          <div className="button-panel" id="button-panel">
            {soundBank.map((drumPad, i) => (
              <div 
                key={soundBank[i].audioKey}
                className='drum-pad' 
                id={soundBank[i].audioKey} 
                // onKeyDown={handleKeyPress}
                onClick={() => {
                playSound(soundBank[i].keyTrigger)
              }}>
                {soundBank[i].keyTrigger}
                <audio 
                  className='clip'
                  id={soundBank[i].keyTrigger}
                  src={soundBank[i].audioKey}
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