// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../../Components/Cart'
// import HomeApp from '../../../Components/Home';
// import Login from '../../../Components/Login';

import type1 from "../../../image/Switch Games/Switch Yoshis Crafted World.png"
// import type3 from "../../image";
// import type4 from "../../image";
// import type5 from "../../image";
// import type6 from "../../image";
// import type7 from "../../image";

import {Counter} from "../../../features/counter/Counter";
import { FaCartPlus } from "react-icons/fa";
import icons1 from '../../../svg/cart-plus-solid.svg'

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from 'react-bootstrap/Table'


// import './ClubhouseGames51WorldwideClassics.css'
// import '../../Components/Home.css'

function ClubhouseGames51WorldwideClassics () {

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
            <h4 className="nintendo p-5">Switch Yoshi’s Crafted World (Usa/English)</h4>
            <div className="text-center">
             <img
                    className="img-thumbnail"
                    src={type1}
                    alt="First slide"
            />
            </div>
            <Container fluid="sm">
            <Row className="mt-3">
                <Col>
                <h1 className="ms-5">Rp 675,000</h1>
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
            </Container>
              <div className="mt-5">
              <div className="mt-5">
                <Container>
                  <Row >
                      <p>
                      Lead Yoshi on a brand new adventure that will turn everything you’ve come to expect from side-scrolling games upside down! Explore a great, big world decorated like a miniature diorama in a new art style for the franchise, where each side-scrolling stage has the traditional front side as well as a flip side with different views and surprises. Look for items throughout the stage as Yoshi makes his way to the goal. You can even join up with a friend!
                    </p>
                  </Row>
                  </Container>
                  <Row className="mt-3">
            </Row>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      Features
                        <br/>
                        Join Yoshi in this new action platforming game
                        Each course offers both a main path and a hidden path that offers different views and surprises
                        The lively art style looks like a minature diorama
                        Enjoy simultaneous 2-player action
                      </p><br/>
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
                          <td>0.2 kg</td>
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

export default ClubhouseGames51WorldwideClassics