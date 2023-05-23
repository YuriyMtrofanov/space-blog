import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleCard = ({ article, author }) => {
    return (
        <>
            <div className="card card-sm text-dark bg-opacity-75 mb-2">
                <div className="card-header p-2">
                    <Link to={`/articles/${article._id}`}>
                        <h3>{article.name}</h3>
                    </Link>
                </div>
                <div className="card-body p-2">
                    <h5 className="card-title">{article.header}</h5>
                    <ul>
                        <li>{article.textContent}</li>
                    </ul>
                    <span className="card-text">
                        {`Атор: ${author},
                        Рейтинг статьи: ${article.rate}
                        Like: 
                        `}</span>
                    <i className="bi bi-hand-thumbs-up"></i>
                    {/* <i className="bi bi-hand-thumbs-up"></i> */}
                </div>
            </div>
        </>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired
};

export default ArticleCard;
