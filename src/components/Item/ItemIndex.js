import React from 'react'
import { useState, useEffect } from 'react'
import LoadingScreen from '../shared/LoadingScreen'
import { useNavigate } from 'react-router-dom'
import { allitems } from '../../api/item'
import { Card, Container, Button, Col } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'




function ItemIndex(props) {
    // const {user, item} = props
    // console.log(`---- Props ItemIndex ----`, props)
  
    const [item, setItem] = useState([]);
   

      // Now make API Call

      useEffect(()=> {
        // Making API CAll
            allitems()
                .then(res=> setItem(res.data.items))
    
        }, [])
        // console.log(`All Items`, item)

        // Loading Screen function to give item time to make call

        if(!item) {
            return <LoadingScreen/>
        } else if(item.length === 0) {
            return <p>Awaiting upcoming Fashion!</p>
        }
     
        // Map over the array to display Items

        const allItemsContainer = item.map(i => (
            <>
               <Col key={i._id}  >
                <Card style={{width: '18rem'}}>
                    
                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                    <Card.Img variant="top" src={i.img} />
                    <div class="card-body">
                      <Link to={`/products/${i._id}`}>
                        {i.title}
                      </Link>
                    
                    <Row>
                    <Col><Button>View</Button></Col>
                    <Col>Price: ${i.price}</Col>
                    
                    </Row>
                    
                    <p></p>
                </div>
                </Card>
               </Col>


              
                
                
               
            </>
            
        ))




  return (
    <div>
      <h1>Items Index</h1>
      <Row>{allItemsContainer}</Row>
      
      
    </div>
  )
}



export default ItemIndex





