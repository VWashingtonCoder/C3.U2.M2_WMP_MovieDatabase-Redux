import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteMovie } from "../actions/movieActions"
import { addFavorite } from "../actions/favoritesActions"

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();
    const { deleteMovie, addFavorite } = props;
    const { movies } = props.movieReducer
    const { displayFavorites } = props.favoritesReducer

    const movie = movies.find(movie=>movie.id===Number(id));

    const deleteClick = e => {
        e.preventDefault()
        deleteMovie(movie.id)
        push("/movies")
    }

    const addClick = e => {
        e.preventDefault()
        addFavorite(movie)
    }
    console.log(movies)
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {displayFavorites ? 
                                <span className="m-2 btn btn-dark">Favorite</span> : <span/> 
                            }
                            
                            <span className="add-fav m-2 btn" onClick={addClick}>Add Favorite</span>
                            
                            
                            <span className="delete">
                                <input type="button" className="m-2 btn btn-danger" value="Delete" onClick={deleteClick}/>
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default connect(state => state, { deleteMovie, addFavorite }) (Movie);