import { getId } from "../data";

export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
export const addMovie = (movie) => {
    return({
        type: ADD_MOVIE,
        payload: {
            id: getId(),
            title: movie.title,
            director: movie.director,
            genre: movie.director,
            metascore: movie.metascore,
            description: movie.description
        },
    })
}