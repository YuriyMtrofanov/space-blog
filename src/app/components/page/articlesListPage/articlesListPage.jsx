import React, { useState } from "react";
import Loading from "../../ui/loading";
import ArticlesTable from "../../ui/articlesTable";
import Categories from "../../ui/categories";
import TextField from "../../common/forms/textField";
import { useSelector } from "react-redux";
import { getArticlesList, getArticlesLoadStatus } from "../../../store/articles";
import { getCategories } from "../../../store/categories";
import ArticlesLoader from "../../ui/HOC/articlesLoader";

const ArticlesListPage = () => {
    const articlesList = useSelector(getArticlesList());
    const isLoading = useSelector(getArticlesLoadStatus());
    const [inputData, setInputData] = useState("");
    const categories = useSelector(getCategories());

    const [selectedProperty, setSelectedProperty] = useState();
    const handleItemSelect = (params) => {
        setSelectedProperty(params);
    };
    const handleClearList = () => {
        setSelectedProperty();
    };
    const handleInputChange = (target) => {
        handleClearList();
        setInputData(target.value);
    };
    function filterArticles(data) {
        let filteredData = data;
        if (inputData) {
            filteredData = data.filter(article => article.content.toLowerCase().includes(inputData.toLowerCase()));
        } else if (selectedProperty) {
            filteredData = data.filter(article => article.category === selectedProperty);
        } return filteredData;
    };
    if (!isLoading) {
        const filteredArticles = filterArticles(articlesList);
        return (
            <>
                <div className='container mt-2 pb-5 shadow'>
                    {/* <Breadcrumbs
                        state={state}
                        memberName={`${member.name} ${member.lastName}`}
                    /> */}
                    <h3>Breadcrumbs / articles /</h3>
                    <div className="row">
                        {categories &&
                            <div className="col-lg-3 mt-4 mb-2">
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
                        <div className="col-lg-9 mb-2">
                            <form>
                                <TextField
                                    type = "text"
                                    name = "search"
                                    placeholder = "Search"
                                    value = {inputData}
                                    onChange = {handleInputChange}
                                />
                            </form>
                            <ArticlesLoader>
                                <ArticlesTable {...{ articles: filteredArticles }}/>
                            </ArticlesLoader>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <Loading />; // спиннер
    };
};

export default ArticlesListPage;
