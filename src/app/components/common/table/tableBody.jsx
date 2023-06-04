import React from "react";
import PropTypes from "prop-types";

const TableBody = ({ article, onEdit, onDelete }) => {
    console.log("TableBody:", article);
    const handleEdit = (id) => {
        onEdit(id);
    };
    const handleDelete = (id) => {
        onDelete(id);
    };
    return (
        <>
            <tr>
                <td scope="col">{article.name}</td>
                <td scope="col">{article.author}</td>
                <td scope="col">{article.category}</td>
                <td scope="col">{new Date(article.date).toLocaleDateString()}</td>
                <td scope="col">{article.rate}</td>
                <td scope="col">
                    <a
                        role="button"
                        className="text-secondary"
                        onClick={() => handleEdit(article._id)}
                    >
                        Редактировать
                    </a>
                </td>
                <td scope="col">
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(article._id)}
                    >Удалить</button>
                </td>
            </tr>
        </>
    );
};

TableBody.propTypes = {
    article: PropTypes.object,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

export default TableBody;
