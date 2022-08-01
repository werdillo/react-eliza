import React  from 'react';
import { Outlet } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout() {
	return (
		<div id="container">
			<header id="header-content"> 
				<Navbar />
			</header> 
			<main id="main-content">
				<Outlet />
			</main>
			<footer className='footer'>
				<Footer />	
			</footer>
		</div>
	)
}