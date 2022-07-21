import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import '../App.css';
import NavLogo from "../assets/images/Eliza-logo-nav.svg";
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	
	// const setActive = ({ isActive }) => isActive ? 'active-link' : '';

	return (
		<nav className="navbar fixed-top">
			<NavLink to="/" className="nav-logo" onClick={closeMenu}>
				<img src={NavLogo} alt="" className=''></img>
			</NavLink>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<NavLink to='/Production' onClick={closeMenu} className="nav-link" style={({ isActive }) => ({ color: isActive ? 'white' : 'grey' })}>Produkcija</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to='/Components' onClick={closeMenu} className="nav-link" style={({ isActive }) => ({ color: isActive ? 'white' : 'grey' })}>Mēbeļu komponenti</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to='/Horeca' onClick={closeMenu} className="nav-link" style={({ isActive }) => ({ color: isActive ? 'white' : 'grey' })}>HoReCa</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to='/Catalogs' onClick={closeMenu} className="nav-link" style={({ isActive }) => ({ color: isActive ? 'white' : 'grey' })}>Katalogi</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to='/gallery' onClick={closeMenu} className="nav-link" style={({ isActive }) => ({ color: isActive ? 'white' : 'grey' })}>Galerija</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to='/contacts' onClick={closeMenu} className="nav-link" style={({ isActive }) => ({ color: isActive ? 'white' : 'grey' })}>Kontakti</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
