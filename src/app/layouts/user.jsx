import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const params = useParams();
    console.log("params: ", params);
    return (
        <h1>Страница всех пользователей</h1>
    );
};

export default User;
