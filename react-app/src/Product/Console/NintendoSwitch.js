// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../Components/Cart'
// import HomeApp from '../../Components/Home';
// import Login from '../../Components/Login';
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import type1 from "../../image/Nintendo Switch/Nintendo Switch.jpg";
import type2 from "../../image/Nintendo Switch/Nintendo Switch (1).jpg";
import type3 from "../../image/Nintendo Switch/Nintendo Switch (2).jpg";
import type4 from "../../image/Nintendo Switch/Nintendo Switch (3).jpg";
import type5 from "../../image/Nintendo Switch/Nintendo Switch (4).jpg";
import AddToCart from '../../Props/AddToCart'

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from 'react-bootstrap/Table'

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
// import ToggleButton from "react-bootstrap/ToggleButton";
import { NavLink } from "react-router-dom";

import { FaCartPlus } from "react-icons/fa";
import icons1 from '../../svg/cart-plus-solid.svg'

import './NintendoSwitch.css'
// import '../../Components/Home.css'

function NintendoSwitch () {
  const [value, setValue] = useState([false]);
  const handleChange = (val) => setValue(val);
    return(
        <div className="container-fluid">
          
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
            <h4 className="nintendo">Nintendo Switch</h4>
            <Carousel className="text-center">
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type5}
                    alt="Fifth slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Row className="mt-3">
                <Col>
                <h1 className="ms-5">Rp 3,999,000 - Rp 4,899,000</h1>
                </Col>
                <Col>
                <AddToCart/>
                <>
                <Button href="#" variant="secondary" disabled><FaCartPlus icon="fa-solid fa-cart-plus" src={icons1}/> Add to Cart</Button>
                </>
                </Col>
              </Row>
              
              <div className="mt-5">
              <div className="mt-5">
                <Container fluid="sm">
                  <Row >
                    <Col sm={4}>
                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} vertical>
                      <NavLink className="btn btn-outline-info text-dark" id="tbg-btn-1" value={1} to="/Product/Console/NintendoSwitchNeon">
                        Neon Blue-Red
                      </NavLink>
                      <NavLink className="btn btn-outline-secondary text-dark" id="tbg-btn-2" value={2} to="/Product/Console/NintendoSwitchGray">
                        Gray
                      </NavLink>
                      <NavLink className="btn btn-outline-success text-dark" id="tbg-btn-3" value={3} to="/Product/Console/NintendoSwitchAnimalCrossing">
                        Animal Crossing
                      </NavLink>
                      <NavLink className="btn btn-outline-danger text-dark" id="tbg-btn-4" value={4} to="/Product/Console/NintendoSwitchMarioEdition">
                        Mario Edition
                      </NavLink>
                    </ToggleButtonGroup>
                    </Col>
                    <Col sm={8}>
                      <p>
                        The Nintendo Switch is both a home console and a handheld device – a hybrid of sorts. On the go, it’ll be in the form of a tablet that also has a docking station which then plugs into your TV.
                        <br/><br/>
                        Box Content:<br/><br/>
                        Nintendo Switch Console<br/>
                        Nintendo Switch Dock<br/>
                        Neon Blue Joy-Con (L), Neon Red Joy-Con (R)<br/>
                        Black Joy-Con Wrist Straps<br/>
                        Joy Con Grip<br/>
                        HDMI Cable<br/>
                        AC Adapter<br/>
                      </p>
                      <br/><br/>
                    </Col>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Neon Blue-Red</th>
                          <th>Gray</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Rp 3,999,000</td>
                          <td>Rp 4,099,000</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th>Animal Crossing</th>
                          <th>Mario Edition</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Rp 4,225,000</td>
                          <td>Rp 4,899,000</td>
                        </tr>
                      </tbody>
                      </Table>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                        The Nintendo Switch is both a home console and a handheld device – a hybrid of sorts.
                        On the go, it’ll be in the form of a tablet that also has a docking station which then 
                        plugs into your TV. <br/><br/>
                        In addition to providing single and multiplayer thrills at home, the Nintendo Switch
                        system also enables gamers to play the same title wherever, whenever and with whomever
                        they choose. The mobility of a handheld is now added to the power of a home gaming 
                        system to enable unprecedented new video game play styles.<br/><br/>
                        At home, Nintendo Switch rests in the Nintendo Switch Dock that connects the system to
                        the TV and lets you play with family and friends in the comfort of your living room.
                        By simply lifting Nintendo Switch from the dock, the system will instantly transition
                        to portable mode, and the same great gaming experience that was being enjoyed at home
                        now travels with you. The portability of Nintendo Switch is enhanced by its bright
                        high-definition display. It brings the full home gaming system experience with you to
                        the park, on an airplane, in a car, or to a friend’s apartment.<br/><br/>
                        Gaming springs into action by removing detachable Joy-Con controllers from either side 
                        of Nintendo Switch. One player can use a Joy-Con controller in each hand; two players 
                        can each take one, or multiple Joy-Con can be employed by numerous people for a variety 
                        of gameplay options. They can easily click back into place or be slipped into a Joy-Con 
                        Grip accessory, mirroring a more traditional controller. Or, if preferred, the gamer can 
                        select an optional Nintendo Switch Pro Controller to use instead of the Joy-Con controllers. 
                        Furthermore, it is possible for numerous people to bring their Nintendo Switch systems together 
                        to enjoy the local multiplayer face-to-face competition.<br/><br/>
                        Features
                        Play Mode – You can play in TV mode, Table mode and Mobile mode
                        You can play games using HD vibration and motion IR cameras with the included Joy-Con
                        Enjoy the game on the TV by connecting it with the HDMI cable
                        4.5-9.0 hours battery life
                        *Note: ​The battery life will depend on the games you play. For instance, the battery will last 
                        approximately 5.5 hours for The Legend of Zelda: Breath of the Wild.
                        <br/><br/>
                      </p>
                    </Tab>
                    <Tab eventKey="profile" title="Additional Information">
                      <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>WEIGHT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>3 kg</td>
                        </tr>
                      </tbody>
                      </Table>
                    </Tab>
                  </Tabs>  
              </div>
              </div>
        </div>    
                       
         
    )
}

export default NintendoSwitch