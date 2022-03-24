import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { removeFavorite } from "../actions/favoritesActions"

const FavoriteMovieList = (props) => {
    const { favorites } = props.favoritesReducer;
    const { removeFavorite } = props;
    
    const removeClick = id => {
        removeFavorite(id)
    }

    console.log(props)
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span>
                            <span className="material-icons" onClick={removeClick}>
                                remove_circle
                            </span>
                        </span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


export default connect(state => state, { removeFavorite }) (FavoriteMovieList);