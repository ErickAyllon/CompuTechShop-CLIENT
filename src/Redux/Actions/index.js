import axios from "axios";

export const GET_USER = 'GET_USER'
export const getUser = () => {
    return async (dispatch) => {
        var json = await axios.get('http://localhost:3001/users');
          return dispatch({
              type: 'GET_USER',
              payload: json.data
          })
     } 
 }

export function getProducts() {
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/products");
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
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

export function postProducts(payload) {
    return async function() {
        const response = await axios.post("http://localhost:3001/postProduct", payload);
        return response;
    }
 }

export const filterByCategory = (category) => {
    return async (dispatch) => {
    var json = await axios.get('http://localhost:3001/productCategory?category=' + category);
        return dispatch({
            type: 'FILTER_BY_CATEGORY',
            payload: json.data
        })
    } 
}

