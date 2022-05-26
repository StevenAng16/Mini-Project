// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../../Components/Cart'
// import HomeApp from '../../../Components/Home';
// import Login from '../../../Components/Login';

import type1 from "../../../image/Switch Games/Switch Luigi Mansion 3.png";
// import type2 from "../../image";
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


// import './LuigiMansion3.css'
// import '../../Components/Home.css'

function LuigiMansion3 () {

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
            <h4 className="nintendo">Switch Luigi Mansion 3</h4>
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
                <h1 className="ms-5">Rp 643,000</h1>
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
                      Luigi’s invited to the towering Last Resort hotel, but when Mario and friends go missing, our green-clad hero will have to conquer his fears to save them! Slam, blow away, and vacuum up ghosts with the all-new Poltergust G-00, and join forces with Gooigi to overcome the puzzling contraptions and mischievous boss on each themed floor. And that’s just the Last Resort. Enter the ScareScraper for 8-player local wireless or online co-op gameplay.
                        <br/><br/>
                      Players: 2 player<br/>
                      Genre: Adventure, Action
                      </p>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      He may still be cowardly, but Luigi has more tools and abilities at his disposal than ever before. Master Luigi’s new powerful moves of Slam, Suction Shot and Burst
                      Team up with Professor E. Gadd’s latest invention, Gooigi, an all-green doppelganger able to slip through tight spaces, walk on spikes, and otherwise help Luigi overcome obstacles he can’t get past alone
                      Interchange between Luigi and Gooigi as one player, or grab a friend and control one each at the same time
                      Explore the Last Resort, ascending through its differently themed floors full of quirky contraptions and haunting enemies
                      Race the timer with up to 8 players** to clear objectives on a series of floors in the ScareScraper
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

export default LuigiMansion3