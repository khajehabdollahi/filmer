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

}
