const articles = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Квазары - монстры вселенной",
        author: "67rdca3eeb7f6fgeed471815",
        date: 1684750058473,
        category: "67rdca3eeb7f6fgeed471820", // id категории
        prevue: "Превью стратьи",
        img: "https://img3.goodfon.ru/original/1280x1024/2/4c/galaxy-light-sci-fi.jpg",
        textContent: "Текст статьи",
        likes: [], // ссылка на отдельную сущность (пересекается с articles) массив из id понравившихся статей статей
        rate: 15
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Новые снимки телескопа Джеймса Уебба",
        author: "67rdca3eeb7f6fgeed471816",
        date: 1684750094316,
        category: "67rdca3eeb7f6fgeed471824",
        prevue: "Превью статьи",
        img: "https://lindeal.com/images/photos/nasa-draznit-izobrazheniyami-nebesnykh-tel-poluchennykh-kosmicheskim-teleskopom-dzhejmsa-uehbba.jpeg",
        textContent: "Текст статьи",
        likes: [],
        rate: 10
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Обзор любительских телескопов для съемки объектов дальнего космоса",
        author: "67rdca3eeb7f6fgeed471815",
        date: 1684750017293,
        category: "67rdca3eeb7f6fgeed471829",
        prevue: "Превью статьи",
        img: "https://www.scienceabc.com/wp-content/uploads/2017/01/Telescopes-To-See-Moon-Landings.jpg",
        textContent: "Текст статьи",
        likes: [],
        rate: 31
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Космические лучи. Разбираемся",
        author: "67rdca3eeb7f6fgeed471817",
        date: 1684750093517,
        category: "67rdca3eeb7f6fgeed471820",
        prevue: "Превью статьи",
        img: "https://images.techinsider.ru/upload/img_cache/716/7162a6d484ff26e34cf94094fc9e9cb6_cropped_1332x976.jpg",
        textContent: "Текст статьи",
        likes: [],
        rate: 7
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Вояджеры. Где они сейчас",
        author: "67rdca3eeb7f6fgeed471817",
        date: 1684750064823,
        category: "67rdca3eeb7f6fgeed471814",
        prevue: "Превью статьи",
        img: "https://союзженскихсил.рф/upload/main/b37/b378c3158c534656160687c0699eaf58.jpg",
        textContent: "Текст статьи",
        rate: 3
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Венера. Парниковый эффект на макималках",
        author: "67rdca3eeb7f6fgeed471818",
        date: 1684750091735,
        category: "67rdca3eeb7f6fgeed471818",
        prevue: "Превью статьи",
        img: "https://images.hdqwalls.com/download/orange-planet-5k-gz-2048x1152.jpg",
        textContent: "Текст статьи",
        rate: 24
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Фотографии объектов каталога Месье",
        author: "67rdca3eeb7f6fgeed471815",
        date: 1684750042697,
        category: "67rdca3eeb7f6fgeed471829",
        prevue: "Превью статьи",
        img: "https://www.zastavki.com/pictures/1280x800/2021Space_Space_Nebula_Andromeda_150047_12.jpg",
        textContent: "Текст статьи",
        rate: 13
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Варп-двигаетль. Теоретические основы",
        author: "67rdca3eeb7f6fgeed471816",
        date: 1684750082351,
        category: "67rdca3eeb7f6fgeed471822",
        prevue: "Превью статьи",
        img: "https://naukatehnika.com/files/journal/tehnika-vooruzhenie/15.07.20-varp-dvigatel/varp-dvigatel-2.jpg",
        textContent: "Текст статьи",
        rate: 18
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Миссия к комете Чурюмова-Герасименко",
        author: "67rdca3eeb7f6fgeed471815",
        date: 1684750091357,
        category: "67rdca3eeb7f6fgeed471814",
        prevue: "Превью статьи",
        img: "http://kosmos-x.net.ru/_nw/51/85741784.jpg",
        textContent: "Текст статьи",
        rate: 27
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Геостационарная орбита Земли. Разбираемся в вопросе",
        author: "67rdca3eeb7f6fgeed471816",
        date: 1684750047147,
        category: "67rdca3eeb7f6fgeed471818",
        prevue: "Превью статьи",
        img: "https://peremena-perm.ru/assets/images/news/2021/n2(4).jpg",
        textContent: "Текст статьи",
        rate: 19
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Название статьи",
        author: "67rdca3eeb7f6fgeed471817",
        date: 1684750097365,
        category: "67rdca3eeb7f6fgeed471818",
        prevue: "Превью статьи",
        img: "https://img2.goodfon.ru/original/1280x1024/2/c9/zvezdy-vselennaya-tumannost.jpg",
        textContent: "Текст статьи",
        rate: 33
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Название статьи",
        author: "67rdca3eeb7f6fgeed471819",
        date: 1684750010569,
        category: "67rdca3eeb7f6fgeed471818",
        prevue: "Превью статьи",
        img: "https://penfox.ru/wp-content/uploads/2022/02/uchenye-rasskazali-o-priblizhenii-k-zemle-komety-smerti-blog-1.jpg",
        textContent: "Текст статьи",
        rate: 7
    }
];

const fetchAll = () => {
    return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(articles);
        }, 200);
    });
};

const getById = (id) => {
    return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(articles.find((uarticle) => uarticle._id === id));
        }, 200);
    });
};

export default {
    // articles,
    fetchAll,
    getById
};
