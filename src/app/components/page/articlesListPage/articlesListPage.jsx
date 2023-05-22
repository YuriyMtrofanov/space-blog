import React, { useState, useEffect } from "react";
import api from "../../../../api/index.js";
import Loading from "../../ui/loading";
import ArticlesTable from "../../articlesTable";
// import TopArticles from "./topArticles.jsx";
import Categories from "../../categories";
// аналог UsersTable в курсовом проекте
// В идеале бы реализовать картояку с изображением на фоне («Наложение» изображений className="card-img-overlay")

const ArticlesListPage = () => {
    const [articlesList, setArticlesList] = useState();
    useEffect(() => {
        api.articles.fetchAll().then(data => {
            setArticlesList(data);
        });
        console.log("Список статей: ", articlesList);
    }, [articlesList]);

    const [categories, setCategories] = useState();
    useEffect(() => {
        api.categories.fetchAll().then(data => {
            setCategories(data);
        });
        console.log("Категории: ", categories);
    }, [categories]);

    const [selectedProperty, setSelectedProperty] = useState();
    const handleItemSelect = (params) => {
        setSelectedProperty(params);
    };

    // Для пагинации потребуется отрисовать по 6 компонентов на страницу
    if (articlesList) {
        const filteredArticles = selectedProperty
            ? articlesList.filter(article => article.category._id === selectedProperty)
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
                            valueProperty = "_id"
                            contentProperty = "name"
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
        return <Loading />;
    };
};

export default ArticlesListPage;
