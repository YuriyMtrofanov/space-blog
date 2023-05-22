import React from "react";
import ArticlesList from "../components/page/articlesListPage/articlesListPage";
import { useParams } from "react-router-dom";
import ArticlePage from "../components/page/articlePage/articlePage";
// аналог Users в курсовом проекте

const Articles = () => {
    const { articleId, edit } = useParams();
    console.log(articleId, edit);
    return (
        <>
            {articleId
                ? (<ArticlePage id={articleId}/>)
                : (<ArticlesList />)
            }
        </>
    );
};

export default Articles;
