import React, { useEffect, useState } from 'react'
import './GuessWindow.scss'
import useWordle from '../../hooks/useWordle';
import color from './../../color.json';

function GuessWindow({ word })
{
  const { turn, currentGuess, guesses, isCorrect, handleKeyup } = useWordle(word);

  useEffect(() => {
    if(!isCorrect)
    { 
      window.addEventListener('keyup', handleKeyup)
      
      return () => {
        window.removeEventListener('keyup', handleKeyup)
      }
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
    // console.log(guesses, turn, currentGuess);

    let arr = [...grid];
    for(let i=0; i<turn; i++)
    {
      console.log('here');
      for(let j=0; j<cols; j++)
      {
        arr[i][j] = guesses[i][j].key;
        
        const myDiv = document.getElementById(`${guesses[i][j].key}`);

        // const myDiv2 = document.getElementById(`${i}${j}`);

        // console.log('myDiv2', myDiv2.style.backgroundColor);

        // console.log(`myDiv${i}${j}`, myDiv.style.backgroundColor);

        if(myDiv.style.backgroundColor === `${color.yellow}` || myDiv.style.backgroundColor === '')
          myDiv.style.backgroundColor = guesses[i][j].color;
      }
    }

    for(let i=turn; i<rows; i++)
    {
      for(let j=0; j<cols; j++)
        arr[i][j] = ' ';
    }

    for(let j=0; j<cols; j++)
    {
      arr[turn][j] = currentGuess[j];
      const myDiv = document.getElementById(`${turn}${j}`);
      if(j>=currentGuess.length)
        myDiv.style.outline = `solid 2px ${color.grey_outline}`;
      else
      {
        if(j==currentGuess.length-1)
          myDiv.style.outline = `solid 3px ${color.black}`;
        else  
          myDiv.style.outline = `solid 2px ${color.grey_outline}`;
      }      
    }

    if(turn>=1)
    {
      const myDiv = document.getElementById(`${turn-1}${cols-1}`);
      
      myDiv.style.outline = `solid 2px ${myDiv.style.backgroundColor}`;
    }

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
                      id={`${ir}${ic}`}
                      key={ic} 
                      className='guess-col'
                      style={
                        {
                          backgroundColor: ir>=turn?'white':`${guesses[ir][ic].color}`,
                          outline: `solid 2px ${ir>=turn?`${color.grey_outline}`:`${guesses[ir][ic].color}`}`,
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
