import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {
    const { userId, edit } = useParams();
    console.log(userId, edit);
    // Нужно реализовать проверку совпадает ли id выбранного пользователя с
    // id авторизованного и в случае несовпадения вместо направления на /edit
    // перебросить его на страницу авторизованного пользователя
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <div className="card card-sm text-dark bg-light bg-opacity-75 mb-2 p-4">
                        <h1>Страница всех авторов</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
