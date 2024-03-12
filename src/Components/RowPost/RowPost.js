import React, { useState,  useEffect } from 'react'
import './RowPost.css'
import { imageUrl } from '../../Constants/Constants'
import axios from '../../axios'

function RowPost(props) {
  const[movies ,setMovies] = useState([])

  useEffect(() => {
     axios.get(props.url).then( (response)=> {
       console.log(response.data)
       setMovies(response.data.results)
     }).catch ( () =>{
         alert('Network Error!')
     })
  }, [props.url]);
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map( movie => 
          <img className= {props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />   
          )}
         
        </div>
    </div>
  )
}

export default RowPost