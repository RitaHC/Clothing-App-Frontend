
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import { allitems } from '../api/item';
import Table from './Table';


function SearchBar(props) {

  const [item, setItem] = useState([])
  const [query, setQuery] = useState("")

  // Call Items on the search 
  useEffect(()=> {
    // Making API CAll
        allitems()
            .then(res=> setItem(res.data.items))

    }, [])

  console.log(`SEARCH ITEMS`, item)
  console.log(`Query`, query)
  // console.log(`filter`, item.filter(i => i.style.includes("Acc")))

  const searchButton = {
    marginTop: '-3px'
  }
  // Map over all the items and then make then display in the search bar
  const displaySearch = item.filter(i => i.style.includes(query)).map(i => (
    <li className="listItem">
      <img src={i.img} alt="Search Images"/>
    </li>
  ))

  

  const search = (data) => {
    return data.filter(item => item.style.includes(query) || item.color.includes(query) || item.title.includes(query))
  }

  return (
    <>

      <input id='searchBar' placeholder='Search Latest Fashion...' type="text"  className='search' onChange={e=> setQuery(e.target.value)}/>   
      <div id="searchDiv" className={query ? '' : 'hidden'}>
              <Table
                data={search(item)}
              />
      </div>
     
    </>
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