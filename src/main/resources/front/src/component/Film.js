import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, Redirect, withRouter } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import { FilmContext } from '../contexts/FilmContextProvider'
import moment from "moment";

function Film(props) {
  const { deleteFilm } = useContext(FilmContext)
  let { id } = useParams();
  const [film, setFilm] = useState("");

  const getFilm = async (id) => {
    let res = await fetch("/rest/films/" + id);
    res = await res.json();
    setFilm(res);
  };

  function removeMovie() {
    deleteFilm(id)
    props.history.push('/')
  }

  useEffect(() => {
    getFilm(id);
  }, []);

  return (
    <div className="mt-5 p-5 bg-light">
      <Card className="film-card mx-auto">
        <CardImg top width="100%" src={film.film_image} alt="hassan" />
        <CardBody>
          <CardTitle><h1 className="text-info">{film.film_name}</h1></CardTitle>
          <CardSubtitle><h4>{film.film_type}</h4></CardSubtitle>
          <CardText>{moment(film.publish_date).format('llll')}</CardText>
          <Button className="btn btn-danger mt-5" onClick={() => removeMovie()}>DELETE</Button>
        </CardBody>
      </Card>
    
    </div>
  );
}

export default withRouter(Film)
