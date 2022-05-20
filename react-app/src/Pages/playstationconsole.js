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

import type1 from '../image/PS5/PS5.png';
// import type2 from '';
// import type3 from '';
// import type4 from '';

import './playstationconsole.css'
// import '../../Components/Home.css'

function playstationconsole() {
    return(
    <div className='playstation'>
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
        <h4 className='mt-3'>PlayStation Console</h4>
        <Container fluid="sm">
        <Row className="row row-cols-2 row-cols-md-3 p-5 g-4">
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Console/PS5.js" variant="outline-primary" className='h-100'>
            <Card.Img className='image' variant="top" src={type1} />
            <Card.Body>
            <Card.Title><h6>PS5</h6></Card.Title>
            <s style={{"fontSize" : 11}}>Rp11.499.000 - ...</s><br/>
            <b>Rp 9,545,000 - ...</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        {/* <Col>
        <Card className="card h-100">
        <Button href="../Product/Console/PS5.js" variant="outline-primary" className='h-100'>
            <Card.Img className='image' variant="top" src={type1} />
            <Card.Body>
            <Card.Title><h6>PS5</h6></Card.Title>
            <s style={{"fontSize" : 11}}>Rp11.499.000 - ...</s><br/>
            <b>Rp 9,545,000 - ...</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col> */}
        </Row>
        </Container>
    <div className='mt-5'/>
    </div>
        
    )
}

export default playstationconsole