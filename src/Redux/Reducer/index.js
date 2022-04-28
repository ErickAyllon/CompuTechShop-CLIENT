const initialState = {
  products: [],
  allProducts: [],
  productDetail: [],
  categories: []
}

function rootReducer (state = initialState, action) {
  switch(action.type) {
    case 'GET_PRODUCTS':
        return {
            ...state,
            allProducts: action.payload,
        }
    case 'POST_PRODUCT':
        return {
          ...state,
          allProducts: action.payload
        }
    case 'GET_DETAILS':
      return {
          ...state,
          productDetail: action.payload
      }
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
        default:
          return state;
    }
}

export default rootReducer;
