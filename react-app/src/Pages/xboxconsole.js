// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../Components/Cart'
// import HomeApp from '../Components/Home';
// import Login from '../Components/Login';

import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


import type1 from '../image/S Series/S Series.jpg';
import type2 from '../image/X Series/X Series.jpg';
// import type3 from '';
// import type4 from '';

import './xboxconsole.css'
// import '../../Components/Home.css'


function xboxconsole() {
    return(
    <div className='xbox'>
        {/* <Router>
          <Routes>
            <Route path="/" exact element={<HomeApp />}>
              <Route index element="Home"/>  
            </Route>
            <Route path="/Components/Login.js" element={<Login />}>
                <Route element="Login"/>
            </Route>
            <Route path="./Components/Cart.js" element={<Cart />}>
                <Route element="Cart"/>
            </Route>
          </Routes>
    </Router> */}
        <h4 className='mt-3'>Xbox Console</h4>
        <Container fluid="sm">
        <Row className='row row-cols-2 row-cols-md-3 p-5 g-4'>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Console/SeriesS.js" variant="outline-success" className='h-100'>
            <Card.Img className='image' variant="top" src={type1} />
            <Card.Body>
            <Card.Title><h6>Series S</h6></Card.Title>
            <b>Rp 4,799,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Console/SeriesX.js" variant="outline-success" className='h-100'>
            <Card.Img className='image' variant="top" src={type2} />
            <Card.Body>
            <Card.Title><h6>Series X</h6></Card.Title>
            <b>Rp 9,500,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        </Row>
        </Container>
    <div className='mt-5'/>
    </div>
        
    )
}

export default xboxconsole