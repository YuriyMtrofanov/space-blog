import React from "react";
import ArticlesLoader from "../components/ui/HOC/articlesLoader";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import { Redirect } from "react-router-dom";
import {
    getArticById,
    getArticlesList
} from "../store/articles";
import MainPage from "../components/page/mainPage/mainPage";

const recomendedId = "6478cfde640d66774b2aa777";

const Main = () => {
    const articlesList = useSelector(getArticlesList());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const recomendedArticle = useSelector(getArticById(recomendedId));
    return (
        <ArticlesLoader>
            {isLoggedIn
                ? (<MainPage articles={articlesList} recomended={recomendedArticle}/>)
                : (<Redirect to={"/login"}/>)
            }
        </ArticlesLoader>
    );
};

export default Main;
