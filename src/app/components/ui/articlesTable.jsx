import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../common/cards/articleCard";
import Loading from "./loading";
import ArticlesLoader from "./HOC/articlesLoader";

const ArticlesTable = ({ articles }) => {
    // console.log(articles);
    return (
        <ArticlesLoader>
            {articles
                ? (articles.map(article => (
                    <ArticleCard key={article._id} {...{ article }}/>
                )))
                : (<Loading />)
            }
        </ArticlesLoader>
    );
};

ArticlesTable.propTypes = {
    articles: PropTypes.array
};

export default ArticlesTable;
