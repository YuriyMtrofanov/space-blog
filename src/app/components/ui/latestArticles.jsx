// Список из ограниченного количества статей с наилучшим рейтингом
import React, { useEffect, useState } from "react";
import API from "../../../api";
import ArticleCardSmall from "../common/cards/articleCardSmall";
import _ from "lodash";

const LatestArticles = () => {
    const [articles, setArticles] = useState([]);
    const sortBy = { iter: "date", order: "desc" };
    useEffect(() => {
        API.articles.fetchAll().then(data => {
            setArticles(data);
        });
    }, []);
    // 4 статьи поместятся на экране, поэтому отрезаем все кроме первых 4х индексов в массиве
    const sortedArticles = _.orderBy(articles, [sortBy.iter], [sortBy.order]).slice(0, 4);

    return (
        <>
            <h3>Список последних публикаций</h3>
            {articles.length > 0 &&
                sortedArticles.map(item =>
                    (<ArticleCardSmall key={item._id} article={item} />)
                )}
        </>
    );
};

export default LatestArticles;
