import React, { useState, useEffect } from "react";
import api from "../../../../api";
import Loading from "../../ui/loading";
import ArticlesTable from "../../ui/articlesTable";
// import TopArticles from "./topArticles.jsx";
import Categories from "../../ui/categories";
import TextField from "../../common/forms/textField";

const ArticlesListPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState();
    const [categories, setCategories] = useState();
    const [inputData, setInputData] = useState("");
    // const params = useParams();

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
    const handleClearList = () => {
        setSelectedProperty();
    };
    const handleInputChange = (target) => {
        handleClearList();
        setInputData(target.value);
        console.log(target.value);
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
                            <ArticlesTable {...{ articles: filteredArticles }}/>
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
