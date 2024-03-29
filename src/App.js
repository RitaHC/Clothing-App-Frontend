// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

///////////////////////////////////////////
import ItemIndex from './components/Item/ItemIndex'
import ShowItem from './components/Item/ShowItem'
//////////// User Dashboard
import { showUser } from './api/auth'
import Dashboard from './components/auth/Dashboard'

///////////// Show Cart
import ShowCart from './components/Cart/ShowCart'
import { showCart } from './api/cart'

//////////////// Payment Receipt
import PaymentReceipt from './components/Cart/PaymentReceipt'
import AllFalseCarts from './components/Cart/AllFalseCarts'


const App = () => {

  const [user, setUser] = useState(null)
  const [cart, setCart] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  //////////////////////////
  const [item, setItem] = useState({
	style: '',
	size: [],
	img: '',
	price: 0,
	title: '',
	color: ''
  })

  

//   console.log('user in app', user)
//   console.log('message alerts', msgAlerts)
  const clearUser = () => {
    // console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

	//////////////// Call CART if user exist ///////////////
	if (user && !cart) {
		showCart(cart, user._id)
		 .then(res => setCart(res.data.cart))
	}

		return (
			<Fragment>
				<Header user={user} />
					<Routes>
						<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
						<Route
							path='/sign-up'
							element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
						/>



						<Route
							path= '/products'
							element={
								<ItemIndex
								user={user}
								item={item}
								setItem={setItem}
								/>
							}
						/>


						<Route
							path= '/dashboard'
							element={
								<Dashboard
								msgAlert={msgAlert}
								user={user}
								item={item}
								setItem={setItem}
								/>
							}
						/>

						<Route
							path= '/receipt'
							element={
								<PaymentReceipt
								msgAlert={msgAlert}
								user={user}
								item={item}
								setItem={setItem}
								/>
							}
						/>


  						<Route
							path= '/products/:itemId'
							element={
								<ShowItem
								msgAlert={msgAlert}
								user={user}
								item={item}
								setItem={setItem}
								cart={cart}
								setCart={setCart}
								
								/>
							}
						/>

						<Route
							path= '/dashboard/cart/orderhistory/:userId'
							element={
								<AllFalseCarts
								msgAlert={msgAlert}
								user={user}
								item={item}
								setItem={setItem}
								cart={cart}
								setCart={setCart}
								
								/>
							}
						/>


						<Route
							path= 'dashboard/cart/:userId'
							element={
								<ShowCart
								msgAlert={msgAlert}
								user={user}
								item={item}
								setItem={setItem}
								/>
							}
						/>



						<Route
							path='/sign-in'
							element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
						/>
					<Route
						path='/sign-out'
						element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
						}
					/>
					<Route
						path='/change-password'
						element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
					/>
					</Routes>
					{msgAlerts.map((msgAlert) => (
						<AutoDismissAlert
							key={msgAlert.id}
							heading={msgAlert.heading}
							variant={msgAlert.variant}
							message={msgAlert.message}
							id={msgAlert.id}
							deleteAlert={deleteAlert}
						/>
					))}

			</Fragment>
		)
}

export default App
