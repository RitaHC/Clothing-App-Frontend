import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { showUser } from '../../api/auth'




const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
			<br/>
			<Link to='/products' style={linkStyle}>
				Products
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => {

	// const { userId } = useParams();

	// useEffect(() => {
	// 	showUser(userId)
	// 		.then(res=> console.log(`---------- User Show Dashboard--------`, res))
	//   }, [userId]);

	// // showUser(userId)
	// // 		.then(res=> console.log(`---------- User Show Dashboard--------`, res))



return (
	
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                react-auth-template
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			{/* <Nav ClassName='ml-auto'>
				
				{user && (
					<span ClassName='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
				
			</Nav> */}

			<Navbar.Brand>
			<Link to={`/dashboard/`} style={linkStyle}>
				{user && (
						<span className='navbar-text mr-2'>Hello {user.email}</span>
					)}
					
					{alwaysOptions}
					{user ? authenticatedOptions : unauthenticatedOptions}
                
            </Link>


        </Navbar.Brand>


		</Navbar.Collapse>
	</Navbar>
)}

export default Header
