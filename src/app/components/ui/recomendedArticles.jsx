// Список из ограниченного количества статей с наилучшим рейтингом
import React, { useEffect, useState } from "react";
// { useEffect, useState }
import API from "../../../api";
import ArticleCardSmall from "./articleCardSmall";

const RecomendedArticles = () => {
    const [topArticles, setTopArticles] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        API.articles.fetchAll().then(data => {
            setTopArticles(data);
        }).finally(setIsLoading(false));
    }, []);
    console.log(topArticles, isLoading);
    return (
        <div className="container">
            <div className="row justify-content-start">
                <div className="col-3">
                    <ArticleCardSmall/>
                </div>
                <div className="col-3">
                    <ArticleCardSmall/>
                </div>
                <div className="col-3">
                    <ArticleCardSmall/>
                </div>
                <div className="col-3">
                    <ArticleCardSmall/>
                </div>
            </div>
        </div>
    );
};

export default RecomendedArticles;
