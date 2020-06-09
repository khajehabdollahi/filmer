import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Film() {
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
    </div>
  );
}
