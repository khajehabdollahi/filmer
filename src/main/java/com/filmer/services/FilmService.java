package com.filmer.services;

import com.filmer.entities.Film;
import com.filmer.repositories.FilmRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    @Autowired
    private FilmRepo filmRepo;

    public List<Film> getAllFilms() {
        return (List<Film>) filmRepo.findAll();
    }

    public Film getOneFilm(int id) {
        return filmRepo.findById(id);
    }

    public Film createFilm(Film film) {
        return filmRepo.save(film);
    }

}
