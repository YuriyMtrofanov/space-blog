import httpService from "./http.service";

const articleEndpoint = "article/";

const articleService = {
    get: async () => {
        const { data } = await httpService.get(articleEndpoint);
        return data;
    },
    // getById: async (payload) => {
    //     const { data } = await httpService.get(articleEndpoint + payload);
    //     return data;
    // },
    create: async (payload) => {
        const { data } = await httpService.post(
            articleEndpoint,
            payload
        );
        return data;
    },
    // требует доработки...
    edit: async (articleId, payload) => {
        const { data } = await httpService.patch(articleEndpoint + articleId, payload); // payload._id - id статьи
        return data;
    },
    delete: async (articleId) => {
        const { data } = await httpService.delete(articleEndpoint + articleId);
        return data;
    }
};

export default articleService;
