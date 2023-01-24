import React  from 'react';
import { Outlet } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Spinner from 'react-bootstrap/Spinner';
import { Suspense } from 'react';


export default function Layout() {
	return (
		<Suspense fallback={<Spinner animation="border" />}>
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
		</Suspense>
	)
}