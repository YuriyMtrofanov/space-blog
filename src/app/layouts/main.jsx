import React from "react";
import ArticleCard from "../components/common/cards/articleCard";
import LatestArticles from "../components/ui/latestArticles";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import { Redirect } from "react-router-dom";
// Можно реализовать карусель. Скролл картинок слева направо
// https://bootstrap-4.ru/docs/5.1/components/carousel/

const Main = () => {
    const recomendedArticle = {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Название статьи",
        author: "64732d802b4cef2df5be03c3",
        date: 1684750097365,
        category: "67rdca3eeb7f6fgeed471818",
        img: "https://img2.goodfon.ru/original/1280x1024/2/c9/zvezdy-vselennaya-tumannost.jpg",
        content: "Текст статьи",
        rate: 33
    };
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <>
            {isLoggedIn
                ? (<div className="container mt-2 pb-5 shadow">
                    <p>В заголовок добавить карусель с картинками</p>
                    <h1>Читай, пиши сам, развивайся</h1>
                    <h5 className="text-secondary">Предлагаем вашему вниманию платформу для поиска информации о космосе</h5>
                    {/* <button>Регистрация</button>
                    <button>Логин</button> */}
                    <div className="row">
                        <div className="p-3">
                            <h3>Статья недели</h3>
                            <ArticleCard article={recomendedArticle} author={"Автор статьи"}/>
                        </div>
                        <LatestArticles />
                        <div className="p-3">
                            <h3>Список топ-авторов</h3>
                        </div>
                    </div>
                </div>)
                : (<Redirect to={"/login"}/>)
            }
        </>
    );
};

export default Main;
