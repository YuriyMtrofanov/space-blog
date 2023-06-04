import React from "react";
import PropTypes from "prop-types";
import Loading from "../../ui/loading";
// import { useSelector } from "react-redux";
// import { getUsersList } from "../../../store/users";
import TableHeader from "../../common/table/tableHeader";
import TableBody from "../../common/table/tableBody";

const AdminPage = ({ articlesList }) => {
    const onEdit = (id) => {
        console.log(`Edit ${id}`);
    };
    const onDelete = (id) => {
        console.log(`Delete ${id}`);
    };
    if (articlesList) {
        return (
            <div className='container mt-2 pb-5 shadow'>
                <div className="row">
                    <h1 className="text-center">Articles Table</h1>
                    <p className="text-center">Поиск</p>
                    <table className="table table-hover">
                        <TableHeader/>
                        <tbody>
                            {articlesList.map(item =>
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
        );
    } else {
        return <Loading/>;
    }
};

AdminPage.propTypes = {
    articlesList: PropTypes.array
};

export default AdminPage;
