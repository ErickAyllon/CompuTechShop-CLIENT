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
export const FILTER_BY_CATEGORY_MONITOR = 'FILTER_BY_CATEGORY_MONITOR'
export const filterByCategoryMonitor = () => {
    return async (dispatch) => {
        var json = await axios.get('http://localhost:3001/productCategory?category=Monitors');
          return dispatch({
              type: 'FILTER_BY_CATEGORY_MONITOR',
              payload: json.data
          })
     } 
 }
 export const FILTER_BY_CATEGORY_MOUSES = 'FILTER_BY_CATEGORY_MOUSES'
export const filterByCategoryMouses = () => {
    return async (dispatch) => {
        var json = await axios.get('http://localhost:3001/productCategory?category=Mouses');
          return dispatch({
              type: 'FILTER_BY_CATEGORY_MOUSES',
              payload: json.data
          })
     } 
 }
// export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
// export function filterByCategory(payload) {
//     return async function(dispatch) {
//         var json = await axios.get("http://localhost:3001/productCategory?category=" + payload);
       
//         return dispatch({
//             type: 'FILTER_BY_CATEGORY',
//             payload: json.data
//         })
//     }
// }

// export const FILTER_BY_BRAND = 'FILTER_BY_BRAND'
// export function filterByBrand ()

export const FILTER_BY_CATEGORY_KEYBOARDS = 'FILTER_BY_CATEGORY_KEYBOARDS'
export const filterByCategoryKeyboards = () => {
    return async (dispatch) => {
        var json = await axios.get('http://localhost:3001/productCategory?category=Keyboards');
          return dispatch({
              type: 'FILTER_BY_CATEGORY_KEYBOARDS',
              payload: json.data
          })
      } 
     }

     export const FILTER_BY_CATEGORY_HEADSETS = 'FILTER_BY_CATEGORY_HEADSETS'
export const filterByCategoryHeadsets = () => {
    return async (dispatch) => {
        var json = await axios.get('http://localhost:3001/productCategory?category=Headsets');
          return dispatch({
              type: 'FILTER_BY_CATEGORY_HEADSETS',
              payload: json.data
          })
     } 
 }