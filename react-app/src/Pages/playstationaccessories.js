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

import type1 from '../image/JoyStick/Analog Cap.jpg';
import type2 from '../image/JoyStick/Dualshock-4.jpg';
// import type3 from '';
// import type4 from '';

import './playstationaccessories.css'
// import '../../Components/Home.css'

function playstationaccessories() {
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
        <h4 className='mt-3'>PlayStation Accessories</h4>
        <Container fluid="sm">
        <Row className='row row-cols-2 row-cols-md-3 p-5 g-4'>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Accessories/AnalogCap2.js" variant="outline-primary" className='h-100'>
            <Card.Img className='image' variant="top" src={type1} />
            <Card.Body>
            <Card.Title><h6>Analog Cap – Analog ...</h6></Card.Title>
            <b>Rp 20,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Accessories/dualshock4.js" variant="outline-primary" className='h-100'>
            <Card.Img className='image' variant="top" src={type2} />
            <Card.Body>
            <Card.Title><h6>DUALSHOCK®4 wireless ...</h6></Card.Title>
            <b>Rp 799,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        {/* <Col>
        <Card className="card h-100">
            <Card.Img className='image' variant="top" src="" />
            <Card.Body>
            <Card.Title><h6>text</h6></Card.Title>
            <Button href="" variant="primary">Click Here</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
            <Card.Img className='image' variant="top" src="" />
            <Card.Body>
            <Card.Title><h6>text</h6></Card.Title>
            <Button href="" variant="primary">Click Here</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
            <Card.Img className='image' variant="top" src="" />
            <Card.Body>
            <Card.Title><h6>text</h6></Card.Title>
            <Button href="" variant="primary">Click Here</Button>
            </Card.Body>
        </Card>
        </Col> */}
        </Row>
        </Container>
    <div className='mt-5'/>
    </div>
        
    )
}

export default playstationaccessories