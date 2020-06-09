import React, {useState} from "react";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function NewFilm(props) {
  const [filmName, setFilmName] = useState('');
  const [language, setLanguage] = useState('');
  const [duration, setDuration] = useState('');
  const [filmType, setFilmType] = useState('');

  const addFilm = async (e) => {
    e.preventDefault()

    const film = {
      film_name: filmName, 
      language: language,
      duration: +duration,
      film_type: filmType
    }
    
    // send new film to backend
    let res = await fetch('/rest/films', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(film)
    })
    res = await res.json()

    props.history.push('/')
  }



  return (
    <Container>
      <div className="mx-5 px-5">
      <h1>ADD NEW FILM</h1>
      <Form onSubmit={addFilm} className="my-5 p-5">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filmName" className="mr-sm-2">Film Name</Label>
          <Input type="text" name="film-name" id="filmName" placeholder="Film Name" onChange={e=>setFilmName(e.target.value)}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filmType" className="mr-sm-2">Language</Label>
          <Input type="text" name="language" id="filmType" placeholder="Language"  onChange={e=>setLanguage(e.target.value)}/>
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filmType" className="mr-sm-2">Duration</Label>
          <Input type="text" name="duration" id="filmType" placeholder="Duration"  onChange={e=>setDuration(e.target.value)} />
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filmType" className="mr-sm-2">Film Type</Label>
          <Input type="text" name="film-type" id="filmType" placeholder="Film Type"  onChange={e=>setFilmType(e.target.value)}/>
        </FormGroup>
        <Button>Submit</Button>
        </Form>
      </div>
    </Container>
  )

}
