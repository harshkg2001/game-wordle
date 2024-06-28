import { useState } from "react";
import WordleContext from "../contexts/WordleContext";
import color from "./../color.json";

const WordleProvider = ({ children }) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([new Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [word, setWord] = useState("");

  function formatGuess()
  {
    console.log(word, currentGuess);

    const solution = word.split('');
    const formattedGuess = currentGuess.split('').map((letter) => {
      return {key: letter, color: `${color.grey}`}
    });

    for(let i=0; i<solution.length; i++)
    {
      if(solution[i] === formattedGuess[i].key)
      {
        formattedGuess[i].color = `${color.green}`;
        solution[i] = ' ';
      }
    }

    for(let i=0; i<solution.length; i++)
    {
      if(solution.indexOf(formattedGuess[i].key) !== -1 && formattedGuess[i].color === `${color.grey}`)
      {
        formattedGuess[i].color = `${color.yellow}`;
        solution[solution.indexOf(formattedGuess[i].key)] = ' ';
      }
    }

    return formattedGuess;
  }

  function addNewGuess(formattedGuess)
  {
    if(currentGuess === word)
    {
      setIsCorrect(true);
      console.log('correct');
    }

    setGuesses((prev) => {
      let newGuesses = [...prev];
      newGuesses[turn] = formattedGuess;

      return newGuesses;
    });

    setHistory((prev) => [...prev, currentGuess]);
    setTurn((prev) => (prev+1));
    setCurrentGuess("");
  }

  const handleKeyup = (e) => {

    let key;
    
    if(e.type === 'keyup')
      key=e.key;
    else if(e.type === 'click') 
      key=e.target.id;

    console.log(key, key.length);

    key=String(key);

    if(key === 'Enter')
    {
      if(turn<5 && currentGuess.length === 5 && history.indexOf(currentGuess) === -1)
      {
        const formattedGuess = formatGuess();
        console.log(formattedGuess);

        addNewGuess(formattedGuess);
      }
      else if(history.indexOf(currentGuess) !== -1)
      {
        alert('You already guessed this word');
        setCurrentGuess("");
      }
      else if(currentGuess.length!== 5)
      {
        alert('Please enter a 5 letter word');
        setCurrentGuess("");
      }
    }
    else if(key === 'Backspace')
    {
      if(currentGuess.length > 0)
        setCurrentGuess((prev) => (prev.slice(0, -1)));
    }
    else if((key.length === 1) && (('a'<=key && key<='z') || ('A'<=key && key<='Z')))
    {
      console.log("here inside if");
      // key.length is used in the condition to avoid registering unwanted keys like tab, shift etc.

      if(currentGuess.length < 5)
      {
        console.log("useState will be updated");
        setCurrentGuess((prev) => (prev+key.toUpperCase()));
      }
    }
  }

  const values = {
    turn,
    currentGuess,
    guesses,
    history,
    isCorrect,
    word,
    setWord,
    handleKeyup
  };

  return (
    <WordleContext.Provider value={values}>
      {children}
    </WordleContext.Provider>
  )
}

export default WordleProvider;