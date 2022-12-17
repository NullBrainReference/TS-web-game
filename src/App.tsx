import React, { useEffect, useState } from 'react';
import './App.css';
import GameWindow from './components/GameWindow';
import StartWindow from './components/StartWindow';
import { Player } from './models/Player';

function App() {
  const [isSetting, setIsSetting] = useState(true);
  const [players, setPlayers] = useState([new Player("",0)])

  useEffect(() => {

  })

  function startGame(){
    setIsSetting(false);
  }

  return (
    <div className="App">
      {
        isSetting ?
        <StartWindow start={startGame} setPlayers={setPlayers}/>
        :
        <GameWindow players={players}/>
      }
    </div>
  );
}

export default App;
