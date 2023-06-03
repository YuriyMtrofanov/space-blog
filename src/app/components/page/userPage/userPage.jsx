import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import UserImageCard from "../../common/cards/UserImageCard";
import UserInfoCard from "../../common/cards/UserInfoCard";
import { Redirect } from "react-router-dom";
import ArticlesTable from "../../ui/articlesTable";
import Loading from "../../ui/loading";
import { getUserById } from "../../../store/users";
import { getArticlesList } from "../../../store/articles";

const UserPage = ({ id }) => {
    const user = useSelector(getUserById(id));
    const articles = useSelector(getArticlesList());
    const articlesList = articles.filter(item => (item.author === user._id));

    return (
        <>
            {/* <Breadcrumbs
                state={state}
                memberName={`${member.name} ${member.lastName}`}
            /> */}
            {user && articles && articlesList
                ? (<div className='container mt-2 pb-5 shadow'>
                    <h3>Страница пользователя</h3>
                    <div className='row gutters-sm'>
                        <div className='col-4 p-1 mb-2'>
                            <UserImageCard user={user}/>
                            {/* <UserSocialNetworksCard /> */}
                        </div>
                        <div className='col-md-8 p-1 mb-2'>
                            <UserInfoCard user={user}/>
                            <div className="container flex p-1">
                                <h3>Список статей</h3>
                                {articlesList
                                    ? (<ArticlesTable { ...{ articles: articlesList } }/>)
                                    : (<Loading/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>)
                : (<Redirect to='/' />)}
        </>
    );
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
