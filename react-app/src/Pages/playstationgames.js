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

import type1 from '../image/PlayStation Games/PlayStation4 Minecraft.jpeg';
import type2 from '../image/PlayStation Games/PS4 Minecraft Dungeons.jpeg';
// import type3 from '';
// import type4 from '';

import './playstationgames.css'
// import '../../Components/Home.css'

function playstationgames() {
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
        <h4 className='mt-3'>PlayStation Games</h4>
        <Container fluid="sm">
        <Row className='row row-cols-2 row-cols-md-3 p-5 g-4'>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/PlayStation/PS4Minecraft.js" variant="outline-primary" className='h-100'>
            <Card.Img className='image' variant="top" src={type1} />
            <Card.Body>
            <Card.Title><h6>PlayStation4 Minecraft</h6></Card.Title>
            <b>Rp 375,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/PlayStation/PS4MinecraftDungeons.js" variant="outline-primary" className='h-100'>
            <Card.Img className='image' variant="top" src={type2} />
            <Card.Body>
            <Card.Title><h6>PlayStation4 Minecraft ...</h6></Card.Title>
            <b>Rp 300,000</b><br/>
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
        </Col> */}
        </Row>
        </Container>
    <div className='mt-5'/>
    </div>
        
    )
}

export default playstationgames