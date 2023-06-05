import React from "react";
import PropTypes from "prop-types";
import LatestArticles from "../../ui/latestArticles";
import RecomendedArticle from "../../ui/recomendedArticle";

import Loading from "../../ui/loading";
import TopAuthors from "../../ui/topAuthors";

const MainPage = ({ articles, users }) => {
    if (articles && users) {
        return (
            <div className="container mt-2 pb-5 shadow">
                <h1>Читай, пиши сам, развивайся</h1>
                <h5 className="text-secondary">Предлагаем вашему вниманию платформу для поиска информации о космосе</h5>
                <div className="row">
                    <div className="p-3">
                        <h3>Статья недели</h3>
                        <RecomendedArticle articles={articles}/>
                    </div>
                    <LatestArticles articles={articles}/>
                    <h3>Список топ-авторов</h3>
                    <div className="col-md-3 col-sm-6 p-3">
                        <TopAuthors users={users}/>
                    </div>
                    {/* <div className="p-3">
                        <h3>Список топ-авторов</h3>
                    </div> */}
                </div>
            </div>
        );
    } else {
        return (<Loading/>);
    }
};

MainPage.propTypes = {
    articles: PropTypes.array,
    users: PropTypes.array
};

export default MainPage;
