import React from "react";
// import api from "../../../../api";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserById } from "../../../store/users";

const ArticleCard = ({ article }) => {
    const { firstName, lastName } = useSelector(getUserById(article.author));
    return (
        <>
            <div className="card card-sm text-dark bg-opacity-75 mb-2">
                {/* <div className="card-header p-2">
                    <Link to={`/articles/${article._id}`}>
                        <h5>{article.name}</h5>
                    </Link>
                </div> */}
                <img src={article.img} style={{ height: "30rem" }}className="card-img-top" alt="image"/>
                <div className="card-body p-2">
                    <Link to={`/articles/${article._id}`}>
                        <h5 className="card-title text-dark p-1">{article.name}</h5>
                    </Link>
                    <ul>
                        <li>{article.content}</li>
                    </ul>
                    <span className="card-subtitle mb-2 text-muted">
                        {new Date(article.date).toLocaleDateString()}{" "}
                        <b>{ firstName }{" "}{ lastName }</b>{" "}
                        <i className="bi bi-hand-thumbs-up"></i>{" "}
                        <i className="bi bi-hand-thumbs-down"></i>
                    </span>
                </div>
            </div>
        </>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleCard;
