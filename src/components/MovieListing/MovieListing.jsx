import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "../MovieListing/MovieListing.scss"
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
    <>
      <section className='movie-listing-section'>
        <div className='movie-listing-container'>
          <div className='movie-listing-row'>
            {moviesRender}
          </div>
        </div>
      </section>

    </>

  )
}

export default MovieListing