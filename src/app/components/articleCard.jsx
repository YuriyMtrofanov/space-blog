import React from "react";
import PropTypes from "prop-types";

const ArticleCard = ({ article }) => {
    return (
        <div className="card card-sm text-dark bg-light bg-opacity-75 m-3">
            <div className="card-header p-2">
                <h3>{article.name}</h3>
            </div>
            <div className="card-body p-2">
                <h5 className="card-title">{article.header}</h5>
                <p className="card-text">{`Атор: ${article.author}, Рейтинг статьи: ${article.rate}`}</p>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleCard;
