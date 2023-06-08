import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    getUserById
} from "../../../store/users";

const ArticleCardSmall = ({ article }) => {
    const user = useSelector(getUserById(article.author));
    const { firstName, lastName } = user;
    return (
        <>
            {article &&
                <div
                    className="col-lg-3 col-sm-6 p-1"
                >
                    <div
                        className="card article-card-sm"
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
                                style={{ maxWight: "15rem" }}
                                alt="image"/>
                        </div>
                        <div
                            className="card-body"
                            style={{
                                verticalAlign: "text-bottom"
                            }}
                        >
                            <h6 className="card-title h5"><b>{article.name}</b></h6>
                            <p className="card-text">{article.content.slice(0, 100) + "..."}</p>
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
                //     className="col-3 col-sm-6"
                //     style={{
                //         color: "grey",
                //         textAlign: "justify",
                //         backgroundColor: "blue",
                //         // width: "17rem",
                //         height: "25rem",
                //         maxHeight: "30rem"
                //     }}
                //     // style={{
                //     //     alignItems: "center",
                //     //     textAlign: "center",
                //     //     padding: "1rem",
                //     //     height: "25rem",
                //     //     maxHeight: "30rem"
                //     // }}
                // >
                //     <div className="article-card-small">

                //         <div className="article-card-small-body-content">
                //             <h6 className="card-title h5"><b>{article.name}</b></h6>
                //             <p className="card-text">{article.content.slice(0, 100) + "..."}</p>
                //         </div>
                //     </div>
                // </div>
            }
        </>
    );
};

ArticleCardSmall.propTypes = {
    article: PropTypes.object
};

export default ArticleCardSmall;
