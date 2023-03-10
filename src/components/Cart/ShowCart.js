import React from 'react'
import ShowItem from '../Item/ShowItem'
import { showCart } from '../../api/cart'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function ShowCart(props) {
    const {user} = props
    console.log(`-- SHOW CART USER`, props)
    const [cart, setCart] = useState([])
    const { cartId } = useParams()

    // Now Make Api Call to show cart
    useEffect(() => {
        showCart(cart, user)
            .then(res=> console.log(`--- CART SHOW ---`, res))
    }, [])


    console.log(`---- ShowCart (props) ---`, props)
  return (
    <div>
      This is a User's Show Cart
    </div>
  )
}



export default ShowCart

