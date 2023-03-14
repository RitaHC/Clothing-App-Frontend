import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { showUser } from '../../api/auth'
import Home from '../Home'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'




const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const navBarHeight = {
	
	maxHeight: '70px',
	maxWidth: '100%'
}
const authenticatedOptions = (
	<>
		
			<Link to='change-password' className='navbar-text mr-4' style={linkStyle}>
				Change Password
			</Link>
		
			<Link to='sign-out' className='navbar-text mr-5' style={linkStyle}>
				Sign Out
			</Link>
		
	</>
)

const unauthenticatedOptions = (
	<>
        
		    <Link to='sign-up' className='navbar-text mr-4' style={linkStyle}>Sign Up</Link>
		
        
		    <Link to='sign-in' className='navbar-text mr-4' style={linkStyle}>Sign In</Link>
        
	</>
)

const alwaysOptions = (
	<>
		
			{/* <Link id='brandName' className='navbar-text mr-2' to='/' style={linkStyle}>
				Home
			</Link> */}
			
			<Link className='navbar-text mr-4' to='/products' style={linkStyle}>
				Products
			</Link>
		
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
	<>
	{!user ? (
	<div style={{textAlign: 'center'}}>
		<Link to='/sign-up'>Signup</Link>/ <Link to='/sign-in'>Login</Link> to add to cart <Link to='sign-up' className='navbar-text mr-2' style={linkStyle}>Sign Up</Link>
	</div>) :
	null
	}
	
	<Navbar  bg='dark' variant='light' expand='md'>
		<Navbar.Brand>
		<Link id='brandName' className='navbar-text mr-4' to='/' style={linkStyle}>
				FashionHolic
		</Link>
           

			{/* <Link to={`/dashboard/`} style={linkStyle}>
				{user && (
						<span className='navbar-text mr-2'>Hello {user.email}</span>
					)}
					
					{alwaysOptions}
					{user ? authenticatedOptions : unauthenticatedOptions}
                
            </Link> */}

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

			<Nav>
			<Link to={`/dashboard/`} style={linkStyle}  className="justify-content-end">
				{/* {user && (
						<span className="justify-content-end"> {user.email}</span>
					)} */}
					
					{alwaysOptions}
					{user ? authenticatedOptions : unauthenticatedOptions}

					{user && (
						<Link to={`/dashboard/`} className="justify-content-end text-warning"> {user.email}</Link>
					)}
                
            </Link>


        </Nav>


		</Navbar.Collapse>
	</Navbar>
	
	</>
)}

export default Header
