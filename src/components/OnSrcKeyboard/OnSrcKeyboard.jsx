import React, { useEffect, useState } from 'react'
import './OnSrcKeyboard.scss'
import data from '../../data.json'
import useWordle from '../../hooks/useWordle';
import color from './../../color.json';

function OnSrcKeyboard( {word} )
{
  /////////////////////////////////////////////////

  const { turn, currentGuess, guesses, isCorrect, handleKeyup } = useWordle(word);

  useEffect(() => {
    if(!isCorrect)
    { 
      window.addEventListener('click', handleKeyup)
      
      return () => {
        window.removeEventListener('click', handleKeyup)
      }
    }
  }, [handleKeyup])

  /////////////////////////////////////////////////

  return (
    <div className='on-src-keyboard'>
      
      {/* The way to use map function for a json object */}
      
      {Object.keys(data).map((r, idx_r) => {
        return (
          <div key={idx_r} className='on-src-row'>
            {
              data[r].map((c, idx_c) => {
                return (
                  <div 
                    id={`${c}`}
                    key={idx_c} 
                    className='on-src-col'
                  >
                    {c}
                  </div>
                )
              })
            }
          </div>
        )
      })}
    </div>
  )
}

export default OnSrcKeyboard
