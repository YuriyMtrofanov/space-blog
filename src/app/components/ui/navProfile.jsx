import React, { useState } from "react";
import { useSelector } from "react-redux";
// import Loading from "./loading";
// import API from "../../../api";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";
// import axios from "axios";

function NavProfile() {
    // const currentUserId = "67rdca3eeb7f6fgeed471815"; // пока заглушка
    // const usersList = useSelector(loadUsersList());
    // console.log("loadUsersList: ", usersList);
    // const usersList = axios.get("http://localhost:8080/api/user/", {

    // })
    const currentUser = useSelector(getCurrentUserData());
    // const [currentUser, setCurrentUser] = useState();
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (!currentUser) return "Loading...";
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2 active text-light">
                    <h5>
                        {currentUser.firstName}{" "}
                        {currentUser.lastName}
                    </h5>
                </div>
                <img
                    src={currentUser.img}
                    alt=""
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={"w-100 text-light dropdown-menu" + (isOpen ? " show" : "")}>
                <Link
                    to={`/users/${currentUser._id}`}
                    className="dropdown-item"
                >
                    Profile
                </Link>
                <Link to="/favorites/" className="dropdown-item">
                    Избранное
                </Link>
                <Link to="/logout" className="dropdown-item">
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
