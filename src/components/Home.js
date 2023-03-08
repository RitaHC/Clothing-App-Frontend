import StripeCheckout from "react-stripe-checkout"


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>

			<h1>STRIPE PAYMENT TESTING</h1>
			<br/><br/>
			<div class="form-group container">
				<StripeCheckout 
				className= 'center'
				stripeKey=''
				/>
			</div>


		</>
	)
}

export default Home
