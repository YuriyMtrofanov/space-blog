import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndpoint = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint);
        // console.log("http service, get: ", data);
        return data;
    },
    // create: async (payload) => {
    //     const { data } = await httpService.put(
    //         userEndpoint + payload._id,
    //         payload
    //     );
    //     return data;
    // },
    getCurrentUser: async () => {
        try {
            const { data } = await httpService.get(
                userEndpoint + localStorageService.getUserId()
            );
            console.log("getCurrentUser: ", userEndpoint + localStorageService.getUserId());
            return data;
        } catch (error) {
            console.log("getCurrentUser: ", error.message);
        }
    },
    edit: async (payload) => {
        const { data } = await httpService.patch(userEndpoint + localStorageService.getUserId(), payload);
        return data;
    }
};
export default userService;
