import React, {useState} from 'react'
import './Banner.css'

import Button from '@mui/material/Button';
// import { Search } from '@mui/icons-material';
import Search from './Search'
import {useNavigate} from 'react-router-dom'

function Banner() {
    const navigate = useNavigate()
   const [showSearch, setShowSearch] = useState(false)
  return (
    <div className='banner'>
        <div className="banner_search">
            
            <Button onClick={()=>{setShowSearch(!showSearch)}} className='banner_searchbutton' 
            variant='contained'

            >{showSearch ? "Hide" : "Search Dates"}</Button>
            {showSearch && <Search/>}
        </div>
        <div className="banner_info">
            <h2>Get out and stretch your imagnation</h2>
            <h5>
                Plan a differnt kind of hetaeay to uncover the hidden gems near you
            </h5>
            <Button onClick={()=>navigate('/search')} className='button' variant='outlined'>explore nearby</Button>
        </div>
    </div>
  )
}

export default Banner
