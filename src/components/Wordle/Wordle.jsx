import React, { useEffect } from 'react'
import useWordle from '../../hooks/useWordle'

function Wordle({word})
{
  const { handleKeyup, handleGuess, guesses, currentGuess, turn, isCorrect } = useWordle(word);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => {
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [handleKeyup])

  return (
    <div>
      current-guess : {currentGuess}, {currentGuess.length}
    </div>
  )
}

export default Wordle
