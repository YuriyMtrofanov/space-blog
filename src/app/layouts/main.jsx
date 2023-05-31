import React from "react";
import ArticleCard from "../components/common/cards/articleCard";
import ArticlesLoader from "../components/ui/HOC/articlesLoader";
import LatestArticles from "../components/ui/latestArticles";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import { Redirect } from "react-router-dom";
import { getArticById, getArticlesList } from "../store/articles";

const recomendedId = "647629d7dd8bbc157ca7ac60";

const Main = () => {
    const recomendedArticle = useSelector(getArticById(recomendedId));
    const articles = useSelector(getArticlesList());
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <>
            {isLoggedIn
                ? (<div className="container mt-2 pb-5 shadow">
                    <h1>Читай, пиши сам, развивайся</h1>
                    <h5 className="text-secondary">Предлагаем вашему вниманию платформу для поиска информации о космосе</h5>
                    <div className="row">
                        <ArticlesLoader>
                            <div className="p-3">
                                <h3>Статья недели</h3>
                                <ArticleCard article={recomendedArticle}/>
                            </div>
                            <LatestArticles articles={articles}/>
                        </ArticlesLoader>
                        <div className="p-3">
                            <h3>Список топ-авторов</h3>
                        </div>
                    </div>
                </div>)
                : (<Redirect to={"/login"}/>)
            }
        </>
    );
};

export default Main;
