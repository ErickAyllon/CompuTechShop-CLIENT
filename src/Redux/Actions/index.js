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

export function postProducts(payload) {
    console.log(payload);
    return async function(dispatch) {
        const response = await axios.post("http://localhost:3001/postProduct", payload);
        return dispatch({
            type: "POST_PRODUCT",
            payload: response.data
        })
    }
}