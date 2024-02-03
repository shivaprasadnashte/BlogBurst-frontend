import Cookies from "js-cookie";

export const setToken = (token) => {
    Cookies.set("username",token.username)
    Cookies.set("userId",token.userId)
    Cookies.set("name",token.name)
};

export const getToken = () => {
    return {
        username:Cookies.get("username"),
        userId:Cookies.get("userId"),
        name:Cookies.get("name")
    }
}

export const removeToken = () => {
    Cookies.remove("username")
    Cookies.remove("userId")
    Cookies.remove("name")
}