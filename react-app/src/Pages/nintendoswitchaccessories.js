// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../Components/Cart'
// import HomeApp from '../Components/Home';
// import Login from '../Components/Login';

import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

import type1 from '../image/JoyStick/Analog Cap.jpg';
import type2 from '../image/JoyStick/Joy Con Nintendo Switch.jpeg';
import type3 from '../image/JoyStick/Joy Con Charging Grip (1).jpeg'
import type4 from '../image/JoyStick/Pro Controller (1).jpeg';
import type5 from '../image/Adaptor/Adaptor Charger Switch AC Adapter Nintendo Switch (1).jpg';
import type6 from '../image/Adaptor/Switch AC Adapter (Loose Pack) (1).jpeg'

import './nintendoswitchaccessories.css'
// import '../../Components/Home.css'

function nintendoswitchaccessories() {
    return(
    <div className='nintendo'>
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
        <h4 className='mt-3'>Nintendo Switch Accessories</h4>
        <Container fluid="sm">
        <CardGroup>
        <div>
        <Row className="row row-cols-2 row-cols-md-3 p-5 g-4" >
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Accessories/AnalogCap.js" variant="outline-danger" className='h-100'>
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
        <Button href="../Product/Accessories/JoyCon.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type2} />
            <Card.Body>
            <Card.Title><h6>Nintendo Switch JoyCon Controllers</h6></Card.Title>
            <b>Rp 919,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Accessories/ChargingGrip.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type3} />
            <Card.Body>
            <Card.Title><h6>Nintendo Switch JoyCon Charging Grip</h6></Card.Title>
            <b>Rp 433,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Accessories/ProController.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type4} />
            <Card.Body>
            <Card.Title><h6>Nintendo Switch Pro Controller</h6></Card.Title>
            <b>Rp 829,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Accessories/AdaptorCharger.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type5} />
            <Card.Body>
            <Card.Title><h6>Switch AC Adapter/Adaptor [Asia]</h6></Card.Title>
            <b>Rp 600,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Accessories/AdaptorChargerLoose.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type6} />
            <Card.Body>
            <Card.Title><h6>Switch AC Adapter/Adaptor [JPN] (Loose Pack)</h6></Card.Title>
            <b>Rp 350,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        </Row>
        </div>
        </CardGroup>
        </Container>
    <div className='mt-5'/>
    </div>
        
    )
}

export default nintendoswitchaccessories