import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../../common/cards/articleCard";
import LatestArticles from "../../ui/latestArticles";

const MainPage = ({ articles, recomended }) => {
    return (
        <div className="container mt-2 pb-5 shadow">
            <h1>Читай, пиши сам, развивайся</h1>
            <h5 className="text-secondary">Предлагаем вашему вниманию платформу для поиска информации о космосе</h5>
            <div className="row">
                <div className="p-3">
                    <h3>Статья недели</h3>
                    <ArticleCard article={recomended}/>
                </div>
                <LatestArticles articles={articles}/>
                <div className="p-3">
                    <h3>Список топ-авторов</h3>
                </div>
            </div>
        </div>
    );
};

MainPage.propTypes = {
    articles: PropTypes.array,
    recomended: PropTypes.object
};

export default MainPage;
