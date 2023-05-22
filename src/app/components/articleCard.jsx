import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../api";

const ArticleCard = ({ article }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [author, setAuthor] = useState();
    useEffect(() => {
        setIsLoading(true);
        api.users.getById(article.author).then(data => {
        // console.log("author", data);
            setAuthor(data);
        });
    }, []);
    useEffect(() => {
        setIsLoading(false);
        console.log("author", author);
    }, [author]);

    return (
        <>
            {!isLoading
                ? (<div className="card card-sm text-dark bg-light bg-opacity-75 m-3">
                    <div className="card-header p-2">
                        <h3>{article.name}</h3>
                    </div>
                    <div className="card-body p-2">
                        <h5 className="card-title">{article.header}</h5>
                        <p className="card-text">{`Атор: ${article.author}, Рейтинг статьи: ${article.rate}`}</p>
                    </div>
                </div>)
                : ("Loading...")
            }
        </>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleCard;
