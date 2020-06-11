import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer.js";
import FilmList from "./component/FilmList.js";
import FilmContextProvider from "./contexts/FilmContextProvider.js";
import Film from "./component/Film.js";
import NewFilm from "./component/NewFilm.js";
import About from "./component/About.js";
import Contact from "./component/Contact.js";

function App() {
  return (
    <div className="App">
      <FilmContextProvider>
        <Router>
          <Navbar />
          <Route exact path="/" component={FilmList} />

          <Route exact path="/new" component={NewFilm} />
          <Route exact path="/:id" children={<Film />} />
          <Route exact path="/about" children={<About />} />
          <Route exact path="/contact" children={<Contact />}/>
          <Footer />
        </Router>
      </FilmContextProvider>
    </div>
  );
}

export default App;
