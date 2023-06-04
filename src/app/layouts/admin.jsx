import React from "react";
import { useSelector } from "react-redux";
import { getArticlesList } from "../store/articles";
import Loading from "../components/ui/loading";
import AdminPage from "../components/page/adminPage/adminPage";

const Admin = () => {
    const articles = useSelector(getArticlesList());
    return (
        <>
            <h1>Admin</h1>
            {articles
                ? (<AdminPage { ...{ articlesList: articles } }/>)
                : (<Loading/>)}
        </>
    );
};

export default Admin;
