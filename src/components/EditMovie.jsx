import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editMovie } from '../store/moviesSlice'
import Header from './Header'
import "../pages/Movie/style.css"

const EditMovie = () => {
	const { id } = useParams()
	const movieId = parseInt(id)
	const dispatch = useDispatch()
	const movies = useSelector(state => state.movies.movies)
	const [movie, setMovie] = useState(null)

	useEffect(() => {
		const selectedMovie = movies.find(movie => movie.id === movieId)
		setMovie(selectedMovie)
	}, [movies, movieId])

	const handleInputChange = e => {
		const { name, value } = e.target
		setMovie(prevMovie => ({
			...prevMovie,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(editMovie(movie))
	}

	if (!movie) return <div>Loading...</div>

	return (
    <>
    <Header/>
		<div>
			<h2>Edit Movie</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type='text'
						name='title'
						value={movie.title}
						onChange={handleInputChange}
            />
				</label>
				<label>
					Rating:
					<input
						type='text'
						name='rating'
						value={movie.rating}
						onChange={handleInputChange}
            />
				</label>
				<label>
					Release Date:
					<input
						type='text'
						name='release_date'
						value={movie.release_date}
						onChange={handleInputChange}
            />
				</label>
				<button type='submit'>Save</button>
			</form>
		</div>
            </>
	)
}

export default EditMovie
