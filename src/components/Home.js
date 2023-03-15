

import algoliasearch from 'algoliasearch';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player'

import {
	MDBCarousel,
	MDBCarouselItem,
  } from 'mdb-react-ui-kit';

  import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Home = (props) => {
	const videoStyle ={
		width: '100vw'
	}
 

  return (
	<>
	<SearchBar/>
	<div>
      <Carousel>
        <div>
	<ReactPlayer style={videoStyle} 
	url='https://www.youtube.com/watch?v=8dvgueNbBd8'
	volume='0.3'
	// muted
    width='100%'
    playing={true}
	/>
	</div>
	</Carousel>
	</div>



<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with Rita on social networks:</span>
        </div>

        <div>
          <a href='https://www.linkedin.com/in/rita-h-chauhan-393664212/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/RitaHC' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                FashionHolic
              </h6>
              <p>
               We are a clothing Line for women and we offer a 90 days exchange/return policy for your dear customers.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Dresses
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tops
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gowns
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bags
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ritahameerchauhan@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 646 265 1687
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/RitaHC'>
          FashionHolic.com
        </a>
      </div>
    </MDBFooter>
	</>
  );
};

export default Home;

