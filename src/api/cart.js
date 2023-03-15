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
// -------------------- SHOW All False Carts ---------------
export const allFalse = (cart, id) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/cart/checkout/${id}`,
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
  
//------------------  turn cart active to false ---------------
export const activeFalse = (cart, cartId) => {
  return axios({
    url: `${apiUrl}/cart/checkout/${cartId}`,
    method: 'PATCH',
    data: {cart: cart}
  })
}

//------------------- Reduce all item from cart -------------------
export const reduceItem = (cart, userId, cartId, itemId) => {
  return axios({
    url: `${apiUrl}/cart/${userId}/${cartId}/${itemId}`,
    method: 'PATCH',
    data: {
      quantity: - 1
    }
  })

}

//------------------- Reduce 1 item from cart -------------------
export const reduceOne = (cart, userId, cartId, itemId) => {
  return axios({
    url: `${apiUrl}/cart/remove/${userId}/${cartId}/${itemId}`,
    method: 'PATCH',
    data: {cart: cart}
  })
}
