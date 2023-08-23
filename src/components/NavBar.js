import React from "react";
import '../style/NavBar.css'
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import AuthenticationService from "../service/AuthenticationService";

const NavBar=()=>{

    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    <span>
                        <FontAwesomeIcon icon="home"></FontAwesomeIcon>
                    </span>

                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                    <span>
                        <FontAwesomeIcon icon="camera-retro"></FontAwesomeIcon>
                    </span>

                </li>

                
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                    <span>
                        <FontAwesomeIcon icon="sign-in"></FontAwesomeIcon>
                    </span>

                </li>

                
                <li className="nav-item">
                    <Link to="/product" className="nav-link">Products</Link>

                    <span>
                        <FontAwesomeIcon icon="bomb"></FontAwesomeIcon>
                    </span>

                </li>

                <li className="nav-item">
                    <Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Log Out</Link>
                    <span>
                        <FontAwesomeIcon icon="sign-out"></FontAwesomeIcon>
                    </span>

                </li>

                 
                <li className="nav-item">
                    <Link to="/dealers" className="nav-link">Dealers</Link>
                    <span>
                        <FontAwesomeIcon icon="people-group"></FontAwesomeIcon>
                    </span>

                </li>

            </ul>
        </nav>
    );
}

export default NavBar;