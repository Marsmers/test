import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from './Header'

const FilmDetails = () => {
	const { id } = useParams()
	const movieId = parseInt(id)
	const movies = useSelector(state => state.movies.movies)
	const movie = movies.find(movie => movie.id === movieId)

	if (!movie) {
		return <div className='movie-details'>Movie not found</div>
	}

	const { title, description, actors, director, genre, rating } = movie

	return (
		<>
		<Header/>
		<div className='movieDetails'>
			<img src={movie.image} alt={movie.title} />
			<h2>{title}</h2>
			{description && (
				<p>
					<strong>Опис:</strong> {description}
				</p>
			)}
			{actors && (
				<p>
					<strong>Актори:</strong> {actors.join(', ')}
				</p>
			)}
			{director && (
				<p>
					<strong>Директор:</strong> {director}
				</p>
			)}
			{genre && (
				<p>
					<strong>Жанр:</strong> {genre.join(', ')}
				</p>
			)}
			{rating && (
				<p>
					<strong>Рейтинг:</strong> {rating}
				</p>
			)}
		</div>
			</>
	)
}

export default FilmDetails
