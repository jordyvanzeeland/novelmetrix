export const fetchApi = async (method, uri, headers, body) => {
    const host = "http://localhost:8000";

    return fetch(host + uri, {
            method: method,
            ...(headers ? {headers: headers} : {}),
            ...(body ? {body: body} : {})
        })
        .then(response => response.json())
        .then(res => {
            return res;
        })
}

export const checkToken = async() => {
    var currentTime = new Date().getTime();
    var expireTime = new Date(localStorage.getItem("token_expired")).getTime();

    if(currentTime > expireTime){
        localStorage.clear();
    }
}