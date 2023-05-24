import React, { useEffect, useState } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import ArticleCard from "../common/cards/articleCard";
import Loading from "./loading";

const ArticlesTable = ({ articles }) => {
    const [authorsList, setAuthorsList] = useState([]);
    useEffect(() => {
        api.users.fetchAll().then(data => {
            setAuthorsList(data);
        });
    }, []);
    if (articles.length > 0 && authorsList.length) {
        return (
            <div>
                {articles.length > 0 && authorsList.length > 0 &&
                    articles.map(article => (
                        <ArticleCard key={article._id} {...{ article }}/>
                    ))}
            </div>
        );
    } else return <Loading />;
};

ArticlesTable.propTypes = {
    articles: PropTypes.array.isRequired,
    users: PropTypes.array
};

export default ArticlesTable;
