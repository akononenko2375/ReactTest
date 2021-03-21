import React from 'react';
import scss from './Car.module.scss';

const Car = ({ name, year, history }) => {
	function test(){
		history.push('/cars/' + name.toLowerCase())
	}
	return <div className={scss.car} onClick={test}>
		<h3>{name}</h3>
		<p>{year}</p>
	</div>
}

export default Car;