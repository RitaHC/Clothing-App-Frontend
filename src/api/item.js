import apiUrl from '../apiConfig'
import axios from 'axios'

//------------------ INDEX (all items) ---------------

export const allitems = () => {
    return axios(`${apiUrl}/items/`)
}


//------------------ SHOW (one item) ---------------
export const showItem = (id) => {
    return axios(`${apiUrl}/items/${id}`)
}