import React from "react";
import ArticlePage from "../components/page/articlePage";
import ArticlesList from "../components/page/articlesListPage/articlesListPage";
import ArticleEditPge from "../components/page/articleEditPage";
import { useParams } from "react-router-dom";

// Обернуть в HOC Articlesloader
const Articles = () => {
    const { articleId, edit } = useParams();
    return (
        <>
            {articleId
                ? (edit
                    ? (<ArticleEditPge />)
                    : (<ArticlePage id={articleId}/>))
                : (<ArticlesList />)
            }
        </>
    );
};

export default Articles;
