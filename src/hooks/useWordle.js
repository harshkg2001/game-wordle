import { useState } from "react";

const useWordle = (word) => {

  const [guesses, setGuesses] = useState([]);
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  function formatGuess()
  {
    
  }

  const addNewGuess = (guess) => {

  }

  const handleKeyup = (e) => {
    const key=e.key;
    console.log(key);

    if(key === 'Enter')
    {
      if(turn<5 && currentGuess.length === 5 && history.indexOf(currentGuess) === -1)
      {
        formatGuess();

        setHistory((prev) => [...prev, currentGuess]);
        setTurn((prev) => (prev+1));
        setCurrentGuess("");
        setIsCorrect(currentGuess === word);
      }
    }
    else if(key === 'Backspace')
    {
      if(currentGuess.length > 0)
        setCurrentGuess((prev) => (prev.slice(0, -1)));
    }
    else if(('a'<=key && key<='z') || ('A'<=key && key<='Z'))
    {
      if(currentGuess.length < 5)
        setCurrentGuess((prev) => (prev+key));
    }
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle;