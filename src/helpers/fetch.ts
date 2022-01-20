export const PORT = 'https://todoapp-server101.herokuapp.com' || process.env.PORT;


export const fetchData = (endpoint: string, data?: any, method = 'GET') => {

    const url = `${ PORT }/${ endpoint }`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

export const fetchToken = (endpoint: any, data?: any, method = 'GET') => {
    
    const url = `${ PORT }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });
    }
}