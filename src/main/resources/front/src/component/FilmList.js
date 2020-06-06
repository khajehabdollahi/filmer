import React, { useContext } from 'react'
import { Card, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
  import { FilmContext } from '../contexts/FilmContextProvider'

export default function FilmList() {
  const { movies} = useContext(FilmContext)

  const list = () => {
    return movies.map((movie, i) => {
      return (
        <Card key={i}>
            <Container>
              <Row>
                <Col style={{color:"red", width:"30%", backgroundColor:"yellow", border:"5px blue solid"}}>
                <h1><span style={{color:"black"}}>Film Name: </span>{movie.film_name}</h1>
                <h4><span style={{color:"black"}}>Film Type: </span>{movie.film_type}</h4>
                <h5><span style={{color:"black"}}>Lanuage: </span>{movie.language}</h5>
                <h5><span style={{color:"black"}}>Duration: </span>{movie.duration}</h5>



                </Col>
              </Row>
            </Container>
          </Card>
      )
    })
  }

  return (
    <>
      {list()}
    </>
  )
}