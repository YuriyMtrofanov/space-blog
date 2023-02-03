import React from "react";
import PropTypes from "prop-types";
import ArticlesCard from "./articleCard";

const ArticlesTable = ({ articles }) => {
    return (
        <div>
            {articles &&
                articles.map(article => (
                    <ArticlesCard key={article._id} {...{article}}/>
                ))}
        </div>
    );
};

ArticlesTable.propTypes ={
    articles: PropTypes.array.isRequired
};

export default ArticlesTable;