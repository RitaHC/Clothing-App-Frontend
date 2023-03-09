
import React from 'react';
import { useState, useEffect } from 'react';
import { showItem } from '../../api/item';
import { useParams } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import { Button, Col, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sonnet from '../../components/Sonnet';
import { cartItemPush } from '../../api/cart';

function ShowItem(props) {

  const { user } = props
//   console.log('User ID:', user ? user._id : 'Not logged in');
  console.log(`This is the user in Show Page`, user)

  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([])
  const { itemId } = useParams();


  // Use-Effect used to adapt changes made to the page
  useEffect(() => {
    showItem(itemId)
        .then((res) => setItem(res.data.item));
  }, [itemId]);

//   const addItems = () => {
//     useEffect(() => {
//         cartItemPush(cart, user.id, item.id)
//             .then(res => console.log(`--- RES at SHow Page ---` ,res))
//     }, [cart, user.id, item.id])
//   }

  return (
    <div>
      <h1>Show Item Page</h1>

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
                    <Button onClick={() => cartItemPush(cart, user._id, item._id)}>
                    Add To Cart
                    </Button>

                    
                    
                    
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


