const initialState = {
  allProducts: [],
  products: [],
  users: [],
  userOne: [],
  productDetail: [],
  categories: [],
  productsFilter: [],
  darkMode: true,
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
    case 'FILTER_BY_BRAND': 
      const filtered = state.productsFilter.length > 0 ?
        action.payload === "all"
        ? state.products
        : state.productsFilter.filter((el) => el.brand?.includes(action.payload))
      :
        action.payload === "all"
          ? state.products
          : state.products.filter((el) => el.brand?.includes(action.payload))
      return {
        ...state,
        productsFilter: filtered,
      };
    case 'FILTER_BY_PRICE':
      function toNumber(something) {
        let result = parseInt(something.replace('.', ''))
        return Number(result)
      }
      const filteredP = state.productsFilter.length > 0 ?
        state.productsFilter.filter((el) => toNumber(el.price) >= action.payload.min && toNumber(el.price) <= action.payload.max)
        : state.products.filter((el) => toNumber(el.price) >= action.payload.min && toNumber(el.price) <= action.payload.max);
        console.log(filteredP)
      return {
        ...state,
        productsFilter: filteredP,
      };
    case "DARKMODE":
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;