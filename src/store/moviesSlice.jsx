// store/moviesSlice.jsx

import { createSlice } from '@reduxjs/toolkit'
import { movies } from './../initialMovieData.json'

export const addMovieDefaultData = {
	title: '',
	description: '',
	actors: '',
	director: '',
	genre: '',
	rating: 0,
	image: '',
}

const initialState = {
	movies: movies,
	addMovieForm: addMovieDefaultData,
	selectedMovies: [],
}

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovie(state, action) {
			state.movies.push(action.payload)
		},
		setMovies(state, action) {
			state.movies = action.payload
		},
		deleteMovie(state, action) {
			state.movies = state.movies.filter(movie => movie.id !== action.payload)
		},
		editMovie(state, action) {
			const index = state.movies.findIndex(
				movie => movie.id === action.payload.id
			)
			if (index !== -1) {
				state.movies[index] = action.payload
			}
		},
		addToSelectedMovies(state, action) {
			state.selectedMovies.push(action.payload.id)
		},
		removeSelectedMovie(state, action) {
			state.selectedMovies = state.selectedMovies.filter(
				id => id !== action.payload
			)
		},
	},
})

export const {
	setMovies,
	deleteMovie,
	editMovie,
	addMovie,
	addToSelectedMovies,
	removeSelectedMovie,
} = moviesSlice.actions
export default moviesSlice.reducer
