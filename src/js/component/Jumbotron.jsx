import React from "react";

const Jumbotron = () => {
	return (
		<div ClassName="p-5 mb-4 rounded-3 justify-content-center">
            <div className="container-fluid py-5 bg-light w-50">
                <h1 className="display-1 fw-bold text-start">A Warm Welcome</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to Action! </button>
            </div>
        </div>
    );
};

export default Jumbotron;
