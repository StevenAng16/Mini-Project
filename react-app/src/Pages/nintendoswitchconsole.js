// import { Routes, Route } from 'react-router-dom';
// import Cart from '../Components/Cart'
// import HomeApp from '../Components/Home';
// import Login from '../Components/Login';

import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import type1 from '../image/Nintendo Switch/Nintendo Switch.jpg';
import type2 from '../image/Nintendo Switch Lite/Nintendo Switch Lite.jpg';
import type3 from '../image/Nintendo Switch OLED/Nintendo Switch OLED.jpg';

import './nintendoswitchconsole.css'
// import '../../Components/Home.css'

function nintendoswitchconsole() {
    return(
    <div className='nintendo'>
        {/* <Router>
          <Routes>
            <Route path="/" exact element={<HomeApp />}>
              <Route index element="Home"/>  
            </Route>
            <Route path="./Components/Login.js" element={<Login />}>
                <Route element="Login"/>
            </Route>
            <Route path="./Components/Cart.js" element={<Cart />}>
                <Route element="Cart"/>
            </Route>
          </Routes>
    </Router> */}
        <h4 className='mt-3'>Nintendo Switch Console</h4>
        <Container fluid="sm">
        <Row className='row row-cols-2 row-cols-md-3 p-5 g-4'>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Console/NintendoSwitch.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type1} />
            <Card.Body>
            <Card.Title><h6>Nintendo Switch</h6></Card.Title>
            <b>Rp 3,999,000 - Rp 4,899,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Console/NintendoSwitchLite.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type2} />
            <Card.Body>
            <Card.Title><h6>Nintendo Switch Lite</h6></Card.Title>
            <b>Rp 2,625,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Console/NintendoSwitchOLED.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type3} />
            <Card.Body>
            <Card.Title><h6>Nintendo Switch OLED</h6></Card.Title>
            <b>Rp 4,780,000</b><br/>
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

export default nintendoswitchconsole