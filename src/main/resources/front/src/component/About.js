import React from 'react'
import {Container, Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function About() {
  return (
    
    <Container>
      
      <Row >
        <Col>
          <Card className="film-card mx-auto">
            <CardImg top width="100%" src="https://yt3.ggpht.com/a/AGF-l7_fls0eJZYUgFyZlqzUd6a7bGY1GRWxXi-vkg=s900-c-k-c0xffffffff-no-rj-mo" alt="hassan" />
            <CardBody>
              <CardTitle><h1 className="text-info">Hassan</h1></CardTitle>
              <CardSubtitle><h4> Hassan studies at Plushögskolan in Lund. He does some cultural activities beside studing.
                Here are some movies which he produced. His production are in three different languges: English, Swedish and Persian</h4></CardSubtitle>
              <CardText>Studerande</CardText>
            </CardBody>
          </Card>
        
        </Col>
      </Row> 
    </Container>
  )
}

