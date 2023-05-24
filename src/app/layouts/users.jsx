import React from "react";
import { useParams } from "react-router-dom";
import UserEditPage from "../components/page/userEditPage/userEditPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage/usersListPage";

const Users = () => {
    const { userId, edit } = useParams();
    // Нужно реализовать проверку совпадает ли id выбранного пользователя с
    // id авторизованного и в случае несовпадения вместо направления на /edit
    // перебросить его на страницу авторизованного пользователя
    return (
        <>
            {userId
                ? (edit
                    ? (<UserEditPage id={userId}/>)
                    : (<UserPage id={userId}/>))
                : (<UsersListPage />)
            }
        </>
    );
};

export default Users;
