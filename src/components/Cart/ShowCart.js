import React from 'react'
import ShowItem from '../Item/ShowItem'
import { showCart } from '../../api/cart'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { Col } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure';

// Imports for Stripe
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { ToastContainer, toast } from 'react-toast'
import { Toast } from 'react-bootstrap';


function ShowCart(props) {
    const {user} = props
    console.log(`-- SHOW CART Props`, props)
    const [cart, setCart] = useState([])
    const { cartId } = useParams()

    	//=============================  STRIPE PAYMENTS ====================
        const [item, setItem] = useState({
            name: user.email,
            price: 10,
            description: 'This is sample description'
        })
        //====================================================================

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

    // //=============================  STRIPE PAYMENTS ====================
    // const [item, setItem] = useState({
    //     name: "Sample Name",
    //     price: 10,
    //     description: 'This is sample description'
    // })
    // //====================================================================

    //=============================  STRIPE PAYMENTS ====================

    
        // setItem({name: user.email,
        // price: totalBill,
        // description: 'This is sample description'})
    



        async function handleToken(token, addresses) {
                const response = await axios.post('http://localhost:8000/checkout/', {token,
                    item: {
                    name: user.email,
                    price: totalBill,
                    description: 'This is sample description'
                    }
                })

                
                // take response and check status
                console.log(response.status)

                if(response.status === 200) {
                    console.log('Toastttttttt')
                    
                    toast.success('Success Payment Completed')
                    return(
                    <Toast>
                        <Toast.Header>
                            {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
                            <strong className="me-auto">Bootstrap</strong>
                            <small>Payment Successful</small>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    )
                } else {
                    toast('Failure payment is not completed', {type: 'failure'})
                }
            }





    
    
    //====================================================================

   

  return (
    <div>
      This is a User's Show Cart :  
        {cart.id}
        Products:
        {allProductsInCart}
        Total Bill = {totalBill}


        <h1>STRIPE PAYMENT TESTING</h1>
			<br/><br/>
			<div class="form-group container">
				<StripeCheckout 
				className= 'center'
				stripeKey="pk_test_51MjOxGGWn0da1VDTZPMDt4ab4vsAOBSNI9oNrXq7gwxVLCHtX0EX8NicbDcPtl2muAJjOJOhePjgVfCBJA1lW7DF00q3pxqjlN"
				token={handleToken}
				amount={totalBill*100}
				name={user.email}
				billingAddress
				shippingAddress
				/>
		    </div>
        
    
      
    </div>
  )
}



export default ShowCart

