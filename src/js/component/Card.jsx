import React from "react";

export const Card = () => {
	return (
		<div className="card m-5" style={{width: "18rem"}}>
          <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png" alt="Card image cap" /> 
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
	);
};