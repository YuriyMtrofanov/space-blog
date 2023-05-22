import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-dark bg-gradient">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active text-light" aria-current="page" to="/"><h3>Главная</h3></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-light" aria-current="page" to="/login"><h3>Логин</h3></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-light" aria-current="page" to="/articles"><h3>Статьи</h3></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-light" aria-current="page" to="/users"><h3>Пользователи</h3></Link>
                </li>
            </ul>
        </nav>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <div className="collapse navbar-collapse" id="navbarScroll">
        //             <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to="/">Main</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to="/articles">Articles</Link>
        //                 </li>
        //                 {/* <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Link
        //                     </a>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
        //                         <li><a className="dropdown-item" href="#">Action</a></li>
        //                         <li><a className="dropdown-item" href="#">Another action</a></li>
        //                         <li><hr className="dropdown-divider"/></li>
        //                         <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Link</a>
        //                 </li> */}
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default NavBar;
