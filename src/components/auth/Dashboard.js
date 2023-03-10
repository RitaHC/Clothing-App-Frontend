import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ShowItem from '../Item/ShowItem';




function Dashboard(props) {
    const { user } = props
    // console.log(`---- Dashboard (props) ---`, user)


  return (
    <div>
      Hello My User<br/><br/>
      <Link to={`cart/${user._id}`}> View Cart </Link>
      <br/><br/>

      {/* <Button>View Cart</Button><br/><br/><br/> */}
      <Button>Order History</Button><br/><br/><br/>
      <Button>My Details</Button><br/><br/><br/>
    </div>
  )
}

export default Dashboard