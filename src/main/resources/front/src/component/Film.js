import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import {FilmContext} from '../contexts/FilmContextProvider'

export default function Film(props) {
  const { deleteFilm } = useContext(FilmContext)
  let { id } = useParams();
  const [film, setFilm] = useState("");

  const getFilm = async (id) => {
    let res = await fetch("/rest/films/" + id);
    res = await res.json();
    setFilm(res);
  };

  useEffect(() => {
    getFilm(id);
  }, []);

  return (
    <div>
      <h1>{film.film_name}</h1>

      <Button onClick={() => deleteFilm(id)}>DELETE</Button>
    </div>
  );
}
