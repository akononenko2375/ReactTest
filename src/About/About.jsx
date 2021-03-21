import React from 'react';
import scss from './About.module.scss';

const About = () => {
	let date = new Date();
	return <div className={scss.about}>
		<h1>About page</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, iusto dolor tenetur ullam vitae qui. Ratione, vero nemo. Labore, voluptatibus ipsa? Incidunt, nesciunt odit? Sed quam ullam facilis accusamus doloremque.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem quam neque! Voluptatum quaerat atque numquam tempora cum provident, error possimus neque accusantium reiciendis consequuntur inventore. Earum quasi consectetur dignissimos.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem quam neque!</p>
		<hr/>
		{date.getFullYear()}
	</div>
};

export default About