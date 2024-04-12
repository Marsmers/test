import { Link } from 'react-router-dom'
import './../pages/Movie/style.css'

const Header = ({ onSearchChange }) => {
	return (
		<div className='header'>
			<Link to='/'>
				Головна
			</Link>
			<Link to='/selected-movies'>Вибрані фільми</Link>
			<Link to='/add-films'>
				Додати новий фільм
			</Link>
			<input
				className='findFilm'
				type='text'
				placeholder='Вкажіть назву фільму'
				onChange={onSearchChange}
			/>
		</div>
	)
}

export default Header
