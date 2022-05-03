import { TYPES } from "../Actions/shoppingCartActions";

const initialState = {
  allProducts: [],
  products: [],
  users: [],
  userOne: [],
  productDetail: [],
  categories: [],
  productsFilter: [],
  darkMode: true,
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        productDetail: [],
        productsFilter: [],
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
    case "FILTER_BY_BRAND":
      const filtered =
        state.productsFilter.length > 0
          ? action.payload === "all"
            ? state.products
            : state.productsFilter.filter((el) =>
                el.brand?.includes(action.payload)
              )
          : action.payload === "all"
          ? state.products
          : state.products.filter((el) => el.brand?.includes(action.payload));
      return {
        ...state,
        productsFilter: filtered,
      };
    case "FILTER_BY_PRICE":
      function toNumber(something) {
        let result = parseInt(something.replace(".", ""));
        return Number(result);
      }
      const filteredP =
        state.productsFilter.length > 0
          ? state.productsFilter.filter(
              (el) =>
                toNumber(el.price) >= action.payload.min &&
                toNumber(el.price) <= action.payload.max
            )
          : state.products.filter(
              (el) =>
                toNumber(el.price) >= action.payload.min &&
                toNumber(el.price) <= action.payload.max
            );
      console.log(filteredP);
      return {
        ...state,
        productsFilter: filteredP,
      };
    case "DARKMODE":
      return {
        ...state,
        darkMode: action.payload,
      };

    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      let clean = initialState.cart;
      return { ...state, cart: clean };

    default:
      return state;
  }
}

export default rootReducer;
