import { TYPES } from "../Actions/shoppingCartActions";

const initialState = {
  allProducts: [],
  products: [],
  allProductsFilter: [],
  productsFilter: [],
  productsNotPriceChangeable: [],
  users: [],
  users2: [],
  productDetail: [],
  categories: [],
  darkMode: true,
  cart: JSON.parse(window.localStorage.getItem('carrito')) || [],
  shops: [],
  shopsFiltered: [],
  shopDetail: [],
  currentPage: 1,
  cartModified: [],
  shopping: [],
  payment: [],
  userPayment: [],
  totalUserPayment: [],
  userDetail: [],
  activeUser: [],
  authenticated: null,
  orders: [],
  userOrders: [],
  review: [],
  userActive: [],
  wishlist: [],
  prod: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      // let ordered = action.payload.sort(
      //   (a, b) => toNumber(b.calification) - toNumber(a.calification)
      // );
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        productsNotPriceChangeable: action.payload,
        productDetail: [],
        productsFilter: action.payload,
        prod: action.payload
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
    case "BUY_CART": {
      return {
        ...state,
        shopping: action.payload,
      };
    }
    case "GET_USER_DETAIL":
      return {
        ...state,
        userDetail: action.payload,
      };
    case "GET_ACTIVE_USER":
      return {
        ...state,
        activeUser: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        users: action.payload,
        usersFiltered: action.payload,
        users2: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        productDetail: action.payload,
        products: [],
      };
    case "FILTER_BY_CATEGORY":
      let orderedC = action.payload.sort(
        (a, b) => toNumber(b.calification) - toNumber(a.calification)
      );
      return {
        ...state,
        products: orderedC,
        productsFilter: orderedC,
        productsNotPriceChangeable: orderedC,
        productDetail: [],
      };
    case "GET_PRODUCTS_BY_NAME":
      let orderedD = action.payload.sort(
        (a, b) => toNumber(b.calification) - toNumber(a.calification)
      );
      return {
        ...state,
        products: orderedD,
        productsFilter: orderedD,
        productsNotPriceChangeable: orderedD,
        // allProducts: orderedD,
        productDetail: [],
      };
    case "FILTER_BY_BRAND":
      const filtered =
        // state.productsFilter.length > 0 ?
        //   action.payload === "all"
        //   ? state.products
        //   : state.productsFilter.filter((el) => el.brand?.includes(action.payload))
        // :
        action.payload === "all"
          ? state.products
          : state.products.filter((el) => el.brand?.includes(action.payload));
      return {
        ...state,
        productsFilter: filtered,
        productsNotPriceChangeable: filtered,
      };
    case "FILTER_BY_PRICE":
      function toNumber(something) {
        let result = parseInt(something.replace(".", ""));
        return Number(result);
      }
      let productsFiltered = state.productsNotPriceChangeable;
      let min = action.payload.min;
      let max = action.payload.max;
      const filteredP =
        productsFiltered.length > 0
          ? productsFiltered.filter((el) =>
            min && max
              ? toNumber(el.price) >= min && toNumber(el.price) <= max
              : min && !max
                ? toNumber(el.price) >= min
                : !min && max
                  ? toNumber(el.price) <= max
                  : productsFiltered
          )
          : null;
      return {
        ...state,
        productsFilter: filteredP,
      };
    case "ORDER_PRODUCTS":
      const order =
        state.productsFilter.length > 0
          ? action.payload === "more-relevants"
            ? state.productsFilter.sort(
              (a, b) => toNumber(b.calification) - toNumber(a.calification)
            )
            : action.payload === "higher-price"
              ? state.productsFilter.sort(
                (a, b) => toNumber(b.price) - toNumber(a.price)
              )
              : action.payload === "lower-price"
                ? state.productsFilter.sort(
                  (a, b) => toNumber(a.price) - toNumber(b.price)
                )
                : null
          : state.productsFilter.length === 0
            ? action.payload === "more-relevants"
              ? state.products.sort(
                (a, b) => toNumber(b.calification) - toNumber(a.calification)
              )
              : action.payload === "higher-price"
                ? state.products.sort(
                  (a, b) => toNumber(b.price) - toNumber(a.price)
                )
                : action.payload === "lower-price"
                  ? state.products.sort(
                    (a, b) => toNumber(a.price) - toNumber(b.price)
                  )
                  : null
            : null;
      return {
        ...state,
        productsFilter: order,
        // productsNotPriceChangeable: order
      };
    case "DARKMODE":
      return {
        ...state,
        darkMode: action.payload
      };

    case TYPES.ADD_TO_CART: {
      let newItem = state.prod.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? {
                ...item,
                quantity: item.quantity + 1,
                // price: Number(item.price),
                // total: item.price * item.cuantity,
              }
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

    case "GET_SHOPS":
      return {
        ...state,
        shops: action.payload,
        shopsFiltered: action.payload,
      };
    case "GET_SHOP_BY_ID":
      return {
        ...state,
        shopDetail: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
      };
    case "SORT_USER_BY_LASTNAME":
      const sort =
        state.usersFiltered.length > 0
          ? action.payload === "a-z"
            ? state.usersFiltered.sort((a, b) =>
              a.family_name.localeCompare(b.family_name)
            )
            : action.payload === "z-a"
              ? state.usersFiltered.sort((a, b) =>
                b.family_name.localeCompare(a.family_name)
              )
              : state.usersFiltered
          : null;
      return {
        ...state,
        usersFiltered: sort,
      };
    case "SORT_ORDER_BY_EMAIL":
      const sortOrder =
        state.shopsFiltered.length > 0
          ? action.payload === "a-z"
            ? state.shopsFiltered.sort((a, b) =>
              a.userEmail.localeCompare(b.userEmail)
            )
            : action.payload === "z-a"
              ? state.shopsFiltered.sort((a, b) =>
                b.userEmail.localeCompare(a.userEmail)
              )
              : state.shopsFiltered
          : null;
      return {
        ...state,
        usersFiltered: sortOrder,
      };
    case "SORT_ORDER_BY_AMOUNT":
      const sortAmount =
        state.shopsFiltered.length > 0
          ? action.payload === "lower-amount"
            ? state.shopsFiltered.sort(
              (a, b) => a.total_paid_amount - b.total_paid_amount
            )
            : action.payload === "higher-amount"
              ? state.shopsFiltered.sort(
                (a, b) => b.total_paid_amount - a.total_paid_amount
              )
              : state.shopsFiltered
          : null;
      return {
        ...state,
        usersFiltered: sortAmount,
      };
    case "FILTER_ORDER_BY_STATE":
      const orders =
        action.payload === "In process"
          ? state.shops.filter((el) => el.state === "In process")
          : action.payload === "Paid"
            ? state.shops.filter((el) => el.state === "Paid")
            : action.payload === "On its way"
              ? state.shops.filter((el) => el.state === "On its way")
              : action.payload === "Cancelled"
                ? state.shops.filter((el) => el.state === "Cancelled")
                : action.payload === "Received"
                  ? state.shops.filter((el) => el.state === "Received")
                  : state.shops;
      return {
        ...state,
        shopsFiltered: orders,
      };
    case "UPDATE_SHOP":
      return {
        ...state,
      };

    case "GET_PAYMENT": {
      return {
        ...state,
        payment: action.payload,
      };
    }
    case "GET_PAYMENT_USER": {
      return {
        ...state,
        userPayment: action.payload,
      };
    }
    case "GET_TOTAL_USER_PAYMENTS": {
      return {
        ...state,
        totalUserPayment: action.payload,
      };
    }
    case "AUTHENTICATE": {
      return {
        ...state,
        authenticated: action.payload,
      };
    }
    case "UPDATE_USER": {
      return {
        ...state,
      };
    }
    case "GET_ORDERS": {
      return {
        ...state,
        orders: action.payload,
      };
    }
    case "GET_ORDERS_BY_EMAIL": {
      return {
        ...state,
        userOrders: action.payload,
      };
    }
    case "GET_REVIEW": {
      return {
        ...state,
        review: action.payload,
      };
    }
    case TYPES.USER_ACTIVE: {
      return {
        ...state,
        userActive: action.payload,
      };
    }
    case 'DELETE_REVIEW': {
      return {
        ...state
      }
    }
    case 'GET_WISHLIST': {
      return {
        ...state,
        wishlist: action.payload
      }
    }
    case 'POST_WISHLIST': {
      return {
        ...state,
      }
    }
    case 'DELETE_WISHLIST': {
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
