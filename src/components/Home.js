import StripeCheckout from "react-stripe-checkout"
import { useState } from "react"
import axios from "axios"
import React from "react"
import { ToastContainer, toast } from 'react-toast'
import { Toast } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	

	//=============================  STRIPE PAYMENTS ====================
	// Sample product testing
	const [item, setItem] = useState({
		name: "Sample Name",
		price: 10,
		description: 'This is sample description'
	})

	// const response = (status) => {
	// 	if (status === 200) {

	// 	}
	// }

	async function handleToken(token, addresses) {
		const response = await axios.post('http://localhost:8000/checkout/', {token, item})

		
		// take response and check status
		console.log(response.status)

		if(response.status === 200) {
			console.log('Toastttttttt')
			
			toast.success('Success Payment Completed')
			return(
			<Toast>
				<Toast.Header>
					{/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
					<strong className="me-auto">Bootstrap</strong>
					<small>Payment Successful</small>
				</Toast.Header>
				<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
				</Toast>
			)
		} else {
			toast('Failure payment is not completed', {type: 'failure'})
		}
	}
	//=============================  STRIPE ===================================

	return (
		<>
			<h2>Home Page</h2>

			<h1>STRIPE PAYMENT TESTING</h1>
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
			</div>


		</>
	)
}

export default Home
