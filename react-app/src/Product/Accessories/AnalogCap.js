// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../Components/Cart'
// import HomeApp from '../../Components/Home';
// import Login from '../../Components/Login';

import type1 from "../../image/JoyStick/Analog Cap.jpg";
// import type2 from "../../image";
// import type3 from "../../image";
// import type4 from "../../image";
// import type5 from "../../image";
// import type6 from "../../image";
// import type7 from "../../image";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from 'react-bootstrap/Table'

import Carousel from "react-bootstrap/Carousel";

import { Counter } from "../../features/counter/Counter";

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from "react-bootstrap/ToggleButton";

import { FaCartPlus } from "react-icons/fa";
import icons1 from '../../svg/cart-plus-solid.svg'

import './AnalogCap.css'
// import '../../Components/Home.css'

function AnalogCap () {

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
            <h4 className="nintendo playstation">Analog Cap – Analog Controller Thumb Grip for DualShock/DualSense/Pro Controller/XBOX Controller – 4 *Varian Color</h4>
            <Container fluid="sm">
            <div className="text-center">
            <Carousel className="container" variant="dark">
            <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type1}
                    alt="First slide"
                  />
            </Carousel.Item>
            </Carousel>
            </div>
            </Container>
            <Row className="mt-3">
                <Col>
                <h1 className="ms-5">Rp 20,000</h1>
                </Col>
                <Col>
                <Button href="" variant="secondary"><FaCartPlus icon="fa-solid fa-cart-plus" src={icons1}/> Add to Cart</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <Counter/>
                </Col>
                <Col></Col>
            </Row>
              <div className="mt-5">
              <div className="mt-5">
                <Container>
                  <Row >
                    <Col sm={4}>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={false} vertical>
                      <ToggleButton id="tbg-radio-1" value={1} variant="outline-dark">
                        Black-White
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-2" value={2} variant="outline-primary">
                        White-Blue
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-3" value={3} variant="outline-danger">
                        White-Red
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-4" value={4} variant="outline-warning">
                        White-Yellow
                      </ToggleButton>
                    </ToggleButtonGroup>
                    </Col>
                    <Col sm={8}>
                      <p>
                      Save and Protect: Never let permanent damage get to your controllers as they stay shielded against scratches, dirt, grime, and oils. Taking care of your joysticks has never been so easy and fun while still getting optimum performance for continued gaming fun.
                      </p>
                    </Col>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      comfort :It can add comfort to gameplay and keep fingers from slipping.
                      <br/><br/>
                      Universal Compatibility: Made specifically to fit the flightsticks of controllers for PS4,XBOX ONE, to ensure that hassle-free installation and removal, you definitely can’t go wrong with this choice.
                      <br/><br/>
                      Bring Out Your A-Game: An increase in surface area greatly improves comfort and the increase in height provides mobility and control to stabilize your aim for those high valued kills. This will surely put your game on the top of the competition.
                      </p><br/><br/>
                    </Tab>
                    <Tab eventKey="profile" title="Additional Information">
                      <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>WEIGHT</th>
                          <th>Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>0.2 kg</td>
                          <td>Black White, White Blue, White Red, White Yellow</td>
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

export default AnalogCap