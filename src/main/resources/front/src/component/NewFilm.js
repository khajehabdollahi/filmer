import React, { useState, useContext } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FilmContext } from "../contexts/FilmContextProvider";

export default function NewFilm(props) {
  const { updateMovieList } = useContext(FilmContext);
  const [filmName, setFilmName] = useState("");
  const [language, setLanguage] = useState("");
  const [duration, setDuration] = useState("");
  const [filmType, setFilmType] = useState("");
  const [filmImage, setFilmImage] = useState("");

  const addFilm = async (e) => {
    e.preventDefault();

    const film = {
      film_name: filmName,
      language: language,
      duration: +duration,
      film_type: filmType,
      film_image: filmImage,
      publish_date: Date.now()
    };

    // send new film to backend
    let res = await fetch("/rest/films", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(film),
    });
    res = await res.json();
    updateMovieList(res);

    props.history.push("/");
  };

  return (
    <Container className="mx-5, px-5">
      <div className="mx-2">
        <Form onSubmit={addFilm} className="mx-auto add-movie">
          <h3 className="text-secondary text-center">ADD NEW FILM</h3>
          <hr/>
          <FormGroup className="mt-3 mb-2 mr-sm-2 mb-sm-0">
            <div className="mr-sm-2">Film Name</div>
            <Input
              type="text"
              name="film-name"
              id="filmName"
              placeholder="Film Name"
              onChange={(e) => setFilmName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mt-3 mb-2 mr-sm-2 mb-sm-0">
            <Label for="filmType" className="mr-sm-2">
              Language
            </Label>
            <Input
              type="text"
              name="language"
              id="filmType"
              placeholder="Language"
              onChange={(e) => setLanguage(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mt-3 mb-2 mr-sm-2 mb-sm-0">
            <Label for="filmType" className="mr-sm-2">
              Duration
            </Label>
            <Input
              type="text"
              name="duration"
              id="filmType"
              placeholder="Duration"
              onChange={(e) => setDuration(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mt-3 mb-2 mr-sm-2 mb-sm-0">
            <Label for="filmType" className="mr-sm-2">
              Film Type
            </Label>
            <Input
              type="text"
              name="film-type"
              id="filmType"
              placeholder="Film Type"
              onChange={(e) => setFilmType(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mt-3 mb-2 mr-sm-2 mb-sm-0">
            <Label for="filmType" className="mr-sm-2">
              Film Image URL
            </Label>
            <Input
              type="text"
              name="film-type"
              id="filmImage"
              placeholder="Film Image URL"
              onChange={(e) => setFilmImage(e.target.value)}
            />
          </FormGroup>

          <button className="btn btn-outline-success mt-3">Submit</button>
        </Form>
      </div>
    </Container>
  );
}
