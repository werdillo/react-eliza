import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import '../App.css';
import NavLogo from "../assets/images/Eliza-logo-nav.svg";
import 'bootstrap/dist/css/bootstrap.css'
import DropdownLanguage from './DropdownLanguage';
import { useTranslation } from 'react-i18next';

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
				<NavLink to={props.link} onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : 'inactive')} >{props.title}</NavLink>
			</li>
		)
	};

	const { t } = useTranslation();
	
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
				<NavItem link='/collection' title={t("Navigation.collection")} />
				<NavItem link='/Components' title={t("Navigation.components")} />
				<NavItem link='/Horeca' title={t("Navigation.horeca")} />
				<NavItem link='/Catalogs' title={t("Navigation.catalogs")} />
				<NavItem link='/gallery' title={t("Navigation.gallery")} />
				<NavItem link='/about-us' title={t("Navigation.about-us")} />
				<NavItem link='/contacts' title={t("Navigation.contacts")} />
				<DropdownLanguage />
			</ul>
		</nav>
	);
};
export default Navbar;
