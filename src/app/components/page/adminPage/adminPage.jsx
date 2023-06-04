import React, { useState } from "react";
import PropTypes from "prop-types";
import Loading from "../../ui/loading";
// import { useSelector } from "react-redux";
// import { getUsersList } from "../../../store/users";
import TableHeader from "../../common/table/tableHeader";
import TableBody from "../../common/table/tableBody";
// import ModalCard from "../../common/modal/modalCard";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesLoadStatus, removeArticle } from "../../../store/articles";
import TextField from "../../common/forms/textField";

const AdminPage = ({ articlesList }) => {
    const isLoading = useSelector(getArticlesLoadStatus());
    // const [modalActive, setModalActive] = useState(false);
    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const onEdit = (id) => {
        history.push(`/articles/${id}/edit`);
    };
    const onDelete = (id) => {
        console.log(`article delete ${id}`);
        dispatch(removeArticle(id));
        // setModalActive(true);
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
    if (articlesList && !isLoading) {
        const filteredArticles = filterArticles(articlesList);
        return (
            <>
                {/* <div className="modal-container">
                    <ModalCard active={modalActive} setActive={setModalActive}/>
                </div> */}
                <div className='container mt-2 pb-5 shadow'>
                    <div className="row">
                        <h1 className="text-center">Articles Table</h1>
                        <form className="col-6">
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
                                {filteredArticles.map(item =>
                                    <TableBody
                                        key={item._id}
                                        article={item}
                                        onEdit={onEdit}
                                        onDelete={onDelete}
                                    />
                                )}
                            </tbody>
                        </table>
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
