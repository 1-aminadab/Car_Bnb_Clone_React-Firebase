import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
      
        <div className="left_header">
          <Link to='/'> 
              <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png
            " alt="" className="header_logo" />
      </Link>
           
        </div>
        <div className="header_center">
            <input type="text" name="" id="" />
            <SearchIcon />
           
        </div>
        <div className="header_right">
           <p>Become a host</p>
           <LanguageIcon />
           <KeyboardArrowDownIcon />
           <AccountCircleIcon fontSize='large' htmlColor='gray'/>
        </div>
    </div>
  )
}

export default Header