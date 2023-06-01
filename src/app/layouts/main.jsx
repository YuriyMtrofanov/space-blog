import React from "react";
import ArticleCard from "../components/common/cards/articleCard";
import ArticlesLoader from "../components/ui/HOC/articlesLoader";
import LatestArticles from "../components/ui/latestArticles";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import { Redirect } from "react-router-dom";
import {
    getArticById,
    getArticlesList
} from "../store/articles";

const recomendedId = "6478cfde640d66774b2aa777";

const Main = () => {
    const articles = useSelector(getArticlesList());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const recomendedArticle = useSelector(getArticById(recomendedId));
    return (
        <ArticlesLoader>
            {isLoggedIn
                ? (<div className="container mt-2 pb-5 shadow">
                    <h1>Читай, пиши сам, развивайся</h1>
                    <h5 className="text-secondary">Предлагаем вашему вниманию платформу для поиска информации о космосе</h5>
                    <div className="row">
                        <div className="p-3">
                            <h3>Статья недели</h3>
                            <ArticleCard article={recomendedArticle}/>
                        </div>
                        <LatestArticles articles={articles}/>
                        <div className="p-3">
                            <h3>Список топ-авторов</h3>
                        </div>
                    </div>
                </div>)
                : (<Redirect to={"/login"}/>)
            }
        </ArticlesLoader>
    );
};

export default Main;
