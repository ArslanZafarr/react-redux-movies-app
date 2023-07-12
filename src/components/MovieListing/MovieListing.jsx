import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  let moviesRender = "";

  moviesRender = movies.Response == "True" ? (movies.Search.map((movie, index) => {
    return <MovieCard data={movie} key={index} />
  })) : (<>
    <div className='movies-load-error'>
      <h3>Movie Load failed</h3>
    </div>
  </>)


  return (
    <div>MovieListing
      {moviesRender}
    </div>
  )
}

export default MovieListing