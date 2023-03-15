import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ShowItem from '../Item/ShowItem';
import Table from 'react-bootstrap/Table';
import LoadingScreen from '../shared/LoadingScreen';




function Dashboard(props) {
    const { user } = props
    // console.log(`---- Dashboard (props) ---`, user)

    if(!user) {
      return <LoadingScreen/>
  } 
  return (
    <div>
      {/* Hello My User<br/><br/>
      <Link to={`cart/${user._id}`}> View Cart </Link>
      <br/><br/>
      <Link to={`cart/${user._id}`}>
      <Button>View Cart</Button></Link>

      {/* <Button>View Cart</Button><br/><br/><br/> */}
      {/* <Button>Order History</Button><br/><br/><br/>
      <Button>My Details</Button><br/><br/><br/>  */}

      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Particulars</th>
          <th>Client Details</th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>User Email</td>
          <td className='ml-4'>{user.email}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Today's Date</td>
          <td>{new Date().toISOString().slice(0, 10)}</td>
        </tr>


        <tr>
          <td>3</td>
          <td>Present Cart</td>
          <td className='ml-4'><Link to={`cart/${user._id}`}>
              <Button>View Cart</Button>
            </Link></td>
        </tr>

        <tr>
          <td>4</td>
          <td>Present Cart</td>
          <td className='ml-4'><Link to={`cart/orderhistory/${user._id}`}>
              <Button>Order History</Button>
            </Link></td>
        </tr>
        
        
      </tbody>
    </Table>
    </div>
  )
}

export default Dashboard