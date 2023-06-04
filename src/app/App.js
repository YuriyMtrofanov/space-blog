import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Articles from "../app/layouts/articles";
import Main from "./layouts/main";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import NavBar from "./components/ui/navBar";
import Users from "./layouts/users";
import Favorites from "./layouts/favorites";
import ArticleCreatePage from "./components/page/articleCreatePage/articleCreatePage";
import AppLoader from "./components/ui/HOC/appLoader";
import Admin from "./layouts/admin";

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar/>
                <Switch>
                    <Route path = "/" exact component={Main}/>
                    <Route path = "/users/:userId?/:edit?" component={Users}/>
                    <Route path = "/articles/:articleId?/:edit?" component={Articles}/>
                    <Route path = "/favorites/:articleId?" component={Favorites}/>
                    <Route path = "/create" component={ArticleCreatePage} />
                    <Route path = "/admin" component={Admin}/>
                    <Route path = "/login/:type?" component={Login}/>
                    <Route path = "/logout" component={LogOut} />
                    <Redirect to = "/"/>
                    {/* <Redirect from = "../users/" to = "/loading"/> */}
                </Switch>
            </AppLoader>
            <ToastContainer />
        </div>
    );
};

export default App;
