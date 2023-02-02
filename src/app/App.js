import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import "./App.css";
import Articles from "../app/layouts/articles";
import Main from "./layouts/main";
import Login from "./layouts/login";
import NavBar from "./components/navBar";
import PageNotFound from "./components/pageNotFound";
import Loading from "./components/loading";
// Кправлять цветом фона можно таким образом https://bootstrap-4.ru/docs/5.1/utilities/background/#background-color

function App() {
    return (
        <div className="App bg-secondary bg-opacity-75">
            <NavBar/>
            <Switch>
                <Route path = "/" exact component={Main}/>
                <Route path = "/login" component={Login}/>
                <Route path = "/articles" component={Articles}/>
                <Route path= "/loading" component={Loading}/>
                {/* <Route path = "/users/:userId?" component={UsersList}/> */}
                <Route path = "/404" component = {PageNotFound}/>
                <Redirect to = "/404"/>
                {/* <Redirect from = "../users/" to = "/loading"/> */}
            </Switch>
        </div>
    );
};

export default App;
