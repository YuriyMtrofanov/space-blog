import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"; // bootstrap -v 5.1.0
// import "./App.css";
import Articles from "../app/layouts/articles";
import Main from "./layouts/main";
import Login from "./layouts/login";
import NavBar from "./components/ui/navBar";
import NotFoundPage from "./components/page/notFoundPage/notFoundPage";
// import Loading from "./components/ui/loading";
// Управлять цветом фона можно таким образом https://bootstrap-4.ru/docs/5.1/utilities/background/#background-color

function App() {
    return (
        <div className="App bg-opacity-75">
            <NavBar/>
            <Switch>
                {/* <Route path = "/users/:userId?" component={UsersList}/> */}
                <Route path = "/login/:type?" component={Login}/>
                <Route path = "/articles/:articleId?/:edit?" component={Articles}/>
                {/* <Route path = "/loading" component={Loading}/> */}
                <Route path = "/" exact component={Main}/>
                <Route path = "/404" component = {NotFoundPage}/>
                <Redirect to = "/404"/>
                {/* <Redirect from = "../users/" to = "/loading"/> */}
            </Switch>
        </div>
    );
};

export default App;

// 1.
// 2.
// 3.1 При рендере компонента "Articles", рендерится список статей.
// 3.2 При выборе отдельной статьи отлавливается её id и мы можем перейти на страницу
// самой статьи, указав этот id в ссылке.
// 3.3 При выборе параметра type = edit переходим на страницу редактирования статьи,
// но доступ для этого открыт только для пользователя со статусом: admin и author.
