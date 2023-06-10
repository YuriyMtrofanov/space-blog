import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    getUserById
} from "../../../store/users";

const ArticleCardMd = ({ article }) => {
    const user = useSelector(getUserById(article.author));
    const { firstName, lastName } = user;
    return (
        <>
            {article &&
                <div
                    className="col-xl-4 col-lg-6 col-md-12"
                >
                    <div
                        className="card article-card-sm mt-4"
                        style={{
                            color: "grey",
                            textAlign: "center",
                            backgroundColor: "rgb(10, 24, 44)",
                            height: "30rem",
                            border: "none",
                            maxHeight: "40rem"
                        }}
                    >
                        <div className="article-card-sm-image">
                            <img
                                src={article.img}
                                className="card-img-top w-100"
                                style={{
                                    maxWight: "15rem",
                                    height: "13rem"
                                }}
                                alt="image"/>
                        </div>
                        <div
                            className="card-body"
                            style={{
                                verticalAlign: "text-bottom"
                            }}
                        >
                            <h6 className="card-title h5"><b>{article.name.slice(0, 30) + "..."}</b></h6>
                            <p className="card-text">{article.content.slice(0, 70) + "..."}</p>
                            <Link to={`/articles/${article._id}`}>
                                <p className="card-title text-center text-secondary mb-2">Читать далее</p>
                            </Link>
                            <span
                                className="article-card-sm-subtitle text-secondary"
                            >
                                {new Date(article.date).toLocaleDateString()}{" "}
                                <b>{ firstName }{" "}{ lastName }</b>{" "}
                            </span>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

ArticleCardMd.propTypes = {
    article: PropTypes.object
};

export default ArticleCardMd;
