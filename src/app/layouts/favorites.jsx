import React, { useEffect } from "react";
import ArticlePage from "../components/page/articlePage";
import FavoriteArticles from "../components/ui/favoriteArticles";
import { useParams } from "react-router-dom";
import ArticlesLoader from "../components/ui/HOC/articlesLoader";
import { useDispatch, useSelector } from "react-redux";
import { getArticById, getArticlesList, loadArticlesList } from "../store/articles";

const Favorites = () => {
    const { articleId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadArticlesList());
    }, []);
    const articles = useSelector(getArticlesList());
    const article = useSelector(getArticById(articleId));

    return (
        <>
            <ArticlesLoader>
                {articleId
                    ? (<ArticlePage article={article}/>)
                    : (<FavoriteArticles articles={articles}/>)
                }
            </ArticlesLoader>
        </>
    );
};

export default Favorites;
