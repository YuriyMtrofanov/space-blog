import React from "react";
import PropTypes from "prop-types";
import ArticlesTable from "./articlesTable";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";
import { getArticlesLoadStatus } from "../../store/articles";

const FavoriteArticles = ({ articles }) => {
    const isLoading = useSelector(getArticlesLoadStatus());
    const currentUser = useSelector(getCurrentUserData());
    const { selectedArticlesList } = currentUser;
    const favoriteArticles = selectedArticlesList.map(id => articles.find((article) => article._id === id));
    return (
        <>
            {!isLoading &&
                <div className="container mt-2 pb-5">
                    <div className="row">
                        <div className="col-lg-9 mb-2">
                            <h1>список избранных статей</h1>
                            <ArticlesTable {...{ articles: favoriteArticles }}/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

FavoriteArticles.propTypes = {
    articles: PropTypes.array
};

export default FavoriteArticles;
