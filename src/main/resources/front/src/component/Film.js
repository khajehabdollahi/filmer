import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { Button,Card } from "reactstrap";
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
      <h4 style={{backgroundColor:"blue" }}>Do you want to delete this movie</h4>
      <Button style={{color:"yellow", backgroundColor:"red"}} onClick={() => deleteFilm(id)}>DELETE</Button>
    </div>
  );
}
