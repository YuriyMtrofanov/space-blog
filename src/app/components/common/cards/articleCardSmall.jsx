import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleCardSmall = ({ article }) => {
    return (
        <>
            {article &&
                <div
                    className="card"
                    style={{
                        alignItems: "center",
                        textAlign: "center",
                        padding: "1rem",
                        height: "25rem",
                        maxHeight: "30rem"
                    }}>
                    <img src={article.img} className="card-img-top" style={{ maxWight: "13rem" }} alt="image"/>
                    <div className="card-body">
                        <Link className= "text-dark" to={`/articles/${article._id}`}>
                            <h6 >{article.name}</h6>
                        </Link>
                        <p className="card-text">{article.content.slice(0, 200) + "..."}</p>
                    </div>
                    <span className="card-subtitle p-2 text-muted">
                        {new Date(article.date).toLocaleDateString()}{" "}
                        <i className="bi bi-hand-thumbs-up"></i>{" "}
                        <i className="bi bi-hand-thumbs-down"></i>
                    </span>
                </div>
            }
        </>
    );
};

ArticleCardSmall.propTypes = {
    article: PropTypes.object
};

export default ArticleCardSmall;
