import React, { useState, useEffect } from "react";
import api from "../../api/index.js";
import Loading from "./loading";
// аналог UsersTable в курсовом проекте
// В идеале бы реализовать картояку с изображением на фоне («Наложение» изображений className="card-img-overlay")

const ArticlesList = () => {
    const [articlesList, setArticlesList] = useState();
    useEffect(()=>{
        api.articles.fetchAll().then(data => {
            setArticlesList(data);
        });
    },[]);
    if (articlesList) {
        return (
            <>
                {articlesList && 
                    articlesList.map(article => (
                        <div key = {article._id} className="card card-sm text-dark bg-light bg-opacity-75 m-3">
                            <div className="card-header p-2">
                                <h3>{article.name}</h3>
                            </div>
                            <div className="card-body p-2">
                                <h5 className="card-title">{article.header}</h5>
                                <p className="card-text">{`Атор: ${article.author}, Рейтинг статьи: ${article.rate}`}</p>
                            </div>
                        </div>
                    ))
                }
            </>
        );
    } else {
        return <Loading />;
    };
};

export default ArticlesList;
