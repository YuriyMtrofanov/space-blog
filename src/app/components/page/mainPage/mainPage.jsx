import React from "react";
import PropTypes from "prop-types";
import RecomendedArticle from "../../ui/recomendedArticle";
// import LatestArticles from "../../ui/latestArticles";
// import TopAuthors from "../../ui/topAuthors";
import Loading from "../../ui/loading";

const MainPage = ({ articles, users }) => {
    if (articles && users) {
        return (
            <div className="main-page-container mx-100 my-100">
                <div className="main-page-container-header mx-100">
                    <div className="row">
                        <h1><b>Добро пожаловать в Space Blog</b></h1>
                        <p className="h5 p-1">На данном ресурсе публикуются материалы о ближнем и дальнем космосе</p>
                        <p className="h5 p-1">Здесь ты найдешь все что тебя интересует о космосе и нашей планете</p>
                        <p className="h5 p-1">Читай статьи на интересующие тебя бемы, оставляй комментарии и пиши статьи сам</p>
                    </div>
                </div>
                <div className="container main-page-container-body">
                    <div className="row mt-3">
                        <div className="col-xxl-12 recomended-article">
                            {/* <h3>Статья недели</h3> */}
                            <RecomendedArticle articles={articles}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-3 col-sm-6">
                            <h5 className="text-light">Card</h5>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h5 className="text-light">Card</h5>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h5 className="text-light">Card</h5>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h5 className="text-light">Card</h5>
                        </div>
                    </div>
                    {/* <div className="row article-card-small">
                        <h3 className="mt-5">Список последних публикаций</h3>
                        <LatestArticles articles={articles}/>
                        <TopAuthors users={users}/>
                    </div> */}
                </div>
                <div className="main-page-container-footer">
                    <h1 className="text-light">All rights reserved</h1>
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
