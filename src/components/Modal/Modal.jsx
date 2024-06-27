import React from 'react'
import './Modal.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Modal()
{
  return (
    <div className='modal'>
      <div>
        <button>
          <CloseRoundedIcon/>
        </button>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Modal
