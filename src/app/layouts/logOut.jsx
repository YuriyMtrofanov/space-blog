import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { logout } from "../store/users";
// import { useAuth } from "../hooks/useAuth";
const LogOut = () => {
    // const { logOut } = useAuth();
    // const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(logout());
    }, []);
    return <h1>Log out</h1>;
};

export default LogOut;
