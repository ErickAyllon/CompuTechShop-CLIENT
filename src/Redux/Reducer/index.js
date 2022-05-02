import {
  FILTER_BY_BRAND2,
  FILTER_BY_BRANDFILTER,
  CLEAN_FILTER,
} from "../Actions";

const initialState = {
  allProducts: [],
  products: [],
  users: [],
  userOne: [],
  productDetail: [],
  brand: [],
  allBrands: [],
  darkMode: true,
  categories: [],
  filteredByCategory: [],
  allProductsFilter: [],
  productsFilter: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        productDetail: [],
        productsFilter: []
      };
    case "GET_CATEGORIES": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "POST_PRODUCT":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        productDetail: action.payload,
        products: [],
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        products: action.payload,
        productsFilter: action.payload,
        allProductsFilter: action.payload,
        productDetail: [],
      };
    case "GET_PRODUCTS_BY_NAME":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productDetail: [],
      };
    case "POST_USER":
      return {
        ...state,
        userOne: action.payload,
      };
    case "FILTER_BY_BRAND": 
      return {
        ...state,
        products: action.payload,
      };

    case FILTER_BY_BRAND2: // Este
      const filtered =
        action.payload === "all"
          ? state.products
          : state.products.filter((el) => el.brand?.includes(action.payload));
      return {
        ...state,
        productsFilter: filtered,
      };


      
    case FILTER_BY_BRANDFILTER:
      const filtrazo =
        action.payload === "all"
          ? state.productsFilter
          : state.productsFilter.filter((el) =>
              el.brand?.includes(action.payload)
            );
      return {
        ...state,
        allProductsFilter: filtrazo,
      };

    case "DARKMODE":
      return {
        ...state,
        darkMode: action.payload,
      };

    case "CLEAN_DOGS":
      return {
        ...state,
      };

    case CLEAN_FILTER:
      return {
        ...state,
        detail: {},
      };
    default:
      return state;
  }
}

export default rootReducer;
