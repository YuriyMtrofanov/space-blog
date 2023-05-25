import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Articles from "../app/layouts/articles";
import Main from "./layouts/main";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import NavBar from "./components/ui/navBar";
import Users from "./layouts/users";
import Favorites from "./layouts/favorites";
import ArticleCreatePage from "./components/page/articleCreatePage/articleCreatePage";
// import NotFoundPage from "./components/page/notFoundPage/notFoundPage";
// import Loading from "./components/ui/loading";
// Управлять цветом фона можно таким образом https://bootstrap-4.ru/docs/5.1/utilities/background/#background-color

function App() {
    return (
        <div className="App bg-opacity-75">
            <NavBar/>
            <Switch>
                <Route path = "/users/:userId?/:edit?" component={Users}/>
                <Route path = "/articles/:articleId?/:edit?" component={Articles}/>
                <Route path = "/favorites/:articleId?" component={Favorites}/>
                <Route path="/create" component={ArticleCreatePage} />
                <Route path = "/login/:type?" component={Login}/>
                <Route path="/logout" component={LogOut} />
                {/* <Route path = "/admin" component={AdminPage}/> */}
                <Route path = "/" exact component={Main}/>
                {/* <Route path = "/404" component = {NotFoundPage}/> */}
                <Redirect to = "/"/>
                {/* <Redirect from = "../users/" to = "/loading"/> */}
            </Switch>
        </div>
    );
};

export default App;
