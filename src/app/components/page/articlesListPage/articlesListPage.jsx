import React, { useState, useEffect } from "react";
import api from "../../../../api";
import Loading from "../../ui/loading";
import ArticlesTable from "../../articlesTable";
// import TopArticles from "./topArticles.jsx";
import Categories from "../../categories";
// аналог UsersTable в курсовом проекте
// В идеале бы реализовать картояку с изображением на фоне («Наложение» изображений className="card-img-overlay")

const ArticlesListPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState();
    const [categories, setCategories] = useState();
    useEffect(() => {
        api.articles.fetchAll().then(data => {
            setArticlesList(data);
        });
        api.categories.fetchAll().then(data => {
            setCategories(data);
        });
    }, []);
    useEffect(() => {
        if (articlesList && categories) return setIsLoading(false);
    }, [articlesList, categories]);

    const [selectedProperty, setSelectedProperty] = useState();
    const handleItemSelect = (params) => {
        setSelectedProperty(params);
    };
    // Для пагинации потребуется отрисовать по 6 компонентов на страницу
    if (!isLoading) {
        const filteredArticles = selectedProperty
            ? articlesList.filter(article => article.category === selectedProperty)
            : articlesList;

        const handleClearList = () => {
            setSelectedProperty();
        };

        return (
            <div className="d-flex">
                {categories &&
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <h1>Категории</h1>
                        <Categories
                            items = {categories}
                            selectedItem = { selectedProperty }
                            onItemSelect = { handleItemSelect }
                            valueProperty = "_id" // параметр по умолчанию
                            contentProperty = "name" // параметр по умолчанию
                        />
                        <button
                            className = "btn btn-secondary mt-2"
                            onClick = {handleClearList}
                        > Сброс </button>
                    </div>
                }
                <div className="d-flex flex-column m-3">
                    <h1>Все статьи</h1>
                    <ArticlesTable {...{ articles: filteredArticles }}/>
                </div>
            </div>
        );
    } else {
        return <Loading />; // спиннер
    };
};

export default ArticlesListPage;
