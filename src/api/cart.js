import apiUrl from '../apiConfig'
import axios from 'axios'



//------------------ SHOW (one cart) ---------------

export const showCart = (cart, id) => {
    return axios({
        method:'GET',
        url: `${apiUrl}/cart/${id}`,
        data: {cart: cart}
    })
}

//------------------ CREATE (and PUSH items in cart) ---------------
export const cartItemPush = (cart, userId, itemId) => {
    return axios({
      url: `${apiUrl}/cart/${userId}/${itemId}`,
      method: 'POST', // change from GET to POST
      data: { cart: cart }
    });
  };
  
