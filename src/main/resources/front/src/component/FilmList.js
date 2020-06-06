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
                <Col >
                <h1>{movie.film_name}</h1>
                <p>{movie.film_type}</p>

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