import React from 'react'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './Navbar.scss'

function Navbar()
{
  return (
    <div className='nav-bar'>
      <div className="left">
        <DensityMediumIcon className='icon'/>
      </div>
      <div className="center">
        Wordle
      </div>
      <div className="right">
        <PersonAddAltRoundedIcon className='icon'/>
        <HelpRoundedIcon className='icon'/>
        <LeaderboardIcon className='icon'/>
        <SettingsIcon className='icon'/>
        <div className="games">
          Subscribe to Games
        </div>
      </div>
    </div>
  )
}

export default Navbar
