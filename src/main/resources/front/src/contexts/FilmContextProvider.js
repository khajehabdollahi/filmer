import React, { createContext, useState, useEffect } from 'react'

export const FilmContext = createContext()

export default function FilmContextProvider(props) {
  const [movies, setMovies] = useState([])

  const fetchFilms = async () => {
    let res = await fetch('/rest/films')
    res = await res.json()
    setMovies(res)
  }

  useEffect(() => {
    fetchFilms()
  }, [])
  
  const values = {
    movies, 
  }

  return (
    <FilmContext.Provider value={values}>
      {props.children}
    </FilmContext.Provider>
  )
}