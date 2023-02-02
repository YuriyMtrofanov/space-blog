import { categoriesObject as categories } from "./categories.api";

// const qualities = {
//     tedious: {
//         _id: "67rdca3eeb7f6fgeed471198",
//         name: "Нудила",
//         color: "primary"
//     },
//     strange: {
//         _id: "67rdca3eeb7f6fgeed471100",
//         name: "Странный",
//         color: "secondary"
//     },
//     buller: {
//         _id: "67rdca3eeb7f6fgeed4711012",
//         name: "Троль",
//         color: "success"
//     },
//     alcoholic: {
//         _id: "67rdca3eeb7f6fgeed471101",
//         name: "Алкоголик",
//         color: "danger"
//     },
//     handsome: {
//         _id: "67rdca3eeb7f6fgeed471102",
//         name: "Красавчик",
//         color: "info"
//     },
//     uncertain: {
//         _id: "67rdca3eeb7f6fgeed471103",
//         name: "Неуверенный",
//         color: "dark"
//     }
// };

const articles = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Квазары - монстры вселенной",
        author: "Джон Дориан",
        date: "01.01.2023",
        category: categories.openSpace,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 15,
        // bookmark: false
        // qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        // completedMeetings: 36,
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Новые снимки телескопа Джеймса Уебба",
        author: "Кокс",
        date: "01.01.2023",
        category: categories.news,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 10,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Обзор любительских телескопов для съемки объектов дальнего космоса",
        author: "Боб Келсо",
        date: "01.01.2023",
        category: categories.hobbyAstronomy,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 31,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Космические лучи. Разбираемся",
        author: "Рэйчел Грин",
        date: "01.01.2023",
        category: categories.openSpace,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 7,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Название статьи",
        author: "Вояджеры. Где они сейчас",
        date: "01.01.2023",
        category: categories.spaceExploration,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 3,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Венера. Парниковый эффект на макималках",
        author: "Леонард Хофстедтер",
        date: "01.01.2023",
        category: categories.solarSystem,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 24,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Фотографии объектов каталога Месье",
        author: "Говард Воловиц",
        date: "01.01.2023",
        category: categories.hobbyAstronomy,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 13,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Варп-двигаетль. Теоретические основы",
        author: "Никола Тесла",
        date: "01.01.2023",
        category: categories.universe,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 18,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Миссия к комете Чурюмова-Герасименко",
        author: "Моника Геллер",
        date: "01.01.2023",
        category: categories.spaceExploration,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 27,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Геостационарная орбита Земли. Разбираемся в вопросе",
        author: "Рататуй",
        date: "01.01.2023",
        category: categories.solarSystem,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 19,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Название статьи",
        author: "Джоуи Триббиани",
        date: "01.01.2023",
        category: categories.solarSystem,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 33,
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Название статьи",
        author: "Брэд Питт",
        category: categories.solarSystem,
        header: "Заголовок статьи",
        img: "URL",
        textContent: "Текст статьи",
        rate: 7,
        // bookmark: false
    }
];

const fetchAll = () => {
    return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(articles);
        }, 1000);
    });
};

const getById = (id) => {
    return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(articles.find((uarticle) => uarticle._id === id));
        }, 1000);
    });
};

export {
    fetchAll,
    getById
};
