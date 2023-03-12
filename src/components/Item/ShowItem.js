
import React from 'react';
import { useState, useEffect } from 'react';
import { showItem } from '../../api/item';
import { useParams } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import { Button, Col, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sonnet from '../../components/Sonnet';
import { cartItemPush, showCart, reduceItem } from '../../api/cart';
import SearchBar from '../SearchBar';

function ShowItem(props) {

  const { user } = props
//   console.log('User ID:', user ? user._id : 'Not logged in');
  console.log(`Props Show Page`, props)

  const [item, setItem] = useState([]);
  const [cart, setCart] = useState(null)
  const { itemId } = useParams();
  const [triggerRefresh, setTriggerRefresh] = useState(false)
  const [newCart, setNewCart] = useState({})
  const [repetitions, setRepetitions] = useState([]);
 



  // Use-Effect used to adapt changes made to the page
  // useEffect(() => {
  //   showItem(itemId)
  //     .then((res) => setItem(res.data.item));
  
  //   if (user) {
  //     showCart(cart, user._id)
  //       .then(res => {
  //         setCart(res.data.cart)
  //         // looping over products in cart to acertain the no. of items an id exist in the cart 
  //         res.data.cart.products.forEach((item) => {
  //           const title = item.title;
  //           const itemId = item._id;
  //           if (title && !(title in res.data.cart.products)) {
  //             res.data.cart.products[title] = { count: 1, itemId };
  //           } else if (title) {
  //             res.data.cart.products[title].count++;
  //           }
  //         });
  //       });
  //   }
  // }, [itemId, buttonClick, user, cart]);

  useEffect(() => {
    // Display Item/product 
    showItem(itemId)
      .then((res) => setItem(res.data.item))
      .then(() => setTriggerRefresh(prev => !prev))

    if (user) {
      // Show user's Cart (currently active)
      showCart(cart, user._id)
        .then((res) => {
          setCart(res.data.cart)
          // calculate the no. of times an item appears in the cart in -> itemNumber
          const itemNumber = {}
          res.data.cart.products.forEach((item) => {
            // The This forEach stores the reps of an id in the itemNumber object
            const title = item.title
            const itemId = item._id
            if (title && !(title in itemNumber)) {
              itemNumber[title] = { count: 1, itemId }
            } else if (title) {
              itemNumber[title].count++
            }
          })
          // Now loop over the object to display the key: value storing data of the items inside cart
          const newRepetitions = Object.entries(itemNumber).map(
            ([title, { count, itemId }]) => (
              <p key={title}>
                * {title} : {count}{" "}
              </p>
            )
          )
          setRepetitions(newRepetitions)
        })
        .then(() => setTriggerRefresh(prev => !prev))
      
    }

   
  }, [cart]);

  
  console.log(`Show Page Cart`, cart)


  return (
    <div>
      <SearchBar/>
      <h1>Show Item Page</h1>
      {repetitions}

      <Row>
        <Col>
          <Figure>
            <Figure.Image width={450} height={180} alt='171x180' src={item.img} />
          </Figure>
        </Col>

        <Col>
          <Tabs defaultActiveKey='home' id='fill-tab-example' className='mb-3' fill>
            <Tab eventKey='home' title='Info'>
              <Sonnet
                title='Info'
                text={item.title}
              />
            </Tab>
            <Tab eventKey='profile' title='Color'>
              <Sonnet
                title='Color'
                text={item.color}
              />
            </Tab>
            <Tab eventKey='longer-tab' title='Sonnet 3'>
              <Sonnet
                title='Sonnet 3'
                text='Look in thy glass and tell the face thou viewest Now is the time that face should form another...'
              />
            </Tab>
            
          </Tabs>
        </Col>
      </Row>

      <Row>
        <Col>
          <Figure>
            <Figure.Image width={450} height={180} alt='171x180' src={item.img} />
          </Figure>
        </Col>

        <Col>
            {user ? (
                <>
                    <Button onClick={() => {
                      cartItemPush(cart, user._id, item._id)
                      .then(() => setTriggerRefresh(prev => !prev))
                      
                    }
                  }>
                    Add To Cart
                    </Button>

                    <Button onClick={() => {
                        reduceItem(cart, user._id, cart._id, item._id)
                        .then(() => setTriggerRefresh(prev => !prev))
                    }}>Delete</Button>

                    
                    
                    
                </>
            ) : (
                <h1>Please log in to add items to your cart.</h1>
            )}
        </Col>



      </Row>

      <Row>
        <Col>
          <Figure>
            <Figure.Image width={450} height={180} alt='171x180' src={item.img} />
          </Figure>
        </Col>

        <Col>
            
        </Col>
      </Row>

      {item.price}
    </div>
  );
}

export default ShowItem;

