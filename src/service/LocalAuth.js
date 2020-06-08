export const getAuthenticate = () => {
    let user = localStorage.getItem("token");

    if (user) {
        return true;
    } else {
        return false;
    }
};

export const signout = () => {
    localStorage.clear();
};

export const authenticate = (token) => {
    localStorage.setItem("token", token);
    console.log(token)
};
export const getToken = () => {
    return localStorage.getItem("token")
};