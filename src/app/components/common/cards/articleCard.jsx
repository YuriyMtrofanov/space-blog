import React, { useEffect, useState } from "react";
import api from "../../../../api";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const [authorName, setAuthorName] = useState("");
    useEffect(() => {
        api.users.getById(article.author)
            .then((data) => setAuthorName(`${data.firstName} ${data.lastName}`));
    }, []);
    return (
        <>
            <div className="card card-sm text-dark bg-opacity-75 mb-2">
                {/* <div className="card-header p-2">
                    <Link to={`/articles/${article._id}`}>
                        <h5>{article.name}</h5>
                    </Link>
                </div> */}
                <div className="card-body p-2">
                    {/* <h5 className="card-title">{article.header}</h5> */}
                    <div className="card-title text-dark p-1">
                        <Link to={`/articles/${article._id}`}>
                            <h4>{article.name}</h4>
                        </Link>
                    </div>
                    <ul>
                        <li>{article.textContent}</li>
                    </ul>
                    <span className="card-text">
                        {authorName}
                    </span>
                    <i className="bi bi-hand-thumbs-up"></i>
                    {/* <i className="bi bi-hand-thumbs-up"></i> */}
                </div>
            </div>
        </>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleCard;
