import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovie, addToSelectedMovies } from '../../store/moviesSlice';
import Header from '../../components/Header';
import './style.css';

const Movie = () => {
    const initialMovies = useSelector(state => state.movies.movies);
    const selectedMovies = useSelector(state => state.movies.selectedMovies);
    const [movies, setMovies] = useState(initialMovies);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setMovies(initialMovies.filter(m => m.title.includes(searchTerm)));
    }, [searchTerm, initialMovies]);

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteMovie(id));
    };

    const handleAddToSelected = id => {
        if (selectedMovies.includes(id)) {
            console.log('Цей фільм вже обраний.');
        } else {
            console.log('Selected movie id:', id);
            dispatch(addToSelectedMovies({ id: id }));
        }
    };

    const getButtonText = id => {
        return selectedMovies.includes(id)
					? 'Фільм вже обраний ❤️ '
					: 'Додати до вибраних'
    };

    return (
        <>
            <Header onSearchChange={handleSearchChange} />
            <div className='container'>
                <div className='mainContent'>
                    {movies.map(movie => (
                        <div className='cardFilm' key={movie.id}>
                            <Link to={`/movies/${movie.id}`} >
                                <img src={movie.image} alt={movie.title} className='imgCard' />
																<div className='movieDetail'>
                                <h3>{movie.title}</h3>
                                <p>Rating: {movie.rating}</p>
                                <p>Release Date: {movie.release_date}</p>
																</div>
                            </Link>
                            <button onClick={() => handleDelete(movie.id)} className='btnDelete'>
															<img src="delete.png" alt="" className='deleteImg'/>
															</button>
                            <Link to={`/movies/${movie.id}/edit`} className='editLink'>
                                <button >Редагувати</button >
                            </Link>
                            <button onClick={() => handleAddToSelected(movie.id)} className='btnSelected'>
                                {getButtonText(movie.id)}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Movie;
