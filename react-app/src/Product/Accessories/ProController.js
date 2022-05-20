// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../Components/Cart'
// import HomeApp from '../../Components/Home';
// import Login from '../../Components/Login';

import type1 from "../../image/JoyStick/Pro Controller (1).jpeg";
import type2 from "../../image/Adaptor/Pro Controller (2).jpeg";
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

import './ProController.css'
// import '../../Components/Home.css'

function ProController () {

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
            <h4 className="nintendo p-5">Nintendo Switch Pro Controller</h4>
            <Container fluid="sm">
            <div className="text-center">
            <Carousel className="container">
            <Carousel.Item>
                <img
                    className="img-thumbmail"
                    src={type1}
                    alt="First slide"
                  />
            </Carousel.Item>
            <Carousel.Item>
                  <img
                    className="img-thumbmail"
                    src={type2}
                    alt="Second slide"
                  />
            </Carousel.Item>
            </Carousel>
            </div>
            </Container>
            <Row className="mt-3">
                <Col>
                <h1 className="ms-5">Rp 829,000</h1>
                </Col>
                <Col>
                <Button href="" variant="danger">Add to Cart</Button>
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
                <Container fluid="sm">
                  <Row >
                      <p>
                      Box contents
                        <br/><br/>
                        Nintendo Switch Pro Controller x1
                        USB Charging Cable x1
                      </p>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      Take your game sessions up a notch with the Pro Controller. Includes motion controls, HD rumble, built-in amiibo functionality, and more.
                      </p><br/><br/>
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
        </div>    
                       
         
    )
}

export default ProController