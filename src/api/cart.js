import apiUrl from '../apiConfig'
import axios from 'axios'



//------------------ SHOW (one cart) ---------------
export const showCart = (id) => {
    return axios(`${apiUrl}/cart/${id}`)
}

//------------------ CREATE (and PUSH items in cart) ---------------
export const cartItemPush = (cart, userId, itemId) => {
    return axios({
      url: `${apiUrl}/cart/${userId}/${itemId}`,
      method: 'POST', // change from GET to POST
      data: { cart: cart }
    });
  };
  