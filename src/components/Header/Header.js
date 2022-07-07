import React from 'react'
import styles from './Header.css'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'    //this is material ui iconbutton api mkaing the button clickable, google iconbutton mui for more info
import ForumIcon from '@mui/icons-material/Forum';
import logo from '../../logo.png'

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>
        <img className='header_logo' src={logo} alt="" style={{styles}}/>
        <IconButton>
            <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>
        
    </div>
  ) 
}

export default Header