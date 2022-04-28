import { GET_USER } from "../Actions";

const initialState = {
  products: [],
  users: []
}

function rootReducer (state = initialState, action) {  
  switch(action.type) {
    case 'GET_PRODUCTS':
        return {
            ...state,
            products: action.payload,
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
