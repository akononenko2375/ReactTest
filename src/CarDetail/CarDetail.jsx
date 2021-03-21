import React from 'react';
import scss from './CarDetail.module.scss';

const CarDetail = ({ match, history }) => {

	console.log({ match });

	const handler = () => {
		history.push('/cars')
	}

	return <div className={scss.CarDetail}>
		<h1>{match.params.name.toUpperCase()}</h1>

		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim perspiciatis laborum earum sit dolore aliquid nesciunt ea alias voluptate? Maxime quae esse minus explicabo laborum ratione ab dicta neque minima.</p>

		<button onClick={handler}>All Cars</button>

	</div>
}

export default CarDetail;