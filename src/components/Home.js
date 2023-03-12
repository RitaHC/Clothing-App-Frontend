// import StripeCheckout from "react-stripe-checkout"
// import axios from "axios"
// import { ToastContainer, toast } from 'react-toast'
// import { Toast } from 'react-bootstrap';


// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// import { Button, Col, Row } from 'react-bootstrap';
// import jsPDF from "jspdf"
// ///////////////// ALGOLIA SEARCH
// import algoliasearch from 'algoliasearch';
// import React, { useState } from 'react';


// const Home = (props) => {
// 	// const { msgAlert, user } = props
// 	console.log('props in home', props)
// 	//////////////// ALGOLIA
// 	const client = algoliasearch('1W07DUIUXX', 'b606721ef54fc49176d4c60e6534e32d')
// 	const index = client.initIndex('products');

//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const search = async (event) => {
//     const { value } = event.target;
//     setQuery(value);

//     if (value.length > 0) {
//       const response = await index.search(value);
//       setResults(response.hits);
//     } else {
//       setResults([]);
//     }
//   };


// 	return (
// 		<>
// 		<div id="content">
// 			<h2>Home Page</h2>
// 			</div>

// 			<div>
// 			<input type="text" placeholder="Search products..." onChange={search} />
// 			{results.map((hit) => (
// 				<div key={hit.objectID}>
// 				<h2>{hit.title}</h2>
				
//         	</div>
//       ))}
//     </div>


// 		</>
// 	)
// }

// export default Home

import algoliasearch from 'algoliasearch';
import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Home = (props) => {
 

  return (
	<>
	<h1>Home Page</h1>
	<SearchBar/>
   
	</>
  );
};

export default Home;

