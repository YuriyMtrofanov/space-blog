import React from "react";
import ArticleCard from "../components/ui/articleCard";
import RecomendedArticles from "../components/ui/recomendedArticles";
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
        img: "URL",
        textContent: "Текст статьи",
        likes: [],
        rate: 10
    };
    return (
        <div className='container mt-2 p-3 shadow'>
            <div className="row">
                <div className="p-3">
                    <h3>Статья недели</h3>
                    <ArticleCard article={recomendedArticle} author={"Автор статьи"}/>
                </div>
                <div className="p-3">
                    <h3>Список из предложенных статей</h3>
                    <RecomendedArticles/>
                </div>
                <div className="p-3">
                    <h3>Список топ-авторов</h3>
                </div>
            </div>
        </div>
    );
};

export default Main;
