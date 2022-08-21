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

	const NavItem = (props) => {
		return(
			<li className="nav-item">
				<NavLink to={props.link} onClick={closeMenu} className="nav-link" style={({ isActive }) => ({ color: isActive ? 'white' : 'grey' })}>{props.title}</NavLink>
			</li>
		)
	};
	
	return (
		<nav className="navbar fixed-top">
			<NavLink to="/" className="nav-logo" onClick={closeMenu}>
				<img src={NavLogo} alt="" className=''></img>
			</NavLink>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				{/* <NavItem link='/Production' title='Produkcija' /> */}
				<NavItem link='/collection' title='Kolekcija' />
				<NavItem link='/Components' title='Mēbeļu komponenti' />
				<NavItem link='/Horeca' title='HoReCa' />
				<NavItem link='/Catalogs' title='Katalogi' />
				<NavItem link='/gallery' title='Galerija' />
				<NavItem link='/about-us' title='Par mums' />
				<NavItem link='/contacts' title='Kontakti' />
			</ul>
		</nav>
	);
};
export default Navbar;
