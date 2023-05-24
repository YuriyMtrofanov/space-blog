import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserImageCard from "../../common/cards/UserImageCard";
import UserSocialNetworksCard from "../../common/cards/UserSocialNetworksCard";
import UserInfoCard from "../../common/cards/UserInfoCard";
// import ArticleCard from "../../common/cards/articleCard";
import { Redirect } from "react-router-dom";
import api from "../../../../api";
import ArticlesTable from "../../ui/articlesTable";
import Loading from "../../ui/loading";

const UserPage = ({ id }) => {
    const [articlesList, setArticlesList] = useState();
    // const { userId } = useParams()
    // const { state } = useLocation() // это для хлебных крошек
    // const member = useSelector(getMemberById(memberId))
    const user = {
        _id: "67rdca3eeb7f6fgeed471815",
        firstName: "Юрий",
        lastName: "Митрофанов",
        email: "yurasell@yandex.ru",
        password: "hashed password",
        accountType: "admin",
        sex: "male",
        img: "https://sun9-9.userapi.com/impg/WMnkXwN8HhR9GO1bFhTWQjMuIRB0wnLADRj2WQ/QtGDCh56zZQ.jpg?size=606x632&quality=96&sign=42f577c3fbc7de2cfb7355f32b6399d1&type=album",
        country: "Russia",
        city: "Saint-petersburg",
        birthDay: 540518400000, // Date.parse("1987-02-17"), new Date(540518400000).toLocaleString() = 17/02/1987
        about: [
            { _id: "1", content: "Я - автор данного приложения" },
            { _id: "2", content: "Данный проект является моим дипломом по курсу junior Frontend Developer от Result School" },
            { _id: "3", content: "Мне очень хотелось бы успешно завершить обучение и получить новую востребованную профессию" }
        ],
        socialТetworks: [
            { _id: "1", title: "vk.com", link: "https://vk.com/mitrofanov_yuriy", img: "" },
            { _id: "2", title: "github.com", link: "https://github.com/YuriyMtrofanov", img: "" },
            { _id: "3", title: "telegram.com", link: "https://web.telegram.org/k/#@Mitrofanov_Yuriy", img: "" }
        ], // нужно поместить в отдельную сущность
        selectedArticlesList: [
        ], // массив из id избранных статей
        likedArticles: [
        ], // ссылка на отдельную сущность (пересекается с articles) массив из id понравившихся статей статей
        selectedAuthorsList: [
        ], // массив из id избранных авторов. Важно чтобы в этот список не попадали учетки с accountType: "visitor"
        rate: 15
    }; // затычка
    useEffect(() => {
        api.articles.fetchAll().then(data => {
            // user._id это currentUser
            setArticlesList(data.filter(item => item.author === user._id));
        });
    }, []);

    if (!user) return <Redirect to='/' />;
    return (
        <>
            {/* <Breadcrumbs
                state={state}
                memberName={`${member.name} ${member.lastName}`}
            /> */}
            <div className='container mt-2 pb-5 shadow'>
                <h3>Страница пользователя</h3>
                <div className='row gutters-sm'>
                    <div className='col-4 p-1 mb-2'>
                        <UserImageCard />
                        <UserSocialNetworksCard />
                    </div>
                    <div className='col-md-8 p-1 mb-2'>
                        <UserInfoCard />
                        <div className="container flex p-1">
                            <h3>Список статей</h3>
                            {articlesList
                                ? (<ArticlesTable { ...{ articles: articlesList } }/>)
                                : (<Loading/>)
                            }
                        </div>
                    </div>
                    <div className='col-md-8 p-1 mb-2'>
                    </div>
                </div>
            </div>
        </>
    );
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
