import React from 'react'
import { useEffect } from 'react'
import { allFalse } from '../../api/cart'
import { useState } from 'react'
import LoadingScreen from '../shared/LoadingScreen'
import { Card, Col, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'


function AllFalseCarts(props) {
    const { user } = props
    console.log(`====False Cart User===`, user)
    const [carts, setCarts] = useState([])

    // API Call to get all negative Carts of this User

    useEffect(() => {
        allFalse(carts, user._id)
            .then(res => setCarts(res.data.carts))
    }, [user._id])

    // Wait for carts to load 
    if(!carts) {
        return <LoadingScreen/>
    } 

    const styleHeading = {
        textAlign: 'center',
        marginTop: '20px',
        marginBotton: '20px'
      }

    // Loop over each cart and then loop over products of each cart
     let pastOrders = carts.map(cart => {
        if (cart.products.length > 0) {
          return ( 
            <div key={cart._id}>
            <Row>
              <h3> Order Dated - {cart.updatedAt.slice(0, 10)}</h3>
              {cart.products
                .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                .map(item => (
                  <Col key={item._id}>
                    <Card style={{width: '18rem'}} className='mb-3'>
                      <Card.Img style={{width: '16rem', height: '18rem'}} variant="top" src={item.img} />
                      <div class="card-body">
                        <Link to={`/products/${item._id}`}>
                          {item.title}
                        </Link>
                        <Row>
                          <Col>Price: ${item.price}</Col>               
                        </Row>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
          )
        } else {
          return null
        }
      })
    

  return (
    <div style={styleHeading}>
      <h1>Past Orders</h1>
      {pastOrders}
    </div>
  )
}



export default AllFalseCarts

