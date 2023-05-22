import React, { useState, useEffect } from "react";
import api from "../../../../api";
import Loading from "../../ui/loading";
import ArticlesTable from "../../articlesTable";
// import TopArticles from "./topArticles.jsx";
import Categories from "../../categories";
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
            filteredData = data.filter(article => article.textContent.toLowerCase().includes(inputData.toLowerCase()));
        } else if (selectedProperty) {
            filteredData = data.filter(article => article.category === selectedProperty);
        } return filteredData;
    };
    if (!isLoading) {
        const filteredArticles = filterArticles(articlesList);
        return (
            <>
                <div className='container mt-2'>
                    {/* <Breadcrumbs
                        state={state}
                        memberName={`${member.name} ${member.lastName}`}
                    /> */}
                    <h3>Breadcrumbs / articles /</h3>
                    <div className="row gutters">
                        {categories &&
                            <div className="col-4 mt-4 mb-2">
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
                        <div className="col-md-8 mb-2">
                            <form>
                                {/* <h1>Все статьи: </h1> */}
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
