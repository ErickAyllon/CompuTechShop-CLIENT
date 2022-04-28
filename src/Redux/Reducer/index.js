const initialState = {
  products: [],
  allProducts: []
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
        default:
          return state;
    }
}

export default rootReducer;
