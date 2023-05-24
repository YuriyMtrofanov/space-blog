import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "./navProfile";

const NavBar = () => {
    // const isLoggedIn = useSelector(getIsLoggedIn());
    const isLoggedIn = true; // затычка
    return (
        <nav className="navbar navbar-light bg-dark bg-gradient">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/"><h5>Главная</h5></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/articles"><h5>Публикации</h5></Link>
                    </li>
                    {/* {isLoggedIn &&
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/users"><h5>Авторы</h5></Link>
                        </li>
                    } */}
                </ul>
                <div className="d-flex">
                    {isLoggedIn
                        ? (<NavProfile/>)
                        : (<Link
                            className="nav-link active text-light"
                            aria-current="page"
                            to="/login"
                        >
                            <h5>Login</h5>
                        </Link>)
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
