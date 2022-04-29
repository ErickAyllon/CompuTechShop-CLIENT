const initialState = {
  allProducts: [],
  products: [],
  users: [],
  productDetail: [],
  filteredByCategory: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        productDetail: []
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
          productDetail: action.payload,
          products: [],
      }
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        products: action.payload,
        productDetail: []
      }
    case "GET_PRODUCTS_BY_NAME":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productDetail: []
      }

    default:
      return state;
  }
}

export default rootReducer;
