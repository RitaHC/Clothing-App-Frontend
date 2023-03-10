import React from 'react'
import { useLocation } from 'react-router-dom';
import { activeFalse } from '../../api/cart';
import { useState, useEffect } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import jsPDF from "jspdf"


function PaymentReceipt(props) {
    const { user } = props
    console.log(`///Receipt Props///`, props)
    const location = useLocation();
    const { cart, totalBill } = location.state;
    console.log(`Payment Receipt Cart`, cart)
    console.log(`Payment Receipt TotalBill`, totalBill)
    const length = cart.products.length


    const [falseCart, setFalseCart] = useState(null)

    const generatePdf = () => {
		const doc = new jsPDF("p", "pt", "a4")
		doc.html(document.querySelector('#content'), {
			callback: function(pdf){
				pdf.save("PaymentReceipt.pdf")
			}
		})

	}
    // API Call to turn the present cart false and show in cart history
    useEffect(() => {
        activeFalse(falseCart, cart.id)
            .then(res=> console.log(`Cart turned False`, res))
    })

    //--------------------- Create PDF ----------------
	
	//-------------------------------------------------

  return (
    <div>
        <h1>Payment Receipt </h1>
        {user.email}

        <div id="content">
            <h1>Payment Receipt</h1>
            <p>Thank you for your purchase, {user.email}!</p>
            <p>Your payment of ${totalBill} has been successfully processed.</p>
            <p>Your order includes: {length} items</p>

            
            
        </div>
        <Button onClick={generatePdf} type="primary">Download Receipt</Button>
      
    </div>
  )
}



export default PaymentReceipt

