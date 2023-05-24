import React from "react";
import PropTypes from "prop-types";
// import { useParams } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { getMemberById } from "../../store/memberSlice"

const UserSocialNetworksCard = ({ id }) => {
//   const { memberId } = useParams()
//   const member = useSelector(getMemberById(memberId))
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
            // "67rdca3eeb7f6fgeed471816",
            // "67rdca3eeb7f6fgeed471817",
            // "67rdca3eeb7f6fgeed471819",
            // "67rdca3eeb7f6fgeed471821",
            // "67rdca3eeb7f6fgeed471823"
        ], // ссылка на отдельную сущность (пересекается с articles) массив из id понравившихся статей статей
        selectedAuthorsList: [
        ], // массив из id избранных авторов. Важно чтобы в этот список не попадали учетки с accountType: "visitor"
        rate: 15
    }; // затычка

    return (
        <div className="card p-1 mb-2">
            <div className="acontainer p-1" style={{ margin: "0 auto" }}>
                {user.socialТetworks.map((item) => (
                    <span key={item._id}>
                        <img
                            className="card-img-top p-1"
                            // src={item.img}
                            // alt="Card cap"
                            style={{
                                maxWidth: "3rem",
                                maxHigth: "3rem",
                                borderRadius: "50%",
                                margin: "auto"
                            }}
                        />
                        <a className="figure-caption text-end" href={item.link}>
                            {item.title}
                        </a>
                    </span>
                ))}
            </div>
        </div>
    );
};

UserSocialNetworksCard.propTypes = {
    id: PropTypes.string
};

export default UserSocialNetworksCard;
