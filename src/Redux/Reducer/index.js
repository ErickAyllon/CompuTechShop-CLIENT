import { GET_USER } from "../Actions";

const initialState = {
  products: [],
  allProducts: [],
  users: []
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
      case 'GET_USER':
        return{
          ...state,
          users: action.payload
        }  
        default:
          return state;
    }
}

export default rootReducer;
