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
export const CLEAN_FILTER = "CLEAN_FILTER";
export function cleanFilter() {
  return {
    type: "CLEAN_FILTER",
    payload: {},
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

export function filterByBrand(payload) {
  return {
    type: "FILTER_BY_BRAND",
    payload,
  };
}
export function filterByPrice(payload) {
  return {
    type: "FILTER_BY_PRICE",
    payload,
  };
}
export const FILTER_BY_BRANDFILTER = "FILTER_BY_BRANDFILTER";
export function filterByBrandCategoriesFilter(payload) {
  return {
    type: FILTER_BY_BRANDFILTER,
    payload,
  };
}

export function cleanDog() {
  return {
    type: "CLEAN_DOGS",
    payload: {},
  };
}

export function orderProducts(payload) {
  return {
    type: "ORDER_PRODUCTS",
    payload,
  };
}

export function darkMode(payload) {
  return {
    type: "DARKMODE",
    payload: payload,
  };
}

export function getShops() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/getShops");
      return dispatch({
        type: "GET_SHOPS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// export function getUserById(userId) {
//   return async (dispatch) => {
//     var json = await axios.get("http://localhost:3001/users/" + userId);
//     return dispatch({
//       type: "GET_USER_BY_ID",
//       payload: json.data,
//     });
//   };
// };

export function getShopById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/getShops/" + id);
      return dispatch({
        type: "GET_SHOP_BY_ID",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function setCurrentPage(payload) {
  return {
    type: "SET_CURRENT_PAGE",
    payload: payload,
  };
}

export function postCategory(payload) {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/postCategory",
      payload
    );
    return response;
  };
}

export function deleteCategory(id) {
  return async function(dispatch) {
      try {
          const json = await axios.delete('http://localhost:3001/deleteCategory/' + id)
          return dispatch({
              type: "DELETE_CATEGORY",
              payload: json.data
          })
      } catch (error) {
          console.log('catch: ' + error);
      }
  }
}

export function deleteProduct(id) {
  return async function(dispatch) {
      try {
          const json = await axios.delete('http://localhost:3001/deleteProduct/' + id)
          return dispatch({
              type: "DELETE_PRODUCT",
              payload: json.data
          })
      } catch (error) {
          console.log('catch: ' + error);
      }
  }
}

export function updateProduct(id, payload) {
  return async function(dispatch) {
      try {
          const json = await axios.delete('http://localhost:3001/updateProduct/' + id, payload)
          return dispatch({
              type: "UPDATE_PRODUCT",
              payload: json.data
          })
      } catch (error) {
          console.log('catch: ' + error);
      }
  }
}
