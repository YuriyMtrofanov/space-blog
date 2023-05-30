import React from "react";
import ArticlePage from "../components/page/articlePage";
import ArticlesList from "../components/page/articlesListPage/articlesListPage";
import ArticleEditPge from "../components/page/articleEditPage";
// import ArticlesLoader from "../components/ui/HOC/articlesLoader";
import { useParams } from "react-router-dom";

// Обернуть в HOC Articlesloader
const Articles = () => {
    const { articleId, edit } = useParams();
    return (
        <>
            {/* <ArticlesLoader> */}
            {articleId
                ? (edit
                    ? (<ArticleEditPge />)
                    : (<ArticlePage id={articleId}/>))
                : (<ArticlesList />)
            }
            {/* </ArticlesLoader> */}
        </>
    );
};

export default Articles;
