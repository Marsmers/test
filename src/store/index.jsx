// store/index.js
import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './moviesSlice'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
	reducer: {
		movies: moviesReducer,
	},
}) 
