import React from 'react'
import ShowItem from '../Item/ShowItem'
import { showCart } from '../../api/cart'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { Col } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure';


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

   // Loading screen display until the data is loaded
  if (cart.length === 0) {
    return <LoadingScreen />
  }

     // Check if there are any products in the cart
  if (cart.products.length === 0) {
    return <p> Your Cart is Empty, Have a look at our new collection!</p>
  }

   // Map over the products in the cart and render each product
   
   const allProductsInCart = cart.products.map(product => (
    <Col key={product._id}>
            <Figure>
            <Figure.Image width={350} height={180} alt='171x180' src={product.img} />
            {product.price}
          </Figure>
      
    </Col>
  ))
   
    // Calculate the total price of products in the cart
    const calculateTotalPrice = () => {
        return cart.products.reduce((total, product) => {
        return total + product.price
        }, 0)
    }

    const totalBill = calculateTotalPrice()

    // if (totalBill > 0){

    // }

  return (
    <div>
      This is a User's Show Cart :  
        {cart.id}
        Products:
        {allProductsInCart}
        Total Bill = {totalBill}
        
    
      
    </div>
  )
}



export default ShowCart

