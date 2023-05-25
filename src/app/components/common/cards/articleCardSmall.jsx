import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const ArticleCardSmall = ({ article }) => {
    return (
        <>
            {article &&
                <div className="col-md-3 col-sm-6 p-3">
                    <div className="card" style={{ height: "25rem", maxHeight: "30rem" }}>
                        <img src={article.img} className="img-fluid" style={{ maxHeight: "12rem" }} alt="image"/>
                        <div className="card-body">
                            <Link className= "text-dark" to={`/articles/${article._id}`}>
                                <h6 >{article.name}</h6>
                            </Link>
                            <p className="card-text">{article.prevue}</p>
                        </div>
                        <span className="card-subtitle p-2 text-muted">
                            {new Date(article.date).toLocaleDateString()}{" "}
                            <i className="bi bi-hand-thumbs-up"></i>{" "}
                            <i className="bi bi-hand-thumbs-down"></i>
                        </span>
                    </div>
                </div>
            }
        </>
    );
};

ArticleCardSmall.propTypes = {
    article: PropTypes.object
};

export default ArticleCardSmall;
