import React, { useEffect, useState } from "react";
import ArticlePage from "../components/page/articlePage";
// import ArticlesList from "../components/page/articlesListPage/articlesListPage";
import ArticlesTable from "../components/ui/articlesTable";
import { useParams } from "react-router-dom";
import api from "../../api";

const Favorites = () => {
    const currentUserId = "67rdca3eeb7f6fgeed471815"; // затычка
    const { articleId } = useParams();
    const [favoritesIds, setFavoritesIds] = useState();
    const [articles, setArticles] = useState();
    useEffect(() => {
        api.users.getById(currentUserId).then((data) => {
            setFavoritesIds(data.selectedArticlesList);
        });
        api.articles.fetchAll().then((data) => {
            setArticles(data);
        });
    }, []);
    if (articles && favoritesIds) {
        const favoriteArticles = favoritesIds.map(id => articles.find((item) => item._id === id));
        return (
            <>
                {articleId
                    ? (<ArticlePage id={articleId}/>)
                    : (<div className="container mt-2 pb-5">
                        <div className="row">
                            <div className="col-lg-9 mb-2">
                                <h1>список избранных статей</h1>
                                <ArticlesTable {...{ articles: favoriteArticles }}/>
                            </div>
                        </div>
                    </div>
                    )
                }
            </>
        );
    };
};

export default Favorites;
