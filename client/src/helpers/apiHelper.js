import axios from 'axios';
import { LANGUAGE_NAME, TOKEN_NAME_IN_STORE } from '../constans/GlobalConstans';
import { getBrowserLang } from './GlobalHelper';

export const BASE_API_URL = `http://localhost:5000/api`;
export const API_CATEGORIES_URL = `${BASE_API_URL}/categories`;

const axiosClient = axios.create({
    baseURL: BASE_API_URL
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response.status === 204) {
            return Promise.resolve(response);
        }
        return response;
    },
    (error) => {
        const response = error.response;

        // if (response.status === 401) {
        //   window.location = '/login'
        // }

        return Promise.reject(response);
    }
);

class ApiHelper {
    static post (
        url, body, contentTypeParam, token, isStringify) {
        const authToken = token || ApiHelper.getAuthToken();
        const contentType = contentTypeParam || 'application/json';
        const finalBody = isStringify ? JSON.stringify(body) : body;

        const headers = {
            'Content-Type': contentType,
            'Authorization': ApiHelper.getTokenHeader(authToken),
            'language': ApiHelper.getLanguage()
        };
        return axiosClient.post(url, finalBody, { headers });
    }

    static put (
        url, body, contentTypeParam, token, isStringify, withoutAuth,
        onProgress
    ) {
        const authToken = token || ApiHelper.getAuthToken();
        const contentType = contentTypeParam || 'application/json';
        const finalBody = isStringify ? JSON.stringify(body) : body;

        const headers = {
            'Content-Type': contentType,
            'language': ApiHelper.getLanguage()
        };
        if (!withoutAuth) {
            // tslint:disable-next-line
            headers['Authorization'] = ApiHelper.getTokenHeader(authToken);
        }

        return axiosClient.put(url, finalBody, {
            headers,
            onUploadProgress: onProgress
        })
    }

    static patch (
        url, body, contentTypeParam, token, isStringify = true
    ) {
        const authToken = token || ApiHelper.getAuthToken();
        const contentType = contentTypeParam || 'application/json';
        const finalBody = isStringify ? JSON.stringify(body) : body;

        return axiosClient.patch(url, finalBody, {
            headers: {
                'Content-Type': contentType,
                'Authorization': ApiHelper.getTokenHeader(authToken),
                'language': ApiHelper.getLanguage()
            }
        })
    }

    static get (url, config, token) {
        const authToken = token || ApiHelper.getAuthToken();

        return axiosClient.get(url, {
            ...config,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ApiHelper.getTokenHeader(authToken),
                'Language': ApiHelper.getLanguage()
            }
        })
    }

    static delete (url, token) {
        const authToken = token || ApiHelper.getAuthToken();

        return axiosClient.delete(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ApiHelper.getTokenHeader(authToken),
                'Language': ApiHelper.getLanguage()
            }
        })
    }

    static async doRequest(url, type, ...rest){
        try {
            const response = await ApiHelper[type](url, ...rest);

            let data = {};
            if (response.body !== null) {
                data = await response;
            }

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject([error.message]);
        }
    }

    static getTokenHeader (authToken) {
        return authToken;
    };

    static getLanguage () {
        return localStorage.getItem(LANGUAGE_NAME) || getBrowserLang();
    };

    static getAuthToken () {
        return localStorage.getItem(TOKEN_NAME_IN_STORE);
    };

    static isAuthenticated = () => {
        return ApiHelper.getAuthToken() != null;
    };

    static getErrors (data, defaultError = 'Undefined error') {
        const type = typeof data;
        switch (type) {
            case 'string':
                return [data];
            case 'object':
                if (data.hasOwnProperty('error')) {
                    return [data.error];
                } else if (data.hasOwnProperty('message')) {
                    return [data.message];
                } else if (data.hasOwnProperty('errors')) {
                    return data.errors;
                }
                return defaultError;
            default:
                return defaultError;
        }
    };
}

export default ApiHelper
