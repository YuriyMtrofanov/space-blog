import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "../../ui/loading";
import Comments from "../../common/comments/comments";
import api from "../../../../api";

const ArticlePage = ({ id }) => {
    const [article, setArticle] = useState();
    useEffect(() => {
        api.articles.getById(id).then((data) => {
            setArticle(data);
        });
    }, []);
    return (
        <>
            {article
                ? (<div className='container mt-2 pb-5 shadow'>
                    <div className="card">
                        <div className="card-header text-center">
                            <img className="img-fluid" style={{ maxHeight: "50rem" }}src={article.img} alt="article image" />
                            <h2>{article.name}</h2>
                            <p className="text-muted">{article.author}</p>
                        </div>
                        <div className="body mx-5 mt-3">
                            <div className="text-start">
                                <p>{article.content}</p>
                            </div>
                            <hr/>
                        </div>
                        <span className="card-subtitle text-muted mx-5 mb-3">
                            {new Date(article.date).toLocaleDateString()}{" "}
                            <i className="bi bi-hand-thumbs-up"></i>{" "}
                            <i className="bi bi-hand-thumbs-down"></i>
                        </span>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-2">
                            <Comments/>
                        </div>
                    </div>
                </div>)
                : (<Loading />)
            }

        </>
    );
};

ArticlePage.propTypes = {
    id: PropTypes.string.isRequired
};

export default ArticlePage;
