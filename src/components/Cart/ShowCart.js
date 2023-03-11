import React from 'react'
import ShowItem from '../Item/ShowItem'
import { showCart } from '../../api/cart'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { Col, Row, Button } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure';
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';


// Imports for Stripe
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { ToastContainer, toast } from 'react-toast'
import { Toast } from 'react-bootstrap';


function ShowCart(props) {
    const {user} = props
    // console.log(`-- SHOW CART Props`, props)
    const [cart, setCart] = useState([])
    const { cartId } = useParams()
    const nav = useNavigate()

    //================== Count items Function =============
    // const fc = (val) => {
    //     return val.reduce((acc, item) => {
    //       const id = item.id
    //       acc[id] ? acc[id] += 1 : acc[id] = 1
    //       return acc
    //     }, {})
    //   }

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


    // console.log(`---- NEW CART ---`, cart.products)

   // Loading screen display until the data is loaded
  if (cart.length === 0) {
    return <LoadingScreen />
  }

     // Check if there are any products in the cart
  if (cart.products.length === 0) {
    return <p> Your Cart is Empty, Have a look at our new collection!</p>
  }

   // Map over the products in the cart and render each product




    const repetition = cart.products.reduce((acc, item) => {
        const id = item._id
        const img = item.img
            acc[id] ? acc[id] += 1 : acc[id] = 1
            if (id.length > 1){
                return acc
            } 
            
    }, {})
        // console.log(`Item number repetitions`, repetition)


       
//     const repetition = cart.products.reduce((acc, item) => {
//         const img = item.img
//             acc[img] ? acc[img] += 1 : acc[img] = 1
//             if (img.length > 1){
//                 return acc
//             } 
//     }, {})
//     console.log(`Item number repetitions`, repetition)


//    const allProductsInCart = cart.products.map(product => {
//     if (product.img.length === 1){
//         return null
//     }
//      return(
//     <Col key={product._id}>
//             <Figure>
//                 <Figure.Image width={350} height={180} alt='171x180' src={product.img} />
//                 {product.price}
//             </Figure>     
//     </Col>  
//   )
// }
// )
////////////////////// Calculating the items an item exist in the cart ///////////////////

// adding an item only once in the itemNumber 
const itemNumber = {};
cart.products.forEach(item => {
  const title = item.title;
  if (title && !(title in itemNumber)) {
    itemNumber[title] = 1;
  } else if (title) {
    itemNumber[title]++;
  }
})


// Displaying the name and no. of items in cart
const repetitions = Object.entries(itemNumber).map(([title, count]) => (
    <p key={title}>
     * {title} : {count} 
     <Button > Reduce </Button>
    </p>
  ));


/////////////////////////////////// Conditional Rendering of img //////////
const alreadyRendered = {};
const allProductsInCart = cart.products.map(product => {
    // if it already exist
  if (product.img.length === 1 || product.img in alreadyRendered) {
    return null;
  }
  alreadyRendered[product.img] = true;
  return (
    <Col key={product._id}>
      <Figure>
        <Figure.Image width={350} height={180} alt='171x180' src={product.img} />
        {product.price} 
        
      </Figure>
    </Col>
  );
}).filter(Boolean);





  
   
    // Calculate the total price of products in the cart
    const calculateTotalPrice = () => {
        return cart.products.reduce((total, product) => {
        return total + product.price
        }, 0)
    }
    // Total amount of Bill
    const totalBill = calculateTotalPrice()

    //=============================  STRIPE PAYMENTS  API Call====================

        async function handleToken(token, addresses) {
                const response = await axios.post('http://localhost:8000/checkout/', {token,
                    item: {
                    name: user.email,
                    price: totalBill,
                    description: 'This is sample description'
                    }
                })

                if(response.status === 200) {
                    nav('/receipt', {state: {cart: cart, totalBill: totalBill}} )
                } else {
                    toast('Failure payment is not completed', {type: 'failure'})
                }
            }
    //====================================================================

   

  return (
    <div>
      
    
        
        <h1>My Cart</h1>
    <Container>
      <Row>
        <Col>
            {allProductsInCart}
        </Col>
        <Col>
            {repetitions}
            Total Bill = {totalBill}
        </Col>
      </Row>
      </Container>


        
			
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

