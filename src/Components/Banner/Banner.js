import React, { useEffect } from 'react'
import {API_KEY} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
      console.log(response.data.results[0]);
      });
  }, []);
  
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
               <button className='button'>Play</button>
               <button className='button'>My List</button>
            </div>
            <h1 className='describtion'>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.</h1>
        </div> 
        <div className="fade_bottom">
        </div>    
    </div>
  )
}

export default Banner