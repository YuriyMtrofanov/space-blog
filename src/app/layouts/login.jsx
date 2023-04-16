import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");

    const changeFormType = () => {
        setFormType(prevState => prevState === "register" ? "login" : "register");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === "register"
                        ? (<>
                            <h3 className="mb-4">Давайте зарегистрируем Ваш аккаунт</h3>
                            <RegisterForm />
                            <p>Уже зарегистрированы?
                                <a role="button" onClick = {changeFormType}>
                                    <b>Войти</b>
                                </a>
                            </p>
                        </>)
                        : (<>
                            <h3 className="mb-4">Рады видеть вас снова!</h3>
                            <LoginForm />
                            <p>Нет аккаунта?
                                <a role="button" onClick = {changeFormType}>
                                    <b>Зарегистрироваться</b>
                                </a>
                            </p>
                        </>)}
                </div>
            </div>
        </div>
    );
};

export default Login;
