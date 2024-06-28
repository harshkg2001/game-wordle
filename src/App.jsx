import { useEffect, useState } from 'react';
import './App.scss';
import sparewords from './sparewords.json';
import Navbar from './components/Navbar/Navbar.jsx';
import GuessWindow from './components/GuessWindow/GuessWindow.jsx';
import OnSrcKeyboard from './components/OnSrcKeyboard/OnSrcKeyboard.jsx';
import useWordle from './hooks/useWordle.js';

function App()
{
  const { word, setWord } = useWordle();

  const randomWord = sparewords[Math.floor(Math.random()*sparewords.length)].word.toUpperCase();

  useEffect(() => {
    setWord(randomWord);
  }, []);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // If you want to use an api

  // useEffect(() => {
  //   async function getWord()
  //   {
  //     try
  //     {
  //       const res = await fetch('https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase')

  //       const data = await res.json();
  //       setWord(data)
  //       console.log(data)
  //       console.log(sparewords.length, randomWord);
  //     }
  //     catch(err)
  //     {
  //       console.log('error loading random word')
  //       setWord(randomWord);
  //     }
  //   };

  //   getWord();
  // }, [])

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="app">
      <Navbar/>
      <h5>{word}</h5>
      <GuessWindow word={word}/>
      <OnSrcKeyboard word={word}/>
    </div>
  );
}

export default App;
