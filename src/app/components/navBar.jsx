import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        // <ul className="nav">
        //     <li className="nav-item">
        //         <Link className="nav-link active" aria-current="page" to="/">Main</Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link className="nav-link active" aria-current="page" to="/articles">Articles</Link>
        //     </li>
        // </ul>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Space Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Main</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/articles">Articles</Link>
                        </li>
                        {/* Вот почему-то не работает зараза такая */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
