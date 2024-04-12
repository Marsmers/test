import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieList from './pages/Movie/Movie.jsx'
import FilmDetails from './components/FilmDetails.jsx'
import AddMovie from './components/AddFilms.jsx'
import { Provider } from 'react-redux'
import store from './store/index.jsx'
import EditMovie from './components/EditMovie.jsx'
import SelectedMovies from './components/SelectedMovies.jsx'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path='/' element={<MovieList />} />
					<Route path='/movies/:id' element={<FilmDetails />} />
					<Route path='/add-films' element={<AddMovie />} />
					<Route path='/movies/:id/edit' element={<EditMovie />} />
					<Route path='/selected-movies' element={<SelectedMovies />} />
				</Routes>
			</Router>
		</Provider>
	)
}

export default App
