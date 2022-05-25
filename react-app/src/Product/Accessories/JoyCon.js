// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../Components/Cart'
// import HomeApp from '../../Components/Home';
// import Login from '../../Components/Login';

import type1 from "../../image/JoyStick/JoyCon (1).jpg";
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

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from "react-bootstrap/ToggleButton";

import { FaCartPlus } from "react-icons/fa";
import icons1 from '../../svg/cart-plus-solid.svg'

import './JoyCon.css'
// import '../../Components/Home.css'

function JoyCon () {

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
            <h4 className="nintendo p-5">Nintendo Switch JoyCon Controllers</h4>
            <Container fluid="sm">
            <div className="text-center">
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
            <Carousel className="container" variant="dark">
            <Carousel.Item>
              <img
                    className="img-thumbnail"
                    src={type1}
                    alt="First slide"
                  />
              </Carousel.Item>
              </Carousel></Col>
              <Col md={2}></Col>
              </Row>
            </div>
            </Container>
            <Row className="mt-3">
                <Col>
                <h1 className="ms-5">Rp 919,000</h1>
                </Col>
                <Col>
                <Button href="" variant="danger"><FaCartPlus icon="fa-solid fa-cart-plus" src={icons1}/> Add to Cart</Button>
                </Col>
            </Row>
              <div className="mt-5">
              <div className="mt-5">
                <Container>
                  <Row >
                    <Col sm={4}>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={false} vertical>
                      <ToggleButton id="tbg-radio-1" value={1} variant="outline-info">
                        Neon Red-Blue
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-2" value={2} variant="outline-secondary">
                        Gray
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-3" value={3} variant="outline-primary">
                        Blue-Yellow
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-4" value={4} variant="outline-info">
                        Neon Blue
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-5" value={5} variant="outline-danger">
                        Neon Red
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-6" value={6} variant="outline-success">
                        Green
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-7" value={7} variant="outline-success">
                        Lime-Pink
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-8" value={8} variant="outline-warning">
                        Purple Orange
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-9" value={9} variant="outline-warning">
                        Yellow
                      </ToggleButton>
                    </ToggleButtonGroup>
                    </Col>
                    <Col sm={8}>
                      <p>
                        One controller or two, vertical or sideways, motion controls or buttons…Joy‑Con and Nintendo Switch give you total gameplay flexibility.
                        <br/><br/>
                        Games come to life through easy-to-use motion controls and HD rumble—advanced vibration features built into each Joy‑Con.
                      </p>
                    </Col>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      Features
                      <br/><br/>
                      Share With A Friend – Pass a single Joy‑Con to a friend for instant two-player fun. Or invite friends to bring their own for a gaming party**!
                      Try Something New – HD Rumble puts you in the game with physical feedback, while the IR Motion Camera opens up new experiences like Nintendo Labo
                      Local Co-op – Play on the big screen at home with friends
                      Local Wireless – Link up to eight Nintendo Switch and Nintendo Switch Lite systems together to play multiplayer games anywhere
                      Online play – Team up or face off with others online in compatible games with a Nintendo Switch Online membership
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

export default JoyCon