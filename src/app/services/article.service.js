import httpService from "./http.service";

const articleEndpoint = "articles/";

const articleService = {
    get: async () => {
        const { data } = await httpService.get(articleEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            articleEndpoint + payload._id,
            payload
        );
        return data;
    },
    // требует доработки...
    edit: async (payload) => {
        const { data } = await httpService.patch(articleEndpoint + payload._id, payload); // payload._id - id статьи
        return data;
    },
    delete: async (articleId) => {
        const { data } = await httpService.delete(articleEndpoint + articleId);
        return data;
    }
};

export default articleService;