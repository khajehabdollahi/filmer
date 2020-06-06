package com.filmer.entities;

import javax.persistence.*;

@Entity
@Table(name = "movies")
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String film_name;
    private String language;
    private Integer duration;
    private String film_type;

    public Film() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFilm_name() {
        return film_name;
    }

    public void setFilm_name(String film_name) {
        this.film_name = film_name;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getFilm_type() {
        return film_type;
    }

    public void setFilm_type(String film_type) {
        this.film_type = film_type;
    }
}
