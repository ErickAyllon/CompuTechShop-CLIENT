import {
  GET_USER,
  FILTER_BY_CATEGORY_KEYBOARDS,
  FILTER_BY_CATEGORY_MONITOR,
  FILTER_BY_CATEGORY_MOUSES,
  FILTER_BY_CATEGORY_HEADSETS,
} from "../Actions";

const initialState = {
  products: [],
  allProducts: [],
  users: [],
  productDetail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };
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
    case 'GET_DETAILS':
      return {
          ...state,
          productDetail: action.payload
      }
    case FILTER_BY_CATEGORY_MOUSES:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };
    case FILTER_BY_CATEGORY_MONITOR:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };
    case FILTER_BY_CATEGORY_KEYBOARDS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };
    case FILTER_BY_CATEGORY_HEADSETS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
