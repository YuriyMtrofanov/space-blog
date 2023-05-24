import React, { useEffect, useState } from "react";
// import Loading from "./loading";
import API from "../../../api";
import { Link } from "react-router-dom";

function NavProfile() {
    const currentUserId = "67rdca3eeb7f6fgeed471815"; // пока заглушка
    const [currentUser, setCurrentUser] = useState();
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    useEffect(() => {
        API.users.getById(currentUserId)
            .then((data) => setCurrentUser(data));
    }, []);
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
                <Link to="/logout" className="dropdown-item">
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
