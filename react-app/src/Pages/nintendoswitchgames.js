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

import type1 from '../image/Switch Games/Switch Mario Kart 8 Deluxe.png';
import type2 from '../image/Switch Games/Switch Luigi Mansion 3.png';
import type3 from '../image/Switch Games/Switch Clubhouse Games 51 Worldwide Classics.png';
import type4 from '../image/Switch Games/Switch Minecraft.png';
import type5 from '../image/Switch Games/Switch Nintendo Switch™ Sports.png'
import type6 from '../image/Switch Games/Switch Mario Rabbids Sparks of Hope.png'
import type7 from '../image/Switch Games/Switch Super Mario Party.png'
import type8 from '../image/Switch Games/Switch Yoshis Crafted World.png'

import './nintendoswitchgames.css'
// import '../../Components/Home.css'

function nintendoswitchgames() {
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
        <h4 className='mt-3'>Nintendo Switch Games</h4>
        <Container fluid="sm">
        <Row className=' row row-cols-2 row-cols-md-3 p-5 g-4'>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/NintendoSwitch/SwitchMarioKart8Deluxe.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type1} />
            <Card.Body>
            <Card.Title><h6>Switch Mario Kart 8 Deluxe</h6></Card.Title>
            <b>Rp 640,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/NintendoSwitch/SwitchLuigiMansion3.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type2} />
            <Card.Body>
            <Card.Title><h6>Switch Luigi Mansion 3</h6></Card.Title>
            <b>Rp 643,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/NintendoSwitch/SwitchClubhouseGames51WorldwideClassics.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type3} />
            <Card.Body>
            <Card.Title><h6>Switch Clubhouse Games: ...</h6></Card.Title>
            <b>Rp 485,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/NintendoSwitch/SwitchMinecraft.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type4} />
            <Card.Body>
            <Card.Title><h6>Switch Minecraft</h6></Card.Title>
            <b>Rp 385,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/NintendoSwitch/SwitchNintendoSwitchSports.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type5} />
            <Card.Body>
            <Card.Title><h6>Switch Nintendo Switch™ ...</h6></Card.Title>
            <b>Rp 599,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/NintendoSwitch/SwitchMario+RabbidsSparksOfHope.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type6} />
            <Card.Body>
            <Card.Title><h6>Switch Mario + Rabbids ...</h6></Card.Title>
            <b>Rp 100,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/NintendoSwitch/SwitchMarioParty.js" variant="outline-danger" className='h-100'>
            <Card.Img className='image' variant="top" src={type7} />
            <Card.Body>
            <Card.Title><h6>Switch Super Mario ...</h6></Card.Title>
            <b>Rp 644,000</b><br/>
            </Card.Body>
        </Button>
        </Card>
        </Col>
        <Col>
        <Card className="card h-100">
        <Button href="../Product/Games/NintendoSwitch/SwitchYoshiCraftedWorld.js" variant="outline-danger">
            <Card.Img className='image' variant="top" src={type8} />
            <Card.Body>
            <Card.Title><h6>Switch Yoshi’s Crafted World (Usa/English)</h6></Card.Title>
            <b>Rp 675,000</b><br/>
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

export default nintendoswitchgames