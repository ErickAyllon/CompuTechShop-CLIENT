import axios from "axios";

export const GET_USER = "GET_USER";
export const getUser = () => {
  return async (dispatch) => {
    var json = await axios.get("http://localhost:3001/users");
    return dispatch({
      type: "GET_USER",
      payload: json.data,
    });
  };
};

export function getProducts() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/products");
    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}

export function getDetail(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/products?name=" + name);

      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/categories");
      return dispatch({
        type: "GET_CATEGORIES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postProducts(payload) {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/postProduct",
      payload
    );
    return response;
  };
}

export const filterByCategory = (category) => {
  return async (dispatch) => {
    var json = await axios.get(
      "http://localhost:3001/productCategory?category=" + category
    );
    return dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: json.data,
    });
  };
};
export const POST_USER = "POST_USER";
export function postUser(payload) {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/postUser",
      payload
    );
    return response;
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/products?name=" + name);
      return dispatch({
        type: "GET_PRODUCTS_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const filterByBrand = (brand) => {
  return async (dispatch) => {
    var json = await axios.get(
      "http://localhost:3001/productBrand?brand=" + brand
    );

    return dispatch({
      type: "FILTER_BY_BRAND",
      payload: json.data,
    });
  };
};

export const FILTER_BY_BRAND2 = "FILTER_BY_BRAND2";
export function filterByBrandCategories(payload) {
  return {
    type: FILTER_BY_BRAND2,
    payload,
  };
}

// export const ORDER_BY_PRICE = "ORDER_BY_PRICE"
// export function orderByPrice (payload) {
//   return {
//     type: ORDER_BY_PRICE,
//     payload
//   }
// }

export function darkMode(payload) {
  console.log("Payload: " + payload);
  return {
    type: "DARKMODE",
    payload: payload,
  };
}
