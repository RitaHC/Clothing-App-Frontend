// import React from 'react'
// import { useLocation } from 'react-router-dom';
// import { activeFalse } from '../../api/cart';
// import { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';

// import { Button, Col, Row } from 'react-bootstrap';
// import jsPDF from "jspdf"


// function PaymentReceipt(props) {
//     const { user } = props
//     console.log(`///Receipt Props///`, props)
//     const location = useLocation();
//     const { cart, totalBill } = location.state;
//     console.log(`Payment Receipt Cart`, cart)
//     console.log(`Payment Receipt TotalBill`, totalBill)
//     const length = cart.products.length


//     const [falseCart, setFalseCart] = useState(null)

//     const generatePdf = () => {
// 		const doc = new jsPDF("p", "pt", "a4")
// 		doc.html(document.querySelector('#content'), {
// 			callback: function(pdf){
// 				pdf.save("PaymentReceipt.pdf")
// 			}
// 		})

// 	}
//     // API Call to turn the present cart false and show in cart history
//     useEffect(() => {
//         activeFalse(falseCart, cart.id)
//             .then(res=> console.log(`Cart turned False`, res))
//     })

//     //--------------------- Create PDF ----------------
	
// 	//-------------------------------------------------

//   return (
//     <div>
//         {/* <h2 id="receipt"> FashionHolic </h2>
//         <Table striped bordered hover variant="dark">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>User Email</th>
//               <th>Amount Paid</th>
//               <th>Number of Items Ordered</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>{user.email}</td>
//               <td>${totalBill}</td>
//               <td>{length}</td>
//             </tr>
//           </tbody>
//         </Table> */}
        

//         <div >
//           <center>
//             <h1> FashionHolic</h1><br/>
//             <h3>Payment Receipt</h3>
//           </center>
//             <h5>Dear {user.email},</h5>
//             {/* <p>Your payment of  has been successfully processed.</p> */}
//             <p>
//             Thank you for your recent order {user._id}. We have now received your returned product(s). Your refund has been processed and any funds due to you should be credited to your original payment method within 7-10 days.</p>
//             <p>Your order includes: {length} items</p> 
//             <p> Amount Paid: {totalBill} </p>

//             <h3> Thank you!</h3>
            
//         </div> 
//         <Button variant="dark" onClick={generatePdf} type="primary">Download Receipt</Button>
      
//     </div>
//   )
// }



// export default PaymentReceipt

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
        
        

        <div>
            <h1 id="content">Payment Receipt </h1>
            <h3>Thank you : {user.email}</h3>
            <h3>Your payment received:  ${totalBill}</h3>
            <h3>Your order includes: {length} items</h3>

            
            
        </div>
        <Button variant='dark' onClick={generatePdf} type="primary">Download Receipt</Button>
      
    </div>
  )
}



export default PaymentReceipt


