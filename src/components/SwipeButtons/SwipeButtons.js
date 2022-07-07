import React from 'react'
import styles from './SwipeButtons.css'
import IconButton from '@mui/material/IconButton' 
// importing some icons from material-ui
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarRateIcon from '@mui/icons-material/StarRate';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className="swipeButtons_repeat">
             <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className="swipeButtons_left">
             <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className="swipeButtons_star">
             <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton className="swipeButtons_right">
             <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className="swipeButtons_lightning">
             <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons