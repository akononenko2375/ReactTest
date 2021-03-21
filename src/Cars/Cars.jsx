import React, { useState } from 'react'
import Car from './Car/Car';
import scss from './Cars.module.scss';
import uuid from 'react-uuid';
// import { useHistory } from 'react-router-dom';


const dataCar = [
	{ id: uuid(), name: 'Ford', year: 2010 },
	{ id: uuid(), name: 'Audi', year: 2015 },
	{ id: uuid(), name: 'Mazda', year: 2016 }
]

const Cars = ({ history }) => {
	const [cars, setCars] = useState(dataCar);

	const res = cars.map(car => {
		return <Car
			key={car.id}
			name={car.name}
			year={car.year}
			history={history}
		/>
	})

	const goHome = () => {
		history.push('/');
	};

	return <div className={scss.cars}>
		<button onClick={goHome}>Go Home</button>
		<h3>All Cars</h3>
		{res}
	</div>
};

export default Cars;