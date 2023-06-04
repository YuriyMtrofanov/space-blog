import React from "react";
import PropTypes from "prop-types";
import Loading from "../../ui/loading";
import Comments from "../../common/comments/comments";
import {
    useSelector
} from "react-redux";
import {
    getArticlesDataStatus,
    getArticlesLoadStatus
} from "../../../store/articles";
import { getCurrentUserId, getUserById } from "../../../store/users";
import {
    useHistory,
    useParams
} from "react-router-dom";

const ArticlePage = ({ article }) => {
    const { articleId } = useParams();
    const isLoading = useSelector(getArticlesLoadStatus());
    const dataStatus = useSelector(getArticlesDataStatus());
    const articleAuthor = useSelector(getUserById(article.author));
    const currentUserId = useSelector(getCurrentUserId());
    const history = useHistory();
    const handleEdit = () => {
        history.push(`/articles/${articleId}/edit`);
    };
    return (
        <>
            {!isLoading && dataStatus && articleAuthor
                ? (<div className='container mt-2 pb-5 shadow'>
                    <div className="card">
                        <div className="card-header text-center">
                            <img className="img-fluid" style={{ maxHeight: "50rem" }}src={article.img} alt="article image" />
                            <h2>{article.name}</h2>
                            <p className="text-muted h5"><b>{articleAuthor.firstName}{" "}{articleAuthor.lastName}</b></p>
                        </div>
                        <div className="body mx-5 mt-3">
                            <div className="text-start">
                                <p>{article.content}</p>
                            </div>
                            <hr/>
                        </div>
                        <span className="card-subtitle text-muted mx-5 mb-3">
                            <div className="d-flex justify-content-start">
                                {new Date(article.date).toLocaleDateString()}{" "}
                                <i className="bi bi-hand-thumbs-up"></i>{" "}
                                <i className="bi bi-hand-thumbs-down"></i>
                            </div>
                            {currentUserId === articleAuthor._id &&
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-dark text-light mx-2" onClick={handleEdit}>Редактировать</button>
                                    {/* <button className="btn btn-secondary mx-2" onClick={handleRemove}>Удалить</button> */}
                                </div>
                            }
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
    article: PropTypes.object
};

export default ArticlePage;
