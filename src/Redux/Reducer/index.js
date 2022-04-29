const initialState = {
  allProducts: [],
  products: [],
  users: [],
  userOne:[],
  productDetail: [],
  filteredByCategory: [],
  brand: [],
  allBrands:[],
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
    case "GET_DETAILS":
      return {
<<<<<<< HEAD
        ...state,
        productDetail: action.payload,
      };
=======
          ...state,
          productDetail: action.payload,
          products: [],
      }
>>>>>>> develop
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        products: action.payload,
<<<<<<< HEAD
      };
=======
        productDetail: []
      }
>>>>>>> develop
    case "GET_PRODUCTS_BY_NAME":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
<<<<<<< HEAD
      };

=======
        productDetail: []
      }
      case "POST_USER":
      return {
        ...state,
        userOne: action.payload,
      };
      case "FILTER_BY_BRAND":
      
        return {
          ...state,
          products: action.payload,
          
        }
>>>>>>> develop
    default:
      return state;
  }
}

export default rootReducer;
