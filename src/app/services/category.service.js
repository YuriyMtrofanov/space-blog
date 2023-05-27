import httpService from "./http.service";

const categoryEndpoint = "category/"; // или "category/"

const categoryService = {
    get: async () => {
        const { data } = await httpService.get(categoryEndpoint);
        return data;
    }
};
export default categoryService;
