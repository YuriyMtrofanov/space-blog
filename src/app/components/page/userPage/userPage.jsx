import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import UserImageCard from "../../common/cards/UserImageCard";
import UserInfoCard from "../../common/cards/UserInfoCard";
import { Redirect } from "react-router-dom";
import ArticlesTable from "../../ui/articlesTable";
import { getUserById } from "../../../store/users";
import { getUsersArticlesList } from "../../../store/articles";

const UserPage = ({ id }) => {
    const user = useSelector(getUserById(id));
    const articlesList = useSelector(getUsersArticlesList(id));

    return (
        <div
            className="user-page-container mx-100"
            style={{
                height: "auto",
                minHeight: "65rem"
            }}
        >
            {user && articlesList
                ? (<div className='container pb-5'>
                    <div className='row gutters-sm'>
                        <div className='col-4 p-1 mb-2 mt-2'>
                            <UserImageCard user={user}/>
                        </div>
                        <div className='col-md-8 p-1 mb-2 mt-2'>
                            <UserInfoCard user={user}/>
                            <div className="container flex p-1 text-secondary">
                                <h5 className="text-center">Список публикаций:</h5>
                                <ArticlesTable { ...{ articles: articlesList } }/>
                            </div>
                        </div>
                    </div>
                </div>)
                : (<Redirect to='/' />)}
        </div>
    );
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
