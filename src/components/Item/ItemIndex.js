import React from 'react'
import { useState, useEffect } from 'react'
import LoadingScreen from '../shared/LoadingScreen'
import { useNavigate } from 'react-router-dom'
import { allitems } from '../../api/item'
import { Card, Container, Button, Col } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'




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



        let allDressesContainer = item
        .filter((i) => i.style == "Dresses")
        .map(i => (
            <>
            
               <Col key={i._id}  >
                <Card style={{width: '18rem'}} className='mb-3'>
                    <Card.Img style={{width: '16rem', height: '18rem'}} variant="top" src={i.img} />
                    <div class="card-body">
                      <Link to={`/products/${i._id}`}>
                        {i.title}
                      </Link>
                    <Row>
                    <Col>Price: ${i.price}</Col>               
                    </Row>
                </div>
                </Card>
               </Col>               
            </>
            
        ))
        let allBagsContainer = item
        .filter((i) => i.style == "Bags")
        .map(i => (
          <>
          
             <Col key={i._id}  >
              <Card style={{width: '18rem'}} className='mb-3'>
                  <Card.Img style={{width: '16rem', height: '18rem'}} variant="top" src={i.img} />
                  <div class="card-body">
                    <Link to={`/products/${i._id}`}>
                      {i.title}
                    </Link>
                  <Row>
                  <Col>Price: ${i.price}</Col>               
                  </Row>
              </div>
              </Card>
             </Col>               
          </>
          
      ))
      let allAccessoryContainer = item
      .filter((i) => i.style == "Accessory")
      .map(i => (
        <>
        
           <Col key={i._id}  >
            <Card style={{width: '18rem'}} className='mb-3'>
                <Card.Img style={{width: '16rem', height: '18rem'}} variant="top" src={i.img} />
                <div class="card-body">
                  <Link to={`/products/${i._id}`}>
                    {i.title}
                  </Link>
                <Row>
                <Col>Price: ${i.price}</Col>               
                </Row>
            </div>
            </Card>
           </Col>               
        </>
        
    ))

    let allJacketContainer = item
    .filter((i) => i.style == "Jacket")
    .map(i => (
      <>
      
         <Col key={i._id}  >
          <Card style={{width: '18rem'}} className='mb-3'>
              <Card.Img style={{width: '16rem', height: '18rem'}} variant="top" src={i.img} />
              <div class="card-body">
                <Link to={`/products/${i._id}`}>
                  {i.title}
                </Link>
              <Row>
              <Col>Price: ${i.price}</Col>               
              </Row>
          </div>
          </Card>
         </Col>               
      </>
      
  ))
      
        
    const styleHeading = {
      textAlign: 'center',
      marginTop: '20px',
      marginBotton: '20px'
    }
      
      




  return (
    <div>
      <SearchBar
      />
      <h1 style={styleHeading}>DRESSES</h1>
      <Row>{allDressesContainer}</Row>
      <h1 style={styleHeading}>Jacket</h1>
      <Row>{allJacketContainer}</Row>
      <h1 style={styleHeading}>BAGS</h1>
      <Row style={styleHeading}>{allBagsContainer}</Row>
      <h1 style={styleHeading}>Accessory</h1>
      <Row >{allAccessoryContainer}</Row>
     
     
      {/* <Row>{allDresses}</Row> */}
      
      
    </div>
  )
}



export default ItemIndex





