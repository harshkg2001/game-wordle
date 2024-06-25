import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './Navbar.scss'

function Navbar()
{
  return (
    <div className='nav-bar'>
      <div className="left">
        <DensityMediumIcon/>
      </div>
      <div className="center">
        Wordle
      </div>
      <div className="right">
        <HelpOutlineIcon/>
        <LeaderboardIcon/>
        <SettingsIcon/>
        <div className="games">
          Subscribe to Games
        </div>
      </div>
    </div>
  )
}

export default Navbar
