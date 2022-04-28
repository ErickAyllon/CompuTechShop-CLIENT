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

export function postProducts(payload) {
    return async function() {
        const response = await axios.post("http://localhost:3001/postProduct", payload);
        return response;
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
//  }

