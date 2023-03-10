import React from 'react'
import ShowItem from '../Item/ShowItem'
import { showCart } from '../../api/cart'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { Col } from 'react-bootstrap'


function ShowCart(props) {
    const {user} = props
    console.log(`-- SHOW CART Props`, props)
    const [cart, setCart] = useState([])
    const { cartId } = useParams()

    // Now Make Api Call to show cart
    useEffect(() => {
        showCart(cart, user._id)
            .then(res=> setCart(res.data.cart))
            
    }, [])


    console.log(`---- NEW CART ---`, cart.products)

    // Loading screen display untill the data is loaded
    // if(!cart) {
    //     return <LoadingScreen/>
    // } else if(cart.products.length === 0) {
    //     return <p> Your Cart is Empty, Have a look at our new collection!</p>
    // }


    // // Now Map Over the Array
    // let allProductsInCart = cart.products.map(product => (
    //     <Col>
    //     {product.price}
    //     </Col>
    // ))

  return (
    <div>
      This is a User's Show Cart :  
        {cart.id}
      
    </div>
  )
}



export default ShowCart

