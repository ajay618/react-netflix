import React, { useEffect ,useState} from 'react'
import {API_KEY , imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      setMovie(response.data.results[randomIndex])
      });
  }, []);

  const limitOverview = (overview) => {
    if (!overview) return '';
    const sentences = overview.split('. ');
    return sentences.slice(0, 2).join('. ') ;
  };
  
  return (
    <div
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} 
    className='banner'>
        <div className='content'>
        <h1 className='title'>{movie ? (movie.title || movie.name || ' ') : ' '}</h1>
            <div className='banner_buttons'>
               <button className='button'>Play</button>
               <button className='button'>My List</button>
            </div>
            <h1 className='describtion'>{movie ? limitOverview(movie.overview) : ' '}</h1>
        </div> 
        <div className="fade_bottom">
        </div>    
    </div>
  )
}

export default Banner