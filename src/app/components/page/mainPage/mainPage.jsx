import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../../common/cards/articleCard";
import LatestArticles from "../../ui/latestArticles";
import { useSelector } from "react-redux";
import { getArticById } from "../../../store/articles";

const MainPage = ({ articles }) => {
    const recomendedId = "647b3d9fc0d854c6b28335b3";
    const recomendedArticle = useSelector(getArticById(recomendedId));
    if (!recomendedArticle) return "Loading...";
    return (
        <div className="container mt-2 pb-5 shadow">
            <h1>Читай, пиши сам, развивайся</h1>
            <h5 className="text-secondary">Предлагаем вашему вниманию платформу для поиска информации о космосе</h5>
            <div className="row">
                <div className="p-3">
                    <h3>Статья недели</h3>
                    <ArticleCard article={recomendedArticle}/>
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
    articles: PropTypes.array
};

export default MainPage;
