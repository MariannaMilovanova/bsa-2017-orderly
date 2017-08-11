
function callAddUserApi(credentials) {
    const url = 'http://localhost:2020/auth/signup';
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    return fetch(url, {method: 'POST', headers: headers, body: JSON.stringify(credentials)})
        .then((response) => response.json())
        .catch((err) => console.log(err));
}

export const fetchSignUp = (credentials) => callAddUserApi(credentials);