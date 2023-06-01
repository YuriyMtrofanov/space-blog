import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    editUserInfo,
    getCurrentUserData,
    getSelectedArticlesList,
    getSelectedArticlesStatus,
    getUserById
} from "../../../store/users";

const ArticleCard = ({ article }) => {
    const dispatch = useDispatch();
    const user = useSelector(getUserById(article.author));
    const { firstName, lastName } = user;
    const currentUser = useSelector(getCurrentUserData());
    const [isSelected, setIsSelected] = useState(false);
    const selectedArticles = useSelector(getSelectedArticlesList(currentUser._id));
    const favorites = useSelector(getSelectedArticlesStatus(currentUser._id, article._id));

    // задаю состояние для иконок избранного
    useEffect(() => {
        favorites ? setIsSelected(false) : setIsSelected(true);
    }, []);

    const handleChange = () => {
        if (favorites) {
            setIsSelected(true);
            const outputData = {
                ...currentUser,
                selectedArticlesList: selectedArticles.filter(item => (item !== article._id))
            };
            dispatch(editUserInfo(outputData));
        } else {
            setIsSelected(false);
            const outputData = {
                ...currentUser,
                selectedArticlesList: [...selectedArticles, article._id]
            };
            dispatch(editUserInfo(outputData));
        }
    };
    const toggleBookmark = () => {
        return !isSelected ? "-fill" : "";
    };
    return (
        <>
            <div className="card card-sm text-dark bg-opacity-75 mb-2">
                {/* <div className="card-header p-2">
                    <Link to={`/articles/${article._id}`}>
                        <h5>{article.name}</h5>
                    </Link>
                </div> */}
                <img src={article.img} style={{ height: "30rem" }} className="card-img-top" alt="image"/>
                <div className="card-body p-2">
                    <Link to={`/articles/${article._id}`}>
                        <h5 className="card-title text-dark p-1">{article.name}</h5>
                    </Link>
                    <ul>
                        <li>{article.content}</li>
                    </ul>
                    <h5><i className={"bi bi-bookmarks" + toggleBookmark()} onClick={handleChange}></i> В список для чтения</h5>
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
    article: PropTypes.object
};

export default ArticleCard;
