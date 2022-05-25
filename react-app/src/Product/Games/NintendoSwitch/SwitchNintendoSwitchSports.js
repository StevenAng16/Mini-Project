// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../../Components/Cart'
// import HomeApp from '../../../Components/Home';
// import Login from '../../../Components/Login';

import type1 from "../../../image/Switch Games/Switch Nintendo Switch™ Sports.png"
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
            <h4 className="nintendo p-5">Switch Nintendo Switch™ Sports (Mde/English) – PO Batch 3 [30 Juny 22]</h4>
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
                <h1 className="ms-5">Rp 599,000</h1>
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
                      Swing, kick, spike, and bowl your way to victory in a sports collection that will get the whole family moving
                    <br/><br/>
                      Get moving* with Soccer, Volleyball, Bowling, Tennis, Badminton, and Chambara (Swordplay) using Joy-Con™ controllers! Controls are intuitive, so you can hit the court (or lanes, or field, or arena) and get started. With controlled motions you can curve your bowling ball, add spin to a tennis shot, or even use a Joy-Con with the Leg Strap accessory to kick the ball in a Soccer Shootout. Family and friends can join in on the fun on the same system** or online***. Plus a seventh sport is planned to be added via a free update this fall; get ready to Golf!****
                    </p>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      Play online and face opponents near and far to earn in-game rewards or aim for the Pro League<br/>
                        Face off against opponents worldwide and strive to reach the Pro League in every sport. As you play online*** in random matchmaking, redeem points you earn for in-game rewards like outfits, sports accessories, gear, and much more for your avatar. The selection of items will rotate each week, so check back and see what’s in stock!<br/>
                        Play with friends and family in the same room or across the world<br/>
                        Bowl, spike, and duel with friends in all 6 sports! Pass a Joy-Con controller to a friend** for some 1v1, 2v2, or a free-for-all that will get everyone moving. In Bowling, all players can bowl simultaneously—no waiting for your turn. Play each game online***, or team up with a friend on the same system to take on opponents near and far in team sports like Volleyball and Tennis.<br/>
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

export default ClubhouseGames51WorldwideClassics