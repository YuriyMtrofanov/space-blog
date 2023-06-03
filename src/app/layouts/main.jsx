import React from "react";
import ArticlesLoader from "../components/ui/HOC/articlesLoader";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import { Redirect } from "react-router-dom";
import {
    getArticlesList
} from "../store/articles";
import MainPage from "../components/page/mainPage/mainPage";

const Main = () => {
    const articlesList = useSelector(getArticlesList());
    const isLoggedIn = useSelector(getIsLoggedIn());
    if (!articlesList && !isLoggedIn) return "Loading...";
    return (
        <ArticlesLoader>
            {isLoggedIn
                ? (<MainPage articles={articlesList}/>)
                : (<Redirect to={"/login"}/>)
            }
        </ArticlesLoader>
    );
};

export default Main;
