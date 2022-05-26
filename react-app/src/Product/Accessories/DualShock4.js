// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../Components/Cart'
// import HomeApp from '../../Components/Home';
// import Login from '../../Components/Login';

import type1 from "../../image/JoyStick/Dualshock-4.jpg";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from 'react-bootstrap/Table'

import Carousel from "react-bootstrap/Carousel";

import { Counter } from "../../features/counter/Counter";

import { FaCartPlus } from "react-icons/fa";
import icons1 from '../../svg/cart-plus-solid.svg'

import './dualshock.css'
// import '../../Components/Home.css'

function PS5 () {

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
            <h4 className="playstation">DUALSHOCK®4 wireless controller Jet Black</h4>
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
                <h1 className="ms-5">Rp 799,000</h1>
                </Col>
                <Col>
                <Button href="" variant="primary"><FaCartPlus icon="fa-solid fa-cart-plus" src={icons1}/> Add to Cart</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <Counter/>
                </Col>
                <Col></Col>
            </Row>
              <div className="mt-5">
              <Container>
                  <Row >
                      <p>
                        Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback1, adaptive triggers1 and 3D Audio*, and an all-new generation of incredible PlayStation games.
                      </p>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      The DualShock 4 Wireless Controller for PlayStation 4 defines this generation of play, combining revolutionary features and comfort with intuitive, precision controls. Evolved analog sticks and trigger buttons allow for unparalleled accuracy with every move while innovative technologies offer exciting ways to experience your games and share your greatest moments.
                      <br/><br/>
                      Precision Control – The feel, shape, and sensitivity of the DualShock 4’s analog sticks and trigger buttons have been enhanced to offer players absolute control for all games on PlayStation 4<br/>
                      Refined Analog Sticks – Improved analog sticks and trigger buttons allow for unparalleled accuracy with every move<br/>
                      New Ways to Play – Revolutionary features like the touch pad, integrated light bar, and built-in speaker offer exciting new ways to experience and interact with your games, and the 3.5mm audio jack offers a practical personal audio solution for gamers who want to listen to their games in private<br/>
                      Sharing at Your Fingertips – The addition of the Share button makes sharing your greatest gaming moments as easy as a push of a button. Upload gameplay videos and screenshots directly from your system or live-stream your gameplay, all without disturbing the game in progress<br/>
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
                          <td>0.5 kg</td>
                        </tr>
                      </tbody>
                      </Table>
                    </Tab>
                  </Tabs>
              </div>
        </div>    
                       
         
    )
}

export default PS5