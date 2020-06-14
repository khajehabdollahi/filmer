import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {Container, Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { FilmContext } from '../contexts/FilmContextProvider'
import moment from "moment";

export default function FilmList(props) {
  const { movies } = useContext(FilmContext)

  const sortedMovies = [...movies].sort((a, b) => {
    return b.publish_date - a.publish_date
  })

  useEffect(() => {
     
  }, [sortedMovies])

  const list = () => {
    return sortedMovies.map((movie, i) => {
      return (                   
        <Col key={i} className="my-3"> 
          <Link to={`/${movie.id}`} style={{textDecoration: 'none'}}>
          <Card className="mx-auto">
            <CardImg top width="100%" src={movie.film_image} alt="hassan" style={{height:'14rem'}} />
            <CardBody>
              <CardTitle>Name: <h3 className="text-info">{movie.film_name}</h3></CardTitle>
              <CardSubtitle>Film Type:<h5>{movie.film_type}</h5></CardSubtitle>
              <CardSubtitle>Duratuin (min): <h5>{movie.duration}</h5></CardSubtitle>
              <CardSubtitle>Language: <h5>{movie.language}</h5></CardSubtitle>
              <CardText>Publish Date: {moment(movie.publish_date).format('llll')}</CardText>
            </CardBody>
          </Card>
          </Link>
        </Col>               
      )
    })
  }

  return (
    <Container>
      <Row xs="1" sm="2" md="3">  
        {list()}
      </Row>
    </Container>
  )
}