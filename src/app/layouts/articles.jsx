import React from "react";
import ArticlePage from "../components/page/articlePage";
import ArticlesList from "../components/page/articlesListPage/articlesListPage";
import ArticleEditPge from "../components/page/articleEditPage";
import ArticlesLoader from "../components/ui/HOC/articlesLoader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArticById } from "../store/articles";

// Обернуть в HOC Articlesloader
const Articles = () => {
    const { articleId, edit } = useParams();
    const article = useSelector(getArticById(articleId));
    // const isLoading = useSelector(getArticlesLoadStatus());
    return (
        <>
            <ArticlesLoader>
                {articleId
                    ? (edit
                        ? (<ArticleEditPge />)
                        : (<ArticlePage article={article}/>))
                    : (<ArticlesList />)
                }
            </ArticlesLoader>
        </>
    );
};

export default Articles;
