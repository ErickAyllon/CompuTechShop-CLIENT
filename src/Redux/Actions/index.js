import axios from "axios";

export const GET_USER = 'GET_USER'
export const getUser = () => {
    return async (dispatch) => {
        var json = await axios.get('http://localhost:3001/users');
          return dispatch({
              type: 'GET_USER',
              payload: json.data
          })
    }
}