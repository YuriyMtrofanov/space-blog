import React, { useState } from "react";
import PropTypes from "prop-types";
import Loading from "../../ui/loading";
// import { useSelector } from "react-redux";
// import { getUsersList } from "../../../store/users";
import TableHeader from "../../common/table/tableHeader";
import TableBody from "../../common/table/tableBody";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesLoadStatus, removeArticle } from "../../../store/articles";
import TextField from "../../common/forms/textField";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../ui/pagination";

const AdminPage = ({ articlesList }) => {
    const isLoading = useSelector(getArticlesLoadStatus());
    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const onEdit = (id) => {
        history.push(`/articles/${id}/edit`);
    };
    const onDelete = (id) => {
        dispatch(removeArticle(id));
    };
    const handleInputChange = (target) => {
        setInputData(target.value);
    };
    function filterArticles(data) {
        let filteredData = data;
        if (inputData) {
            filteredData = data.filter(article => article.name.toLowerCase().includes(inputData.toLowerCase()));
        }
        return filteredData;
    };
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    if (articlesList && !isLoading) {
        const filteredArticles = filterArticles(articlesList);
        const count = filteredArticles.length;
        const pageSize = 3;
        const articlesCropp = paginate(filteredArticles, currentPage, pageSize);
        return (
            <>
                <div className='container mt-2 pb-5 shadow'>
                    <div className="row center">
                        <h1 className="text-center">Список статей</h1>
                        <form className="col-6 mx-auto">
                            <TextField
                                type = "text"
                                name = "search"
                                placeholder = "Search"
                                value = {inputData}
                                onChange = {handleInputChange}
                            />
                        </form>
                        <table className="table table-hover mx-auto">
                            <TableHeader/>
                            <tbody>
                                {articlesCropp.map(item =>
                                    <TableBody
                                        key={item._id}
                                        article={item}
                                        onEdit={onEdit}
                                        onDelete={onDelete}
                                    />
                                )}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-center">
                            <Pagination
                                itemsCount = { count }
                                pageSize = { pageSize }
                                currentPage = { currentPage }
                                onPageChange = { handlePageChange }
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <Loading/>;
    }
};

AdminPage.propTypes = {
    articlesList: PropTypes.array
};

export default AdminPage;
