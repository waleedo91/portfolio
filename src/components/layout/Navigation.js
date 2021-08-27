import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/about" className="navbar-brand">
            Waleed Saleh
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/certify">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

  // 	<nav>
  // 		<h1>Waleed Saleh</h1>
  // 		<ul>
  // 			<li>
  // 				<Link to='/'>Home</Link>
  // 			</li>
  // 			<li>
  // 				<Link to='/about'>About Me</Link>
  // 			</li>
  // 			<li>
  // 				<Link to='/certify'>Certifications</Link>
  // 			</li>
  // 			<li>
  // 				<Link to='/contact'>Contact Me</Link>
  // 			</li>
  // 		</ul>
  // 	</nav>
  // );
};
