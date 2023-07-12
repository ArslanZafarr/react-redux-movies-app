import React from 'react'
import "../MovieCard/MovieCard.scss"

const MovieCard = (props) => {
  const { data } = props
  return (
    <div className="movie-card" >
      <div className='movie-card-top'>
        <img src={data.Poster} alt="" />
      </div>
      <div className='movie-card-bottom'>
        <h5>{data.Title}</h5>
        <p>{data.Year}</p>
      </div>

    </div>
  )
}

export default MovieCard