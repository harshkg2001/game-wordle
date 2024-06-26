import React, { useEffect, useState } from 'react'
import './GuessWindow.scss'
import useWordle from '../../hooks/useWordle';

function GuessWindow({word})
{

  const { turn, currentGuess, guesses, isCorrect, handleKeyup } = useWordle(word);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => {
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [handleKeyup])

  const rows = 6;
  const cols = 5;

  let arr = new Array(rows);
  for(let i=0; i<rows; i++)
    arr[i] = new Array(cols);

  for(let i=0; i<rows; i++)
  {
    for(let j=0; j<cols; j++)
      arr[i][j] = ' ';
  }

  const [grid, setGrid] = useState(arr);

  useEffect(() => {
    console.log(guesses, turn, currentGuess);

    let arr = [...grid];
    for(let i=0; i<turn; i++)
    {
      for(let j=0; j<cols; j++)
        arr[i][j] = guesses[i][j].key;
    }

    for(let i=turn; i<rows; i++)
    {
      for(let j=0; j<cols; j++)
        arr[i][j] = ' ';
    }

    for(let j=0; j<currentGuess.length; j++)
      arr[turn][j] = currentGuess[j];

    setGrid(arr);

  }, [guesses, turn, currentGuess]);

  return (
    <div className='guess-window'>
      {
        grid.map((row, ir) => {
          return (
            <div key={ir} className='guess-row'>
              {
                row.map((col, ic) => {
                  return (
                    <div 
                      key={ic} 
                      className='guess-col'
                      style={
                        {
                          backgroundColor: ir>=turn?'white':`${guesses[ir][ic].color}`,
                          outline: `solid 2px ${ir>=turn?'grey':`${guesses[ir][ic].color}`}`,
                      }}
                    >
                      {col}
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default GuessWindow
