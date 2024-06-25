import React from 'react'
import './OnSrcKeyboard.scss'
import data from '../../data.json'

function OnSrcKeyboard()
{
  return (
    <div className='on-src-keyboard'>
      {/* The way to use map function for a json object */}
      
      {Object.keys(data).map((r, idx_r) => {
        return (
          <div key={idx_r} className='on-src-row'>
            {
              data[r].map((c, idx_c) => {
                return (
                  <div key={idx_c} className='on-src-col'>
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
