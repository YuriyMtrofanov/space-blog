export const categoriesObject = {
    solarSystem: { _id: "67rdca3eeb7f6fgeed471818", name: "Солнечная система" },
    openSpace: { _id: "67rdca3eeb7f6fgeed471820", name: "Объекты открытого космоса" },
    spaceExploration: { _id: "67rdca3eeb7f6fgeed471814", name: "Исследование космоса" },
    universe: { _id: "67rdca3eeb7f6fgeed471822", name: "Вселенная" },
    news: { _id: "67rdca3eeb7f6fgeed471824", name: "Новости" },
    hobbyAstronomy: { _id: "67rdca3eeb7f6fgeed471829", name: "Любительская астрономия" }
};

export const categories = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Солнечная система" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Объекты открытого космоса" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Исследование космоса" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Вселенная" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Новости" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Любительская астрономия" }
];

function fetchAll() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoriesObject);
            // resolve(categories);
        }, 1000);
    });
};

export default {
    fetchAll
};
