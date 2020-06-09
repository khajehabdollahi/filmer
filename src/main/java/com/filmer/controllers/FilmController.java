package com.filmer.controllers;

import com.filmer.entities.Film;
import com.filmer.services.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FilmController {

    @Autowired
    private FilmService filmService;

    @GetMapping("/rest/films")
    public List<Film> getAllFilms() {
        return filmService.getAllFilms();
    }

    @GetMapping("/rest/films/{id}")
    public Film getOneRecipe(@PathVariable int id) {
        return filmService.getOneFilm(id);
    }

    @PostMapping("/rest/films")
    public Film createFilm(@RequestBody Film film) {
        return filmService.createFilm(film);
    }

    @DeleteMapping("/rest/films/{id}")
    public void deleteFilm(@PathVariable int id) {
        filmService.deleteFilm(id);
    }

}
