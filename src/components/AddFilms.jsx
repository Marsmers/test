import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie, addMovieDefaultData } from '../store/moviesSlice'
import Header from './Header'

const AddMovieForm = () => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState(addMovieDefaultData)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (isAllFieldsNonEmpty()) {
			dispatch(addMovie(formData))
			setFormData(addMovieDefaultData) // Очистити форму після додавання фільму
		} else {
			alert('Заповніть всі поля')
		}
	}

	const isAllFieldsNonEmpty = () => {
		for (const key in formData) {
			if (!formData[key]) {
				return false
			}
		}
		return true
	}

	return (
		<>
			<Header />
			<div className='newFilmsForms'>
				<form onSubmit={handleSubmit}>
					<label>
						Назва:
						<input
							type='text'
							name='title'
							value={formData.title}
							onChange={handleChange}
						/>
					</label>
					<label>
						Опис:
						<textarea
							name='description'
							value={formData.description}
							onChange={handleChange}
						/>
					</label>
					<label>
						Актори (розділені комами):
						<input
							type='text'
							name='actors'
							value={formData.actors}
							onChange={handleChange}
						/>
					</label>
					<label>
						Режисер:
						<input
							type='text'
							name='director'
							value={formData.director}
							onChange={handleChange}
						/>
					</label>
					<label>
						Жанр (розділені комами):
						<input
							type='text'
							name='genre'
							value={formData.genre}
							onChange={handleChange}
						/>
					</label>
					<label>
						Рейтинг:
						<input
							type='number'
							name='rating'
							value={formData.rating}
							onChange={handleChange}
						/>
					</label>
					<label>
						Посилання на зображення:
						<input
							type='text'
							name='image'
							value={formData.image}
							onChange={handleChange}
						/>
					</label>
					<button type='submit'>Додати фільм</button>
				</form>
			</div>
		</>
	)
}

export default AddMovieForm
