import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import '../assets/scss/layout/_navbar.scss';
import NavLogo from "../assets/images/Eliza-logo-nav.svg";
import 'bootstrap/dist/css/bootstrap.css'
import DropdownLanguage from './DropdownLanguage';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => setOpen(!open);
	const closeMenu = () => setOpen(false);

	const NavItem = (props) => {
		return(
			<li className="-item">
				<NavLink to={props.link} onClick={closeMenu} className={({ isActive }) => (isActive ? 'current' : 'inactive')} >{props.title}</NavLink>
			</li>
		)
	};

	const { t } = useTranslation();
	
	return (
		<nav className="navbar fixed-top">
			<NavLink to="/" className="-logo" onClick={closeMenu}>
				<img src={NavLogo} alt="" className=''></img>
			</NavLink>
			<div onClick={handleClick} className="-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? '-links active' : '-links'}>
				<NavItem link='/collection' title={t("Navigation.collection")} />
				<NavItem link='/components' title={t("Navigation.components")} />
				<NavItem link='/horeca' title={t("Navigation.horeca")} />
				<NavItem link='/catalogue' title={t("Navigation.catalogs")} />
				<NavItem link='/gallery' title={t("Navigation.gallery")} />
				<NavItem link='/about-us' title={t("Navigation.about-us")} />
				<NavItem link='/contacts' title={t("Navigation.contacts")} />
				<DropdownLanguage />
			</ul>
		</nav>
	);
};
export default Navbar;
