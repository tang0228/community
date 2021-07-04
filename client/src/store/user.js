import * as userServ from "../api/user";

export default {
    namespaced: true,
    state: {
        user: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null,
        role: localStorage.getItem("role") ? localStorage.getItem("role") : 'user',
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async login({ commit }, { homeId, loginPwd }) {
            const result = await userServ.login(homeId, loginPwd);
            if (result.data) {
                localStorage.setItem("role", result.data.role);
                localStorage.setItem("ID", result.data.homeId);
                localStorage.setItem("user", JSON.stringify(result.data));
                commit("setUser", result.data);
                return result.data;
            }
            return null;
        },
        async whoAmI({ commit }) {
            try {
                const result = await userServ.whoAmI();
                commit("setUser", result);
            } catch {
                commit("setUser", null);
            }
        },
    }
}