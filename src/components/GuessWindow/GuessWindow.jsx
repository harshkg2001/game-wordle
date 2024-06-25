import React from 'react'
import './GuessWindow.scss'

function GuessWindow()
{

  const rows = 6;
  const cols = 5;

  let grid = new Array(rows);
  for(let i=0; i<rows; i++)
    grid[i] = new Array(cols);

  for(let i=0; i<rows; i++)
  {
    for(let j=0; j<cols; j++)
      grid[i][j] = 1;
  }

  return (
    <div className='guess-window'>
      {
        grid.map((row, ir) => {
          return (
            <div key={ir} className='guess-row'>
              {
                row.map((col, ic) => {
                  return (
                    <div key={ic} className='guess-col'>
                      {/* to be decided */}
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
