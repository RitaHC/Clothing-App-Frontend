import algoliasearch from 'algoliasearch';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input } from 'mdb-react-ui-kit';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';



function SearchBar(props) {

//     const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState(null);

//   const client = algoliasearch('1W07DUIUXX', 'b606721ef54fc49176d4c60e6534e32d');
//   const index = client.initIndex('ClothingApp');


//   const search = async (event) => {
//     const { value } = event.target;
//     setQuery(value);

//     if (value.length > 0) {
//       try {
//         const response = await index.search(value);
//         setResults(response.hits);
//         setError(null);
//       } catch (e) {
//         console.error(e);
//         setError(e.message);
//       }
//     } else {
//       setResults([]);
//       setError(null);
//     }
//   };
//   return (
//     <div>

// <>
// 	<h1>Home Page</h1>
//     <div>
//       <input type="text" placeholder="Search products..." onChange={search} />
//       {error && <div>{error}</div>}
//       {results.map((hit) => (
//         <Link to={`/products/${hit.objectID}`} key={hit.objectID}>
//         <div key={hit.objectID}>
//           <h2>{hit.title}</h2>
// 		  <img src={hit.img} alt="Product Image"/>
//         </div>
//         </Link>
//       ))}
//     </div>
// 	</>
      
//     </div>
//   )
// }


const [showSearchAlert, setShowSearchAlert] = useState(false);

const searchIconStyle = {
  height: '20px',
  width: '20px'
}

  return (
  //   <MDBInputGroup>
  //   <MDBInput label='Search' />
  //   <MDBBtn rippleColor='dark'>
  //     <MDBIcon icon='search' style={searchIconStyle}/>
  //   </MDBBtn>
  // </MDBInputGroup>

  <MDBInputGroup>
  <MDBInput label='Search' />
  <MDBBtn onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
    <MDBIcon icon='search' />
  </MDBBtn>
</MDBInputGroup>
  );
}


export default SearchBar



// import React, { useState } from 'react';
// import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';

// export default function SearchBar() {
//   const [showSearchAlert, setShowSearchAlert] = useState(false);

//   return (
//     <>
//       <MDBInputGroup>
//         <MDBInput label='Search' />
//         <MDBBtn onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
//           <MDBIcon icon='search' />
//         </MDBBtn>
//       </MDBInputGroup>

//       <MDBAlert delay={1000} position='top-right' autohide appendToBody show={showSearchAlert}>
//         Search!
//       </MDBAlert>
//     </>
//   );
// }