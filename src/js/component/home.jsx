import React from "react";
import {Card} from "./Card.jsx"
import {Navbar} from "./Navbar.jsx"
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
		<div >
			<Navbar/>
			<Jumbotron/>
			<div className="row justify-content-center">
				<Card
				titulo={"Primera carta"}
				/>
				<Card
				titulo={"Segunda carta"}
				/>
				<Card
				titulo={"tercera carta"}
				/>
				<Card
				titulo={"Cuarta carta"}
				/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
