import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-secondary">
  			<div className="container-fluid">
				<a className="navbar-brand text-white" href="#">Start Bootstrap</a>
    				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>
				<ul className="nav justify-content-end">
  					<li className="nav-item">
    					<a className="nav-link active text-white" aria-current="page" href="#">Home</a>
  					</li>
  					<li className="nav-item">
    					<a className="nav-link text-white-50" href="#">About</a>
  					</li>
  					<li className="nav-item">
    					<a className="nav-link text-white-50" href="#">Services</a>
  					</li>
  					<li className="nav-item">
    					<a className="nav-link text-white-50" href="#">Contact</a>
  					</li>
				</ul>
  			</div>
		</nav>

	);
};