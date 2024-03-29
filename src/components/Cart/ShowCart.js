import React from 'react'
import ShowItem from '../Item/ShowItem'
import { showCart, cartItemPush } from '../../api/cart'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { Col, Row, Button } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure';
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { reduceItem, reduceOne } from '../../api/cart'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast';


// Imports for Stripe
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"




function ShowCart(props) {
    const {user} = props
    // console.log(`-- SHOW CART Props`, props)
    const [cart, setCart] = useState([])
    const { cartId } = useParams()
    const nav = useNavigate()
    const [newCart, setNewCart] = useState(null)
    const [cartUpdate, setCartUpdate] = useState(null)
    const [cartPush, setCartPush] = useState(null)
    const [buttonClick, setButtonClick] = useState(false);



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
            .then(res=> {
                // console.log(`--- TRIGGER REFRESH----`, buttonClick)
                setCart(res.data.cart)})
            .then(() => setButtonClick(false)); // reset buttonClick to false when the API call is complete
        
        
            
    }, [buttonClick])


    // console.log(`---- NEW CART ---`, cart.products)

   // Loading screen display until the data is loaded
  if (cart.length === 0) {
    return <LoadingScreen />
  }

     // Check if there are any products in the cart
  if (cart.products.length === 0) {
    return <h1 id="emptyCart"> Your Cart is Empty, Have a look at our <Link to="/products">new collection!</Link>
           </h1>
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

// Calculate the no. of times an item appears in the cart.products array
const itemNumber = {};
cart.products.forEach(item => {
  const title = item.title;
  const itemId = item._id;
  if (title && !(title in itemNumber)) {
    itemNumber[title] = {count: 1, itemId};
  } else if (title) {
    itemNumber[title].count++
  }
})
// console.log(`Cart UPDATE`, cartUpdate)
// Displaying the name and no. of items in cart
const repetitions = Object.entries(itemNumber).map(([title, {count, itemId}]) => (
  <>
  <p key={title}>
    * {title} : {'Quantity: ' + count} </p>

   

                   
    <Button variant="dark" onClick={() => {
        cartItemPush(cart, user._id, itemId)
            .then((res) => {
            setCartUpdate(res.data.products);
        })
        setButtonClick(prev=> !prev)
        }}>
        Add To Cart
    </Button>

                  
    <Button variant="dark" onClick={() => {
        reduceOne(newCart, user._id, cart._id, itemId)
            .then((res) => {
            setCartUpdate(res.data.products);
            })
        setButtonClick(prev=> !prev) }}>
        Reduce
    </Button>

    <Button variant="danger" onClick={() => {
        reduceItem(newCart, user._id, cart._id, itemId)
        .then((res) => {
        setCartUpdate(res.data.products)
        }
        )
        setButtonClick(prev=> !prev)}}>
        Delete
    </Button>
    </>
  
))


  

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
        <Figure.Image width={350} height={180} alt='171x180' src={product.img} /> <br/>
        Price : {product.price} 

        
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
                    nav('/receipt', {state: {cart: cart, totalBill: totalBill}} )}
                // } else {
                //     toast('Failure payment is not completed', {type: 'failure'})
                // }
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
            <br/>
            Total Bill = {totalBill}

            
        </Col>
      </Row>
      </Container>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Total Bill</th>
            <th>Click to Pay</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>${totalBill}</td>
            <td>
            <StripeCheckout 
              className= 'center'
              stripeKey="pk_test_51MjOxGGWn0da1VDTZPMDt4ab4vsAOBSNI9oNrXq7gwxVLCHtX0EX8NicbDcPtl2muAJjOJOhePjgVfCBJA1lW7DF00q3pxqjlN"
              token={handleToken}
              amount={totalBill*100}
              name={user.email}
              billingAddress
              shippingAddress
            />
            </td>
            
          </tr>
        </tbody>
      </Table>    
    </div>
  )
}



export default ShowCart

