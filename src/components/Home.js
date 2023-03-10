import StripeCheckout from "react-stripe-checkout"
import { useState } from "react"
import axios from "axios"
import React from "react"
import { ToastContainer, toast } from 'react-toast'
import { Toast } from 'react-bootstrap';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Button, Col, Row } from 'react-bootstrap';
import jsPDF from "jspdf"



const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	

	//=============================  STRIPE PAYMENTS ====================
	// Sample product testing
	// const [item, setItem] = useState({
	// 	name: "Sample Name",
	// 	price: 10,
	// 	description: 'This is sample description'
	// })

	// const response = (status) => {
	// 	if (status === 200) {

	// 	}
	// }

	// //--------------------- Create PDF ----------------
	// const generatePdf = () => {
	// 	const doc = new jsPDF("p", "pt", "a4")
	// 	doc.html(document.querySelector('#content'), {
	// 		callback: function(pdf){
	// 			pdf.save("PaymentReceipt.pdf")
	// 		}
	// 	})

	// }
	// //-------------------------------------------------

	// async function handleToken(token, addresses) {
	// 	const response = await axios.post('http://localhost:8000/checkout/', {token, item})

		
	// 	// take response and check status
	// 	console.log(response.status)

	// 	if(response.status === 200) {
	// 		console.log('Toastttttttt')
			
	// 		toast.success('Success Payment Completed')
	// 		return(
	// 		<Toast>
	// 			<Toast.Header>
	// 				{/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
	// 				<strong className="me-auto">Bootstrap</strong>
	// 				<small>Payment Successful</small>
	// 			</Toast.Header>
	// 			<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
	// 			</Toast>
	// 		)
	// 	} else {
	// 		toast('Failure payment is not completed', {type: 'failure'})
	// 	}
	// }
	//=============================  STRIPE ===================================

	return (
		<>
		<div id="content">
			<h2>Home Page</h2>

			{/* <h1>STRIPE PAYMENT TESTING</h1>
			<br/><br/>
			<div class="form-group container">
				<StripeCheckout 
				className= 'center'
				stripeKey="pk_test_51MjOxGGWn0da1VDTZPMDt4ab4vsAOBSNI9oNrXq7gwxVLCHtX0EX8NicbDcPtl2muAJjOJOhePjgVfCBJA1lW7DF00q3pxqjlN"
				token={handleToken}
				amount={item.price*100}
				name={item.name}
				billingAddress
				shippingAddress
				/>
			</div> */}





			{/* <Button onClick={generatePdf} type="primary">Download Receipt</Button> */}
			</div>

		</>
	)
}

export default Home
