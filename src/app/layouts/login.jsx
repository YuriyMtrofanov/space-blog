import React from "react";

const Login = () => {
    return (
        <form className="d-flex flex-column g-3 m-3">
            <div className="d-flex flex-column -md-6">
                <label htmlFor="inputEmail4" className="form-label d-flex flex-column">Эл. адрес</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="d-flex flex-column -m-6">
                <label htmlFor="inputPassword4" className="form-label">Пароль</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="d-flex flex-column-6 m-3">
                <button type="submit" className="btn btn-secondary">Войти в систему</button>
            </div>
        </form>
        /* Остальное можно использовать при регистрации пользователя
        <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Адрес</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Проспект Ленина"/>
        </div>
        <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Адрес 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Квартира"/>
        </div>
        <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">Город</label>
            <input type="text" className="form-control" id="inputCity" placeholder="Брянск"/>
        </div>
        <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">Область</label>
            <select id="inputState" className="form-select">
                <option value>Выберите...</option>
                <option>...</option>
            </select>
        </div>
        <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Индекс</label>
            <input type="text" className="form-control" id="inputZip"/>
        </div>
        <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck">
                    Проверить меня
                </label>
            </div>
        </div> */
    );
};

export default Login;
