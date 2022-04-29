const initialState = {
  products: [],
  allProducts: [],
  users: [],
  userOne:[],
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
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filteredByCategory: action.payload,
      }
      case "POST_USER":
      return {
        ...state,
        userOne: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
