import React, { useState,useEffect } from 'react';
import Movie from './comps/movie';

const FEATURED_API = process.env.FEATURED_API;
const IMAGE_API = process.env.IMAGE_API;
const SEARCH_API = process.env.SEARCH_API


function App() {
  const [movies,setMovies] = useState([])

  useEffect(async()=>{
    const moviesResp = await fetch(FEATURED_API)
    const moviesR = await moviesResp.json()

    setMovies(moviesR)
  },[]) 

  const movie = [1,2,3]
  return(
    <div>
    {movie.map(movie =>(
      <Movie/>
    ))}
    </div>
    
  )
  
}

export default App;
