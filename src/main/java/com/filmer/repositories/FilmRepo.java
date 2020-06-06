package com.filmer.repositories;

import com.filmer.entities.Film;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilmRepo extends CrudRepository<Film, Integer> {
    public Film findById(int id);
}
