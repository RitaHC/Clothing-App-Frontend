import StripeCheckout from "react-stripe-checkout"
import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toast'





const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	

	// Sample product testing
	const [product, setProduct] = useState({
		name: "Sample Name",
		price: 200,
		description: 'This is sample description'
	})

	async function handleToken(token, addresses) {
		const response = await axios.post('http://localhost:8000/checkout/', {token, product})

		
		// take response and check status
		console.log(response.status)

		if(response.status === 200) {
			toast('Success Payment Completed', {type: 'success'})
		} else {
			toast('Failure payment is not completed', {type: 'failure'})
		}
	}

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
				amount={product.price*100}
				name={product.name}
				billingAddress
				shippingAddress
				/>
			</div>


		</>
	)
}

export default Home
