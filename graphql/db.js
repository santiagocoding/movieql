export let movies = [
    {
        id: "0",
        name: "Nicolas",
        score: 8
    },
    {
        id: "1",
        name: "Jkstar",
        score: 10
    },
    {
        id: "2",
        name: "Rango",
        score: 7
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(Movie => String(id) === Movie.id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(Movie => Movie.id !== String(id));
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}

