import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <div className="content">
            <Switch>
            <Route exact path="/" component={FilmList} />
            <Route path="/new" component={NewFilm} />          
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:id" component={Film} />
            </Switch>
          </div>
          <Footer />    
        </Router>
      </FilmContextProvider>
    </div>
  );
}

export default App;
