import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../common/cards/articleCard";
import Loading from "./loading";

const ArticlesTable = ({ articles }) => {
    return (
        <div>
            {articles
                ? (articles.map(article => (
                    <ArticleCard key={article._id} {...{ article }}/>
                )))
                : (<Loading />)
            }
        </div>
    );
};

ArticlesTable.propTypes = {
    articles: PropTypes.array
};

export default ArticlesTable;
