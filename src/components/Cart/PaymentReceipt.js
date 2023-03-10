import React from 'react'
import { useLocation } from 'react-router-dom';


function PaymentReceipt(props) {
    const { user } = props
    console.log(`///Receipt Props///`, props)
    const location = useLocation();
    const { cart, totalBill } = location.state;
    console.log(`Payment Receipt Cart`, cart)
    console.log(`Payment Receipt TotalBill`, totalBill)
    const length = cart.products.length

    // API Call to turn the present cart false and show in cart history
    
  return (
    <div>
        <h1>Payment Receipt </h1>
        {user.email}

        <div>
            <h1>Payment Receipt</h1>
            <p>Thank you for your purchase, {user.email}!</p>
            <p>Your payment of ${totalBill} has been successfully processed.</p>
            <p>Your order includes: {length} items</p>
            
        </div>
      
    </div>
  )
}



export default PaymentReceipt

