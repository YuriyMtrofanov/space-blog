import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleCardSmall = ({ article }) => {
    return (
        <>
            {article &&
                <div
                    className="col"
                    style={{
                        // alignItems: "center",
                        // textAlign: "center",
                        // padding: "1rem",
                        // height: "25rem",
                        // maxHeight: "30rem"
                    }}>
                    <div className="article-card-small">
                        <div className="article-card-small-image">
                            <img
                                src={article.img}
                                className="card-img-top w-100"
                                style={{ maxWight: "15rem" }}
                                alt="image"/>
                        </div>
                        <div className="article-card-small-body-content">
                            <h6 className="card-title h5"><b>{article.name}</b></h6>
                            <p className="card-text">{article.content.slice(0, 100) + "..."}</p>
                            <Link to={`/articles/${article._id}`}>
                                <p className="card-title text-center text-secondary mb-4">Читать далее</p>
                            </Link>
                        </div>
                        <span className="article-card-small-subtitle">
                            {new Date(article.date).toLocaleDateString()}{" "}
                            {/* <b>{ firstName }{" "}{ lastName }</b>{" "} */}
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
