import axios from 'axios';

export function getProducts() {
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/products");
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
    }
}

// export function postProducts(payload) { // Rompe
//     console.log(payload);
//     return async function(dispatch) {
//         const response = await axios.post("http://localhost:3001/postProduct", payload);
//         console.log(response.data);
//         return dispatch({
//             type: "POST_PRODUCT",
//             payload: response.data
//         })
//     }
// }

export function postProducts(payload) {
    return async function() {
        const response = await axios.post("http://localhost:3001/postProduct", payload);
        return response;
    }
}

export function getDetail(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/products?name=" + name);
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCategories() {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/categories');
            return dispatch({
                type: 'GET_CATEGORIES',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}