import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeSelectedMovie } from '../store/moviesSlice'
import Header from './Header'

const SelectedMovies = () => {
	const selectedMoviesIds = useSelector(state => state.movies.selectedMovies)
	const allMovies = useSelector(state => state.movies.movies)
	const dispatch = useDispatch()

	// Фільтруємо всі фільми, щоб отримати тільки об'єкти фільмів,
	// які мають ідентифікатори, що містяться в selectedMoviesIds
	const selectedMovies = allMovies.filter(movie =>
		selectedMoviesIds.includes(movie.id)
	)

	const handleRemoveFromSelected = id => {
		dispatch(removeSelectedMovie(id))
	}

	return (
		<>
			<Header />
			<div className='container'>
          <h1>Вибрані фільми</h1>
				<div className='mainContent'>
					{selectedMovies.map(movie => (
						<div className='cardFilm' key={movie.id}>
							<Link to={`/movies/${movie.id}`} >
								<img src={movie.image} alt={movie.title} className='imgCard' />
								<div className='movieDetail'>
									<h3>{movie.title}</h3>
									<p>Rating: {movie.rating}</p>
									<p>Release Date: {movie.release_date}</p>
								</div>
							</Link>
							<button
								className='btnDelete'
								onClick={() => handleRemoveFromSelected(movie.id)}
							>
								<img src='delete.png' alt='' className='deleteImg' />
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default SelectedMovies
