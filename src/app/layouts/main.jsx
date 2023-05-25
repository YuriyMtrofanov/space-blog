import React from "react";
import ArticleCard from "../components/common/cards/articleCard";
import LatestArticles from "../components/ui/latestArticles";
// Можно реализовать карусель. Скролл картинок слева направо
// https://bootstrap-4.ru/docs/5.1/components/carousel/

const Main = () => {
    const recomendedArticle = {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Новые снимки телескопа Джеймса Уебба",
        author: "67rdca3eeb7f6fgeed471816",
        date: 1684750058473,
        category: "67rdca3eeb7f6fgeed471824",
        header: "Заголовок статьи",
        img: "https://naukatehnika.com/files/journal/tehnika-vooruzhenie/15.07.20-varp-dvigatel/varp-dvigatel-2.jpg",
        content: "Текст статьи",
        likes: [],
        rate: 10
    };
    return (
        <>
            <div className="container mt-2 pb-5 shadow">
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
            </div>
        </>
    );
};

export default Main;
