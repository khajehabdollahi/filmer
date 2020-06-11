import React, { createContext, useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import FilmList from "../component/FilmList";

export const FilmContext = createContext()

export default function FilmContextProvider(props) {
  const [movies, setMovies] = useState([])

  function updateMovieList (movie) {
    setMovies([...movies, movie])
  }

  async function fetchFilms () {
    let res = await fetch('/rest/films')
    res = await res.json()
    setMovies(res)
  }

  function deleteFilm(id) {
    setMovies(movies.filter(r => r.id !== id))
    fetch('/rest/films/' + id, {
      method: 'DELETE'
    })
    updateMovieList()
    props.history.push('/')
  }

  useEffect(() => {
    fetchFilms()
  }, [])
  
  const values = {
    movies, 
    updateMovieList,
    deleteFilm
  }

  return (
    <FilmContext.Provider value={values}>
      {props.children}
    </FilmContext.Provider>
  )
}