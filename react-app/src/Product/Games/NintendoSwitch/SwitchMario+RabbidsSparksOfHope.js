// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../../Components/Cart'
// import HomeApp from '../../../Components/Home';
// import Login from '../../../Components/Login';

import type1 from "../../../image/Switch Games/Switch Mario Rabbids Sparks of Hope.png"
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
            <h4 className="nintendo">Switch Mario + Rabbids Sparks Of Hope (English) – DP 2022</h4>
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
                <h1 className="ms-5">Rp 100,000</h1>
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
                      Build your dream team with three heroes from an eclectic roster of nine.<br/>
                      Take down all-new bosses, along with some familiar enemies throughout the galaxy.<br/>
                      Rescue the uncanny Sparks throughout the galaxy, who provide distinct powers that will help you in battle.<br/>
                      Unleash your heroes’ skills but be strategic as you dash your enemies, team jump on your allies, and hide behind covers.<br/>
                    </p>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      Team up with Mario, Luigi, Princess Peach, Rabbid Peach, Rabbid Luigi, and their friends on a galactic journey to defeat a malevolent entity and save your Spark companions. Explore planets throughout the galaxy as you uncover mysterious secrets and compelling quests!<br/>
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