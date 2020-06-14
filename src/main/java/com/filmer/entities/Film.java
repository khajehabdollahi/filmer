package com.filmer.entities;

import javax.persistence.*;

@Entity
@Table(name = "movies")
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "film_name")
    private String film_name;

    @Column(name = "language")
    private String language;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "film_type")
    private String film_type;

    @Column(name = "film_image")
    private String film_image;

    @Column(name = "publish_date")
    private Long publish_date;

    public Film() {}

    public Film(String film_name, String language, Integer duration, String film_type, String film_image, Long publish_date) {
        this.film_name = film_name;
        this.language = language;
        this.duration = duration;
        this.film_type = film_type;
        this.film_image = film_image;
        this.publish_date = publish_date;
    }

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

    public String getFilm_image() {
        return film_image;
    }

    public void setFilm_image(String film_image) {
        this.film_image = film_image;
    }

    public Long getPublish_date() {
        return publish_date;
    }

    public void setPublish_date(Long publish_date) {
        this.publish_date = publish_date;
    }

}
