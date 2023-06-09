import React, { useState } from "react";
import Loading from "../../ui/loading";
import ArticlesTable from "../../ui/articlesTable";
import Categories from "../../ui/categories";
import TextField from "../../common/forms/textField";
import { useSelector } from "react-redux";
import { getArticlesList, getArticlesLoadStatus } from "../../../store/articles";
import { getCategories } from "../../../store/categories";
import ArticlesLoader from "../../ui/HOC/articlesLoader";
import Pagination from "../../ui/pagination";
import { paginate } from "../../../utils/paginate";

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
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    if (!isLoading) {
        const filteredArticles = filterArticles(articlesList);
        const count = filteredArticles.length;
        const pageSize = 5;
        const articlesCropp = paginate(filteredArticles, currentPage, pageSize);
        return (
            <div
                className="articles-list-container mx-100 my-100"
                style={{
                    height: "auto",
                    minHeight: "65rem"
                }}
            >
                <div className='container pb-5'>
                    <div className="row">
                        {categories &&
                            <div className="col-lg-3 mt-2 mb-2">
                                <h3 className="text-secondary text-center">
                                    Фильтр по темам
                                </h3>
                                <Categories
                                    items = {categories}
                                    selectedItem = { selectedProperty }
                                    onItemSelect = { handleItemSelect }
                                    valueProperty = "_id"
                                    contentProperty = "name"
                                />
                                <button
                                    className = "btn btn-secondary mt-2 w-100"
                                    style={{
                                        color: "rgb(10, 24, 44)"
                                    }}
                                    onClick = {handleClearList}
                                > <b>Сброс</b></button>
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
                                <ArticlesTable {...{ articles: articlesCropp }}/>
                            </ArticlesLoader>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount = { count }
                        pageSize = { pageSize }
                        currentPage = { currentPage }
                        onPageChange = { handlePageChange }
                    />
                </div>
                <div className="main-page-container-footer mb-5">
                    <h5 className="text-secondary text-center">Created by Mitrofanov Yuriy</h5>
                </div>
            </div>
        );
    } else {
        return <Loading />;
    };
};

export default ArticlesListPage;
