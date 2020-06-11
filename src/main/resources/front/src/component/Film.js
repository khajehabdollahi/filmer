import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import {FilmContext} from '../contexts/FilmContextProvider'

export default function Film(props) {
  const { deleteFilm } = useContext(FilmContext)
  const [redirect, setRedirect] = useState(false)
  let { id } = useParams();
  const [film, setFilm] = useState("");

  const getFilm = async (id) => {
    let res = await fetch("/rest/films/" + id);
    res = await res.json();
    setFilm(res);
  };

  function removeMovie() {
    deleteFilm(id)
    setRedirect(true)
  }

  useEffect(() => {
    getFilm(id);
  }, []);

  return (
    <div className="mt-5 p-5 bg-light">
      {redirect??<Redirect to='/'/>}
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle><h1 className="text-info">{film.film_name}</h1></CardTitle>
          <CardSubtitle><h4>{film.film_type}</h4></CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button className="btn btn-danger mt-5" onClick={() => removeMovie()}>DELETE</Button>
        </CardBody>
      </Card>
    
    </div>
  );
}
