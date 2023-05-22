import React, { useEffect, useState } from "react";
import api from "../../api";
import PropTypes from "prop-types";
import ArticlesCard from "./articleCard";
import Loading from "./ui/loading";

const ArticlesTable = ({ articles }) => {
    const [authorsList, setAuthorsList] = useState([]);
    useEffect(() => {
        api.users.fetchAll().then(data => {
            setAuthorsList(data);
        });
    }, []);

    function authorsName(id) {
        const { firstName, lastName } = authorsList.find(author => author._id === id);
        return `${firstName} ${lastName}`;
    };
    if (articles.length > 0 && authorsList.length) {
        return (
            <div>
                {articles.length > 0 && authorsList.length > 0 &&
                    articles.map(article => (
                        <ArticlesCard key={article._id} {...{ article }} author={authorsName(article.author)}/>
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
