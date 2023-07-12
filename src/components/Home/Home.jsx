import React, { useEffect } from 'react'
import movieApi from '../../common/apis/movieApi'
import { APIkey } from "../../common/apis/movieApiKey"
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
  const movieSearch = "Harry"
  const dispatch = useDispatch();
  useEffect(() => {

    const fetchMovies = async () => {
      const res = await movieApi
        .get(`?apikey=${APIkey}&s=${movieSearch}&type=movie`)
        .catch((error) => {
          console.log("err", error)
        })

      dispatch(addMovies(res.data))
      // console.log("response from api", res)
    }
    fetchMovies();
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home