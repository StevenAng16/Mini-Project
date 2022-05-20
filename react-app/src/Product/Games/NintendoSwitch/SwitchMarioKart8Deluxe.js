// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../../Components/Cart'
// import HomeApp from '../../../Components/Home';
// import Login from '../../../Components/Login';

import type1 from "../../../image/Switch Games/Switch Mario Kart 8 Deluxe.png";
// import type2 from "../../image";
// import type3 from "../../image";
// import type4 from "../../image";
// import type5 from "../../image";
// import type6 from "../../image";
// import type7 from "../../image";

import {Counter} from "../../../features/counter/Counter";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from 'react-bootstrap/Table'


// import './MarioKart8Deluxe.css'
// import '../../Components/Home.css'

function MarioKart8Deluxe () {

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
            <h4 className="nintendo p-5">Switch Mario Kart 8 Deluxe</h4>
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
                <h1 className="ms-5">Rp 640,000</h1>
                </Col>
                <Col>
                <Button href="" variant="secondary">Add to Cart</Button>
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
                      Race and battle your friends in the definitive version of Mario Kart 8.<br/>
                        Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses.<br/>
                        <br/><br/>
                        Players: up to 12 players<br/>
                        Genre : Racing, Multiplayer
                      </p>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                        Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!
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

export default MarioKart8Deluxe