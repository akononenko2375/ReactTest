import React from 'react'
import scss from './Menu.module.scss';
import { NavLink } from 'react-router-dom';


const Menu = () => {
	return <nav className={scss.nav}>
		<ul>
			<li>
				<NavLink to="/" exact activeStyle={{color: 'red'}}>Home</NavLink>
			</li>
			<li>
				<NavLink to="/about" activeStyle={{color: 'red'}}>About</NavLink>
			</li>
			<li>
				<NavLink to="/cars" activeStyle={{color: 'red'}}>Cars</NavLink>
			</li>
			<li className={scss.error}>
				<NavLink to="/404">Error</NavLink>
			</li>
		</ul>
	</nav>
};

export default Menu;